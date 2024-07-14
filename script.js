document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});
// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow .slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initial slide
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const article = document.querySelector('.full-screen');
    article.style.opacity = 1;
    article.style.transform = 'translateY(0)';
});
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-detail, .price-box, .testimonials');
    elements.forEach(element => {
        element.classList.add('animated');
    });
});
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scroll down
            header.classList.add('hidden');
        } else {
            // Scroll up
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navList.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    const header = document.getElementById('header');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navList.classList.toggle('active');
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navList.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    const header = document.getElementById('header');
    const loader = document.getElementById('loader');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navList.classList.toggle('active');
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        loader.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    window.onload = () => {
        document.body.classList.add('loaded');
    };
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    window.onload = () => {
        document.body.classList.add('loaded');
    };
});
