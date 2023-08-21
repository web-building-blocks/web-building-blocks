import React from "react";
import { Badge } from "@/components/ui/badge";

export default function Card() {
  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <div className="mt-5 w-full h-96 rounded-md border">
      <div className="w-full h-14 flex items-center justify-end">
        <Badge
          variant={isMobile ? "outline" : "default"}
          onClick={() => setIsMobile(false)}
          className="mr-1 select-none cursor-pointer"
        >
          Desktop
        </Badge>
        <Badge
          variant={!isMobile ? "outline" : "default"}
          onClick={() => setIsMobile(true)}
          className="mr-4 select-none cursor-pointer"
        >
          Mobile
        </Badge>
      </div>
    </div>
  );
}
