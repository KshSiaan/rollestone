"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const ticketTypes = [
  { title: "Adult", price: 4.0, icon: "/avatar/adult.png" },
  { title: "Child", price: 3.5, icon: "/avatar/child.png" },
  { title: "Family", price: 35.0, icon: "/avatar/family.jpg" },
  { title: "Senior", price: 1.5, icon: "/avatar/senior.png" },
];

export default function FarePopup() {
  const [fareList, setFareList] = useState([
    { title: "Adult", count: 1, price: 4.0 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const addFareType = (type: { title: string; price: number }) => {
    setFareList((prev) => [...prev, { ...type, count: 1 }]);
  };

  const increment = (title: string) => {
    setFareList((prev) =>
      prev.map((item) =>
        item.title === title ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (title: string) => {
    setFareList((prev) =>
      prev
        .map((item) =>
          item.title === title ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const totalFare = fareList
    .reduce((acc, item) => acc + item.count * item.price, 0)
    .toFixed(2);

  const addedTitles = fareList.map((f) => f.title);

  const handlePaymentSelect = (method: string) => {
    setPaymentMethod((prev) => (prev === method ? null : method));
  };

  return (
    <div className="p-4 space-y-4 w-full mx-auto">
      {fareList.map((fare, index) => (
        <Card key={index} className="p-0!">
          <CardContent className="flex justify-between items-center py-4 bg-blue-50 rounded-lg">
            <div>
              <div className="font-semibold">{fare.title}</div>
              <div className="text-sm text-gray-500">
                ${fare.price.toFixed(2)}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => decrement(fare.title)}
              >
                <MinusIcon className="w-4 h-4" />
              </Button>
              <div className="w-6 text-center font-medium">{fare.count}</div>
              <Button
                size="icon"
                variant="outline"
                onClick={() => increment(fare.title)}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
              <div className="text-green-600 font-semibold">
                ${(fare.count * fare.price).toFixed(2)}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Dialog>
        <DialogTrigger asChild>
          {ticketTypes.filter((t) => !addedTitles.includes(t.title)).length !==
            0 && (
            <div className="border-2 border-dashed rounded-lg p-2 text-center text-blue-500 cursor-pointer">
              + Add Fare Type
            </div>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Fare Type</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            {ticketTypes
              .filter((t) => !addedTitles.includes(t.title))
              .map((t, i) => (
                <Button
                  key={i}
                  variant="outline"
                  onClick={() => addFareType(t)}
                  className="flex flex-col items-center py-4 h-auto!"
                >
                  <Image
                    height={100}
                    width={100}
                    src={t.icon}
                    alt={t.title}
                    className="w-10 h-10 rounded-full mb-2"
                  />
                  <span className="font-semibold">{t.title}</span>
                  <span className="text-sm text-gray-500">
                    ${t.price.toFixed(2)}
                  </span>
                </Button>
              ))}
            {ticketTypes.filter((t) => !addedTitles.includes(t.title))
              .length === 0 && (
              <div className="col-span-2 text-center text-sm text-gray-400">
                All fare types added.
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Card className="p-0!">
        <CardContent className="py-4 text-center text-lg font-medium bg-blue-50 rounded-lg">
          Total Fare = <span className="text-green-600">${totalFare}</span>
        </CardContent>
      </Card>

      <div className="text-center text-lg font-semibold">Payment Method</div>

      <div className="grid grid-cols-3 gap-2">
        {["Cash", "RX Card", "Complimentary"].map((method, i) => (
          <Button
            key={i}
            variant={paymentMethod === method ? "success" : "outline"}
            className="flex flex-col items-center h-auto py-6"
            onClick={() => handlePaymentSelect(method)}
          >
            <span className="text-2xl">
              {method === "Cash" ? "$" : method === "RX Card" ? "📇" : "🎁"}
            </span>
            <span>{method}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
