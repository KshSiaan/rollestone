import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CameraIcon } from "lucide-react";
import React from "react";
import DriverForm from "./add-form";

export default function Page() {
  return (
    <main className="p-12">
      <Card className="h-full w-full">
        <CardHeader className="border-b pb-4!">
          <CardTitle>Driver Information</CardTitle>
        </CardHeader>
        <CardContent className="pt-12 grid grid-cols-3 gap-6">
          <section className="flex justify-center">
            <div className="relative h-[140px] w-[140px]">
              <Avatar className="size-[140px]">
                <AvatarImage src={"https://avatar.iran.liara.run/public"} />
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              <Button
                className="bg-blue-600 hover:bg-blue-600/80 rounded-full absolute bottom-0 right-0"
                size={"icon"}
              >
                <CameraIcon />
              </Button>
            </div>
          </section>
          <section className="col-span-2">
            <DriverForm />
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
