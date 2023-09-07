import React from "react";
import Theme from "../layout/theme";

export default function Button() {
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
