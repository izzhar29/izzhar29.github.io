//navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav) {
        header.classList.add('navbar-fix');
    } else {
        header.classList.remove('navbar-fix');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-aktif');
    navmenu.classList.toggle('hidden');
})