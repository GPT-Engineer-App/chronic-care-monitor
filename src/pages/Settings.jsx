import React from "react";

const Settings = () => {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Notification Preferences</label>
          <select className="w-full p-2 border rounded">
            <option>Email</option>
            <option>SMS</option>
            <option>Push Notifications</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Account Details</label>
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
      </form>
    </div>
  );
};

export default Settings;