document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menuOverlay = document.getElementById('menu-overlay');
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

    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleMenu);
        console.log('Burger icon click listener added');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
        console.log('Close button click listener added');
    }

    if (indkoebIcon) {
        indkoebIcon.addEventListener('click', toggleIndkoeb);
        console.log('Indkoeb icon click listener added');
    }

    if (closeIndkoebIcon) {
        closeIndkoebIcon.addEventListener('click', closeIndkoeb);
        console.log('Close indkoeb icon click listener added');
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (menuOverlay && burgerIcon && !menuOverlay.contains(event.target) && !burgerIcon.contains(event.target) && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (indkoebOverlay && indkoebIcon && !indkoebOverlay.contains(event.target) && !indkoebIcon.contains(event.target) && indkoebOverlay.classList.contains('active')) {
            closeIndkoeb();
        }
    });

    console.log('Script loaded and executed');
});