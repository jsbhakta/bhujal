import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="row Header text-center">
      <div className="col-md-3">
        <Link className= "logo" to="/">
          <h1 className= "text-info bg-secondary"><strong>BhuJal Tech</strong></h1>
        </Link>
      </div>
      <div className="offset-md-6 col-md-1">
        <Link className= "text-secondary nav-options" to="/">Home</Link>
      </div>
      <div className="col-md-1 ">
        <Link className= "text-secondary nav-options" to="/about"> About</Link>
      </div>
      <div className=" col-md-1">
        <Link className= "text-secondary nav-options" to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
