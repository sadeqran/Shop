import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductsProvider } from "../context/productsContext";
import Index from "./asli/Index";
import Kharid from "./buy/Kharid";
import Factor from "./checkout/Factor";
import Sign from "./auth/Sign";
import Login from "../layouts/auth/Login";

const Content = () => {
 
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/kharid/:productId" element={<Kharid />} />
        <Route path="/checkout/:productId" element={<Factor />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </ProductsProvider>
  );
};

export default Content;
