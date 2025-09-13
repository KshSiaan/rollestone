import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";

export default async function Performance() {
  // const call = await get
  return (
    <CardContent>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Route Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex w-full justify-between items-center text-sm">
              <p className="font-semibold">Rollestone North to City</p>
              <p>89% on time</p>
            </div>
            <div className="">
              <Progress max={100} value={89} className="h-3" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex w-full justify-between items-center text-sm">
              <p className="font-semibold">Rollestone North to City</p>
              <p>89% on time</p>
            </div>
            <div className="">
              <Progress max={100} value={89} className="h-3" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex w-full justify-between items-center text-sm">
              <p className="font-semibold">Rollestone North to City</p>
              <p>89% on time</p>
            </div>
            <div className="">
              <Progress max={100} value={89} className="h-3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </CardContent>
  );
}
