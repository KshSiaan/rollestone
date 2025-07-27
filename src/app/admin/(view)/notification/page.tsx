import React from "react";
import { NotifCard } from "./notif-card";

export default function Page() {
  return (
    <main className="p-6 space-y-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <NotifCard key={i} />
      ))}
    </main>
  );
}
