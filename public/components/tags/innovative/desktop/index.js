document.addEventListener("DOMContentLoaded", function() {
  const tags = document.querySelectorAll('[role="button"]');
  
  tags.forEach(tag => {
    tag.addEventListener('click', function() {
      togglePressed(tag);
      applyEffect(tag);
    });

    tag.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        togglePressed(tag);
        applyEffect(tag);
      }
    });
  });
});

function togglePressed(tag) {
  const currentState = tag.getAttribute('aria-pressed') === 'true';
  tag.setAttribute('aria-pressed', !currentState);
}

function applyEffect(tag) {
  const originalColor = getComputedStyle(tag).color;
  const originalBackgroundColor = getComputedStyle(tag).backgroundColor;

  tag.style.transition = 'all 0.5s';
  tag.style.color = originalBackgroundColor;
  tag.style.backgroundColor = originalColor;

  setTimeout(() => {
    tag.style.color = originalColor;
    tag.style.backgroundColor = originalBackgroundColor;
  }, 1000);
}
