import React from "react";
import Theme from "../layout/theme";

export function Calendar() {
    return <Theme componentName="calendar" componentStyle="normal" />;
}

export function DateRangePickerCalendar() {
    return <Theme componentName="calendar" componentStyle="range" />;
}

export function PureCalendar() {
    return <Theme componentName="calendar" componentStyle="pure" />;
}
