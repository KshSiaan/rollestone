// This is a conceptual structure. You'll need to set up your Next.js/React project,
// install Shadcn UI, and configure Tailwind CSS.

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Assuming a Card component is used for the fare boxes
import { XIcon, ClockIcon, PlusIcon } from "lucide-react"; // Or similar icon library

export default function Page() {
  return (
    <main className="p-6">
      <div className="p-8 w-full mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Edit this route</h1>

        {/* Route Name and Trip # */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="routeName" className="mb-2 block">
              Route Name
            </Label>
            <Input id="routeName" placeholder="RX1 Rolleston North" />
          </div>
          <div>
            <Label htmlFor="tripNum" className="mb-2 block">
              Trip #
            </Label>
            <Input id="tripNum" placeholder="e.g 101A" />
          </div>
        </div>

        {/* Google Map Link */}
        <div className="mb-6">
          <Label htmlFor="googleMapLink" className="mb-2 block">
            Google Map Link
          </Label>
          <Input
            id="googleMapLink"
            placeholder="Paste static google map image URL link"
          />
        </div>

        {/* Tracked Items */}
        <div className="mb-6">
          <Label className="mb-2 block">Tracked Items</Label>
          <div className="flex items-center space-x-4">
            <RadioGroup defaultValue="none" className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wheelchair" id="wheelchair" />
                <Label htmlFor="wheelchair">Wheelchair</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bike" id="bike" />
                <Label htmlFor="bike">Bike</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stroller" id="stroller" />
                <Label htmlFor="stroller">Stroller</Label>
              </div>
            </RadioGroup>
            <Button variant="link" className="text-blue-600 px-0 h-auto">
              <PlusIcon className="w-4 h-4 mr-1" /> Add Tracked Items
            </Button>
          </div>
        </div>

        {/* Time points */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Time points</h2>
          {/* Example of one time point row. You'd map over an array for multiple. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-3">
            <Label htmlFor="departureLocation1" className="sr-only">
              Departure Location 1
            </Label>
            <Input
              id="departureLocation1"
              placeholder="Departure Location (e.g. Hornby)"
            />
            <div className="relative">
              <Input id="time1" defaultValue="6:50 AM" className="pr-10" />
              <ClockIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <PlusIcon className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <XIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          {/* Repeat similar div for other time points or use a dynamic rendering */}
          <Button variant="link" className="text-blue-600 px-0 h-auto mt-2">
            <PlusIcon className="w-4 h-4 mr-1" /> Add Timing Point
          </Button>
        </div>

        {/* Applicable Fares */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Applicable Fares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Fare Card Example (Child) */}
            <Card className="p-4 relative border-2 ">
              {" "}
              {/* Active state border */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full w-6 h-6 p-0"
              >
                <XIcon className="w-4 h-4" />
              </Button>
              <RadioGroup defaultValue="child" className="mb-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="child" id="child" />
                  <Label htmlFor="child" className="text-md font-semibold">
                    Child
                  </Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <div>
                  <Label
                    htmlFor="childCash"
                    className="block text-sm text-gray-600"
                  >
                    Cash
                  </Label>
                  <Input id="childCash" defaultValue="$3.00" />
                </div>
                <div>
                  <Label
                    htmlFor="childUserApp"
                    className="block text-sm text-gray-600"
                  >
                    User App
                  </Label>
                  <Input id="childUserApp" defaultValue="$3.00" />
                </div>
              </div>
            </Card>

            {/* Repeat similar Card components for Adult, Student, Family Pass */}
            {/* Example: Adult Card (inactive style) */}
            <Card className="p-4 relative">
              {" "}
              {/* Inactive state border */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full w-6 h-6 p-0"
              >
                <XIcon className="w-4 h-4" />
              </Button>
              <RadioGroup defaultValue="adult" className="mb-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="adult" id="adult" />
                  <Label htmlFor="adult" className="text-md font-semibold">
                    Adult
                  </Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <div>
                  <Label
                    htmlFor="adultCash"
                    className="block text-sm text-gray-600"
                  >
                    Cash
                  </Label>
                  <Input id="adultCash" defaultValue="$3.00" />
                </div>
                <div>
                  <Label
                    htmlFor="adultUserApp"
                    className="block text-sm text-gray-600"
                  >
                    User App
                  </Label>
                  <Input id="adultUserApp" value="$3.00" />
                </div>
              </div>
            </Card>
            {/* Student Card */}
            <Card className="p-4 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full w-6 h-6 p-0"
              >
                <XIcon className="w-4 h-4" />
              </Button>
              <RadioGroup defaultValue="student" className="mb-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student" className="text-md font-semibold">
                    Student
                  </Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <div>
                  <Label
                    htmlFor="studentCash"
                    className="block text-sm text-gray-600"
                  >
                    Cash
                  </Label>
                  <Input id="studentCash" value="$3.00" />
                </div>
                <div>
                  <Label
                    htmlFor="studentUserApp"
                    className="block text-sm text-gray-600"
                  >
                    User App
                  </Label>
                  <Input id="studentUserApp" value="$3.00" />
                </div>
              </div>
            </Card>
            {/* Family Pass Card */}
            <Card className="p-4 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full w-6 h-6 p-0"
              >
                <XIcon className="w-4 h-4" />
              </Button>
              <RadioGroup defaultValue="familyPass" className="mb-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="familyPass" id="familyPass" />
                  <Label htmlFor="familyPass" className="text-md font-semibold">
                    Family Pass
                  </Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <div>
                  <Label
                    htmlFor="familyPassCash"
                    className="block text-sm text-gray-600"
                  >
                    Cash
                  </Label>
                  <Input id="familyPassCash" value="$3.00" />
                </div>
                <div>
                  <Label
                    htmlFor="familyPassUserApp"
                    className="block text-sm text-gray-600"
                  >
                    User App
                  </Label>
                  <Input id="familyPassUserApp" value="$3.00" />
                </div>
              </div>
            </Card>
          </div>
          <Button variant="link" className="text-blue-600 px-0 h-auto mt-4">
            <PlusIcon className="w-4 h-4 mr-1" /> Add Applicable fares
          </Button>
        </div>

        {/* Status */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Status</h2>
          <RadioGroup defaultValue="active" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="active" id="active" />
              <Label htmlFor="active">Active</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inactive" id="inactive" />
              <Label htmlFor="inactive">Inactive</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Add</Button>
        </div>
      </div>
    </main>
  );
}
