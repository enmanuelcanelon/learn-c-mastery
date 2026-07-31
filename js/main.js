// Simple enhancements for the Learn C Mastery site
document.addEventListener('DOMContentLoaded', () => {
  // Highlight the current nav item while scrolling
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));

  // Optional: add a small console greeting for curious learners
  console.log(
    '%cWelcome, future C master! 🚀\nOpen the source and explore. This site is intentionally simple so you can read every line.',
    'color: #38bdf8; font-size: 14px;'
  );
});
