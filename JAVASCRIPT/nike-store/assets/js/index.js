

const STORE_DATA = {
  "productDetail": null,
  "catalog": [],
  "cart": []
}



const getAllProduct = () => {

    const API_LIST_PRODUCT = "https://api.dojofullstack.com/api-demo/v1/product/";
    
    axios.get(API_LIST_PRODUCT).then( (response) => {

        const results = response.data.results;
        console.log(results);

        showCatalog(results);
        
        
    } )

}


const showCatalog = (products) => {

    const cards = products.map( (item) => {

        return `
            <div class="card bg-base-100 w-96 shadow-sm">
                    <figure>
                      <img
                        src="${item.image_url}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title"> ${item.name} </h2>
                      <p>
                        <span class="font-bold text-lg text-[tomato]">
                          $${item.price} USD
                        </span>
                      </p>
                      <div class="card-actions justify-between">
                        <button  onclick="showModalUpdate(${item.id})"  id="btn-product-edit-${item.id}" class="btn btn-info">Actualizar</button>
                        <button id="btn-product-${item.id}" class="btn btn-primary">Comprar</button>
                      </div>
                    </div>
                  </div>
                  `
    } );


    // console.log(cards);

    // console.log(cards.join(" "))

    document.querySelector("#catalogo-product").innerHTML = cards.join(" ");


}



const createProduct = () => {

    console.log("creando el producto");

    document.querySelector("#btn-create-product").style.display = "none";
    document.querySelector("#btn-create-product-loading").style.display = "block";

    const productName = document.querySelector("#product-name").value;
    const productDescription = document.querySelector("#product-description").value;
    const productPrice = document.querySelector("#product-price").value;
    const productImage = document.querySelector("#product-image-url").value;

    // console.log(productName, productPrice);

    const API_CREATE_PRODUCT = "https://api.dojofullstack.com/api-demo/v1/product/";

    const payload = {
        "name": productName,
        "description": productDescription,
        "image_url": productImage,
        "price": productPrice,
    }

    axios.post(API_CREATE_PRODUCT, payload).then( (response) => {
        console.log(response.data);
        document.querySelector("#btn-create-product").style.display = "block";
        document.querySelector("#btn-create-product-loading").style.display = "none";

        // close modeal y clear
        closeModalClear();

        // update catalogo
        getAllProduct();

        //

    } )
    

}


const closeModalClear = () => {

     document.querySelector("#product-name").value = "";
    document.querySelector("#product-description").value = "";
    document.querySelector("#product-price").value = "";
    document.querySelector("#product-image-url").value = "";

    my_modal_product.close();

}



const closeModalUpdateClear = () => {

  document.querySelector("#id-product").value = "";
  document.querySelector("#edit-product-name").value = "";
 document.querySelector("#edit-product-description").value = "";
 document.querySelector("#edit-product-price").value = "";
 document.querySelector("#edit-product-image-url").value = "";

 my_modal_product_update.close();

}





const showModalUpdate = async (productId) => {

  // esperar hasta que resuelva obtenga la info del producto
  await getProduct(productId);

  console.log(STORE_DATA.productDetail);
  
  document.querySelector("#id-product").value = productId;

  
  document.querySelector("#edit-product-name").value = STORE_DATA.productDetail.name;
  document.querySelector("#edit-product-description").value = STORE_DATA.productDetail.description;
  document.querySelector("#edit-product-price").value = STORE_DATA.productDetail.price;
  document.querySelector("#edit-product-image-url").value = STORE_DATA.productDetail.image_url;

  my_modal_product_update.showModal();


}



const getProduct = async (productId) => {


  const API_PRODUCT = `https://api.dojofullstack.com/api-demo/v1/product/${productId}/`;
    

  const response =  await axios.get(API_PRODUCT);

  // console.log(response.data);

  STORE_DATA.productDetail = response.data;

  // return response.data;
  
  // axios.get(API_PRODUCT).then( (response) => {

  //     const productInfo = response.data;
  //     // console.log(productInfo);

  //     STORE_DATA.productDetail = productInfo;

  // } )


}



const updateProduct = () => {

  const productId = document.querySelector("#id-product").value;


  const productName = document.querySelector("#edit-product-name").value;
  const productDescription = document.querySelector("#edit-product-description").value;
  const productPrice = document.querySelector("#edit-product-price").value;
  const productImage = document.querySelector("#edit-product-image-url").value;

  const API_PRODUCT = `https://api.dojofullstack.com/api-demo/v1/product/${productId}/`;

    const payload = {
        "name": productName,
        "description": productDescription,
        "image_url": productImage,
        "price": productPrice,
    }

    axios.put(API_PRODUCT, payload).then( (response) => {
        console.log(response.data);
        // document.querySelector("#btn-create-product").style.display = "block";
        // document.querySelector("#btn-create-product-loading").style.display = "none";

        // close modeal y clear
        closeModalUpdateClear();

        // update catalogo
        getAllProduct();

        //

    } )



}