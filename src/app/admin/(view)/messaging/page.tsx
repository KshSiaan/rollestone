import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BusFrontIcon,
  CheckCircle2,
  ChevronLeftIcon,
  ChevronRight,
  EyeIcon,
  LayoutDashboardIcon,
  MapIcon,
  MapPinIcon,
  MessageSquareIcon,
  NavigationIcon,
  PauseIcon,
  RouteIcon,
  SearchIcon,
  SlidersVerticalIcon,
  StarIcon,
  TrendingUpIcon,
  TriangleAlert,
  UserCheckIcon,
  UserPlusIcon,
  WaypointsIcon,
  XCircleIcon,
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
import Link from "next/link";
import MessageForm from "./message-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
export default function Page() {
  return (
    <main className="h-full w-full p-6">
      <div className="w-full grid grid-cols-4 gap-6">
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <p className="font-semibold">Messages Sent Today</p>
            <div className="flex items-center">
              <CardTitle className="text-2xl font-semibold">18</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              To drivers & passengers
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <p className="font-semibold">Push Subscribers</p>
            <div className="flex items-center">
              <CardTitle className="text-2xl font-semibold">183</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Active Notifications
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <p className="font-semibold">Delivery Rate</p>
            <div className="flex items-center">
              <CardTitle className="text-2xl font-semibold">98.5%</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Last 24 hours
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <p className="font-semibold">Active Alerts</p>
            <div className="flex items-center">
              <CardTitle className="text-2xl font-semibold">3</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              System alerts active
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-2xl font-semibold">Messaging & Notifications</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="">
              <MessageSquareIcon /> Quick Message
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send Quick Message</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Label>Recipents</Label>
              <Select>
                <SelectTrigger className="w-full!">
                  <SelectValue placeholder="All Drivers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="123">...</SelectItem>
                </SelectContent>
              </Select>
              <Label>Message</Label>
              <Input placeholder="Type a short alert" />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant={"outline"}>Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="bg-blue-600 hover:bg-blue-600/80">
                    Send Now
                  </Button>
                </DialogClose>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <MessageForm />
      <Card className="bg-background rounded-md py-4! mt-6">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="">
            <CardTitle className="flex items-center gap-2 text-xl mb-2">
              Recent Messages
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Card className="p-4 flex flex-col gap-4">
            {/* Header with Route Name and Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-2 w-fit text-sm">
                <Badge variant={"outline"}>Driver Alert</Badge>
                <p>to all Drivers </p>
              </div>
              <div className="flex gap-2 items-center text-sm font-semibold">
                <Button
                  variant="outline"
                  className="bg-green-500 text-white hover:bg-green-600"
                >
                  Active
                </Button>
                <p>2 HOURS AGO</p>
              </div>
            </div>

            {/* Duration */}
            <p className="text-gray-600">
              Traffic delay on Route 1 - adjust schedule accordingly
            </p>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
}
