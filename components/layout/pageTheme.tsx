import React from "react";
import CodeTabs from "./components/codeTabs";
import useIsMobile from "./helper/mobileDetect";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Theme({
  pageName = "", // Temporary set to empty string, remove for production
  pageStyle = "", // Temporary set to empty string, remove for production
}: {
  pageName?: string;
  pageStyle?: string;
}) {
  const isMobile = useIsMobile();
  const DESKTOP_PATH = `/components/${pageName}/${pageStyle}/desktop/`;
  const MOBILE_PATH = `/components/${pageName}/${pageStyle}/mobile/`;

  const [htmlDesktop, setHtmlDesktop] = React.useState<string | null>(null);
  const [cssDesktop, setCssDesktop] = React.useState<string | null>(null);
  const [jsDesktop, setJsDesktop] = React.useState<string | null>(null);
  const [htmlMobile, setHtmlMobile] = React.useState<string | null>(null);
  const [cssMobile, setCssMobile] = React.useState<string | null>(null);
  const [jsMobile, setJsMobile] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchHtmlContent();
    fetchCssContent();
    fetchJsContent();
  }, []);

  const fetchHtmlContent = async () => {
    setHtmlDesktop(await fetchContent(`${DESKTOP_PATH}index.html`));
    setHtmlMobile(await fetchContent(`${MOBILE_PATH}index.html`));
  };

  const fetchCssContent = async () => {
    setCssDesktop(await fetchContent(`${DESKTOP_PATH}styles.css`));
    setCssMobile(await fetchContent(`${MOBILE_PATH}styles.css`));
  };

  const fetchJsContent = async () => {
    setJsDesktop(await fetchContent(`${DESKTOP_PATH}index.js`));
    setJsMobile(await fetchContent(`${MOBILE_PATH}index.js`));
  };

  const fetchContent = async (path: string) =>
    await fetch(path).then((res) => (res.status === 200 ? res.text() : null));

  return (
    <Tabs defaultValue="desktop" className="mt-5 w-full">
      <div className="w-full flex items-center justify-center">
        <TabsList className="w-full grid grid-cols-2">
          {isMobile && <TabsTrigger value="mobile">Mobile</TabsTrigger>}
          <TabsTrigger value="desktop">Desktop</TabsTrigger>
          {!isMobile && <TabsTrigger value="mobile">Mobile</TabsTrigger>}
        </TabsList>
      </div>
      <div className="mt-3 w-full h-60 rounded-2xl bg-cover bg-[url('/static/usyd_design.jpg')] flex items-center justify-center">
        <div
          onClick={() => window.open("../external/business", "_blank")}
          className="w-48 h-9 rounded-lg bg-[#f97516] shadow flex items-center justify-center cursor-pointer transition hover:bg-[#d66513] active:bg-[#e36b14]"
        >
          <p className="text-white text-sm font-semibold">View in New Tab</p>
        </div>
      </div>
      <div className="my-5">
        <p className="text-2xl font-semibold text-foreground mb-2">
          Code Usage
        </p>
        <Separator />
      </div>
      <CodeTabs
        htmlDesktop={htmlDesktop}
        cssDesktop={cssDesktop}
        jsDesktop={jsDesktop}
        htmlMobile={htmlMobile}
        cssMobile={cssMobile}
        jsMobile={jsMobile}
      />
    </Tabs>
  );
}
