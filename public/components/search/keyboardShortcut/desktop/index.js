const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

document.addEventListener('keydown', function(event) {
  const isCtrlPressed = event.ctrlKey || event.metaKey;
  const isBKeyPressed = event.keyCode === 75;

  if (isCtrlPressed && isBKeyPressed) {
    event.preventDefault(); 
    searchForm.style.borderColor = "#4f46e5";
    searchForm.style.borderWidth = '3px';
    searchInput.focus();
  }
});

document.addEventListener('click', function(event) {
  if (event.target !== searchInput) {
    searchInput.blur();
    searchForm.style.borderColor = "#dddfe3";
    searchForm.style.borderWidth = '2px';
  }
});

searchForm.addEventListener('click', function() {
    searchForm.style.borderColor = "#4f46e5";
    searchForm.style.borderWidth = '3px';
    searchInput.focus();
});
