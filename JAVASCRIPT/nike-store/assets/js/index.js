

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
                        <button id="btn-product-${item.id}" class="btn btn-error" onclick="deleteProduct(${item.id})" >
                          <i class="bi bi-trash3"></i>
                        </button>

                        <button  onclick="showModalUpdate(${item.id})"  id="btn-product-edit-${item.id}" class="btn btn-info">Actualizar</button>
                        <button id="btn-product-${item.id}" class="btn btn-primary"  onclick="addProductCart(${item.id})" >
                        Agregar al carrito
                        </button>
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

  return response.data;
  
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



const deleteProduct = (productId) => {
    const API_PRODUCT = `https://api.dojofullstack.com/api-demo/v1/product/${productId}/`;

    axios.delete(API_PRODUCT).then(res => {

      console.log("status", res.status);

      if (res.status === 204){
          // emitir notificiacion

          Toastify({
            text: "PRODUCTO ELIMINADO CORRECTAMENTE",
            duration: 3000,
            destination: "#",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right,rgb(4, 9, 54),rgb(15, 16, 13))",
            },
            onClick: function(){} // Callback after click
          }).showToast()



         // update catalogo
        getAllProduct();
      }

      
    } )

}





const testCookies = () => {


    console.log(document.cookie);

    document.cookie = "xs=d0ie93ie093ie093ie093ie039e3ie093ei0309i309e;path=/";

    document.cookie = "username=erick;path=/";
    document.cookie = "username=erick12;path=/";

    document.cookie = "c_user=12012901920102;path=/";

    const date = new Date();
    // Establece la fecha de expiración a 24 horas desde el momento actual
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

    document.cookie = "dojoninja=100101010101;path=/;expires=" + date.toUTCString();

    // document.cookie = "dojoninja=;path=/;expires=" + date.toUTCString();

}


// testCookies();


function testLocalStorage() {

  // JSON.stringify
  // JSON.parse

  console.log(window.localStorage);

  // localStorage.getItem("profile");
  // localStorage.getItem("cart");

  // // metodo para crear y update
  localStorage.setItem("carrito", "informacion");

  localStorage.setItem("nombre", "pedro");

  // localStorage.removeItem("profile");


  const data_cart = {
    "product": "shoes",
    "price": 100,
    "quantity": 1
  }

  const profile = {
    name: "erick",
    age: 30,
    email: "erick@gmail.com"
  }

  localStorage.setItem("carrito",  JSON.stringify(data_cart) );

  localStorage.setItem("profile", JSON.stringify(profile) );



   const dataCart = localStorage.getItem("carrito");

   console.log(dataCart);

   console.log(JSON.parse(dataCart));


}

// testLocalStorage();


const loginJWT = () => {

  
    const api = "https://api.dojofullstack.com/api/auth/jwt/create/";

    const email = document.querySelector("#form-email").value;
    const password = document.querySelector("#form-password").value;

    const payload = {
        "username": email,
        "password": password
    }

    axios.post(api, payload).then( (response) => {

      console.log(response.data);

      const access = response.data.access;
      const refresh = response.data.refresh;

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);


      Toastify({
        text: "SESION INICIADA CORRECTAMENTE",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(8, 190, 72),rgb(120, 168, 26))",
        },
        onClick: function(){} // Callback after click
      }).showToast()


      if (access && refresh){

        const profile = {
          isLogin: true,
        }

        localStorage.setItem("profile", JSON.stringify(profile));
        // redirect a la pagina de inicio
       

        setTimeout(() => {
          window.location.href = "/nike-store/index.html";
        }, 3000);


      }

      
    }).catch( (error) => {
      console.log(error);


      Toastify({
        text: "ERROR AL INICIAR SESION",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(236, 59, 15),rgb(243, 81, 0))",
        },
        onClick: function(){} // Callback after click
      }).showToast()



    } )




}



const loadProfile = () => {

  
    const profile = JSON.parse(localStorage.getItem("profile"));
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    // console.log(profile.isLogin, access, refresh);
  

    if (profile?.isLogin && access && refresh){

        axios.get("https://api.dojofullstack.com/api/auth/users/me/", {
          headers: {
            "Authorization": `Bearer ${access}`
          }
        }).then( (response) => {

          console.log(response.data);
          const userData = {
            isLogin: true,
            user: response.data
          }

          localStorage.setItem("profile", JSON.stringify(userData));

          // mostrar profile (frontenf)
          setProfile();
          

        } ).catch( (error) => {
          console.log(error);
          refreshToken();


        } )
      
    } else {
        window.location.href = "/nike-store/login.html";
    }

}



const refreshToken = () => {

    const refresh = localStorage.getItem("refresh");

    const payload = {
      "refresh": refresh
    }
    
    
    axios.post("https://api.dojofullstack.com/api/auth/jwt/refresh/", payload).then( (response) => {

      console.log(response.data);

      const access = response.data.access;
      localStorage.setItem("access", access);
      location.reload();
      
      
    })

}





const setProfile = () => {

  const profile = JSON.parse(localStorage.getItem("profile"));

  if (profile){
    document.querySelector("#username").innerHTML = profile.user.username;
    document.querySelector("#img-profile").src = `https://avatar.iran.liara.run/username?username=${profile.user.username}`
  }

}




const logout = () => {

  localStorage.removeItem("profile");
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");

  window.location.href = "/nike-store/login.html";

}



const register = () => {


  const username = document.querySelector("#form-username").value;
  const email = document.querySelector("#form-email").value;
  const password = document.querySelector("#form-password").value;
  const passwordConfirm = document.querySelector("#form-password-confirm").value;

  if (password !== passwordConfirm){
    Toastify({
      text: "LAS CONTRASEÑAS NO COINCIDEN",
      duration: 3000,
      destination: "#",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right,rgb(236, 59, 15),rgb(243, 81, 0))",
      },
      onClick: function(){} // Callback after click
    }).showToast()
    return;
  }


  const payload = {
    "username": username,
    "email": email,
    "password": password
  }

  axios.post("https://api.dojofullstack.com/api/auth/users/", payload).then( (response) => {

    if(response.status === 201){
      Toastify({
        text: "usuario registrado correctamente",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(8, 190, 72),rgb(120, 168, 26))",
        },
        onClick: function(){} // Callback after click
      }).showToast()


      setTimeout(() => {
        window.location.href = "/nike-store/login.html";
      }, 3000);

    }
    
    })

}



// oauth2 facebook & google
function onSignIn(response) {
  // Maneja la respuesta de la autenticación
  console.log("User successfully signed in!");
  console.log(response);

  // Obtener información del perfil
  const credential = response.credential;
  const userInfo = parseJwt(credential);
  console.log(userInfo);

  localStorage.setItem("profile", JSON.stringify(userInfo) );



}

// Función para decodificar el token JWT
function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}



function signOutGoogle() {
  // Restablece cualquier estado o sesión de tu aplicación
  console.log("User signed out from the application.");

  // Si deseas cerrar la sesión de Google específicamente en el navegador:
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
      console.log('User signed out from Google.');
  });
}



// Inicializar el SDK de Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : '01920192091029109209102910920192091092', // Reemplaza con tu App ID
    cookie     : true,  // Habilita las cookies para permitir que el servidor acceda a la sesión
    xfbml      : true,  // Analiza los plugins sociales en la página
    version    : 'v17.0' // Usa la versión más reciente de la API de Facebook
  });
};

// Función para manejar el inicio de sesión con Facebook
function facebookLogin() {
  FB.login(function(response) {
      if (response.authResponse) {
          console.log('Bienvenido! Recuperando tu información...');
          FB.api('/me', {fields: 'name, email'}, function(response) {
              console.log('Usuario autenticado:', response);
          });
      } else {
          console.log('El usuario canceló el inicio de sesión o no autorizó completamente.');
      }
  }, {scope: 'email'});
}

// oauth2 facebook & google




const addProductCart = async (productId) => {

    console.log("agregando al carrito", productId);

    const productInfo = await getProduct(productId);

    // console.log(productInfo);

    const cartItem = {
        id: productInfo.id,
        name: productInfo.name,
        price: productInfo.price,
        image_url: productInfo.image_url,
        quantity: 1
    }

    const cart =  JSON.parse(localStorage.getItem("cart")) || [];

    // console.log(cart);


    const cartUpdated = [cartItem, ...cart];

    console.log(cartUpdated);

    localStorage.setItem("cart", JSON.stringify(cartUpdated) );

    // mostrar notificacion
    Toastify({
        text: "PRODUCTO AGREGADO AL CARRITO",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,rgb(8, 190, 72),rgb(120, 168, 26))",
        },
        onClick: function(){} // Callback after click
      }).showToast();


      refreshCart();
    
    
}




const refreshCart = () => {

  const cart =  JSON.parse(localStorage.getItem("cart")) || [];


  let subTotal = 0;
  const itemsTotal = cart.length;


  cart?.forEach(element => {
    // console.log(  parseFloat(element.price) *  parseInt(element.quantity));
    subTotal += parseFloat(element.price) *  parseInt(element.quantity);
    
  });


  // console.log(subTotal);
  // console.log(itemsTotal);
  

    document.querySelector("#total-items").innerHTML = `${itemsTotal} productos`;
    document.querySelector("#subtotal-price").innerHTML = `$${subTotal.toFixed(2)} USD`;
    document.querySelector("#total-items-float").innerHTML = itemsTotal;
  


}



