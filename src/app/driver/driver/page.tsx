import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CalendarDaysIcon,
  ClockIcon,
  LogOutIcon,
  RefreshCcwIcon,
} from "lucide-react";
import React from "react";
import Trips from "./trips";

export default function Page() {
  return (
    <section className="p-4 flex-1 flex flex-col justify-start items-start">
      <Card className="w-full">
        <CardContent className="flex justify-between items-center">
          <div className="flex flex-row justify-start gap-2 h-full">
            <Avatar className="size-16">
              <AvatarImage src={"https://avatar.iran.liara.run/public"} />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>
            <div className="flex flex-col h-full justify-center items-start ml-2">
              <h3 className="text-lg font-bold">Liam bentley</h3>
              <p className="text-sm">Current type</p>
            </div>
          </div>
          <div className="flex flex-col h-full justify-center items-center">
            <h3 className="text-lg font-bold">Today’s Schedule</h3>
            <p className="flex items-center gap-1 text-sm">
              <CalendarDaysIcon className="size-4" />
              <span>Saturday, June 28, 2025</span>
            </p>
          </div>
          <div className="flex flex-col h-full justify-between items-center">
            <div className="flex items-center justify-center gap-2">
              <Button className="flex items-center gap-2" variant={"outline"}>
                <RefreshCcwIcon />
                Refresh
              </Button>
              <Button
                className="flex items-center gap-2 justify-center"
                variant={"outline"}
              >
                <LogOutIcon className="text-destructive" />
                Log Out
              </Button>
            </div>
            <p className="flex gap-6 items-center text-xs">
              <span>Last Updated: 22/02/2025</span> <span>16:09</span>
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="pt-0! w-full flex-1 mt-4 rounded-none!">
        <CardHeader className="p-4! bg-blue-900 flex items-center text-background text-xl gap-2 font-semibold">
          <ClockIcon />
          <h4>Today’s Trips</h4>
        </CardHeader>
        <CardContent>
          <Trips />
        </CardContent>
      </Card>
    </section>
  );
}
