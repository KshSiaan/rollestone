import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="p-16 h-full w-full grid grid-cols-10 gap-6">
      <section className="col-span-7 w-full h-full rounded-lg bg-background shadow flex flex-col">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            className="!min-h-[90%]"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <Link href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
              mesurer la population sur une carte
            </Link>
          </iframe>
        </div>
        <div className="flex-1 w-full flex items-center justify-between px-6">
          <h3>
            <span className="font-bold">Direction:</span> Outbound
          </h3>
          <div className="flex justify-center items-center gap-1">
            <Button className="rounded-full">Outbound</Button>
            <Button className="rounded-full" variant={"outline"}>
              Inbound
            </Button>
          </div>
        </div>
      </section>

      <Card className="col-span-3 w-full h-full">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ClockIcon className="w-5 h-5" />
            Stop Schedule & Timing Points
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              <div className="relative flex items-start gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">Terminal Station</h4>
                  <p className="text-sm text-muted-foreground">
                    Scheduled: 10:00 AM
                  </p>
                </div>
              </div>

              <div className="relative flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">Terminal Station</h4>
                  <p className="text-sm text-muted-foreground">
                    Scheduled: 10:00 AM
                  </p>
                </div>
              </div>

              <div className="relative flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">Main Street Station</h4>
                  <p className="text-sm text-muted-foreground">
                    Scheduled: 10:00 AM
                  </p>
                </div>
              </div>

              <div className="relative flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">Terminal Station</h4>
                  <p className="text-sm text-muted-foreground">
                    Scheduled: 10:00 AM
                  </p>
                </div>
              </div>

              <div className="relative flex items-end gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">Terminal Station</h4>
                  <p className="text-sm text-muted-foreground">
                    Scheduled: 10:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
