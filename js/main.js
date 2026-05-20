/* ============================================================
   IGakMahal — Main JavaScript
   main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Fade-up Animation ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


  /* ── Smooth Active Nav Link Highlight ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--sage)';
            link.style.fontWeight = '700';
          } else {
            link.style.fontWeight = '500';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => navObserver.observe(sec));


  /* ── Mobile Nav Toggle (simple) ── */
  // Nav links are hidden on mobile via CSS.
  // Extend here if you want a hamburger menu.


  /* ── WhatsApp button pulse ── */
  const waBtns = document.querySelectorAll('a[href^="https://wa.me"]');
  waBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'all 0.2s';
    });
  });

});
