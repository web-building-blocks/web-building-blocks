import React from "react";
import Theme from "../layout/theme";

export  function TextInputComponent() {
  return (
    <Theme
      widthDesktop="280px"
      heightDesktop="160px"
      widthMobile="100%"
      heightMobile="160px"
      componentName="input"
      componentStyle="textInputComponent"
    />
  );
}

export  function HintLabel() {
    return (
      <Theme
        widthDesktop="280px"
        heightDesktop="160px"
        widthMobile="100%"
        heightMobile="160px"
        componentName="input"
        componentStyle="hintLabel"
      />
    );
  }

  export  function AutoComplete() {
    return (
      <Theme
        widthDesktop="280px"
        heightDesktop="160px"
        widthMobile="100%"
        heightMobile="160px"
        componentName="input"
        componentStyle="autoComplete"
      />
    );
  }
  export  function InputType() {
    return (
      <Theme
        widthDesktop="280px"
        heightDesktop="160px"
        widthMobile="100%"
        heightMobile="160px"
        componentName="input"
        componentStyle="inputType"
      />
    );
  }
  export  function RequiredInput() {
    return (
      <Theme
        widthDesktop="280px"
        heightDesktop="160px"
        widthMobile="100%"
        heightMobile="160px"
        componentName="input"
        componentStyle="requiredInput"
      />
    );
  }
