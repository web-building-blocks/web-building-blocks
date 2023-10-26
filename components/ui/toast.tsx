import React from "react";
import Theme from "../layout/componentTheme";

export function Toast() {
  return <Theme componentName="toast" componentStyle="normal" />;
}

export function TitleToast() {
  return <Theme componentName="toast" componentStyle="title" />;
}

export function ActionToast() {
  return <Theme componentName="toast" componentStyle="action" />;
}
