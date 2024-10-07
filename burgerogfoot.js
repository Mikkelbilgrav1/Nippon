document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuOverlay = document.querySelector('.menu-overlay');

    function toggleMenu() {
        menuOverlay.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    }

    burgerIcon.addEventListener('click', toggleMenu);
});
