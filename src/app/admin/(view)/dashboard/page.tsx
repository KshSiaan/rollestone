import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  EyeIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MessageSquareIcon,
  SearchIcon,
  SlidersVerticalIcon,
  TrendingUpIcon,
  TriangleAlert,
  WaypointsIcon,
} from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
export default function Page() {
  const cardData = [
    {
      title: "Active Trips",
      value: "5",
      footer: "Morning rush hour",
      bgColor: "bg-blue-500", // Adjusted to be closer to the image's blue
    },
    {
      title: "Total Passengers",
      value: "117",
      footer: "Currently onboard",
      bgColor: "bg-green-500", // Green from the image
    },
    {
      title: "Revenue Today",
      value: "$889",
      footer: "+8% from yesterday",
      bgColor: "bg-purple-600", // Purple from the image
    },
    {
      title: "Active Drivers",
      value: "4",
      footer: "Morning Shift",
      bgColor: "bg-yellow-600", // Golden/Yellow from the image
    },
  ];

  return (
    <main className="h-full w-full p-2">
      <div className="w-full grid grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} className={`gap-2 ${card.bgColor} text-white`}>
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
      <Card className="bg-background rounded-md py-4! mt-6">
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
            <div className=" border rounded-md flex items-center px-2">
              <SearchIcon className="text-muted-foreground size-5" />
              <Input
                className="bg-transparent border-0! outline-0! ring-0! shadow-none!"
                placeholder="Search  routes"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={
                    <p className="flex items-center gap-2">
                      <SlidersVerticalIcon />
                      All stauses
                    </p>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">...</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Route</TableHead>
                <TableHead>Trips</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Next Stop</TableHead>
                <TableHead>Passengers</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 6 }).map((x, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Badge>RX2</Badge>
                  </TableCell>
                  <TableCell>32</TableCell>
                  <TableCell>South Route to city</TableCell>
                  <TableCell>5:50 AM</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <MapPinIcon className="size-5" />
                    Bus Interchange (Platform A)
                  </TableCell>
                  <TableCell className="">
                    <span className="text-lg font-bold">28/45</span>{" "}
                    <span>(62%)</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="flex items-center justify-between">
                        <span>Progress</span>
                        <span>75%</span>
                      </p>
                      <Progress max={100} value={75} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={"secondary"}>Departed</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant={"ghost"}>
                      <EyeIcon />
                    </Button>
                    <Button variant={"ghost"}>
                      <MessageSquareIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
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
