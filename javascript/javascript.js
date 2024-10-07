document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burger-icon');
  const closeMenu = document.getElementById('close-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  if (burgerIcon) {
    burgerIcon.addEventListener('click', function () {
      console.log('Burger menu clicked'); // Debug log
      menuOverlay.classList.add('active');
      document.body.classList.add('menu-active');
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', function () {
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-active');
    });
  }
});
