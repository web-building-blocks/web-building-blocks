import React from "react";
import Theme from "../layout/theme";

export const TopNavi = () => {
    return (
      <Theme
        componentName="navigation"
        componentStyle="topNavi"
        backgroundDesktop="#FFF"
        backgroundMobile="#FFF"
      />
    );
};

export const SideNavi = () => {
    return (
      <Theme
        componentName="navigation"
        componentStyle="sideNavi"
        backgroundDesktop="#fff"
        backgroundMobile="#fff"
      />
    );
};

export const Dropdown = () => {
    return (
      <Theme
        componentName="navigation"
        componentStyle="dropdown"
        backgroundDesktop="#fff"
        backgroundMobile="#fff"
      />
    );
};