import React from "react";

const Alerts = () => {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Alerts</h1>
      </header>
      <ul className="space-y-2">
        <li className="p-4 bg-white rounded shadow">
          <p>Patient: John Doe</p>
          <p>Alert: High Blood Sugar</p>
          <p>Timestamp: 2023-10-01 10:00 AM</p>
        </li>
        {/* Add more alerts as needed */}
      </ul>
    </div>
  );
};

export default Alerts;