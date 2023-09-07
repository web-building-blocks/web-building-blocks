const table = document.getElementById("calendar-table");
const monthYear = document.getElementById("month-year");
const dateInput = document.getElementById("date-input");
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
        let clickedDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            event.target.textContent
        );
        dateInput.value = clickedDate.toISOString().slice(0, 10);
        document.getElementById("calendar").style.display = "none";
    }
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

table.addEventListener("click", handleDateClick);

document.addEventListener("click", function (event) {
    if (!dateInput.contains(event.target) && !table.contains(event.target)) {
        document.getElementById("calendar").style.display = "none";
    }
});

dateInput.addEventListener("focus", function () {
    document.getElementById("calendar").style.display = "block";
});

renderCalendar(currentDate);
