let currentSlide = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll('.carousel-item');
  currentSlide = (currentSlide + direction + items.length) % items.length;

  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentSlide) {
      item.classList.add('active');
    }
  });

  // Adjust the transform property for sliding effect
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
      }
  });
});