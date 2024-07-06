import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="space-y-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Settings</h1>
      </header>

      <form className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="********" />
        </div>
        <div>
          <Label htmlFor="notifications">Notifications</Label>
          <Input id="notifications" type="text" placeholder="Enabled" />
        </div>
        <Button type="submit">Save Settings</Button>
      </form>
    </div>
  );
};

export default Settings;