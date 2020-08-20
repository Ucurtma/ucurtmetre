import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
        <img className="logo"  src="./assets/images/logo-gray@3x.png" alt="uçurtma" />
        <Link className="button secondary-button white">Uçurtma Projesi Nedir?</Link>
    </header>
  );
};

export default Header;
