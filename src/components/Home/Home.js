import React from "react";
import './Home.css';
import {
  Outlet
} from "react-router-dom";
const Home = props => {

    return (
      <div className="Home">
        <h1>Welcome to Bhujal Tech Private Limited!</h1>
      </div>
    );
};

export default Home;
