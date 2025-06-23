import React from "react";
import "../Css/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  let eco_friendly = "";

  if (badge_id > 0) {
    eco_friendly = "Eco-Friendly";
  }

  return (
    <div className="greenify-product">
      <img src={image} alt="" className="greenify-product-image" />

      <div className="greenify-product-info">
        <p className="greenify-product-title">{title}</p>

        <p className="greenify-product-price">
          <span>$</span>
          <strong>{price}</strong>
        </p>

        <div className="greenify-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>

        {eco_friendly && <span className="greenify-badge">{eco_friendly}</span>}

        <button className="remove-btn" onClick={removeFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
