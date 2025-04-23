import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import { StoreView } from "./views/StoreView";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/profile" element={<HomeView />} />
        <Route path="/login" element={<HomeView />} />
        <Route path="/register" element={<HomeView />} />
        <Route path="/blog" element={<HomeView />} />
        <Route path="/store" element={<StoreView />} />
      </Routes>
    </BrowserRouter>
  );
};


export default Rutas;