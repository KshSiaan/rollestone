"use client";
import React, { useState } from "react";
import { cn, idk } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconCreditCardRefund, IconWheelchair } from "@tabler/icons-react";
import { BabyIcon, BikeIcon, Loader2Icon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import FarePopup from "./fare-popup";
import ManualTopupSec from "./manual-topop-sec";
import { useQuery } from "@tanstack/react-query";
import { getFareDataApi } from "@/api/admin";
import { useUser } from "@/context/user-context";
import { useCookies } from "react-cookie";

export default function TicketTopup() {
  const [selectedItem, setSelectedItem] = useState<string | undefined>();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [fareState, setFareState] = useState<any>();
  const { user } = useUser();
  const [{ token }] = useCookies(["token"]);

  const { data: fareset, isPending: fareLoading } = useQuery({
    queryKey: ["fare_pricing"],
    queryFn: (): idk => {
      return getFareDataApi({
        companyID: String(user?.company_id),
        token,
      });
    },
  });

  return (
    <Card className="w-full h-auto flex flex-col justify-between">
      {/* Shared Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader className="border-b pb-2">
            <DialogTitle>Select Fare Quantity & Payment Method</DialogTitle>
          </DialogHeader>

          <FarePopup
            setDialogOpen={setDialogOpen}
            selectedItem={selectedItem}
            fares={fareset?.data?.trip?.route?.fares}
          />
        </DialogContent>
      </Dialog>

      {/* Ticket Types */}
      <CardContent className="h-auto w-full grid grid-cols-3 gap-6 p-6">
        {ticketTypes.map((x, i) => (
          <Button
            key={x.title}
            variant={"outline"}
            onClick={() => {
              setSelectedItem(x.title);
              setDialogOpen(true);
            }}
            className={cn(
              "h-auto! flex font-semibold flex-col aspect-video justify-center gap-4 border",
              "border-blue-300"
            )}
          >
            {/* <Avatar className="size-16">
              <AvatarImage src={x.icon} />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar> */}
            <p className="text-2xl">{x.title}</p>
            <div>
              {fareLoading ? (
                <div
                  className={`flex justify-center items-center h-24 mx-auto`}
                >
                  <Loader2Icon className={`animate-spin`} />
                </div>
              ) : (
                fareset?.data?.trip?.route?.fares
                  ?.filter(
                    (z: idk) => z.passenger_type === x.title.toLowerCase()
                  )
                  .map((item: any, index: number) => (
                    <p key={index}>
                      {item.payment_method}:${item.amount}
                    </p>
                  ))
              )}
            </div>
          </Button>
        ))}
      </CardContent>

      {/* Ticket Variants */}
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
            <p className="xl:text-2xl">{x.title}</p>
          </Button>
        ))}
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col gap-2">
        <ManualTopupSec />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex gap-2 items-center text-lg h-14 w-full bg-rose-300 text-rose-700 font-bold">
              <IconCreditCardRefund className="size-6" />
              Refund
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select Transaction to Refund</DialogTitle>
              <DialogDescription>
                Refunds are only available for transactions made within the last
                10 minutes.
              </DialogDescription>
            </DialogHeader>
            <div className=""></div>
          </DialogContent>
        </Dialog>
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
