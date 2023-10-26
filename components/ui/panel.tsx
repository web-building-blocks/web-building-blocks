import React from "react";
import Theme from "../layout/componentTheme";

export const Panel_Fail = () => {
  return (
    <Theme
      componentName="panel"
      componentStyle="fail"
      backgroundDesktop="#FFF"
      backgroundMobile="#FFF"
    />
  );
};

export const Panel = () => {
  return (
    <Theme
      componentName="panel"
      componentStyle="normal"
      backgroundDesktop="#fff"
      backgroundMobile="#fff"
    />
  );
};
