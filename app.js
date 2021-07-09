const arrowDown = document.querySelector('.arrow-pointer');
const navLinks = document.querySelectorAll('nav li a');
const header = document.querySelector('header');
const logo = document.querySelector('img.logo');
const toUpBtn = document.querySelector('.toUp');
const burger = document.querySelector('.burger');
const xMenu = document.querySelector('.x-menu');
const menuBody = document.querySelector('.menu-body');
const body = document.querySelector('body');

// Burger menu
burger.addEventListener('click', function () {
    menuBody.style.marginTop = '0';
    xMenu.style.display = 'block';
    burger.style.display = 'none';
});
xMenu.addEventListener('click', function () {
    menuBody.style.marginTop = '-40rem';
    xMenu.style.display = 'none';
    burger.style.display = 'block';
});

//Animate arrow to down
setInterval(function () {
    arrowDown.classList.add('animate');
}, 1000);
setInterval(function () {
    arrowDown.classList.remove('animate');
}, 2000);

toUpBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Show the white navbar when scroll, and change colors when hover links
window.onscroll = function () {
    if (this.scrollY >= 150) {
        header.classList.add('navScroll');
        for (link of navLinks) {
            link.style.color = '#888';
            link.addEventListener("mouseover", function () {
                this.style.color = '#b19261'
            }, link.addEventListener("mouseleave", function () {
                this.style.color = '#888'
            }));
        };

        logo.setAttribute('src', 'images/bakery-color.png');

    } else {
        header.classList.remove('navScroll');
        for (link of navLinks) {
            link.style.color = '#fff';
            link.addEventListener("mouseover", function () {
                this.style.color = '#b19261'
            }, link.addEventListener("mouseleave", function () {
                this.style.color = '#fff'
            }));
        }

        logo.setAttribute('src', 'images/bakery-light-1.png');
    }

    if (this.scrollY >= 250) {
        toUpBtn.style.opacity = '1';
    } else {
        toUpBtn.style.opacity = '0';
    }
};

