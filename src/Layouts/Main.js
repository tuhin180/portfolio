import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import GoToTop from "../components/GoToTop";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div className="dark:bg-black dark:text-white ">
      <Header />
      <Outlet />
      <GoToTop />
      <Footer />
    </div>
  );
};

export default Main;
