import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductsProvider } from "../context/productsContext";
import Index from "./Index";
import Kharid from "./Kharid";
import Factor from "./Factor";
import Sign from "./Sign";
import Login from "./Login";

const Content = () => {
  const products = [
    {
      id: 1,
      name: "تک شاخ",
      path: "/assets/image/cake/dokh.png",
      price: "390,000",
      descrip: "با طعم هفت میوه",
      bg: "bg-b",
      active: true,
      discounted: false,
      score: 4.3,
      icon: "horse-head",
    },
    {
      id: 2,
      name: "ساده",
      path: "/assets/image/cake/sadeh.png",
      price: "250,000",
      descrip: "با طعم نارگیل",
      bg: "bg-s",
      discounted: false,
      score: 3.7,
      icon: "cake",
    },
    {
      id: 3,
      name: "خرسی",
      path: "/assets/image/cake/sefa.png",
      price: "450,000",
      descrip: "با طعم بلوبری",
      bg: "bg-b",
      discounted: true,
      score: 4.4,
      icon: "paw",
    },
    {
      id: 4,
      name: "عاشقانه",
      path: "/assets/image/cake/love.png",
      price: "170,000",
      descrip: "با طعم شکلات",
      bg: "bg-r",
      discounted: true,
      score: 4,
      icon: "heart",
    },
    {
      id: 5,
      name: "پسرانه",
      path: "/assets/image/cake/pesar.png",
      price: "320,000",
      descrip: "با طعم توت فرنگی",
      bg: "bg-s",
      discounted: false,
      score: 3.8,
      icon: "face-smile",
    },
    {
      id: 6,
      name: "مناسبتی",
      path: "/assets/image/cake/yalda.png",
      price: "300,000",
      descrip: "با طعم هندونه",
      bg: "bg-s",
      discounted: true,
      score: 3.7,
      icon: "apple",
    },
  ];
  return (
    <ProductsProvider products={products}>
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
