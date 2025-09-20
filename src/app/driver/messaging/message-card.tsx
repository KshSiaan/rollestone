import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface MessageCardProps {
  title: string;
  sender: string;
  message: string;
  timestamp: string;
  priority?: "high" | "medium" | "low";
  type?: "update" | "alert" | "schedule";
}

export const MessageCard = ({
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
