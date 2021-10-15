import React, { useState, useEffect } from "react";
import "./Nav.css";
import "./netflix-logo.svg";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="netflix-logo.svg" alt="Netflix Logo" />
      <img className="nav__avatar" src="/" alt="Netflix Avatar" />
    </div>
  );
}

export default Nav;
