"use client";
import { MessageCard } from "./message-card";

export default function Page() {
  const messages = [
    {
      title: "Route Update - RX1",
      sender: "Dispatch Office",
      message:
        "Please note that there will be a temporary stop change on RX1 route starting tomorrow at 3:00 PM...",
      timestamp: "10:30 PM",
      priority: "medium" as const,
      type: "update" as const,
    },
    {
      title: "Shift Schedule Change",
      sender: "Operations Manager",
      message:
        "Your shift for tomorrow has been extended by 1 hour. Please check in with dispatch for details.",
      timestamp: "10:30 PM",
      priority: "low" as const,
      type: "schedule" as const,
    },
    {
      title: "Weather Alert",
      sender: "Safety Department",
      message:
        "Heavy rain expected this afternoon. Please drive carefully and allow extra time between stops. Visibility may be reduced.",
      timestamp: "10:30 PM",
      priority: "high" as const,
      type: "alert" as const,
    },
  ];

  return (
    <div className="w-full p-4 space-y-4">
      {/* <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Messages</h1>
        <p className="text-slate-600">Recent notifications and updates</p>
      </div> */}

      <div className="space-y-3">
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            title={message.title}
            sender={message.sender}
            message={message.message}
            timestamp={message.timestamp}
            priority={message.priority}
            type={message.type}
          />
        ))}
      </div>
    </div>
  );
}
