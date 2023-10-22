import React from "react";
import Theme from "../layout/componentTheme";

export const Card = () => {
  return (
    <Theme
      componentName="card"
      componentStyle="normal"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const CardWithPic = () => {
  return (
    <Theme
      componentName="card"
      componentStyle="withPic"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const VerticalCardWithPic = () => {
  return (
    <Theme
      componentName="card"
      componentStyle="verticalWithPic"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const CardHeader = () => {
  return (
    <Theme
      componentName="card"
      componentStyle="header"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const CardAction = () => {
  return (
    <Theme
      componentName="card"
      componentStyle="action"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};
