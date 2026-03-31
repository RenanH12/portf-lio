// Script para tornar o menu navbar interativo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});