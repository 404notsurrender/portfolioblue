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
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dafazulfikar8@gmail.com",
        Password : "4FBD91C0AF0200A0C8B9FEF39CC95C6A4A94",
        To : 'dafazulfikar8@gmail.com',
        From : "dafazulfikar8@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Message failed to send!",
                    icon: "error"
                });
            }
        }
    );
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendEmail();
    });
}