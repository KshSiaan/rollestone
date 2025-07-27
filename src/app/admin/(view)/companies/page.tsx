import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function Page() {
  return (
    <main className="p-6">
      <Card className="">
        <div className="px-6 flex flex-row! justify-between items-center">
          <p className="font-bold text-xl">Companies</p>
          <div className="flex items-center gap-2">
            <div className=" border rounded-md flex items-center px-2">
              <SearchIcon className="text-muted-foreground size-5" />
              <Input
                className="bg-transparent border-0! outline-0! ring-0! shadow-none!"
                placeholder="Search routes"
              />
            </div>
            <Button asChild>
              <Link href={"/admin/companies/add"}>
                <PlusIcon />
                Add New Company
              </Link>
            </Button>
          </div>
        </div>
        <CardContent className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Admin</TableHead>
                <TableHead>Subdomain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 3 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="w-fit flex gap-2">
                      <Avatar className="border-2 size-10 border-blue-400">
                        <AvatarImage
                          src={"https://avatar.iran.liara.run/public"}
                        />
                        <AvatarFallback>UI</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-start items-start">
                        <h4 className="font-semibold">Metro Transit</h4>
                        <p className="text-xs">Contact@gmail.com</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>Contact@gmail.com</TableCell>
                  <TableCell>Metro-transit.company.app</TableCell>
                  <TableCell className="text-green-600">
                    <Badge variant={"success"}>Active</Badge>
                  </TableCell>
                  <TableCell className="font-bold">
                    <Button variant={"ghost"} asChild>
                      <Link href={"/admin/companies/edit"}>
                        <EditIcon />
                      </Link>
                    </Button>
                    <Button variant={"ghost"}>
                      <EyeIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className=" flex items-center justify-center mt-8 gap-2">
        <Button variant={"outline"}>
          <ChevronLeftIcon />
        </Button>
        <Button variant={"outline"}>1</Button>
        <Button variant={"outline"}>2</Button>
        <Button variant={"outline"}>3</Button>
        <Button variant={"outline"}>
          <ChevronRightIcon />
        </Button>
      </div>
    </main>
  );
}
