import React from "react";
import Theme from "../layout/theme";

export function BasicSearch() {
  return (
    <Theme
      widthDesktop="450px"
      heightDesktop="180px"
      widthMobile="100%"
      heightMobile="160px"
      componentName="search"
      componentStyle="basicSearch"
      backgroundDesktop="#B0C4DE"
    />
  );
}

export function AutoComplete() {
  return (
    <Theme
      widthDesktop="450px"
      heightDesktop="180px"
      widthMobile="100%"
      heightMobile="160px"
      componentName="search"
      componentStyle="autoComplete"
      backgroundDesktop="#B0C4DE"
    />
  );
}

export function AriaLabelSearch() {
  return (
    <Theme
      widthDesktop="450px"
      heightDesktop="180px"
      widthMobile="100%"
      heightMobile="160px"
      componentName="search"
      componentStyle="ariaLabelSearch"
      backgroundDesktop="#B0C4DE"
    />
  );
}