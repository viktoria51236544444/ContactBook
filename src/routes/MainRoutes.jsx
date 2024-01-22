import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";

import EditProduct from "../components/EditProduct";
import TodoDetalis from "../components/TodoDetalis";
import { AddProduct } from "../components/AddProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<TodoDetalis />} />
    </Routes>
  );
};

export default MainRoutes;
