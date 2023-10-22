import React from "react";
import Theme from "../layout/componentTheme";

export function Button() {
  return <Theme componentName="button" componentStyle="normal" />;
}

export function LoadingButton() {
  return <Theme componentName="button" componentStyle="loading" />;
}

export function SuccessfulButton() {
  return <Theme componentName="button" componentStyle="successful" />;
}

export function TipButton() {
  return <Theme componentName="button" componentStyle="tip" />;
}

export function HoverButton() {
  return <Theme componentName="button" componentStyle="hover" />;
}

export function FocusButton() {
  return <Theme componentName="button" componentStyle="focus" />;
}

export function ActiveButton() {
  return <Theme componentName="button" componentStyle="active" />;
}

export function IconButton() {
  return <Theme componentName="button" componentStyle="icon" />;
}
