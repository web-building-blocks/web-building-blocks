import React from "react";
import Theme from "../layout/theme";

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
