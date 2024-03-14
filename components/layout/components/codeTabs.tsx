import React from "react";
import CodeBlock from "./codeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TABS_CTNT_CLASS, CODE_TAB_CLASS } from "../constants/strings";

const CodeTabs = ({
  htmlDesktop,
  cssDesktop,
  jsDesktop,
  nextjsDesktop, // Added Next.js desktop version code
  htmlMobile,
  cssMobile,
  jsMobile,
  nextjsMobile, // Added Next.js mobile version code
}: {
  htmlDesktop: string | null;
  cssDesktop: string | null;
  jsDesktop: string | null;
  nextjsDesktop: string | null; // New attribute type
  htmlMobile: string | null;
  cssMobile: string | null;
  jsMobile: string | null;
  nextjsMobile: string | null; // New attribute type
}) => {
  return (
    <>
      <TabsContent value="desktop" className={TABS_CTNT_CLASS}>
        <Tabs defaultValue="html" className="w-full">
          <div className="flex items-center justify-between pb-3">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              {/* existing trigger */}
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
              {/* Add Next.js trigger */}
              {nextjsDesktop && (
                <TabsTrigger value="nextjs" className={CODE_TAB_CLASS}>
                  Next.js
                </TabsTrigger>
              )}
            </TabsList>
          </div>
          {/* Existing content area */}
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
          {/* Add Next.js content area */}
          {nextjsDesktop && (
            <TabsContent value="nextjs">
              <CodeBlock code={nextjsDesktop} language="javascript" />
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
              {/* Add Next.js trigger */}
              {nextjsDesktop && (
                <TabsTrigger value="nextjs" className={CODE_TAB_CLASS}>
                  Next.js
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
          {/* Add Next.js content area */}
          {nextjsDesktop && (
            <TabsContent value="nextjs">
              <CodeBlock code={nextjsDesktop} language="javascript" />
            </TabsContent>
          )}
        </Tabs>
      </TabsContent>
    </>
  );
};

export default CodeTabs;
