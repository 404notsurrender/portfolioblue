// ================================================================================
// Creator: Muhammad Dafa Zulfikar
// Date created: 14/12/2023
// File name: script.js
// Author: Muhammad Dafa Zulfikar
// Description: JavaScript for portfolio website
// Version: 1.0
// Last modified: 2023-12-17
// License: MIT
// ================================================================================


/* TOGGLE ICON NAVBAR */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/* SCROLL SECTION ACTIVE LINK */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    /* STICKY NAVBAR */    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /* REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
/* SCROLL REVEAL */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'})
/* TYPED JS */
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Cyber Security Student', 'Freelancer', 'Network Engineer', 'Penetration Tester'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
/* SMTP EMAIL */
const form = document.querySelector('form');

function sendEmail(e) {
    e.preventDefault();

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}