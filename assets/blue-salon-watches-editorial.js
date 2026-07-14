/* Blue Salon — Watches Editorial: hero slider
   Minimal, accessible, no dependencies. */
(function () {
  'use strict';

  function initHero(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.bs-hero__slide'));
    if (slides.length < 2) return; // static hero — arrows act as plain links/no-ops

    var prev = root.querySelector('.bs-hero__arrow--prev');
    var next = root.querySelector('.bs-hero__arrow--next');
    var index = Math.max(0, slides.findIndex(function (s) { return s.classList.contains('is-active'); }));

    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (slide, n) {
        var active = n === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
    }

    if (prev) prev.addEventListener('click', function () { show(index - 1); });
    if (next) next.addEventListener('click', function () { show(index + 1); });

    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(index - 1); }
      if (e.key === 'ArrowRight') { show(index + 1); }
    });

    show(index);
  }

  function boot() {
    document.querySelectorAll('.bs-watches-editorial .bs-hero').forEach(initHero);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
