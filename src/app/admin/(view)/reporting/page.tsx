import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DownloadIcon, FileIcon, LayoutDashboardIcon } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Page() {
  const cardData = [
    {
      title: "Total Users",
      value: "1,247",
      footer: "+23 this week",
    },
    {
      title: "Active Cards",
      value: "117",
      footer: "96% of users",
    },
    {
      title: "Total Balance",
      value: "$12,4565",
      footer: "Across all accounts",
    },
    {
      title: "Suspended",
      value: "4",
      footer: "Across suspended",
    },
  ];

  return (
    <main className="h-full w-full p-2">
      <div className="w-full grid grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} className={`gap-2`}>
            <CardHeader className="">
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{card.value}</p>
            </CardContent>
            <CardFooter className="text-sm">
              <p>{card.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="rounded-md py-4! mt-6">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="">
            <CardTitle className="flex items-center gap-2 text-xl mb-2">
              <LayoutDashboardIcon className="text-blue-600" /> Live Trip
              Dashboard - Morning Rush Hour (6:15 AM)
            </CardTitle>
            <p className="text-sm">
              Real-time tracking of all active bus routes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={"outline"}>
              <DownloadIcon />
              Export Report
            </Button>
            <Button>
              <FileIcon />
              Generate Report
            </Button>
          </div>
        </CardHeader>
        <div className=" p-4">
          <Tabs defaultValue="revenue">
            <TabsList className="bg-zinc-200">
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="revenueb">Performance</TabsTrigger>
              <TabsTrigger value="revenuec">Passengers</TabsTrigger>
              <TabsTrigger value="revenued">Routes</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <CardContent className="w-full grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Route</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge>RX1</Badge> <span>Rolleston North to city</span>
                </div>{" "}
                <p className="text-green-600">$2,117</p>
              </p>
              <p className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge>RX1</Badge> <span>Rolleston North to city</span>
                </div>{" "}
                <p className="text-green-600">$2,117</p>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Trends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="flex items-center justify-between">
                <div className="">January</div>
                <p className="text-green-600">$2,117</p>
              </p>
              <p className="flex items-center justify-between">
                <div className="">January</div>
                <p className="text-green-600">$2,117</p>
              </p>
              <p className="flex items-center justify-between">
                <div className="">January</div>
                <p className="text-green-600">$2,117</p>
              </p>

              <p className="flex items-center justify-between">
                <div className="">January</div>
                <p className="text-green-600">$2,117</p>
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </div>
    </main>
  );
}
