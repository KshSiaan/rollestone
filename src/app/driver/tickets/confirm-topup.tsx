import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckIcon } from "lucide-react";
import React from "react";

export default function ConfirmTopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-12 w-full bg-green-500 hover:bg-green-600 text-white font-medium">
          CONFIRM
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>RX Card Top Up</DialogTitle>
        <div className="">
          <div className="rounded-md p-4 bg-blue-50 w-full flex flex-row justify-between items-center text-blue-600">
            <h4 className="text-sm font-bold">John Smith</h4>
            <div className="flex flex-col gap-2 items-end">
              <h4 className="text-xl">${Number(20).toFixed(2)}</h4>
              <p className="text-xs font-semibold">Top Up Amount</p>
            </div>
          </div>
          <h3 className="text-sm font-semibold text-center mt-8 mb-4">
            Select Payment Method
          </h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-14 w-full bg-green-600 hover:bg-green-600/90">
                $Cash
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Paywave Payment</DialogTitle>
              </DialogHeader>
              <div>
                <div className="w-full py-6 bg-green-100 rounded-md flex flex-col justify-center items-center gap-4">
                  <div className="size-24 bg-green-600 flex items-center justify-center rounded-full text-background">
                    <CheckIcon className="size-18" />
                  </div>
                  <h2 className="text-xl font-semibold text-center text-green-700">
                    Payment successful
                  </h2>
                  <h2 className="text-lg text-center text-green-700">
                    Transaction Completed
                  </h2>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="w-full" variant={"outline"}>
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DialogClose asChild>
            <Button className="mt-2 h-12 w-full" variant={"outline"}>
              Back to Amount
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
