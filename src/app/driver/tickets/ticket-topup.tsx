"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconCreditCardRefund, IconWheelchair } from "@tabler/icons-react";
import { BabyIcon, BikeIcon, PlusIcon, SearchIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ManualTopup from "./manual-topup";
import ConfirmTopup from "./confirm-topup";
import FarePopup from "./fare-popup";

export default function TicketTopup() {
  const [topupAmm, setTopupAmm] = useState<number | null>(null);
  const handleTopupSelect = (amount: number) => {
    setTopupAmm((prev) => (prev === amount ? null : amount));
  };

  return (
    <Card className="w-full h-[80dvh] flex flex-col justify-between">
      <CardContent className="h-auto w-full grid grid-cols-3 gap-6 p-6">
        {ticketTypes.map((x, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "h-auto! flex flex-col justify-center gap-4 border",
                  "border-blue-300"
                )}
              >
                <Avatar className="size-16">
                  <AvatarImage src={x.icon} />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <div className="text-2xl font-bold">
                  ${String(x.price).slice(0, 4)}
                </div>
                <p className="text-2xl">{x.title}</p>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="border-b pb-2">
                <DialogTitle>Select Fare Quantity & Payment Method</DialogTitle>
              </DialogHeader>
              <div className="">
                <FarePopup />
              </div>
              <DialogFooter className="grid grid-cols-2 gap-6">
                <DialogClose asChild>
                  <Button variant={"outline"}>Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="bg-blue-500 hover:bg-blue-600/90">
                    Confirm & Proceed
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </CardContent>
      <CardContent className="w-full grid grid-cols-3 gap-6">
        {ticketVariants.map((x, i) => (
          <Button
            key={i}
            variant={"outline"}
            className={cn(
              "h-auto! flex flex-col justify-center gap-4 border",
              "border-blue-300"
            )}
          >
            <div
              className={cn(
                "size-14 rounded-full flex justify-center items-center",
                bgColors[i] ?? "bg-fuchsia-200"
              )}
            >
              <x.icon className="size-8" />
            </div>
            <p className="text-2xl">{x.title}</p>
          </Button>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex gap-2 items-center text-lg h-14 w-full bg-green-300 hover:bg-green-400/90 text-green-700 font-bold">
              <PlusIcon className="size-6" />
              Top Up
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>RX Card Top Up</DialogTitle>
            </DialogHeader>
            <div className="w-full">
              <div className="rounded-sm flex justify-start items-center gap-2 px-2 bg-blue-50">
                <SearchIcon className="size-4 text-blue-500" />
                <Input
                  className="border-none! shadow-none! ring-0! outline-0! bg-transparent!"
                  placeholder="Search by serial"
                />
              </div>
            </div>
            <h4 className="text-center font-semibold text-sm">
              Select Top Up Amount
            </h4>
            <div className="grid grid-cols-3 gap-6">
              {[10, 50, 100].map((amount) => (
                <Button
                  key={amount}
                  variant={topupAmm === amount ? "default" : "success"}
                  className={cn(
                    "h-16 text-lg",
                    topupAmm === amount
                      ? "border-blue-600 bg-green-950 hover:bg-green-950/90"
                      : ""
                  )}
                  onClick={() => handleTopupSelect(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <DialogFooter className="flex flex-col! justify-center items-center gap-4">
              {!topupAmm ? (
                <ManualTopup />
              ) : (
                <>
                  <ConfirmTopup />
                </>
              )}
              <DialogClose asChild>
                <Button variant="outline" className="w-full">
                  Back To Scan
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button className="flex gap-2 items-center text-lg h-14 w-full bg-rose-300 text-rose-700 font-bold">
          <IconCreditCardRefund className="size-6" />
          Refund
        </Button>
      </CardFooter>
    </Card>
  );
}

const bgColors = ["bg-fuchsia-200", "bg-sky-200", "bg-amber-200"];
export const ticketTypes = [
  {
    title: "Adult",
    price: Number(4).toFixed(2),
    icon: "/avatar/adult.png",
  },
  {
    title: "Child",
    price: Number(3.5).toFixed(2),
    icon: "/avatar/child.png",
  },
  {
    title: "Family",
    price: Number(35).toFixed(2),
    icon: "/avatar/family.jpg",
  },
  {
    title: "Senior",
    price: Number(1.5).toFixed(2),
    icon: "/avatar/senior.png",
  },
];
const ticketVariants = [
  {
    title: "Bike",
    icon: BikeIcon,
  },
  {
    title: "Wheel chair",
    icon: IconWheelchair,
  },
  {
    title: "Stroller",
    icon: BabyIcon,
  },
];
