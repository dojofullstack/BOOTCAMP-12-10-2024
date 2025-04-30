import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import { StoreView } from "./views/StoreView";
import ProductView from "./views/ProductView";
import themeContext, { theme } from "./themeContext";
import { useState } from "react";

const Rutas = () => {

  const [themeStore, setThemeStore] = useState(theme);

    const changeTheme = (theme) => {
        setThemeStore({
          ...themeStore,
          primary: theme,
        });
    }


    const changeThemeSecondary = (theme) => {
      setThemeStore({
        ...themeStore,
        secondary: theme,
      });
  }
  
  return (

    <themeContext.Provider value={{theme: themeStore, changeTheme, changeThemeSecondary}}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/profile" element={<HomeView />} />
          <Route path="/login" element={<HomeView />} />
          <Route path="/register" element={<HomeView />} />
          <Route path="/blog" element={<HomeView />} />
          <Route path="/store" element={<StoreView />} />
          <Route path="/store/product/:id" element={<ProductView />} />
        </Routes>
      </BrowserRouter>

    </themeContext.Provider>

 
  );
};


export default Rutas;