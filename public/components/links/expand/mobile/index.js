document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const content = document.getElementById("content");
  const buttonText = document.querySelector(".button-text");
  const buttonIcon = document.querySelector(".button-icon");

  let isExpanded = false;

  toggleButton.addEventListener("click", () => {
    if (!isExpanded) {
      content.classList.remove("hidden");
      content.style.maxHeight = 'none';
      content.style.overflow = 'visible';
      buttonText.textContent = "Read less";
      buttonIcon.textContent = "⬆";
      isExpanded = true;
    } else {
      content.classList.add("visible");
      content.style.maxHeight = '1.3em';
      content.style.overflow = 'hidden';
      buttonText.textContent = "Read more";
      buttonIcon.textContent = "⬇";
      isExpanded = false;
    }
  });
});
