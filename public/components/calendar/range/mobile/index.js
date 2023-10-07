const table = document.getElementById("calendar-table");
const monthYear = document.getElementById("month-year");
let currentDate = new Date();

let startDate = null;
let endDate = null;

function renderCalendar(date) {
    table.innerHTML = "";
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let day = firstDay;
    let rows = [];

    // Create header row
    let headerRow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        .map((d) => `<td>${d}</td>`)
        .join("");
    rows.push(`<tr>${headerRow}</tr>`);

    let week = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
        week.push(`<td></td>`);
    }

    while (day <= lastDay) {
        let cellClass = "";
        if (startDate && day.getTime() === startDate.getTime()) {
            cellClass = "selected";
        } else if (endDate && day.getTime() === endDate.getTime()) {
            cellClass = "selected";
        } else if (startDate && endDate && day > startDate && day < endDate) {
            cellClass = "range";
        }
        week.push(
            `<td class="${cellClass}" onclick="selectDate(${day.getTime()})">${day.getDate()}</td>`
        );
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

function selectDate(timestamp) {
    const selectedDate = new Date(timestamp);
    if (!startDate || (startDate && endDate)) {
        startDate = selectedDate;
        endDate = null;
        document.getElementById("start-date").textContent =
            startDate.toLocaleDateString();
        document.getElementById("end-date").textContent = "None";
    } else if (!endDate && selectedDate > startDate) {
        endDate = selectedDate;
        document.getElementById("end-date").textContent =
            endDate.toLocaleDateString();
    }
    renderCalendar(currentDate);
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

renderCalendar(currentDate);
