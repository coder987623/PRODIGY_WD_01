var navbar = document.getElementById('navbar');

// Change navbar style when the user scrolls down
window.addEventListener('scroll', function () {

  if (window.scrollY > 80) {
    // User scrolled down — switch to dark navbar
    navbar.classList.add('scrolled');
  } else {
    // User is back at the top — restore white navbar
    navbar.classList.remove('scrolled');
  }

});
