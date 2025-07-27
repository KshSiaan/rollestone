import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, ClockIcon } from "lucide-react";

export function NotifCard() {
  return (
    <Card className="w-full">
      <CardContent className="flex items-start justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">System Update Complete</h3>
          <p className="text-gray-600 text-sm">
            The system has been updated to v2.5.1.
          </p>
        </div>
        <div className="flex flex-col items-end text-gray-500 text-sm">
          <div className="flex items-center space-x-1 mb-1">
            <CalendarIcon className="h-4 w-4" />
            <span>05-04-2025</span>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="h-4 w-4" />
            <span>05:50 PM</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
