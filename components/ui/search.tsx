import React from "react";
import Theme from "../layout/theme";

export function BasicSearch() {
  return <Theme componentName="search" componentStyle="basicSearch" />;
}

export function AutoComplete() {
  return <Theme componentName="search" componentStyle="autoComplete" />;
}

export function AriaLabelSearch() {
  return <Theme componentName="search" componentStyle="ariaLabelSearch" />;
}