import React from "react";
import { Outlet } from "react-router";
import Header from "../commonComponents/Header";
import Navbar from "../commonComponents/Navbar";
import Banner from "../commonComponents/Homepage/Banner";
import FlashSale from "../commonComponents/Homepage/FlashSale";

const Root_Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />

      <Outlet />
    </>
  );
};

export default Root_Layout;