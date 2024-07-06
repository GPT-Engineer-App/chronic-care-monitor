import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  return (
    <div className="space-y-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Profile</h1>
      </header>

      <form className="space-y-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="yourusername" />
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" type="text" placeholder="A short bio about yourself" />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
    </div>
  );
};

export default Profile;