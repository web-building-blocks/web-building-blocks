import React from "react";
import Theme from "../layout/theme";

export const Dropdown = () => {
    return (
        <Theme
            componentName="dropdown"
            componentStyle="basic"
            backgroundDesktop="white"
            backgroundMobile="white"
        />
    );
};

export const WithDividers = () => {
    return (
        <Theme
            componentName="dropdown"
            componentStyle="withDividers"
            backgroundDesktop="white"
            backgroundMobile="white"
        />
    );
};

export const WithIcons = () => {
    return (
        <Theme
            componentName="dropdown"
            componentStyle="withIcons"
            backgroundDesktop="white"
            backgroundMobile="white"
        />
    );
};

export const WithHeader = () => {
    return (
        <Theme
            componentName="dropdown"
            componentStyle="withHeader"
            backgroundDesktop="white"
            backgroundMobile="white"
        />
    );
};
