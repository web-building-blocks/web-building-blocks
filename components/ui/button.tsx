import React from "react";
import Theme from "../layout/theme";

export function Button() {
    return (
        <Theme
            widthDesktop="280px"
            heightDesktop="160px"
            widthMobile="100%"
            heightMobile="160px"
            componentName="button"
            componentStyle="normal"
        />
    );
}

export function LoadingButton() {
    return (
        <Theme
            widthDesktop="280px"
            heightDesktop="160px"
            widthMobile="100%"
            heightMobile="160px"
            componentName="button"
            componentStyle="loading"
        />
    );
}
