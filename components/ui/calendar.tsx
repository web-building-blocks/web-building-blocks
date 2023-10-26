import React from "react";
import Theme from "../layout/componentTheme";
import { E } from "nextra/dist/types-c8e621b7";

export function Calendar() {
  return <Theme componentName="calendar" componentStyle="normal" />;
}

export function DateRangePickerCalendar() {
  return <Theme componentName="calendar" componentStyle="range" />;
}

export function DateInputCalendar() {
  return <Theme componentName="calendar" componentStyle="dateInput" />;
}

export function DateTimeInputCalendar() {
  return <Theme componentName="calendar" componentStyle="dateTimeInput" />;
}

export function MonthInputCalendar() {
  return <Theme componentName="calendar" componentStyle="monthInput" />;
}

export function TimeInputCalendar() {
  return <Theme componentName="calendar" componentStyle="timeInput" />;
}

export function WeekInputCalendar() {
  return <Theme componentName="calendar" componentStyle="weekInput" />;
}
