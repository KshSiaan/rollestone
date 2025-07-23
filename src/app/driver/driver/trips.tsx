import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRightIcon,
  ChevronDown,
  ClockIcon,
  MapPinIcon,
  ShieldIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Trips() {
  return (
    <section className="h-full w-full">
      <Accordion type="single" className="space-y-4" collapsible>
        {Array.from({ length: 4 }).map((_, i) => (
          <AccordionItem
            value={`item-${i}`}
            className="bg-blue-100 px-4 border-blue-500 border rounded-md"
            key={i}
          >
            <AccordionTrigger className="flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-2">
                  <ChevronDown />{" "}
                  <Badge className="bg-blue-700 rounded-sm! ">Route</Badge>
                  <h3 className="font-bold">RX1 - Rolleston to Christchurch</h3>
                </div>
                <div className="flex justify-center items-center gap-2 ">
                  <Badge className="bg-transparent! border-blue-600 text-foreground rounded-sm! ">
                    Trip: 0001
                  </Badge>
                  <Button className="bg-amber-500" size={"sm"} asChild>
                    <div>
                      <ShieldIcon /> Block this trip
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="flex items-center gap-2">
                  <ClockIcon className="size-4" />
                  Dep : 06:35 Am
                </span>
                <span className="flex items-center gap-2">
                  <MapPinIcon className="size-4" />
                  Oak Tree Lane
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="rounded-none!">
                <CardHeader>
                  <CardTitle className="text-lg">Block Trip Details</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                  {details.map(({ title, content }, i) => (
                    <p className="flex flex-col" key={i}>
                      <span className="text-base font-bold">{title}</span>
                      <span className="font-semibold text-sm">{content}</span>
                    </p>
                  ))}
                  <p></p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const details = [
  {
    title: "Route",
    content: (
      <span className="gap-4 flex items-center">
        RX1 Rolleston <ArrowRightIcon className="size-4" /> Christchurch Express
      </span>
    ),
  },
  {
    title: "Trip",
    content: "#12345",
  },
  {
    title: "Date",
    content: "June 30, 2025",
  },
  {
    title: "Departure",
    content: "09:00 AM",
  },
  {
    title: "Arrival",
    content: "12:00 PM",
  },
  {
    title: "Bus Number",
    content: "Bus - 6789",
  },
  {
    title: "Driver",
    content: "Liam Bentley",
  },
  {
    title: "Passanger",
    content: "15/20",
  },
];
