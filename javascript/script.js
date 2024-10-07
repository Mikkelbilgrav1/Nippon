document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.querySelector('burger-icon');
  const closeIcon = document.querySelector('close-icon');
  const menuOverlay = document.getElementById('menu-overlay');
  const body = document.body;

  function toggleMenu() {
    menuOverlay.classList.toggle('active');
    body.classList.toggle('menu-open');
    console.log('Menu toggled. Is open:', body.classList.contains('menu-open'));
  }

  burgerIcon.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
  });

  closeIcon.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
  });
});
