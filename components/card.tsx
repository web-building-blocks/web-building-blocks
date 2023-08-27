import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Card() {
  return (
    <Tabs defaultValue="desktop" className="mt-5 w-full rounded-md border">
      <div className="h-16 flex items-center justify-center border-b">
        <TabsList className="grid grid-cols-2 w-40">
          <TabsTrigger value="desktop">Desktop</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
        </TabsList>
      </div>
      <div className="flex-grow w-full h-full py-20">
        <TabsContent
          value="desktop"
          className="flex items-center justify-center !w-full !h-full"
        >
          <div className="w-20 h-40 bg-blue-500"></div>
        </TabsContent>
        <TabsContent
          value="mobile"
          className="flex items-center justify-center !w-full !h-full"
        >
          <div className="w-20 h-48 bg-orange-500"></div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
