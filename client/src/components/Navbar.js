import React, { useState } from "react";
import "../App.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import DarkMode from "./DarkMode/DarkMode";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  if (Auth.loggedIn()) {
    console.log("user is logged in");
    return (
      <div className="navbar">
        <div id={openLinks ? "open" : "close"} className="leftSide">
          <Link to="/" id="logo" className="buttons">
            <img
              src={require("../assets/images/logo.png")}
              className="logoImg"
            ></img>
          </Link>
          <DarkMode />
          <div className="hiddenLinks">
            <Link to="/identify" className="buttons">
              ID
            </Link>

            <Link to="/post" className="buttons">
              Post
            </Link>
            <Link to="#" className="buttons">
              Signup
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/user" className="buttons">
            MyFeed
          </Link>
          <Link to="/identify" className="buttons">
            ID
          </Link>
          <Link to="/post" className="buttons">
            Post
          </Link>
          <Link to="/signup" className="buttons">
            Logout
          </Link>
          <div id="menuButton" className="buttons" onClick={toggleNavbar}>
            Menu
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div id={openLinks ? "open" : "close"} className="leftSide">
          <Link to="/" id="logo" className="buttons">
            <img
              src={require("../assets/images/logo.png")}
              className="logoImg"
            ></img>
          </Link>
          <div className="hiddenLinks">
            <Link to="/identify" className="buttons">
              ID
            </Link>

            <Link to="/login" className="buttons">
              Login
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/user" className="buttons">
            MyFeed
          </Link>
          <Link to="/identify" className="buttons">
            ID
          </Link>

          <Link to="/signup" className="buttons">
            Sign Up
          </Link>
          <div id="menuButton" className="buttons" onClick={toggleNavbar}>
            Menu
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
