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
  ChevronLeftIcon,
  ChevronRight,
  EyeIcon,
  MessageSquareIcon,
  PauseIcon,
  SearchIcon,
  SlidersVerticalIcon,
  StarIcon,
  UserCheckIcon,
  UserPlusIcon,
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

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DriverProfilePopup from "./driver-prof";
export default function Page() {
  return (
    <main className="h-full w-full p-2">
      <div className="w-full grid grid-cols-4 gap-6">
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <UserCheckIcon className="text-green-500 w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">18</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Active Driver
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <PauseIcon className="text-amber-500 w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">4</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              On Break
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <XCircleIcon className="text-muted-foreground w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">5</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Offline
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="gap-0">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <StarIcon className="text-blue-500 w-6 h-6 mr-2" />
              <CardTitle className="text-2xl font-semibold">4.7</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 text-lg">
              Avg Rating
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-background rounded-md py-4! mt-6">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="">
            <CardTitle className="flex items-center gap-2 text-xl mb-2">
              <BusFrontIcon className="" /> All Drivers
            </CardTitle>
            <p className="text-sm">
              Manage drivers, schedules, and performance
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className=" border rounded-md flex items-center px-2">
              <SearchIcon className="text-muted-foreground size-5" />
              <Input
                className="bg-transparent border-0! outline-0! ring-0! shadow-none!"
                placeholder="Search routes"
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
            <Button className="bg-blue-600 hover:bg-blue-600/90" asChild>
              <Link href={"/admin/drivers/add"}>
                <UserPlusIcon /> Add New Driver
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Current Route</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 6 }).map((x, i) => (
                <TableRow key={i}>
                  <TableCell>Liam Bentley</TableCell>
                  <TableCell>5 years</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-2">
                      <StarIcon className="size-5" />
                      5.0
                    </span>
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell className="">Downtown Route</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant={"ghost"}>
                          <EyeIcon />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle></DialogTitle>
                        </DialogHeader>
                        <DriverProfilePopup />
                      </DialogContent>
                    </Dialog>
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
