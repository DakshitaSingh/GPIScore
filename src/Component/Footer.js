import React from "react";
import "../Css/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        ↑ Back to top
      </div>

      <div className="footer__linkContainer">
        <div className="footer__links">
          <h3 className="footer__linksTitle">About Greenify</h3>
          <p className="footer__link">Our Mission</p>
          <p className="footer__link">Sustainability Pledge</p>
          <p className="footer__link">Greenify Newsroom</p>
          <p className="footer__link">Eco Ambassadors</p>
          <p className="footer__link">Planet First Program</p>
        </div>

        <div className="footer__links">
          <h3 className="footer__linksTitle">Join the Movement</h3>
          <p className="footer__link">Volunteer with Us</p>
          <p className="footer__link">Greenify Campus</p>
          <p className="footer__link">Partnerships</p>
        </div>

        <div className="footer__links">
          <h3 className="footer__linksTitle">Resources</h3>
          <p className="footer__link">Eco-Friendly Buying Guide</p>
          <p className="footer__link">Badge Certification</p>
          <p className="footer__link">Carbon Reduction Tips</p>
          <p className="footer__link">Box Return Program</p>
        </div>

        <div className="footer__links">
          <h3 className="footer__linksTitle">Stay Connected</h3>
          <p className="footer__link">Instagram</p>
          <p className="footer__link">LinkedIn</p>
          <p className="footer__link">YouTube</p>
          <p className="footer__link">Contact Support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
