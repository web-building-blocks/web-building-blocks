import React from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DESKTOP_PATH = "/components/card/normal/desktop/";
const MOBILE_PATH = "/components/card/normal/mobile/";
const TABS_CTNT_CLASS = "!m-0 flex items-center justify-center !w-full !h-full";
const CODE_TAB_CLASS =
  "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none";

export default function Card() {
  const [htmlCode, setHtmlCode] = React.useState("");
  const [cssCode, setCssCode] = React.useState("");

  React.useEffect(() => {
    fetchHtmlContent();
    fetchCssContent();
  }, []);

  const fetchHtmlContent = async () => {
    const path = `${DESKTOP_PATH}index.html`;
    const htmlContent = await fetch(path).then((res) => res.text());
    setHtmlCode(htmlContent);
  };

  const fetchCssContent = async () => {
    const path = `${DESKTOP_PATH}styles.css`;
    const cssContent = await fetch(path).then((res) => res.text());
    setCssCode(cssContent);
  };

  return (
    <Tabs defaultValue="desktop" className="mt-5 w-full">
      <div className="w-full rounded-md border">
        <div className="h-16 flex items-center justify-center border-b">
          <TabsList className="grid grid-cols-2 w-96">
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-grow w-full h-full py-20 px-14">
          <TabsContent value="desktop" className={TABS_CTNT_CLASS}>
            <iframe
              className="w-[280px] h-[160px]"
              src={`${DESKTOP_PATH}index.html`}
            />
          </TabsContent>
          <TabsContent value="mobile" className={TABS_CTNT_CLASS}>
            <iframe
              className="w-[100%] h-[160px]"
              src={`${MOBILE_PATH}index.html`}
            />
          </TabsContent>
        </div>
      </div>
      <div className="my-5">
        <p className="text-2xl font-semibold text-foreground mb-2">
          Code Usage
        </p>
        <Separator />
      </div>
      <TabsContent value="desktop" className={TABS_CTNT_CLASS}>
        <Tabs defaultValue="html" className="w-full">
          <div className="flex items-center justify-between pb-3">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger value="html" className={CODE_TAB_CLASS}>
                HTML
              </TabsTrigger>
              <TabsTrigger value="css" className={CODE_TAB_CLASS}>
                CSS
              </TabsTrigger>
              <TabsTrigger value="js" className={CODE_TAB_CLASS}>
                JavaScript
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="html">HTML Code</TabsContent>
          <TabsContent value="css">CSS Code</TabsContent>
          <TabsContent value="js">JavaScript Code</TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="mobile" className={TABS_CTNT_CLASS}>
        {/* <div className="w-full h-20 bg-blue-500"></div> */}
      </TabsContent>
    </Tabs>
  );
}
