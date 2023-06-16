let menu = document.querySelector('#menu-icon');
let menu_close = document.querySelector('#menu-icon-open')
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('open');
    menu_close.classList.toggle('open');
    navbar.classList.toggle('open');
}

menu_close.onclick = () => {
    menu.classList.toggle('open');
    menu_close.classList.toggle('open');
    navbar.classList.toggle('open');
}