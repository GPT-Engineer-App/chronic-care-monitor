import React from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Patients = () => {
  return (
    <div className="space-y-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Patients</h1>
      </header>

      <div className="flex justify-end">
        <Input placeholder="Search patients..." className="w-full md:w-1/3" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead>Last Check-in</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>45</TableCell>
            <TableCell>Diabetes</TableCell>
            <TableCell>2023-10-01</TableCell>
            <TableCell>Stable</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>60</TableCell>
            <TableCell>Hypertension</TableCell>
            <TableCell>2023-10-02</TableCell>
            <TableCell>Critical</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Patients;