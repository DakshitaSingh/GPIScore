import React, { useState } from "react";
import "../Css/Educationsection.css";
import { Link } from "react-router-dom";

function Educationsection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Why did we create Greenovation Zone?",
      answer:
        "The Greenovation Zone was created to make it easier for customers to find and buy eco-friendly products. This promotes conscious shopping, reduces environmental impact, and enhances the customer experience.",
    },
    {
      question: "What criteria are used to certify products as eco-friendly?",
      answer:
        "Products are certified based on eco-certificates, carbon emissions, material sourcing, recyclability, plastic usage, energy efficiency, water conservation, non-toxicity, and packaging. These certifications are awarded by trusted green organizations.",
    },
    {
      question:
        "Can I provide feedback or report any concerns about a product's eco-friendly claims?",
      answer:
        "Yes! We welcome your feedback and concerns to improve the accuracy of eco-friendly claims. You can use the feedback system on the website to report any issues.",
    },
    {
      question: "How does the box returning system work?",
      answer:
        "When enough customers in a region choose the RETURN BOX option and a certain threshold is met, a pickup is scheduled. Notifications are sent via app, email, or SMS, and a live tracker shows progress toward the threshold.",
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  return (
    <>
      <div className="edu-navbar">
        <img src="../images/education_bar_image.png" alt="Greenify bar" className="edu-navbar-img" />
        <ul className="edu-links">
          <li><a href="/green">Home</a></li>
          <li><a href="#EcoCertification">Certificates</a></li>
          <li><a href="#FAQ">FAQs</a></li>
        </ul>
      </div>

      <section className="edu-section">
        <div className="edu-intro">
          <h1>Zero Waste Through the Return Box System</h1>
          <p>
            Greenify promotes box recycling via our return-box program. Once enough users opt-in from a region and the threshold is met, we schedule eco-pickups. Users receive notifications about collection timing via website/app/SMS. This encourages waste-free delivery while simplifying the return process.
          </p>
          <video width="100%" height="auto" autoPlay loop muted>
            <source src="../images/food_delivery.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="edu-foldbox">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src="../images/foldbox.mp4" type="video/mp4" />
          </video>
          <h2>How to Fold a Box?</h2>
          <p>
            Learn how to fold boxes neatly for easy return and reuse. Flattening boxes helps in saving space and supports eco-logistics. Watch the visual guide to follow simple folds and flatten techniques that make your packaging reusable and eco-smart.
          </p>
        </div>
      </section>

      <section className="edu-certifications" id="EcoCertification">
        <img src="../images/Eco Friendly Badge Certifications.png" alt="Eco Certifications" />
        <div className="edu-cert-row">
          <img src="../images/edu1.png" alt="Certification 1" />
          <img src="../images/edu2.png" alt="Certification 2" />
        </div>
        <img src="../images/edu3.png" alt="Eco Products" className="edu-shop-img" />
      </section>

      <section className="edu-faq" id="FAQ">
        <h2>Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="edu-faq-item">
            <div className="edu-faq-question" onClick={() => handleItemClick(index)}>
              <span>{item.question}</span>
              <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="edu-faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </section>

      <div className="edu-footer-img">
        <Link to="/green" onClick={handleLinkClick} style={{ textDecoration: "none" }}>
          <img src="../images/shop eco frinedly.png" alt="Shop Eco" width="100%" />
        </Link>
      </div>
    </>
  );
}

export default Educationsection;
