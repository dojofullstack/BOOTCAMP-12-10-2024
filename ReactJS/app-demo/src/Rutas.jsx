import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import { StoreView } from "./views/StoreView";
import ProductView from "./views/ProductView";
import themeContext, { theme } from "./themeContext";
import { useState } from "react";
import { Page404 } from "./views/Page404";
import { PoblacionDiscover } from "./views/PoblacionDiscover";
import RegistroView from "./views/Auth/RegistroView";
import LoginView from "./views/Auth/LoginView";

const Rutas = () => {
  const [themeStore, setThemeStore] = useState(theme);

  const changeTheme = (theme) => {
    setThemeStore({
      ...themeStore,
      primary: theme,
    });
  };

  const changeThemeSecondary = (theme) => {
    setThemeStore({
      ...themeStore,
      secondary: theme,
    });
  };

  return (
    <themeContext.Provider
      value={{ theme: themeStore, changeTheme, changeThemeSecondary }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<RegistroView />} />
          <Route path="/login" element={< LoginView />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/poblacion" element={<PoblacionDiscover />} />
          <Route path="/profile" element={<HomeView />} />
          <Route path="/login" element={<HomeView />} />
          <Route path="/register" element={<HomeView />} />
          <Route path="/blog" element={<HomeView />} />
          <Route path="/store" element={<StoreView />} />
          <Route path="/store/product/:id" element={<ProductView />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>
  );
};

export default Rutas;
