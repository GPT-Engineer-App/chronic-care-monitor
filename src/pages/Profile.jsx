import React from "react";

const Profile = () => {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Profile</h1>
      </header>
      <div className="p-4 bg-white rounded shadow">
        <p>Name: Jane Doe</p>
        <p>Email: jane.doe@example.com</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;