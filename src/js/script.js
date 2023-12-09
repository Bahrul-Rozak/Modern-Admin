function closeMenus(...menus) {
    menus.forEach(menu => menu.classList.add('hidden'));
}

function toggleMenu(menu) {
    menu.classList.toggle('hidden');
}

const addMenuListener = (button, menu) => button.addEventListener('click', () => toggleMenu(menu));

const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');
addMenuListener(userMenuButton, userMenu);

const userMenuButtonInbox = document.getElementById('user-menu-inbox-button');
const userMenuInbox = document.getElementById('user-menu-Inbox');
addMenuListener(userMenuButtonInbox, userMenuInbox);

const userMenuButtonBell = document.getElementById('user-menu-bell-button');
const userMenuBell = document.getElementById('user-menu-bell');
addMenuListener(userMenuButtonBell, userMenuBell);

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-menu");
    toggleButtons.forEach(button => addMenuListener(button, button.nextElementSibling));
});

const menuBar = document.querySelector('#menuBar');
const mobileMenu = document.querySelector('#mobileMenu');
const closeMenu = document.querySelector('#closeMenu');

menuBar.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenu.addEventListener('click', () => mobileMenu.classList.add('hidden'));
