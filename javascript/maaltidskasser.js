document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // 100ms delay for hvert produkt
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    menuItems.forEach(item => {
        observer.observe(item);
    });

    // Tilt effect for menu items
    menuItems.forEach(item => {
        item.addEventListener('mousemove', handleTilt);
        item.addEventListener('mouseleave', resetTilt);
    });

    function handleTilt(e) {
        const item = e.currentTarget;
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const angleX = (e.clientY - itemCenterY) / 25;
        const angleY = (itemCenterX - e.clientX) / 25;

        item.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }

    function resetTilt(e) {
        e.currentTarget.style.transform = 'rotateX(0) rotateY(0)';
    }

    // Hover effekt for menu-item
    menuItems.forEach(item => {
        const content = item.querySelector('.menu-item-content');
        const vaelgBtn = item.querySelector('.vaelg-btn');

        item.addEventListener('mouseenter', () => {
            content.style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            content.style.opacity = '0';
        });

        vaelgBtn.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            cartCountElement.style.display = 'inline';
        });
    });

    // Parallax effect for hero section
    const hero = document.getElementById('hero');
    let lastScrollY = window.scrollY;

    function updateParallax() {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY;
        lastScrollY = scrollY;

        requestAnimationFrame(() => {
            hero.style.backgroundPositionY = `${-scrollY * 0.5}px`;
        });
    }

    window.addEventListener('scroll', updateParallax);
});
