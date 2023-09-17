import React from "react";
import Theme from "../layout/theme";

export function Calendar() {
    return <Theme componentName="calendar" componentStyle="normal" />;
}

export function DateRangePickerCalendar() {
    return <Theme componentName="calendar" componentStyle="range" />;
}

export function InputCalendar() {
    return <Theme componentName="calendar" componentStyle="input" />;
}

export function PureCalendar() {
    return <Theme componentName="calendar" componentStyle="pure" />;
}
