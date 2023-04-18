import React, { useState } from "react";
import "../App.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div id={openLinks ? "open" : "close"} className="leftSide">
        <Link to="/" id="logo" className="buttons">
          LOGO
        </Link>
        <div className="hiddenLinks">
          <Link to="/" className="buttons">
            Page A
          </Link>
          <Link to="/" className="buttons">
            Page B
          </Link>
          <Link to="/" className="buttons">
            Page C
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" className="buttons">
          Page A
        </Link>
        <Link to="/" className="buttons">
          Page B
        </Link>
        <Link to="/" className="buttons">
          Page C
        </Link>
        <div id="menuButton" className="buttons" onClick={toggleNavbar}>
          Menu
        </div>
      </div>
    </div>
  );
}

export default Navbar;
