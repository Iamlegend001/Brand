import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import ProductDetail from "../Pages/ProductDetail";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import BlogDetail from "../Pages/BlogDetail";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
