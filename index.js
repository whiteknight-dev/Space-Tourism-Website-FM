document.addEventListener('DOMContentLoaded', () => {

    const hamburgerMenu = document.querySelector('.header__icon-hamburger');
    const closeMenu = document.querySelector('.mobile_menu__icon-close');
    const mobileMenu = document.querySelector('.mobile_menu');

    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        hamburgerMenu.classList.add('hidden');
    });
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerMenu.classList.remove('hidden');
    });
});

