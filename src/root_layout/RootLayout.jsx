import React from "react";
import { Outlet } from "react-router";
import Header from "../commonComponents/Header";
import Navbar from "../commonComponents/Navbar";
import Banner from "../commonComponents/Homepage/Banner";
import FlashSale from "../commonComponents/Homepage/FlashSale";
import Category from "../commonComponents/Category";
import BestSelling from "../pages/BestSelling";

const Root_Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
      <BestSelling />
      

      <Outlet />
    </>
  );
};

export default Root_Layout;