import React from "react";
import "./App.css";
import Header from "./Component/Header.js";
import Home from "./Component/Home.js";
// Removed: import NavBar from "./Component/navbar.js";
import Checkout from "./Component/Checkout.js";
import Login from "./Component/Login.js";
import Headergreen from "./Component/Headergreen.js";
import GroupBuyComponent from './Component/groupbuy';

import Homegreen from "./Component/Homegreen.js";
import NavBarg from "./Component/navbargreen.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducationSection from "./Component/Educationsection.js";
import SustainabilityReportsSection from "./Component/Sustainability.js";
import Footer from "./Component/Footer.js";
import Orders from "./Component/Orders.js";
import Thanks from "./Component/thanks.js";
import SellerSection from "./Component/SellerSection.js";
import Submitted from "./Component/Submitted.js";
import Dashboard from "./Component/Dashboard.js";
import Feedback from "./Component/feedback.js";
import ProductDetails from "./Component/ProductDetails.js";
import ProductDetails1 from "./Component/ProductDetails1.js";
import FSubmitted from "./Component/Feedbacksubmitted.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/feedbacksubmitted"
            element={[<Headergreen />, <NavBarg />, <FSubmitted />]}
          />
          <Route
            path="/feedback"
            element={[<Headergreen />, <NavBarg />, <Feedback />, <Footer />]}
          />
          
<Route path="/groupbuy/:productId" element={<GroupBuyComponent />} />
          <Route
            path="/submitted"
            element={[<Headergreen />, <Submitted />]}
          />
          <Route
            path="/seller"
            element={[<Headergreen />, <NavBarg />, <SellerSection />, <Footer />]}
          />
          <Route path="/thanks" element={[<Header />, <Thanks />]} />
          <Route path="/orders" element={[<Header />, <Orders />, <Footer />]} />
          <Route
            path="/sustainability"
            element={[<Headergreen />, <NavBarg />, <SustainabilityReportsSection />, <Footer />]}
          />
          <Route
            path="/education"
            element={[<Headergreen />, <NavBarg />, <EducationSection />, <Footer />]}
          />
          <Route
            path="/green"
            element={[<Headergreen />, <NavBarg />, <Homegreen />, <Footer />]}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={[<Header />, <Checkout />, <Footer />]}
          />
          <Route
            path="/"
            element={[<Header />, <Home />, <Footer />]} // Removed NavBar here
          />
          <Route
            path="/dashboard"
            element={[<Header />, <NavBarg />, <Dashboard />]}
          />
          <Route
            path="/product"
            element={[<Headergreen />, <NavBarg />, <ProductDetails />, <Footer />]}
          />
          <Route
            path="/product1"
            element={[<Headergreen />, <NavBarg />, <ProductDetails1 />, <Footer />]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
