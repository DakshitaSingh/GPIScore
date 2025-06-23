import React, { useState } from "react";
import "../Css/orderedProduct.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function OrderedProduct({ id, image, title, price, rating, badge_id }) {
  const [{ basket }] = useStateValue();
  const [showOkText, setShowOkText] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const eco_friendly = badge_id > 0 ? "Eco-Friendly" : "";

  const handleReturnButtonClick = () => {
    setShowOkText(true);
    setButtonDisabled(true);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="orderedProduct">
      <img src={image} alt={title} className="orderedProduct__image" />

      <div className="orderedProduct__details">
        <h3 className="orderedProduct__title">{title}</h3>

        <div className="orderedProduct__priceRating">
          <p className="orderedProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="orderedProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>🌿</span>
              ))}
          </div>
        </div>

        {eco_friendly && <span className="badge">{eco_friendly}</span>}

        <div className="orderedProduct__actions">
          <button className="actionButton gray">Return or Replace</button>
          <button className="actionButton gray">Write Review</button>
          
          {badge_id > 0 && (
            <Link to="/feedback">
              <button className="actionButton green">Feedback</button>
            </Link>
          )}

          <button
            className={`actionButton darkGreen ${isButtonDisabled ? "disabled" : ""}`}
            onClick={handleReturnButtonClick}
            disabled={isButtonDisabled}
          >
            Return the Box
          </button>

          {showOkText && (
            <div className="orderedProduct__infoText">
              <p>
                *We will notify you once the collection threshold in your area is met.
              </p>
              <Link to="/education" onClick={handleLinkClick}>
                <span className="learnMore">Learn more</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderedProduct;
