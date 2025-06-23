import React from "react";
import "../Css/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="greenify-checkout">
      <div className="greenify-checkout-left">
        <Link to="/green">
          <img
            className="greenify-checkout-banner"
            src="../images/greenad.png"
            alt="Greenify Promotion"
          />
        </Link>

        <div className="greenify-cart-details">
          <h2 className="greenify-cart-title">Your Eco Cart 🌿</h2>
          {basket.length === 0 ? (
            <p className="greenify-empty-cart">
              Your cart is feeling a little empty. Start adding eco-friendly items!
            </p>
          ) : (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                price={item.price}
                rating={item.rating}
                image={item.image}
                title={item.title}
                badge_id={item.badge_id}
              />
            ))
          )}
        </div>
      </div>

      <div className="greenify-checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
