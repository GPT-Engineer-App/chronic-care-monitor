import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p>{new Date().toLocaleDateString()}</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Patients Overview</h2>
          <p>Number of patients being monitored: 50</p>
          <p>Critical alerts: 5</p>
          <p>Recent activities: 10</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Chart 1</h2>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Chart 2</h2>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;