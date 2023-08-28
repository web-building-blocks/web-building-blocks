"use client";

import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "components/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/Web-Building-Blocks/blocks",
  },
  useNextSeoProps() {
    return { titleTemplate: "%s - USYD Blocks" };
  },
  docsRepositoryBase: "https://github.com/Web-Building-Blocks/blocks",
  head: (
    <>
      <meta name="og:title" content="Blocks - University of Sydney" />
      <meta
        name="og:description"
        content="Blocks | University of Sydney Design System | Capstone Project COMP5703"
      />
      <meta
        name="og:keywords"
        content="Blocks,Design,UI,University,Sydney,Software,Engineering"
      />
      <meta name="og:robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="og:language" content="English" />
      <meta name="og:revisit-after" content="50 days" />
      <meta name="og:author" content="Richard Lee" />
    </>
  ),
  footer: {
    text: "Blocks - University of Sydney",
  },
  primaryHue: { dark: 10, light: 10 },
};

export default config;
