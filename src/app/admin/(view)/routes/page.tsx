import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  ChevronLeftIcon,
  ChevronRight,
  MapIcon,
  NavigationIcon,
  RouteIcon,
  SearchIcon,
  UserPlusIcon,
} from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  return (
    <main className="h-full w-full p-2">
      <div className="w-full grid grid-cols-4 gap-6">
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <RouteIcon className="text-green-500 w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">18</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Active Routes
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <MapIcon className="text-blue-500 w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">247</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Total Stops
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <NavigationIcon className="text-muted-foreground w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">456 Km</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Daily Trips
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <CheckCircle2 className="text-amber-500 w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">89%</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Avg On time
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-background rounded-md py-4! mt-6">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="">
            <CardTitle className="flex items-center gap-2 text-xl mb-2">
              <RouteIcon className="" /> All Drivers
            </CardTitle>
            <p className="text-sm">
              Manage bus routes, schedules, and performance
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className=" border rounded-md flex items-center px-2">
              <SearchIcon className="text-muted-foreground size-5" />
              <Input
                className="bg-transparent border-0! outline-0! ring-0! shadow-none!"
                placeholder="Search  routes"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-600/90" asChild>
              <Link href={"/admin/routes/add"}>
                <UserPlusIcon /> Add New Routes
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Card className="p-4 flex flex-col gap-4">
            {/* Header with Route Name and Action Buttons */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">RX1 Rolleston North</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-green-500 text-white hover:bg-green-600"
                >
                  Active
                </Button>
                <Button variant="outline">Edit</Button>
              </div>
            </div>

            {/* Duration */}
            <p className="text-gray-600">Duration: 35 min</p>

            {/* Departure Times & Trip Numbers Label */}
            <p className="font-semibold">Departure Times & Trip Numbers:</p>

            {/* Departure Time & Trip Number Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="px-3 py-1 rounded-full border border-gray-300 text-gray-700"
              >
                06:30 (T001)
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 rounded-full border border-gray-300 text-gray-700"
              >
                06:30 (T002)
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 rounded-full border border-gray-300 text-gray-700"
              >
                06:30 (T003)
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 rounded-full border border-gray-300 text-gray-700"
              >
                06:30 (T004)
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 rounded-full border border-gray-300 text-gray-700"
              >
                06:30 (T005)
              </Badge>
            </div>
          </Card>
        </CardContent>
      </Card>
      <div className=" flex items-center justify-center mt-8 gap-2">
        <Button variant={"outline"}>
          <ChevronLeftIcon />
        </Button>
        <Button variant={"outline"}>1</Button>
        <Button variant={"outline"}>2</Button>
        <Button variant={"outline"}>3</Button>
        <Button variant={"outline"}>
          <ChevronRight />
        </Button>
      </div>
    </main>
  );
}
