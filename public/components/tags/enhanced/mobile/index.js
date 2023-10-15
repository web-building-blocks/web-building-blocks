document.addEventListener("DOMContentLoaded", function () {
    const tags = document.querySelectorAll('[role="button"]');
    tags.forEach(tag => {
      // Click event listener
      tag.addEventListener('click', function() {
        togglePressed(tag);
        applyEffect(tag);
      });
  
      // Keypress event listener for 'Enter' or 'Space'
      tag.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault(); // Prevent scrolling on space keypress
          togglePressed(tag);
          applyEffect(tag);
        }
      });
    });
  });
  
  function togglePressed(tag) {
    const currentState = tag.getAttribute('aria-pressed') === 'true';
    tag.setAttribute('aria-pressed', !currentState);
    console.log(`${tag.textContent} pressed! Current state: ${!currentState}`);
  }
  
  function applyEffect(tag) {
    const originalColor = getComputedStyle(tag).color;
    const originalBackgroundColor = getComputedStyle(tag).backgroundColor;
    
    tag.style.transition = 'all 0.5s';
    tag.style.color = originalBackgroundColor;
    tag.style.backgroundColor = originalColor;
    
    // Reset color after 1 second
    setTimeout(() => {
      tag.style.color = originalColor;
      tag.style.backgroundColor = originalBackgroundColor;
    }, 1000);
  }
  