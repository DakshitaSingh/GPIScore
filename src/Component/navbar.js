import React, { useEffect, useState } from 'react';
import '../Css/navbar.css';
import { Link } from "react-router-dom";

const AmazonNavigationBar = () => {
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  };

  useEffect(() => {
    const item = document.getElementById('itemToTrack');

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (itemRect.top < windowHeight && itemRect.bottom > 70) {
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="greenify-navbar">
      <ul className="greenify-navbar__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Eco Deals</Link></li>
        <li><Link to="#">Sustainable</Link></li>
        <li><Link to="#">Recyclables</Link></li>
        <li><Link to="#">Plant-Based</Link></li>
        <li><Link to="#">Wallet</Link></li>
        <li><Link to="#">Green Gifts</Link></li>
        <li><Link to="#">miniZone</Link></li>
        <li><Link to="#">Community</Link></li>
        <li><Link to="#">Wellness</Link></li>

        <li className="greenify-navbar__button-wrapper">
          <Link to="/green">
            <button id="itemToTrack" className="greenify-navbar__button">
              Greenovation Zone
            </button>
          </Link>
          {showPopover && !dontShowAgain && (
            <div className="greenify-navbar__popover">
              <div className="greenify-navbar__popover-arrow" />
              <p>Introducing our brand new section<br /><strong>Greenovation Zone</strong></p>
              <button className="greenify-navbar__gotit" onClick={closePopover}>Got It</button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default AmazonNavigationBar;
