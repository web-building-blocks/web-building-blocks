import React from "react";
import Theme from "../layout/theme";

export const Card = () => {
  return (
    <Theme
      widthDesktop="450px"
      heightDesktop="180px"
      widthMobile="100%"
      heightMobile="95px"
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
      widthDesktop="300px"
      heightDesktop="350px"
      widthMobile="350px"
      heightMobile="350px"
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
      widthDesktop="600px"
      heightDesktop="250px"
      widthMobile="100%"
      heightMobile="150px"
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
      widthDesktop="100%"
      heightDesktop="280px"
      widthMobile="100%"
      heightMobile="340px"
      componentName="card"
      componentStyle="header"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};
