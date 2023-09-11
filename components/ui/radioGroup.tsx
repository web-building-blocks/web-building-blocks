import React from "react";
import Theme from "../layout/theme";

export function BasicRadioGroup() {
  return <Theme componentName="radioGroup" componentStyle="basicRadioGroup" backgroundDesktop="#B0C4DE"/>;
}

export function CompletedRadioGroup() {
  return (
    <Theme componentName="radioGroup" componentStyle="completedRadioGroup" backgroundDesktop="#B0C4DE"/>
  );
}

export function DefaultRadioGroup() {
  return (
    <Theme componentName="radioGroup" componentStyle="defaultRadioGroup" />
  );
}

export function KeyboardInteraction() {
  return (
    <Theme componentName="radioGroup" componentStyle="verticalRadioGroup" />
  );
}

export function AnimationRadioGroup() {
  return (
    <Theme componentName="radioGroup" componentStyle="animationRadioGroup" />
  );
}

export function AriaLabelRadioGroup() {
  return (
    <Theme componentName="radioGroup" componentStyle="ariaLabelRadioGroup" />
  );
}
