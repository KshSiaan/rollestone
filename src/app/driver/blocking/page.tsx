import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusIcon, ClockIcon, StarIcon } from "lucide-react";
import React from "react";
import { TripBlockingCard } from "./trip-input";

export default function Page() {
  return (
    <main className="p-16 h-full w-full grid grid-cols-2 gap-6">
      <div className="h-full w-full">
        <div className="w-full h-full grid grid-rows-2 gap-6">
          <Card className="h-full w-full bg-background rounded-md shadow flex !flex-col justify-between! items-center">
            <CardHeader className="w-full">
              <CardTitle className="flex items-center gap-2 font-bold">
                <BusIcon /> Fleet Number
              </CardTitle>
            </CardHeader>
            <CardContent className="w-full">
              <div className="text-blue-600 border rounded-md border-blue-400! bg-blue-100 p-6">
                <Label htmlFor="fleet" className="w-full text-xl font-bold">
                  Current Vehicle
                </Label>
                <Input
                  name="fleet"
                  id="fleet"
                  placeholder="0000"
                  className="bg-transparent border-0! px-0! text-4xl! mt-6 font-semibold outline-0! ring-0! shadow-none!"
                  type="number"
                />
              </div>
            </CardContent>
            <CardFooter className="w-full mt-auto!">
              <Button className="w-full h-14 bg-purple-500 hover:bg-purple-500/90 text-lg">
                Enter Fleet Number
              </Button>
            </CardFooter>
          </Card>
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Route Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-rows-3 gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full h-14 bg-blue-800 hover:bg-blue-800/90 text-lg">
                    RX1
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-bold flex items-center gap-2">
                      <ClockIcon />
                      RX2 - Morning Trips
                    </DialogTitle>
                  </DialogHeader>
                  <div className=" w-full grid grid-cols-3 gap-6">
                    {[
                      "6:15 AM",
                      "6:45 AM",
                      "7:15 AM",
                      "7:45 AM",
                      "8:15 AM",
                      "8:45 AM",
                    ].map((x, i) => (
                      <Button
                        variant={"outline"}
                        className="h-16! w-full! text-xl"
                        key={i}
                      >
                        {x}
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full h-14 bg-green-600 hover:bg-green-600/90 text-lg">
                    RX2
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-bold flex items-center gap-2">
                      <ClockIcon />
                      RX2 - Morning Trips
                    </DialogTitle>
                  </DialogHeader>
                  <div className=" w-full grid grid-cols-3 gap-6">
                    {[
                      "6:15 AM",
                      "6:45 AM",
                      "7:15 AM",
                      "7:45 AM",
                      "8:15 AM",
                      "8:45 AM",
                    ].map((x, i) => (
                      <Button
                        variant={"outline"}
                        className="h-16! w-full! text-xl"
                        key={i}
                      >
                        {x}
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full h-14 bg-yellow-600 hover:bg-yellow-600/90 text-lg">
                    Special Event
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                      <StarIcon className="h-6 w-6 text-orange-500" />{" "}
                      {/* Or a different color if preferred */}
                      <CardTitle className="text-xl font-semibold">
                        New Brighton Fireworks
                      </CardTitle>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Free Event
                    </span>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Annual fireworks display at New Brighton Beach
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Event blocking available
                      </span>
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600"
                      >
                        Select Event
                      </Button>
                    </div>
                  </CardContent>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
      <TripBlockingCard />
    </main>
  );
}
