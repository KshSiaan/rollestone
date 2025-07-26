import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface MessageCardProps {
  title: string;
  sender: string;
  message: string;
  timestamp: string;
  priority?: "high" | "medium" | "low";
  type?: "update" | "alert" | "schedule";
}

const MessageCard = ({
  title,
  sender,
  message,
  timestamp,
  priority = "medium",
  type = "update",
}: MessageCardProps) => {
  const getPriorityColor = () => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-blue-500";
      case "low":
        return "hidden";
      default:
        return "bg-blue-500";
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case "alert":
        return "text-red-600";
      case "schedule":
        return "text-black";
      case "update":
        return "text-blue-600";
      default:
        return "text-blue-600";
    }
  };

  return (
    <Card className="w-full bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${getPriorityColor()}`} />
            <h3 className={`font-semibold text-xl ${getTypeColor()}`}>
              {title}
            </h3>
          </div>
          <span className="text-sm text-slate-500 font-medium">
            {timestamp}
          </span>
        </div>
        <p className="text-sm text-slate-600 mt-1">
          From: <span className="font-medium">{sender}</span>
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-slate-700 leading-relaxed">{message}</p>
      </CardContent>
    </Card>
  );
};

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
