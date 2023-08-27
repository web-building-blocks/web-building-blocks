import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "components/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/Web-Building-Blocks/blocks",
  },
  docsRepositoryBase: "https://github.com/Web-Building-Blocks/blocks",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
