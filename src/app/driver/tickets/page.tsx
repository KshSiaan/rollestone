import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCodeIcon } from "lucide-react";
import React from "react";
import TicketTopup from "./ticket-topup";

export default function Page() {
  return (
    <main className="px-[100px] py-[50px] h-full w-full grid grid-cols-2 gap-12">
      <TicketTopup />
      <Card className="w-full h-[80dvh]">
        <CardHeader className="flex items-center justify-start gap-2">
          <QrCodeIcon className="flex" />
          <CardTitle className="block">Recent Transaction</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-start items-start gap-4 overflow-y-auto">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              className="flex flex-row justify-between items-center w-full rounded-md bg-blue-50 p-4"
              key={i}
            >
              <div className="flex flex-col gap-2">
                <h5 className="font-bold">John Smith</h5>
                <p className="text-sm">Student Pass Scan</p>
              </div>
              <div className="flex flex-col justify-end items-end gap-2">
                <p className="text-sm">10:32 AM</p>
                <Badge className="" variant={"success"}>
                  Valid
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
