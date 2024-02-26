import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
Aaron Garage Doors <i class="fab fa-typo3"></i>
            </Link>
      </nav>
    </>
  );
}

export default Navbar;
