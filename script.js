function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});