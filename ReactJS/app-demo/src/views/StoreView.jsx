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
          <button className="btn btn-accent">Crear Producto</button>
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
                    <button className="btn btn-primary">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
