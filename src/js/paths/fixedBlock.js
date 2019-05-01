export default function () {
    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.header');

    const menuSourcetop = menu.getBoundingClientRect().top + window.pageYOffset;
    console.log(window.pageYOffset, menuSourcetop)
    if (menu.classList.contains('fixed') && window.pageYOffset < 488) {
        menu.classList.remove('fixed');
    } else if (window.pageYOffset > menuSourcetop) {
        menu.classList.add('fixed');
    }
    
}

