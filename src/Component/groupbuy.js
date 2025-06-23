import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GroupBuyComponent = ({ userId = "user-123" }) => {
  const { productId } = useParams(); // ✅ productId from URL
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joined, setJoined] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const BASE_URL = "http://localhost:5000/api/groupbuy";

  const fetchGroup = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${productId}`);
      setGroup(res.data);
      if (res.data.buyers.includes(userId)) {
        setJoined(true);
        localStorage.setItem(`joined-${productId}`, 'true');
      }
    } catch {
      setGroup(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const setupGroup = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/${productId}`);
        setGroup(res.data);
        if (res.data.buyers.includes(userId)) {
          setJoined(true);
        }
      } catch {
        try {
          const createRes = await axios.post(`${BASE_URL}/create`, {
            productId,
            maxBuyers: 5,
            durationMinutes: 4320 // 3 days
          });
          setGroup(createRes.data);
        } catch (err) {
          console.error("Auto-create failed:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    if (localStorage.getItem(`joined-${productId}`)) {
      setJoined(true);
    }

    setupGroup();
  }, [productId]);

  useEffect(() => {
    if (!group) return;
    const interval = setInterval(() => {
      const remaining = Math.max(0, new Date(group.endTime) - new Date());
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [group]);

  const joinGroup = async () => {
    try {
      await axios.post(`${BASE_URL}/join/${group._id}`, { userId });
      alert("🎉 Joined group successfully!");
      setJoined(true);
      localStorage.setItem(`joined-${productId}`, 'true');
      await fetchGroup();
    } catch (err) {
      alert(err.response?.data?.message || "Error joining group");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 Group link copied to clipboard!");
  };

  if (loading) return <p>Loading group info...</p>;
  if (!group) return <p>No active group found for this product.</p>;

  const isExpired = timeLeft === 0 || group.buyers.length >= group.maxBuyers;
  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const progress = Math.min((group.buyers.length / group.maxBuyers) * 100, 100);

  return (
    <div className='p-4 border rounded shadow-md bg-white max-w-xl mx-auto my-6'>
      <h3 className='text-lg font-bold text-green-700 mb-3'>Group Buying Offer</h3>

      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className="text-sm font-medium">
          👥 {group.buyers.length} / {group.maxBuyers} joined
        </span>
        <div className="flex -space-x-2">
          {group.buyers.map((uid, idx) => (
            <div
              key={idx}
              className="w-8 h-8 bg-green-500 text-white rounded-full text-xs flex items-center justify-center ring-2 ring-white"
              title={`User: ${uid}`}
            >
              {uid.slice(-2)}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 mb-3">
        ⏳ Ends in: <strong>{minutes} min {seconds} sec</strong>
      </p>

      {!isExpired ? (
        <button
          onClick={joinGroup}
          disabled={joined}
          className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition'
        >
          {joined ? "Already Joined" : "Join Group Buy"}
        </button>
      ) : (
        <p className="text-red-600 mt-2">⚠️ Group Expired or Full</p>
      )}

      {joined && (
        <div className="mt-4 border-t pt-4 text-sm text-gray-700">
          <h4 className="text-green-700 font-semibold mb-2">Group Details:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Product ID:</strong> {group.productId}</li>
            <li><strong>Members Joined:</strong> {group.buyers.join(', ')}</li>
            <li><strong>Group Size Limit:</strong> {group.maxBuyers}</li>
            <li><strong>Expires In:</strong> {minutes} minutes</li>
          </ul>

          <button
            onClick={copyLink}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            🔗 Share Group Link
          </button>

          <button className="mt-4 ml-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Continue to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupBuyComponent;
