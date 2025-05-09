import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import themeContext from "../themeContext";
import { useStore } from "../useStore";

export const Header = () => {
  const navigate = useNavigate();

  const { theme, changeTheme, changeThemeSecondary } = useContext(themeContext);


    const cartStore = useStore( (state) => state.cartStore );

    const [subTotalCart, setSubTotalCart ]  = useState(0);


    const isLogin =  useStore((state) => state.isLogin);
    const profile =  useStore((state) => state.profile);
    const logout =  useStore((state) => state.logout);



    // console.log(cartStore, subTotalCart);


    useEffect(  ()  => {
      console.log("cartStore", cartStore)


      let subTotal = 0;
      cartStore.forEach( (item) => {
        const price = item.price;
        const quantity = 1;
        subTotal += price*quantity;
        console.log("subtotal", subTotal);
      })

      setSubTotalCart(subTotal);

    } , [cartStore]);
  

  return (
    <>
      <header
        style={{ backgroundColor: theme.primary }}
        className="sticky top-0 z-50"
      >
        <div className="navbar shadow-sm">
          <div className="flex-1" onClick={() => navigate("/store")}>
            <a className="btn btn-ghost text-xl">
              <img
                src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"
                className="w-[150px]"
              />
            </a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">
                  {cartStore.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{cartStore.length} Productos</span>
                  <span className="text-info">Subtotal: $ {subTotalCart} USD </span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      Completar compra
                    </button>
                  </div>
                </div>
              </div>
            </div>

           {isLogin && profile &&
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={"https://avatar.iran.liara.run/username?username=" + profile?.username}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">{profile?.username}</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={logout}>
                  <a>Cerrar sesion</a>
                </li>
              </ul>
            </div>
          }

          </div>
        </div>
      </header>
    </>
  );
};
