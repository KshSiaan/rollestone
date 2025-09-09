import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Loader2Icon,
  TrendingUpIcon,
  TriangleAlert,
  WaypointsIcon,
} from "lucide-react";
import React, { Suspense } from "react";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Statistics from "./statistics";
import DataTable from "./data-table";
export default function Page() {
  return (
    <main className="h-full w-full p-2">
      <Suspense
        fallback={
          <div className={`flex justify-center items-center h-24 mx-auto`}>
            <Loader2Icon className={`animate-spin`} />
          </div>
        }
      >
        <Statistics />
      </Suspense>
      <Suspense>
        <DataTable />
      </Suspense>
      <section className="mt-2 grid grid-cols-3 gap-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <TriangleAlert className="text-yellow-600" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                className="bg-gray-100 p-4 rounded-lg flex items-start space-x-3"
                key={i}
              >
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-1"></div>
                <div>
                  <p className="text-gray-800 font-semibold">
                    Trip RX2-21 - Running 2 minutes behind schedule
                  </p>
                  <p className="text-gray-500 text-sm">2min ago</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <TrendingUpIcon className="text-green-600" />
              Route Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="" key={i}>
                <p className="flex items-center justify-between text-sm">
                  <span>RX1 On-time</span>
                  <span className="text-green-500">89%</span>
                </p>
                <Progress max={100} value={89} />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <WaypointsIcon className="text-blue-900" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                className=" rounded-lg flex justify-between items-start space-x-3"
                key={i}
              >
                <div>Ticketing system</div>
                <div className="">
                  <Badge variant={"success"}>Online</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
