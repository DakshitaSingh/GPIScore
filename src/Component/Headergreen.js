import React from "react";
import "../Css/Headergreen.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  const handleLinkClick = () => {
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  return (
    <div className="headerg">
      <Link to="/" className="headerg__brand">
        <span className="headerg__textLogo">Greenify</span>
      </Link>

      <div className="headerg__search">
        <input
          className="headerg__searchInput"
          type="text"
          placeholder="Search eco-products..."
        />
        <img
          src="../images/search_icon.png"
          className="headerg__searchIcon"
          alt="Search"
        />
      </div>

      <div className="headerg__nav">
        <Link to="/login" className="headerg__link">
          <div className="headerg__option">
            <span className="headerg__lineOne">Hello, Green Soul</span>
            <span className="headerg__lineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/orders" className="headerg__link">
          <div className="headerg__option">
            <span className="headerg__lineOne">Your</span>
            <span className="headerg__lineTwo">Orders</span>
          </div>
        </Link>

        <Link to="/dashboard" className="headerg__link">
          <div className="headerg__option">
            <span className="headerg__lineOne">Eco</span>
            <span className="headerg__lineTwo">Dashboard</span>
          </div>
        </Link>

        <Link to="/checkout" onClick={handleLinkClick} className="headerg__link">
          <div className="headerg__optionBasket">
            <img
              src="../images/leaf_cart.png"
              className="headerg__cartIcon"
              alt="Cart"
            />
            <span className="headerg__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
