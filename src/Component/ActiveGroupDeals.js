import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ActiveGroupDeals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/groupbuy/active');
        setDeals(res.data);
      } catch (error) {
        console.error("Error fetching group deals:", error);
      }
    };
    fetchDeals();
  }, []);

  if (deals.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6">
        <p>No active group deals right now 😔</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 md:px-20">
      <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
        Active Group Buying Deals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => {
          const timeLeft = Math.max(0, new Date(deal.endTime) - new Date());
          return (
            <div key={deal._id} className="bg-white shadow-md p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Product ID: {deal.productId}</h3>
              <p className="text-sm text-gray-700 mb-1">
                👥 {deal.buyers.length}/{deal.maxBuyers} joined
              </p>
              <p className="text-sm text-gray-600 mb-4">
                ⏰ Ends in: {Math.ceil(timeLeft / 60000)} minutes
              </p>
              <Link
                to={`/groupbuy/${deal.productId}`}
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                View Deal
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveGroupDeals;