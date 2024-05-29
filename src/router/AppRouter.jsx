import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductoScreen from "../pages/ProductoScreen";
import VentasScreen from "../pages/VentasScreen";
import UsuariosScreen from "../pages/UsuariosScreen";
import LayoutComponent from "../components/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <LayoutComponent>
      <Routes>
        <Route path="/" element={<ProductoScreen></ProductoScreen>}/>
        <Route path="/ventas" element={<VentasScreen></VentasScreen>}/>
        <Route path="/usuarios" element={<UsuariosScreen></UsuariosScreen>}/>
      </Routes>
    </LayoutComponent>
    </BrowserRouter>
  );
};
