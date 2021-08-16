import { React, useState } from "react";
import "./Navbar.css";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const onHamburgerClick = () => {
    setHamburgerState(!hamburgerState);
  };

  return (
    <div className="navbar">
      <h3>YOUR LOGO</h3>
      <div className="nav-menu">
        <ul>
          <li>HOME</li>
          <li>SHOP</li>
          <li>LOOKBOOK</li>
          <li>FEATURES</li>
          <li>PAGES</li>
          <li>BLOG</li>
        </ul>
      </div>
      <div className="nav-icons">
        <ul>
          <li>
            <FiSearch className="icon search-icon" />
          </li>
          <li>
            <FiHeart className="icon heart-icon" />
          </li>
          <li>
            <FiShoppingCart className="icon cart-icon" />
          </li>
        </ul>
      </div>
      <div
        onClick={onHamburgerClick}
        className={hamburgerState ? "hamburger click-animation" : "hamburger"}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
      </div>
      <div
        className={
          hamburgerState ? "mobile-menu mobile-menu-active" : "mobile-menu"
        }
      >
        <ul>
          <li>HOME</li>
          <li>SHOP</li>
          <li>LOOKBOOK</li>
          <li>FEATURES</li>
          <li>PAGES</li>
          <li>BLOG</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
