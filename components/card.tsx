import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Card() {
  return (
    <Tabs defaultValue="desktop" className="mt-5 w-full rounded-md border">
      <div className="h-16 flex items-center justify-center border-b">
        <TabsList className="grid grid-cols-2 w-96">
          <TabsTrigger value="desktop">Desktop</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
        </TabsList>
      </div>
      <div className="flex-grow w-full h-full py-20 px-14">
        <TabsContent
          value="desktop"
          className="!m-0 flex items-center justify-center !w-full !h-full"
        >
          <iframe
            className="w-[280px] h-[160px]"
            src="/components/card/normal/desktop/index.html"
          />
        </TabsContent>
        <TabsContent
          value="mobile"
          className="!m-0 flex items-center justify-center !w-full !h-full"
        >
          <iframe
            className="w-[100%] h-[160px]"
            src="/components/card/normal/mobile/index.html"
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
