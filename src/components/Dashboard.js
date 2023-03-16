import React from "react";
import Charts from "./Charts";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div className="dashboard-stats">
        <div className="stat">
          <h2>Total Sales</h2>
          <p>$50,000</p>
        </div>
        <div className="stat">
          <h2>New Customers</h2>
          <p>20</p>
        </div>
        <div className="stat">
          <h2>Orders Fulfilled</h2>
          <p>150</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <h2>Sales Chart</h2>
        {/* Insert chart component here */}
        <Charts />
      </div>
    </div>
  );
}

export default Dashboard;
