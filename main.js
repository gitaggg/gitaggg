/* ============================================================
   Comfort Suites Apartment Pokhara — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Hamburger / Mobile Menu ── */
  const hamburger = document.querySelector('.hamburger');
  const body      = document.body;

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      body.classList.toggle('mobile-menu-open');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.navbar-link, .navbar-cta, .dropdown-item').forEach(link => {
      link.addEventListener('click', () => {
        body.classList.remove('mobile-menu-open');
      });
    });
  }

  /* ── Accordion ── */
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
      const item     = this.closest('.accordion-item');
      const isOpen   = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(el => {
        el.classList.remove('open');
      });

      // Open clicked (unless it was already open)
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ── Lightbox ── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = lightbox ? lightbox.querySelector('.lightbox-image') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  const lightboxPrev  = lightbox ? lightbox.querySelector('.lightbox-prev')  : null;
  const lightboxNext  = lightbox ? lightbox.querySelector('.lightbox-next')  : null;

  let galleryImages = [];
  let currentIndex  = 0;

  function openLightbox(index) {
    if (!lightbox || !galleryImages.length) return;
    currentIndex     = index;
    lightboxImg.src  = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  }

  // Collect all gallery images
  document.querySelectorAll('.gallery-item img').forEach((img, i) => {
    galleryImages.push(img.src);
    img.parentElement.addEventListener('click', () => openLightbox(i));
    img.parentElement.style.cursor = 'zoom-in';
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext)  lightboxNext.addEventListener('click', showNext);

  if (lightbox) {
    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  /* ── Sticky nav background on scroll ── */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
      } else {
        nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)';
      }
    }, { passive: true });
  }

});
