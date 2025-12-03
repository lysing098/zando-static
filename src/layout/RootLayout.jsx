import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto px-2 my-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
