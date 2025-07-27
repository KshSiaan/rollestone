import {
  CheckCircle2,
  DollarSign,
  MapPin,
  Truck,
  Users,
  XCircle,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompanyDetails() {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column: Company Details and System Access */}
        <div className="md:col-span-2 grid gap-6">
          {/* Company Details Card */}
          <Card>
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Avatar className="size-20">
                <AvatarImage
                  src="https://avatar.iran.liara.run/public"
                  alt="Company Logo"
                />
                <AvatarFallback>CO</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl">Metro Transit</CardTitle>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    Active
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">
                  123 Transit Ave, Metropolis, St 12345
                </p>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t">
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Company Email
                </p>
                <p className="text-sm text-gray-500">
                  contact@metrotransit.com
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Phone Number
                </p>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Main Admin
                </p>
                <p className="text-sm text-gray-500">
                  contact@metrotransit.com
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Subdomain</p>
                <p className="text-sm text-gray-500">
                  metro-transit.company.app
                </p>
              </div>
            </CardContent>
          </Card>

          {/* System Access Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">System Access</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">Admin Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-700">
                  Passenger Database
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">
                  Trip & Route Management
                </span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-700">
                  Notification System
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">Fare Control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">Analytics Access</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Key Statistics */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Key Statistics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Drivers</p>
                  <p className="text-lg font-semibold">42</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Routes</p>
                  <p className="text-lg font-semibold">18</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Passengers (Month)</p>
                  <p className="text-lg font-semibold">12,450</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revenue (Month)</p>
                  <p className="text-lg font-semibold">$86,200</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
