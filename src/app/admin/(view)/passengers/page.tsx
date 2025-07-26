import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ChevronLeftIcon,
  ChevronRight,
  CoinsIcon,
  EyeIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  MessageSquareIcon,
  MonitorCogIcon,
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
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Card Number</TableHead>
                <TableHead>Balace</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Trip</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 6 }).map((x, i) => (
                <TableRow key={i}>
                  <TableCell>Liam bently</TableCell>
                  <TableCell>Liam@gmail.com</TableCell>
                  <TableCell>**** 4532</TableCell>
                  <TableCell className="font-bold">$45.65</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Badge variant={"success"}>ACTIVE</Badge>
                  </TableCell>
                  <TableCell className="">2HOURS AGO</TableCell>
                  <TableCell>
                    <Button variant={"ghost"}>
                      <EyeIcon />
                    </Button>
                    <Button variant={"ghost"}>
                      <CoinsIcon />
                    </Button>
                    <Button variant={"ghost"}>
                      <MonitorCogIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
