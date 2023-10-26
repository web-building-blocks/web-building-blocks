import React from "react";
import Head from "next/head";
import Image from "next/image";
import Seo from "../admin/seo";
import usydLogo from "../../public/static/usyd_logo.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DESKTOP = "desktop";
const MOBILE = "mobile";

export default function Theme() {
  return (
    <>
      <Head>
        <title>Basic Layout - USYD Blocks</title>
        <Seo />
      </Head>
      <Tabs defaultValue={DESKTOP} className="w-screen h-screen flex flex-col">
        <div className="h-16 border-b shadow-sm select-none">
          <div className="px-3 md:px-6 m-auto max-w-[90rem] h-full flex items-center justify-center">
            <div className="w-1/2 md:w-1/3 flex items-center justify-start">
              <div className="flex items-center justify-center">
                <Image
                  src={usydLogo}
                  alt="The University of Sydney"
                  className="w-28 mr-3 border-r pr-3 hidden md:inline-block"
                />
                <p>Basic Layout</p>
              </div>
            </div>
            <TabsList className="w-1/2 md:w-1/3">
              <TabsTrigger className="w-full" value={DESKTOP}>
                Desktop
              </TabsTrigger>
              <TabsTrigger className="w-full" value={MOBILE}>
                Mobile
              </TabsTrigger>
            </TabsList>
            <div className="w-1/3 items-center justify-end hidden md:inline-flex">
              <svg
                onClick={() => window.close()}
                className="p-1 w-7 h-7 cursor-pointer rounded-md hover:bg-gray-300 transition"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 !bg-[#1d1d1d]">
          <TabsContent value={DESKTOP} className="!mt-0 w-full !h-full">
            <iframe src="https://roadmap.sh/" className="w-full !h-full" />
          </TabsContent>
          <TabsContent
            value={MOBILE}
            className="!mt-0 m-auto max-w-[500px] !h-full"
          >
            <iframe src="https://roadmap.sh/" className="w-full !h-full" />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
