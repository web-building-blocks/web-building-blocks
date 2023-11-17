const tooltip = document.getElementById('tooltipText');
const tooltipButton = document.querySelector('.tooltip');

let isTooltipVisible = false;

window.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !isTooltipVisible) {
    tooltip.style.visibility = 'visible';
    tooltip.setAttribute('aria-hidden', 'false');
    isTooltipVisible = true;
  } else if (event.key === 'Escape' && isTooltipVisible) {
    tooltip.style.visibility = 'hidden';
    tooltip.setAttribute('aria-hidden', 'true');
    isTooltipVisible = false;
  }
});

tooltipButton.addEventListener('mouseenter', () => {
  if (!isTooltipVisible) {
    tooltip.style.visibility = 'visible';
    tooltip.setAttribute('aria-hidden', 'false');
    isTooltipVisible = true;
  }
});

tooltipButton.addEventListener('mouseleave', () => {
  if (isTooltipVisible) {
    tooltip.style.visibility = 'hidden';
    tooltip.setAttribute('aria-hidden', 'true');
    isTooltipVisible = false;
  }
});
