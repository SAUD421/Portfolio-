// menu.js
/*
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Show the mobile menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

// Hide the mobile menu when the close icon is clicked
closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});
*/
/*
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Menu links for Portfolio and About sections
const aboutLink = document.querySelector('a[href="#about"]');
const portfolioLink = document.querySelector('a[href="#portfolio"]');

// Show the mobile menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

// Hide the mobile menu when the close icon is clicked
closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Scroll to the "About" section and close the menu
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default anchor behavior
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
});

// Scroll to the "Intro" section (Portfolio) and close the menu
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default anchor behavior
    document.querySelector('.headLine').scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
});
*/
/*
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Menu links for About, Portfolio, and Contact sections
const aboutLink = document.querySelector('a[href="#about"]');
const portfolioLink = document.querySelector('a[href="#portfolio"]');
const contactLink = document.querySelector('a[href="#contact"]');

// Show the mobile menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

// Hide the mobile menu when the close icon is clicked
closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Scroll to the "About" section and close the menu
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
});

// Scroll to the "Intro" section (Portfolio) and close the menu
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.headLine').scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
});

// Scroll to the "Contact" section and close the menu
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
});
*/
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Menu links for About, Portfolio, and Contact sections
const aboutLink = document.querySelector('a[href="#about"]');
const portfolioLink = document.querySelector('a[href="#portfolio"]');
const contactLink = document.querySelector('a[href="#contact"]');

// Show the mobile menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

// Hide the mobile menu when the close icon is clicked
closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Scroll to the "About" section and close the menu
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.style.display = 'none';
    }
});

// Scroll to the "Intro" section (Portfolio) and close the menu
portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.headLine').scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
});

// Scroll to the "Contact" section and close the menu
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
});
