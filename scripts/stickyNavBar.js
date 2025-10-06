const nav = document.getElementById('navbar');
let hasScrolled = false;
nav.style.marginTop = '40vh';

function checkSticky() {
    const navTop = nav.getBoundingClientRect().top;
    
    if (navTop <= 0) {
        nav.classList.add('is-stuck');
    } else {
        nav.classList.remove('is-stuck');
    }
}

window.addEventListener('scroll', checkSticky);
checkSticky();