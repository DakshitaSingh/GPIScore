import React from 'react';
import '../Css/navbargreen.css';
import { Link } from 'react-router-dom';
// import GroupBuyComponent from './groupbuy.js';
// import ActiveGroupDeals from './ActiveGroupDeals.js';
//import Popover from './Popover';

const AmazonNavigationBarg = () => {
  return (
    <div className="amazon-nav">
      <div className="amazon-nav-section">
        <ul className="amazon-nav-list">
          <Link style={{textDecoration: 'none'}} to = "/green">
            <li><a href="/" style={{ color: '#146eb4' }}>Home</a></li>
          </Link>
         
          <Link style={{textDecoration: 'none'}} to = "/seller">
          <li><a href="#" style={{ color: '#146eb4' }}>Seller</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to = "/education">
          <li><a href="#" style={{ color: '#146eb4' }}>Educational Section</a></li>
          </Link>
          <Link style={{textDecoration: 'none'}} to = "/sustainability">
          <li><a href="#" style={{ color: '#146eb4' }}>Sustainability Reports</a></li>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
  <li style={{ listStyle: 'none' }}>
    <span style={{ color: '#146eb4', cursor: 'pointer' }}>Go Back</span>
  </li>
</Link>


          {/* <Link style={{textDecoration: 'none'}} to = "/green">
            <button className="button">Greenovation Zone</button>
          </Link> */}
          </ul>
      </div>
    </div>
  );
};

export default AmazonNavigationBarg;
