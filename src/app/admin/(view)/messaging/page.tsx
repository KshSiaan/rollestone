import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import React, { Suspense } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Loader2Icon, MessageSquareIcon } from "lucide-react";
import Recents from "./recents";
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
      <Suspense
        fallback={
          <div className={`flex justify-center items-center h-24 mx-auto`}>
            <Loader2Icon className={`animate-spin`} />
          </div>
        }
      >
        <Recents />
      </Suspense>
    </main>
  );
}
