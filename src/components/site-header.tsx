import { Button } from "@/components/ui/button";
import Clock from "./sub-ui/clock";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 h-full justify-around text-lg">
        <Clock />
        <p className="font-semibold">
          <span className="text-blue-500">75</span>km/h
        </p>
        <p className="text-red-700 font-semibold">Bus Not Selected</p>
        <p className="font-semibold">0/50</p>
        <p className="text-red-700 font-semibold">Trip not Selected</p>
      </div>
    </header>
  );
}
