// Execute when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Open the first tab by default
  document.getElementById("Recent").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");

  // Add click event listeners to all tab links
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function(event) {
      openTab(event, event.currentTarget.dataset.tabname);
    });
    
    // Add keyboard event listeners for space (32) and enter (13) keys
    tablinks[i].addEventListener("keydown", function(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault(); // Prevent default behavior (e.g., scrolling the page)
        openTab(event, event.currentTarget.dataset.tabname);
      }
    });
  }
});

function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  // Get all tab contents and tab buttons
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");

  // Hide all tab contents
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove the active state from all tab buttons
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Display the specific tab content
  document.getElementById(tabName).style.display = "block";

  // Add the active state to the clicked tab button
  event.currentTarget.classList.add("active");
}
