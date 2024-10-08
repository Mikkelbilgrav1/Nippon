/* document.addEventListener('DOMContentLoaded', () => {
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
}); */

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeBtn = document.getElementById('close-icon');
    const indkoebIcon = document.getElementById('indkoeb-icon');
    const indkoebOverlay = document.getElementById('indkoeb-overlay');
    const closeIndkoebIcon = document.getElementById('close-indkoeb-icon');

    function toggleMenu() {
        menuOverlay.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    }

    function closeMenu() {
        menuOverlay.classList.remove('active');
        burgerIcon.classList.remove('active');
    }

    function toggleIndkoeb() {
        indkoebOverlay.classList.toggle('active');
        indkoebIcon.classList.toggle('active');
    }

    function closeIndkoeb() {
        indkoebOverlay.classList.remove('active');
        indkoebIcon.classList.remove('active');
    }

    burgerIcon.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);
    indkoebIcon.addEventListener('click', toggleIndkoeb);
    closeIndkoebIcon.addEventListener('click', closeIndkoeb);

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuOverlay.contains(event.target) && !burgerIcon.contains(event.target) && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (!indkoebOverlay.contains(event.target) && !indkoebIcon.contains(event.target) && indkoebOverlay.classList.contains('active')) {
            closeIndkoeb();
        }
    });
});