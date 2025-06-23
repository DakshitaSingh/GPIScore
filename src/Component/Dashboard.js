import React from 'react';
import { BsFillArchiveFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import '../Css/Dashboard.css';

function Home() {
  const data = [
    { name: 'Product 1', percentReduced: 20 },
    { name: 'Product 2', percentReduced: 60 },
    { name: 'Product 3', percentReduced: 25 },
    { name: 'Product 4', percentReduced: 100 },
    { name: 'Product 5', percentReduced: 50 },
    { name: 'Product 6', percentReduced: 60 },
    { name: 'Product 7', percentReduced: 80 },
  ];

  const pieChartData = [
    { name: '1 Leaf', value: 20 },
    { name: '2 Leaf', value: 20 },
    { name: '3 Leaf', value: 20 },
    { name: '4 Leaf', value: 20 },
    { name: '5 Leaf', value: 20 },
  ];

  const COLORS = ['#AADB08', '#8AE804', '#64CF04', '#03BB03', '#008000'];

  const BADGEIMG = [
    "../images/badge1.png",
    "../images/badge2.png",
    "../images/badge3.png",
    "../images/badge4.png",
    "../images/badge5.png"
  ];

  return (
    <div className="greenify-dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Greenify Dashboard 🌿</h2>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="card-content">
              <h3 className="card-title">Carbon Emission Reduced (KGs)</h3>
              <img className="card-icon" src="../images/co2badge.png" alt="Emissions Icon" />
            </div>
            <h1 className="card-metric">23</h1>
          </div>

          <div className="dashboard-card">
            <div className="card-content">
              <h3 className="card-title">Green Bits</h3>
              <img className="card-icon" src="../images/GreenBit.png" alt="Greenbits Icon" />
            </div>
            <h1 className="card-metric">13</h1>
          </div>

          <div className="dashboard-card">
            <div className="card-content">
              <h3 className="card-title">Your Offers</h3>
              <img className="card-icon" src="../images/voucher.png" alt="Offers Icon" />
            </div>
          </div>
        </div>

        <div className="dashboard-charts">
          <div className="chart-card">
            <div className="chart-title">Badge Distribution</div>
            <div className="pie-chart-wrapper">
              <ResponsiveContainer width="80%" height={200}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    stroke="#008000"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="chart-labels">
                {pieChartData.map((entry, index) => (
                  <div key={`label-${index}`} className="label-item">
                    <span
                      className="label-color"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></span>
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-title">% Plastic Reduced Per Item</div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="percentReduced"
                  stroke="#4CAF50"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
