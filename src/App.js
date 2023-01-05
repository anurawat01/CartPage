import React from "react";
import CartItemList from "./components/cartPage/CartItemList";
import ProductDetail from "./components/productDetailPage/productDetail";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/productListPage/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/view_details/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartItemList />} />
        <Route path="/prod_list" element={<HomePage />} />
      </Routes>
    </>
  );
};
export default App;
