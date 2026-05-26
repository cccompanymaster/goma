(function () {
  const header = document.getElementById('siteHeader');
  const bottomBanner = document.getElementById('floatingBottom');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');

  // Header background on scroll
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    header.classList.toggle('scrolled', y > 60);

    // Bottom banner appears after scrolling past the hero title area
    const trigger = hero ? hero.offsetHeight * 0.6 : 400;
    bottomBanner.classList.toggle('show', y > trigger);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll(
    '.value-card, .track-card, .system-item, .curri-card, .result-card, .tech-col, .age-item, .section-head'
  );
  if ('IntersectionObserver' in window) {
    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
    });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  }
})();
