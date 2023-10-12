import React from "react";
import Theme from "../layout/theme";

export function BrowserWindow() {
    return <Theme componentName="misc" componentStyle="browser" />;
}

export function TreeView() {
    return <Theme componentName="misc" componentStyle="tree" />;
}

export function Pagination() {
    return <Theme componentName="misc" componentStyle="pagination" />;
}
