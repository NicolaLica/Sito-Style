import React from "react";
import "./Admin.css";
import SideBar from "../../Components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProducts/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import Order from "../../Components/Order/Order";
const Admin = () => {
  return (
    <div className="admin">
      <div className="coperto"></div>
      <SideBar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default Admin;
