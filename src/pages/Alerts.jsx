import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Alerts = () => {
  return (
    <div className="space-y-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Alerts</h1>
      </header>

      <section className="space-y-2">
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Type: High Blood Sugar</p>
            <p>Timestamp: 2023-10-01 14:30</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jane Smith</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Type: High Blood Pressure</p>
            <p>Timestamp: 2023-10-02 09:15</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Alerts;