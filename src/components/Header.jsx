import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Produts</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
