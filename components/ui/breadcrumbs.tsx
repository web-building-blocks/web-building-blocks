import React from "react";
import Theme from "../layout/componentTheme";

export const WithBorder = () => {
  return (
    <Theme
      componentName="breadcrumbs"
      componentStyle="normal"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
}

export const NoBorder = () => {
  return (
    <Theme
      componentName="breadcrumbs"
      componentStyle="noborder"
      backgroundDesktop="#fff"
      backgroundMobile="#fff"
    />
  );
}
