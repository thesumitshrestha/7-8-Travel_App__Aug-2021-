const swiper = new Swiper('.discover__container', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
  autoplay: {
    delay: 5000
  },
});


function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 100)
    header.classList.add('scroll-header');
  else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader)


function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 200)
    scrollUp.classList.add('show-scroll');
  else
    scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}


window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: true
})

sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container,
            .experience__data, .experience__overlay
            .footer__data, .footer__rights
            `, {
  origin: 'top',
  interval: 100,
})

sr.reveal(`.about__img-overlay, .subscribe__form`, {
  origin: 'right',
  interval: 100,
})

sr.reveal(`.about__data, .subscribe__description`, {
  origin: 'left',
})


const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
