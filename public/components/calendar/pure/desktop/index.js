const table = document.getElementById("calendar-table");
const monthYear = document.getElementById("month-year");
const dateInput = document.getElementById("date-input");
const calendarDiv = document.getElementById("calendar");
let currentDate = new Date();

function renderCalendar(date) {
    table.innerHTML = "";
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let day = firstDay;
    let rows = [];

    let headerRow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        .map((d) => `<td>${d}</td>`)
        .join("");
    rows.push(`<tr>${headerRow}</tr>`);

    let week = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
        week.push(`<td></td>`);
    }

    while (day <= lastDay) {
        week.push(`<td>${day.getDate()}</td>`);
        if (week.length === 7) {
            rows.push(`<tr>${week.join("")}</tr>`);
            week = [];
        }
        day.setDate(day.getDate() + 1);
    }

    if (week.length > 0) {
        while (week.length < 7) {
            week.push(`<td></td>`);
        }
        rows.push(`<tr>${week.join("")}</tr>`);
    }

    table.innerHTML = rows.join("");
    monthYear.textContent = `${date.toLocaleString("default", {
        month: "long",
    })} ${date.getFullYear()}`;
}

function handleDateClick(event) {
    if (event.target.tagName === "TD" && event.target.textContent) {
        dateInput.value = `${event.target.textContent}/${
            currentDate.getMonth() + 1
        }/${currentDate.getFullYear()}`;
        hideCalendar();
    }
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
    showCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
    showCalendar();
}

function showCalendar() {
    calendarDiv.style.display = "block";
}

function hideCalendar() {
    calendarDiv.style.display = "none";
}

table.addEventListener("click", handleDateClick);

document.addEventListener("click", function (event) {
    if (
        !dateInput.contains(event.target) &&
        !table.contains(event.target) &&
        event.target !== monthYear &&
        !calendarDiv.contains(event.target)
    ) {
        hideCalendar();
    }
});

let isCalendarOpened = false;

document.getElementById("date-input").addEventListener("click", function () {
    if (!isCalendarOpened) {
        document.querySelector(".calendar").style.display = "block";
        isCalendarOpened = true;
    } else {
        document.querySelector(".calendar").style.display = "none";
        isCalendarOpened = false;
    }
});

table.addEventListener("click", function (event) {
    if (
        event.target.tagName.toLowerCase() === "td" &&
        event.target.textContent
    ) {
        let selectedDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            parseInt(event.target.textContent)
        );
        document.getElementById("date-input").value = `${String(
            selectedDate.getDate()
        ).padStart(2, "0")}/${String(selectedDate.getMonth() + 1).padStart(
            2,
            "0"
        )}/${selectedDate.getFullYear()}`;
        document.querySelector(".calendar").style.display = "none";
        isCalendarOpened = false;
    }
});

renderCalendar(currentDate);
