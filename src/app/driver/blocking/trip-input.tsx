"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export function TripBlockingCard() {
  const [tripNumber, setTripNumber] = useState("");

  const keypadButtons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "*"],
  ];

  const handleKeypadClick = (value: string) => {
    if (value === "*") {
      // Handle backspace/delete
      setTripNumber((prev) => prev.slice(0, -1));
    } else {
      setTripNumber((prev) => prev + value);
    }
  };

  const handleFindTrip = () => {
    console.log("Finding trip:", tripNumber);
    // Handle trip search logic here
  };

  return (
    <Card className="w-full bg-white shadow-lg">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Trip Blocking</h1>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="trip-number"
            className="text-sm font-medium text-gray-700"
          >
            Trip Number
          </Label>
          <Input
            id="trip-number"
            type="text"
            placeholder="Enter Trip Number"
            value={tripNumber}
            onChange={(e) => setTripNumber(e.target.value)}
            className="text-center py-6 text-lg"
          />
        </div>

        {/* Numeric Keypad */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-3">
            {keypadButtons.flat().map((button, index) => (
              <Button
                key={index}
                variant="secondary"
                className="h-12 text-lg font-medium bg-white hover:bg-gray-50 border border-gray-200"
                onClick={() => handleKeypadClick(button)}
              >
                {button}
              </Button>
            ))}
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            {/* Find Trip Button */}
            <Button
              onClick={handleFindTrip}
              className="w-full h-12 text-lg font-medium bg-blue-500 hover:bg-blue-600"
              disabled={!tripNumber.trim()}
            >
              FIND TRIP
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Please Confirm Trip Details Below
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-gray-700 font-medium">Route:</span>
                <span className="text-right text-gray-900">
                  {tripDetails.route}
                </span>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-gray-700 font-medium">Time:</span>
                <span className="text-right text-gray-900">
                  {tripDetails.time}
                </span>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-gray-700 font-medium">Start Point:</span>
                <span className="text-right text-gray-900">
                  {tripDetails.startPoint}
                </span>
              </div>
            </div>
            <DialogFooter className="flex flex-col-reverse sm:flex-col sm:justify-center gap-3 mt-4">
              <Button
                type="button"
                variant="default"
                // onClick={onStartTrip}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-6 px-4 rounded-md text-lg"
              >
                START TRIP
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  // onClick={onClose}
                  className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 py- px-4 rounded-md text-lg"
                >
                  CANCEL
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
const tripDetails = {
  route: "RX1 Rolleston",
  time: "06:35 AM",
  startPoint: "Oak Tree Lane",
};
