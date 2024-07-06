import React from "react";

const Patients = () => {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Patients</h1>
      </header>
      <div className="relative">
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full p-2 border rounded"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Age</th>
            <th className="py-2">Condition</th>
            <th className="py-2">Last Check-in</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">John Doe</td>
            <td className="py-2">45</td>
            <td className="py-2">Diabetes</td>
            <td className="py-2">2023-10-01</td>
            <td className="py-2">Stable</td>
          </tr>
          {/* Add more patient rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;