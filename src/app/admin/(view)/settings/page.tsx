import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

export default function SystemSettingsPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            System Settings
          </h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-sm">
            Save All Changes
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Stripe Integration Card */}
          <Card className="shadow-sm rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between text-lg font-medium">
                Stripe Integration
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Connected
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label
                  htmlFor="stripe-key"
                  className="text-sm font-medium text-gray-700"
                >
                  Stripe Publishable Key
                </Label>
                <Input
                  id="stripe-key"
                  type="password"
                  defaultValue="••••••••••••••••••••••••"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="webhook-endpoint"
                  className="text-sm font-medium text-gray-700"
                >
                  Webhook Endpoint
                </Label>
                <Input
                  id="webhook-endpoint"
                  type="url"
                  defaultValue="https://busticketing.com/stripe/webhook"
                  className="mt-1"
                />
              </div>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Test Connection
              </Button>
            </CardContent>
          </Card>

          {/* Scheduling System API Card */}
          <Card className="shadow-sm rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between text-lg font-medium">
                Scheduling System API
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  Pending
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label
                  htmlFor="api-endpoint"
                  className="text-sm font-medium text-gray-700"
                >
                  API Endpoint
                </Label>
                <Input
                  id="api-endpoint"
                  type="password"
                  defaultValue="••••••••••••••••••••••••"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="api-key"
                  className="text-sm font-medium text-gray-700"
                >
                  API Key
                </Label>
                <Input
                  id="api-key"
                  placeholder="Enter Api Key"
                  className="mt-1"
                />
              </div>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Connect & Test
              </Button>
            </CardContent>
          </Card>

          {/* System Preferences Card */}
          <Card className="shadow-sm rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium">
                System Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <Label
                    htmlFor="real-time-updates"
                    className="text-sm font-medium text-gray-700"
                  >
                    Real-time Updates
                  </Label>
                  <p className="text-xs text-gray-500">
                    Enable live dashboard updates
                  </p>
                </div>
                <Switch
                  id="real-time-updates"
                  defaultChecked
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <Label
                    htmlFor="sms-notifications"
                    className="text-sm font-medium text-gray-700"
                  >
                    SMS Notifications
                  </Label>
                  <p className="text-xs text-gray-500">
                    Send trip alerts via SMS
                  </p>
                </div>
                <Switch
                  id="sms-notifications"
                  defaultChecked
                  className="data-[state=checked]:bg-blue-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <Label
                    htmlFor="email-reports"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Reports
                  </Label>
                  <p className="text-xs text-gray-500">
                    Daily financial summaries
                  </p>
                </div>
                <Switch id="email-reports" />
              </div>
              <div className="flex items-center justify-between">
                <div className="grid gap-1">
                  <Label
                    htmlFor="maintenance-mode"
                    className="text-sm font-medium text-gray-700"
                  >
                    Maintenance Mode
                  </Label>
                  <p className="text-xs text-gray-500">Disable new bookings</p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
            </CardContent>
          </Card>

          {/* System Status Card */}
          <Card className="shadow-sm rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium">
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    Database Connection
                  </span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Online
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Payment Gateway</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Connected
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    GPS Tracking Service
                  </span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">SMS Service</span>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    Limited
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Email Service</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Online
                  </Badge>
                </div>
              </div>
              <div className="pt-4 text-sm text-gray-600 space-y-1">
                <p>Server Uptime: 99.8%</p>
                <p>Last Backup: 2 hours ago</p>
                <p>Next Maintenance: Dec 28, 2024</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fare Rules Card (Full Width) */}
        <Card className="shadow-sm rounded-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between text-lg font-medium">
              Fare Rules
              <Pencil className="w-4 h-4 text-gray-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">
                Overdrawn Balance Limit:
              </span>
              <span className="text-sm font-medium text-green-600">$7.00</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
