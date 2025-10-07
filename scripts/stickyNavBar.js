const nav = document.getElementById('navbar');
let hasScrolled = false;

nav.style.marginTop = '40vh';

nav.classList.remove('is-stuck');

function checkSticky() {
  if (window.scrollY === 0) {
    nav.classList.remove('is-stuck');
    return;
  }
  
  const navTop = nav.getBoundingClientRect().top;
  if (navTop <= 0) {
    nav.classList.add('is-stuck');
  } else {
    nav.classList.remove('is-stuck');
  }
}

window.addEventListener('scroll', checkSticky);

setTimeout(() => {
  if (window.scrollY > 0) {
    checkSticky();
  }
}, 0);