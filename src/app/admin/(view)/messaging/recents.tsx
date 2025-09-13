"use client";
import { getMessagesApi } from "@/api/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useCookies } from "react-cookie";

export default function Recents() {
  const [{ token }] = useCookies(["token"]);
  const { data, isPending } = useQuery({
    queryKey: ["recent_messages"],
    queryFn: () => {
      return getMessagesApi({ status: "draft", companyID: "1", token });
    },
  });
  return (
    <Card className="bg-background rounded-md py-4! mt-6">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="">
          <CardTitle className="flex items-center gap-2 text-xl mb-2">
            Recent Messages
          </CardTitle>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="schedule">Schedule</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Card className="p-4 flex flex-col gap-4">
          {/* Header with Route Name and Action Buttons */}
          <div className="flex justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-2 w-fit text-sm">
              <Badge variant={"outline"}>Driver Alert</Badge>
              <p>to all Drivers </p>
            </div>
            <div className="flex gap-2 items-center text-sm font-semibold">
              <Button
                variant="outline"
                className="bg-green-500 text-white hover:bg-green-600"
              >
                Active
              </Button>
              <p>2 HOURS AGO</p>
            </div>
          </div>

          {/* Duration */}
          <p className="text-gray-600">
            Traffic delay on Route 1 - adjust schedule accordingly
          </p>
        </Card>
      </CardContent>
    </Card>
  );
}
