"use client";

import * as React from "react";
import {
  IconChartBar,
  IconFolder,
  IconListDetails,
  IconLocation,
  IconMapPin,
  IconMessage2,
  IconSettings,
  IconTicket,
  IconUser,
  IconUserFilled,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MicOff, UnlockIcon, Volume2Icon, WifiIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import AnimToggle from "./sub-ui/animated-toggle";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Driver",
      url: "#",
      icon: IconUser,
    },
    {
      title: "Tickets",
      url: "#",
      icon: IconTicket,
    },
    {
      title: "Blocking",
      url: "#",
      icon: IconLocation,
    },
    {
      title: "Locating",
      url: "#",
      icon: IconMapPin,
    },
    {
      title: "Messaging",
      url: "#",
      icon: IconMessage2,
    },
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="py-[24px]" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <Image
            src={"/logo.png"}
            height={300}
            width={900}
            alt="logo"
            className="w-full h-[64px] object-contain"
          />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
        <Card className="mt-auto py-4 mx-2">
          <CardHeader className="flex items-center justify-between px-4">
            <CardTitle>Zello</CardTitle>
            <div className="gap-2 flex items-center">
              <WifiIcon className="size-5 text-green-600" />
              <Badge variant={"success"}>Connected</Badge>
            </div>
          </CardHeader>
          <CardContent className="px-4">
            <p>
              <span>Channel:</span>{" "}
              <span className="font-semibold">Metro Bus Operations</span>
            </p>
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-4 px-4!">
            <Button variant={"outline"}>
              <Volume2Icon /> Audio
            </Button>
            <Button variant={"outline"}>
              <MicOff /> PTT
            </Button>
          </CardFooter>
        </Card>
      </SidebarContent>
      <SidebarFooter className="mt-4">
        <AnimToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
