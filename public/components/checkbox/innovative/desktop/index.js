document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("customCheckbox");
    const label = document.getElementById("checkboxLabel");
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        label.style.backgroundColor = "#333"; // Darken label background when checked
      } else {
        label.style.backgroundColor = "transparent";
      }
    });
  });
  