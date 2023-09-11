import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS_WPR_CLASS = "!mt-0 flex-grow w-full h-full py-20 px-5 lg:px-14";
const TABS_CTNT_CLASS = "!m-0 flex items-center justify-center !w-full !h-full";
const CODE_TAB_CLASS =
  "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Highlight theme={themes.github} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className="overflow-auto">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <div
                  className={
                    i === 0 ? "mt-2" : i === tokens.length - 1 ? "mb-2" : ""
                  }
                >
                  <span className="mr-5">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <Badge
        onClick={copyCode}
        className="!absolute top-5 right-5 select-none cursor-pointer"
      >
        {isCopied ? "Copied" : "Copy code"}
      </Badge>
    </div>
  );
};

export default function Theme({
  widthDesktop,
  heightDesktop,
  widthMobile,
  heightMobile,
  componentName,
  componentStyle,
  backgroundDesktop = "transparent",
  backgroundMobile = "transparent",
}: {
  widthDesktop: string;
  heightDesktop: string;
  widthMobile: string;
  heightMobile: string;
  componentName: string;
  componentStyle: string;
  backgroundDesktop?: string;
  backgroundMobile?: string;
}) {
  const DESKTOP_PATH = `/components/${componentName}/${componentStyle}/desktop/`;
  const MOBILE_PATH = `/components/${componentName}/${componentStyle}/mobile/`;

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
      <div className="w-full rounded-md border">
        <div className="h-16 flex items-center justify-center border-b">
          <TabsList className="grid grid-cols-2 w-72 md:w-96">
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="desktop"
          className={TABS_WPR_CLASS}
          style={{ backgroundColor: backgroundDesktop }}
        >
          <div className={TABS_CTNT_CLASS}>
            <iframe
              style={{ width: widthDesktop, height: heightDesktop }}
              src={`${DESKTOP_PATH}index.html`}
            />
          </div>
        </TabsContent>
        <TabsContent
          value="mobile"
          className={TABS_WPR_CLASS}
          style={{ backgroundColor: backgroundMobile }}
        >
          <div className={TABS_CTNT_CLASS}>
            <iframe
              style={{ width: "400px", height: heightMobile }}
              src={`${MOBILE_PATH}index.html`}
            />
          </div>
        </TabsContent>
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
              {htmlDesktop && (
                <TabsTrigger value="html" className={CODE_TAB_CLASS}>
                  HTML
                </TabsTrigger>
              )}
              {cssDesktop && (
                <TabsTrigger value="css" className={CODE_TAB_CLASS}>
                  CSS
                </TabsTrigger>
              )}
              {jsDesktop && (
                <TabsTrigger value="js" className={CODE_TAB_CLASS}>
                  JavaScript
                </TabsTrigger>
              )}
            </TabsList>
          </div>
          {htmlDesktop && (
            <TabsContent value="html">
              <CodeBlock code={htmlDesktop} language="html" />
            </TabsContent>
          )}
          {cssDesktop && (
            <TabsContent value="css">
              <CodeBlock code={cssDesktop} language="css" />
            </TabsContent>
          )}
          {jsDesktop && (
            <TabsContent value="js">
              <CodeBlock code={jsDesktop} language="js" />
            </TabsContent>
          )}
        </Tabs>
      </TabsContent>
      <TabsContent value="mobile" className={TABS_CTNT_CLASS}>
        <Tabs defaultValue="html" className="w-full">
          <div className="flex items-center justify-between pb-3">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              {htmlMobile && (
                <TabsTrigger value="html" className={CODE_TAB_CLASS}>
                  HTML
                </TabsTrigger>
              )}
              {cssMobile && (
                <TabsTrigger value="css" className={CODE_TAB_CLASS}>
                  CSS
                </TabsTrigger>
              )}
              {jsMobile && (
                <TabsTrigger value="js" className={CODE_TAB_CLASS}>
                  JavaScript
                </TabsTrigger>
              )}
            </TabsList>
          </div>
          {htmlMobile && (
            <TabsContent value="html">
              <CodeBlock code={htmlMobile} language="html" />
            </TabsContent>
          )}
          {cssMobile && (
            <TabsContent value="css">
              <CodeBlock code={cssMobile} language="css" />
            </TabsContent>
          )}
          {jsMobile && (
            <TabsContent value="js">
              <CodeBlock code={jsMobile} language="js" />
            </TabsContent>
          )}
        </Tabs>
      </TabsContent>
    </Tabs>
  );
}
