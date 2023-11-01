const cardTypeSelect = document.getElementById('cardType');

cardTypeSelect.addEventListener('change', function () {
  const selectedOption = cardTypeSelect.value;

  if (selectedOption === 'Visa') {
    document.getElementById('credit-card-image').src =
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg';
  } else if (selectedOption === 'American Express') {
    document.getElementById('credit-card-image').src =
      'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
  } else if (selectedOption === 'Master Card') {
    document.getElementById('credit-card-image').src =
      'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
  }
});
