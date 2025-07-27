import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Passengers() {
  return (
    <CardContent>
      <Card>
        <CardHeader>
          <CardTitle>Passenger Analytics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-6 pb-6">
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-teal-700 text-3xl">2,847</p>
            <p>Total Passenger</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-amber-600 text-3xl">2,847</p>
            <p>Monthly Pass Holders</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-purple-700 text-3xl">847</p>
            <p>Daily Active</p>
          </div>
        </CardContent>
      </Card>
    </CardContent>
  );
}
