import { useContext, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router";
import themeContext from "../themeContext";
import { useStore } from "../useStore";

export const StoreView = () => {
  const [catalogo, setCatalogo] = useState([]);

  const { theme, changeTheme, changeThemeSecondary } = useContext(themeContext);

  const isLogin =  useStore((state) => state.isLogin);
  const setProfile =  useStore((state) => state.setProfile);
  const loadProfile =  useStore((state) => state.loadProfile);

  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [IDProduct, setIDProduct] = useState(null);

  console.log("isLogin", isLogin);

  const navigate = useNavigate();

  const listProduct = () => {
    axios
      .get("https://api.dojofullstack.com/api-demo/v1/product/")
      .then((res) => {
        console.log(res.data.results);

        setCatalogo(res.data.results);
      });
  };

  // Nueva función para obtener un producto por ID
  const getProduct = (id) => {
    axios
      .get(`https://api.dojofullstack.com/api-demo/v1/product/${id}`)
      .then((res) => {
        const prod = res.data;
        setTitleProduct(prod.name);
        setPriceProduct(prod.price);
        setImageUrl(prod.image_url);
        setDescriptionProduct(prod.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };


    // Nueva función para eliminar un producto por ID
    const deleteProduct = (id) => {
      axios
        .delete(`https://api.dojofullstack.com/api-demo/v1/product/${id}`)
        .then((res) => {
          console.log(res.data);
          listProduct();
        })
        .catch((err) => {
          console.log(err);
        });
    };

  const createProduct = () => {
    const api = "https://api.dojofullstack.com/api-demo/v1/product/";
    const payload = {
      name: titleProduct,
      price: priceProduct,
      image_url: imageUrl,
      description: descriptionProduct
    };
    axios
      .post(api, payload)
      .then((res) => {
        console.log(res.data);
        listProduct();
      })
      .catch((err) => {
        console.log(err);
      })
    }


    const updateProduct = () => {
      
      const api = `https://api.dojofullstack.com/api-demo/v1/product/${IDProduct}/`;
      const payload = {
        name: titleProduct,
        price: priceProduct,
        image_url: imageUrl,
        description: descriptionProduct
      };

      axios
        .put(api, payload)
        .then((res) => {
          console.log(res.data);
          listProduct();
        })
        .catch((err) => {
          console.log(err);
        })
      }
  

  useEffect(listProduct, []);

  useEffect(() => {
    loadProfile();
  }, isLogin)

  // useEffect(() => {
  //   if (!isLogin){
  //     navigate("/login");
  //   }

  // }, isLogin)

  return (
    <>
      <Header />

      <div className="max-w-[80vw] mx-auto m-5">
        <div className="flex gap-5 my-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Cambiar el Theme
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button
                  className="btn btn-primary my-2"
                  onClick={() => changeTheme("purple")}
                >
                  Cambiar Theme a Purple
                </button>
              </li>

              <li>
                <button
                  className="btn btn-primary my-2"
                  onClick={() => changeTheme("yellow")}
                >
                  Cambiar Theme a Yellow
                </button>
              </li>

              <li>
                <button
                  className="btn btn-primary my-2"
                  onClick={() => changeTheme("white")}
                >
                  Cambiar Theme a White
                </button>
              </li>
            </ul>
          </div>

          <button onClick={listProduct} className="btn btn-secondary">
            Refrescar Catalogo
          </button>
          <button
            onClick={()=>document.getElementById('my_modal_product').showModal()}
          className="btn btn-accent">Crear Producto</button>
        </div>

        <div
          className="flex flex-wrap justify-center"
          style={{ backgroundColor: theme.primary }}
        >
          {catalogo.map((item, key) => (
            <div key={key}>
              <div className="card bg-base-100 w-96 shadow-sm ">
                <figure
                  className="cursor-pointer"
                  onClick={() => navigate("/store/product/".concat(item.id))}
                >
                  <img src={item.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>Precio: {item.price} USD</p>
                  <div className="card-actions justify-end">
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="btn btn-error text-white">
                      Elimninar
                  </button>


                   <button 
                      onClick={() => {
                        setIDProduct(item.id);
                        getProduct(item.id);
                        document.getElementById('my_modal_update').showModal();
                      }}
                      className="btn btn-info">
                        Editar
                    </button>
                   <button className="btn btn-primary">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}

<dialog id="my_modal_product" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Crear Producto</h3>

      <div className="flex flex-col gap-3 items-center my-3">

      <input  onChange={(e) => setTitleProduct(e.target.value)} value={titleProduct} type="text" placeholder="Titulo del Producto" className="input input-secondary" />
      <input  onChange={(e) => setPriceProduct(e.target.value)} value={priceProduct} type="number" placeholder="Precio del Producto" className="input input-secondary" />
      <input  onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} type="url" placeholder="Imagen del Producto" className="input input-secondary" />
      <textarea  onChange={(e) => setDescriptionProduct(e.target.value)} value={descriptionProduct} type="text" placeholder="Descripcion del producto..." className="textarea textarea-secondary"></textarea>
        
      <button onClick={createProduct} className="btn btn-secondary">Crear Producto</button>
      </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

<dialog id="my_modal_update" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Actualizar Producto</h3>

      <div className="flex flex-col gap-3 items-center my-3">

      <input  onChange={(e) => setTitleProduct(e.target.value)} value={titleProduct} type="text" placeholder="Titulo del Producto" className="input input-secondary" />
      <input  onChange={(e) => setPriceProduct(e.target.value)} value={priceProduct} type="number" placeholder="Precio del Producto" className="input input-secondary" />
      <input  onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} type="url" placeholder="Imagen del Producto" className="input input-secondary" />
      <textarea  onChange={(e) => setDescriptionProduct(e.target.value)} value={descriptionProduct} type="text" placeholder="Descripcion del producto..." className="textarea textarea-secondary"></textarea>
        
      <button onClick={updateProduct} className="btn btn-secondary">Actualizar Producto</button>
      </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

      <Footer />
    </>
  );
};
