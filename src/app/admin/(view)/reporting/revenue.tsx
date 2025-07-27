import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Revenue() {
  return (
    <CardContent className="w-full grid grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Revenue by Route</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge>RX1</Badge> <span>Rolleston North to city</span>
            </div>
            <p className="text-green-600">$2,117</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge>RX1</Badge> <span>Rolleston North to city</span>
            </div>{" "}
            <p className="text-green-600">$2,117</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="">January</div>
            <p className="text-green-600">$2,117</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="">January</div>
            <p className="text-green-600">$2,117</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="">January</div>
            <p className="text-green-600">$2,117</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="">January</div>
            <p className="text-green-600">$2,117</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-background rounded-md py-4! col-span-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="">
            <CardTitle className="flex items-center gap-2 text-xl mb-2">
              Cash Reconciliation
            </CardTitle>
            <p className="text-sm">
              Reconcile driver cash collections against sales data.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Input className="" type="date" />
            <Button className="bg-blue-500 hover:bg-blue-500/80">
              <DownloadIcon />
              Download Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Cash Processed</TableHead>
                <TableHead>Recieved</TableHead>
                <TableHead>Difference</TableHead>
                <TableHead>Checked</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 6 }).map((x, i) => (
                <TableRow key={i}>
                  <TableCell>07-08-2025</TableCell>
                  <TableCell>Liam bently</TableCell>
                  <TableCell>$250.50</TableCell>
                  <TableCell className="">
                    <div className="p-2 w-fit border border-green-600 text-green-600 flex justify-center items-center rounded-md font-semibold">
                      $291.50
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-green-600">
                    $45.65
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Badge variant="secondary">Check</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </CardContent>
  );
}
