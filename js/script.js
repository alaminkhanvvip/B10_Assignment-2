// Mobile menu toggle
const navToggler = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');

if (navToggler && navbar) {
  navToggler.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
}

// Close menu when clicking nav links
const navLinks = document.querySelectorAll('[data-nav-link]');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    if (navbar) {
      navbar.classList.remove('active');
    }
  });
});

// Header scroll effect
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    if (header) header.classList.add('active');
    if (backTopBtn) backTopBtn.classList.add('active');
  } else {
    if (header) header.classList.remove('active');
    if (backTopBtn) backTopBtn.classList.remove('active');
  }
});