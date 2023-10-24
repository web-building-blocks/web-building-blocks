import React from "react";
import CodeBlock from "./codeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TABS_CTNT_CLASS, CODE_TAB_CLASS } from "../constants/strings";

const CodeTabs = ({
  htmlDesktop,
  cssDesktop,
  jsDesktop,
  htmlMobile,
  cssMobile,
  jsMobile,
}: {
  htmlDesktop: string | null;
  cssDesktop: string | null;
  jsDesktop: string | null;
  htmlMobile: string | null;
  cssMobile: string | null;
  jsMobile: string | null;
}) => {
  return (
    <>
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
    </>
  );
};

export default CodeTabs;
