function openModal() {
  var modal = document.getElementById('id01');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('id01');
  modal.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
  var modal = document.getElementById('id01');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
