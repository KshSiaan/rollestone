import React from "react";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { idk } from "@/lib/utils";
export default function TripBlocker({
  setDialogOpen,
  data,
}: {
  setDialogOpen: idk;
  data: idk;
}) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">
          Please Confirm Trip Details Below
        </DialogTitle>
      </DialogHeader>
      {data && (
        <pre className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-amber-400 rounded-xl p-6 shadow-lg overflow-x-auto text-sm leading-relaxed border border-zinc-700">
          <code className="whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      )}
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-2 items-center gap-4">
          <span className="text-gray-700 font-medium">Route:</span>
          <span className="text-right text-gray-900">{tripDetails.route}</span>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <span className="text-gray-700 font-medium">Time:</span>
          <span className="text-right text-gray-900">{tripDetails.time}</span>
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
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setDialogOpen(false);
          }}
          className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 py- px-4 rounded-md text-lg"
        >
          CANCEL
        </Button>
      </DialogFooter>
    </>
  );
}
const tripDetails = {
  route: "RX1 Rolleston",
  time: "06:35 AM",
  startPoint: "Oak Tree Lane",
};
