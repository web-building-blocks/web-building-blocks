import React from "react";
import Theme from "../layout/theme";

export default function Card() {
  return (
    <Theme
      widthDesktop="450px"
      heightDesktop="180px"
      widthMobile="100%"
      heightMobile="100px"
      componentName="card"
      componentStyle="normal"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
}
