const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

document.addEventListener('keydown', function (event) {
  const isCtrlPressed = event.ctrlKey || event.metaKey;
  const isBKeyPressed = event.keyCode === 75;

  if (isCtrlPressed && isBKeyPressed) {
    event.preventDefault();
    searchInput.focus();
  }
});

document.addEventListener('click', function (event) {
  if (event.target !== searchInput) {
    searchInput.blur();
  }
});

searchForm.addEventListener('click', function () {
  searchInput.focus();
});
