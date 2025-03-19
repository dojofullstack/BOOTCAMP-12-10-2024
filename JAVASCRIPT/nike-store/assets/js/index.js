



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
                      <div class="card-actions justify-end">
                        <button id="btn-product-${item.id}" class="btn btn-primary">Buy Now</button>
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

        // update catalogo
        getAllProduct();

    } )
    

}