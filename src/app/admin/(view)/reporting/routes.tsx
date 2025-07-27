import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export default function Routes() {
  return (
    <CardContent>
      <Card className="w-full ">
        <CardHeader>
          <CardTitle>Route Statistics</CardTitle>
        </CardHeader>
        <CardContent className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Route</TableHead>
                <TableHead>Daily Trips</TableHead>
                <TableHead>Passengers</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>On Time Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Rolleston North To City</TableCell>
                <TableCell>32</TableCell>
                <TableCell>1247</TableCell>
                <TableCell className="text-green-600">$2,867</TableCell>
                <TableCell className="font-bold">89%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rolleston North To City</TableCell>
                <TableCell>32</TableCell>
                <TableCell>1247</TableCell>
                <TableCell className="text-green-600">$2,867</TableCell>
                <TableCell className="font-bold">89%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </CardContent>
  );
}
