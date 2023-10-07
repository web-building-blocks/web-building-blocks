const table = document.getElementById("calendar-table");
const monthYear = document.getElementById("month-year");
let currentDate = new Date();

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

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

renderCalendar(currentDate);
