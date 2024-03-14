import React from "react";
import CodeTabs from "./components/codeTabs";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";

export default function Theme({ pageName }: { pageName: string }) {
  const PATH = `/components/${pageName}/`;

  const [html, setHtml] = React.useState<string | null>(null);
  const [css, setCss] = React.useState<string | null>(null);
  const [js, setJs] = React.useState<string | null>(null);
  const [nextjs, setNextjs] = React.useState<string | null>(null); // Added status hook

  React.useEffect(() => {
    fetchHtml();
    fetchCss();
    fetchJs();
    fetchNextjs(); // Call new data acquisition function
  }, []);

  const fetchHtml = async () => setHtml(await fetchCnt(`${PATH}index.html`));
  const fetchCss = async () => setCss(await fetchCnt(`${PATH}styles.css`));
  const fetchJs = async () => setJs(await fetchCnt(`${PATH}index.js`));
  const fetchNextjs = async () => setNextjs(await fetchCnt(`${PATH}nextjs.js`)); // Define new data retrieval function

  const fetchCnt = async (path: string) =>
    await fetch(path).then((res) => (res.status === 200 ? res.text() : null));

  return (
    <Tabs defaultValue="desktop" className="mt-5 w-full">
      <div className="w-full h-60 rounded-2xl bg-cover bg-[url('/static/usyd_design.jpg')] flex items-center justify-center">
        <div
          onClick={() => window.open(`../external/${pageName}`, "_blank")}
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
        htmlDesktop={html}
        cssDesktop={css}
        jsDesktop={js}
        nextjsDesktop={nextjs} // Add Next.js code as a new attribute
        htmlMobile={html}
        cssMobile={css}
        jsMobile={js}
        nextjsMobile={nextjs}
      />
    </Tabs>
  );
}
