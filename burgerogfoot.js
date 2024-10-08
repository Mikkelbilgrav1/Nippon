document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeBtn = document.getElementById('close-icon');

    function toggleMenu() {
        menuOverlay.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    }

    function closeMenu() {
        menuOverlay.classList.remove('active');
        burgerIcon.classList.remove('active');
    }

    burgerIcon.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuOverlay.contains(event.target) && !burgerIcon.contains(event.target) && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
});