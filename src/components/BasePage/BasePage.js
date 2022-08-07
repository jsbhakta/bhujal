import React from "react";
import {
  Outlet
} from "react-router-dom";
import './BasePage.css';


import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BasePage = () => {

    return (
      <div className="BasePage">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
};

export default BasePage;
