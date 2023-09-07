import React from "react";
import Theme from "../layout/theme";

export function Calendar() {
    return (
        <Theme
            widthDesktop="500px"
            heightDesktop="300px"
            widthMobile="100%"
            heightMobile="160px"
            componentName="calendar"
            componentStyle="normal"
        />
    );
}

export function DateRangePickerCalendar() {
    return (
        <Theme
            widthDesktop="500px"
            heightDesktop="350px"
            widthMobile="100%"
            heightMobile="160px"
            componentName="calendar"
            componentStyle="range"
        />
    );
}

export function InputCalendar() {
    return (
        <Theme
            widthDesktop="500px"
            heightDesktop="350px"
            widthMobile="100%"
            heightMobile="160px"
            componentName="calendar"
            componentStyle="input"
        />
    );
}
