import React, { useState } from "react";
import "../App.css";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div id={openLinks ? "open" : "close"} className="leftSide">
        <div id="logo" className="buttons">
          LOGO
        </div>
        <div className="hiddenLinks">
          <div className="buttons">Page A</div>
          <div className="buttons">Page B</div>
          <div className="buttons">Page C</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="buttons">Page A</div>
        <div className="buttons">Page B</div>
        <div className="buttons">Page C</div>
        <div id="menuButton" className="buttons" onClick={toggleNavbar}>
          Menu
        </div>
      </div>
    </div>
  );
}

export default Navbar;
