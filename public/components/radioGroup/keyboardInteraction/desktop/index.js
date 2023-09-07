const dogRadio = document.getElementById('dogRadio');
const catRadio = document.getElementById('catRadio');
const birdRadio = document.getElementById('birdRadio');

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (catRadio.checked) {
        dogRadio.checked = true;
      } else if (birdRadio.checked) {
        catRadio.checked = true;
      }
      break;
      
    case 'ArrowDown':
      if (dogRadio.checked) {
        catRadio.checked = true;
      } else if (catRadio.checked) {
        birdRadio.checked = true;
      }
      break;
    default:
      break;
  }
});