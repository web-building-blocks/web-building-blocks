function toggleMenu() {
  var menuIcon = document.getElementById('menuIcon');
  var currentSrc = menuIcon.getAttribute('src');
  var menuLinks = document.querySelector('.menu-links');

  var menuIconSrc = 'https://img.icons8.com/ios-filled/50/menu--v6.png';
  var closeIconSrc =
    'https://img.icons8.com/material-outlined/24/multiply--v1.png';

  if (currentSrc === menuIconSrc) {
    menuIcon.setAttribute('src', closeIconSrc);
    menuLinks.style.overflow = 'visible';
  } else {
    menuIcon.setAttribute('src', menuIconSrc);
    menuLinks.style.overflow = 'hidden';
  }
}

window.addEventListener('scroll', function () {
  var menuLinks = document.querySelector('.menu-links');
  var menuIcon = document.getElementById('menuIcon');

  var menuIconSrc = 'https://img.icons8.com/ios-filled/50/menu--v6.png';

  menuLinks.style.overflow = 'hidden';
  menuIcon.setAttribute('src', menuIconSrc);
});

window.addEventListener('click', function (event) {
  var menuLinks = document.querySelector('.menu-links');
  var menuIcon = document.getElementById('menuIcon');

  var menuIconSrc = 'https://img.icons8.com/ios-filled/50/menu--v6.png';
  if (!menuIcon.contains(event.target) && !menuLinks.contains(event.target)) {
    menuLinks.style.overflow = 'hidden';
    menuIcon.setAttribute('src', menuIconSrc);
  }
});
