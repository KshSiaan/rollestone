import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function MessageForm() {
  return (
    <div className="flex justify-center items-center  mt-6">
      <Card className="w-full rounded-xl shadow-sm">
        <CardHeader className="border-b p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl font-semibold">
            Revenue by Route
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="message-type">Message Type</Label>
              <Select>
                <SelectTrigger id="message-type" className="bg-gray-100 w-full">
                  <SelectValue placeholder="Select Message Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="push">Push Notification</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipients">Recipients</Label>
              <Select>
                <SelectTrigger id="recipients" className="bg-gray-100 w-full">
                  <SelectValue placeholder="Select Recipients" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="segment1">Segment 1</SelectItem>
                  <SelectItem value="segment2">Segment 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Message Subject"
              className="bg-gray-100"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              className="min-h-[120px] bg-gray-100"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
            >
              Save as draft
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
            >
              Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
