/* ============================================================================
   COMFORT SUITES APARTMENT POKHARA — Main JavaScript
   ============================================================================ */

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initCarousel();
  initLightbox();
  initAccordion();
  initForm();
  initScrollAnimations();
});

/// ============================================================================
// NAVIGATION
// ============================================================================

function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navbar-menu');

  if (!hamburger || !navMenu) return;

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Handle Apartments dropdown on mobile (tap to toggle)
  document.querySelectorAll('.navbar-item').forEach(item => {
    const link = item.querySelector('.navbar-link');
    const dropdown = item.querySelector('.dropdown-menu');
    if (!dropdown) return;

    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
// ============================================================================
// CAROUSEL
// ============================================================================

let currentSlide = 0;
let carouselInterval;
const carouselAutoPlayDelay = 4000;

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const carousel = document.querySelector('.carousel-container');

  if (!carousel || slides.length === 0) return;

  // Start auto-play
  startCarouselAutoPlay();

  // Pause on hover
  carousel.addEventListener('mouseenter', stopCarouselAutoPlay);
  carousel.addEventListener('mouseleave', startCarouselAutoPlay);

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopCarouselAutoPlay();
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startCarouselAutoPlay();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide(slides);
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide(slides);
    }
  }

  // Make slides visible
  updateCarousel(slides);
}

function startCarouselAutoPlay() {
  const slides = document.querySelectorAll('.carousel-slide');
  carouselInterval = setInterval(() => {
    nextSlide(slides);
  }, carouselAutoPlayDelay);
}

function stopCarouselAutoPlay() {
  clearInterval(carouselInterval);
}

function updateCarousel(slides) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

function nextSlide(slides) {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel(slides);
}

function prevSlide(slides) {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel(slides);
}

// ============================================================================
// LIGHTBOX
// ============================================================================

function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  if (!lightbox) return;

  let currentImageIndex = 0;
  let allImages = [];

  // Collect all images
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    if (img) {
      allImages.push(img.src);
    }

    item.addEventListener('click', () => {
      currentImageIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    lightbox.classList.add('active');
    updateLightboxImage();
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function updateLightboxImage() {
    if (allImages[currentImageIndex]) {
      lightboxImage.src = allImages[currentImageIndex];
    }
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    updateLightboxImage();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    updateLightboxImage();
  }

  // Event listeners
  lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  });
}

// ============================================================================
// ACCORDION (FAQ)
// ============================================================================

function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isActive = this.classList.contains('active');

      // Close all open items
      document.querySelectorAll('.accordion-header.active').forEach(h => {
        if (h !== this) {
          h.classList.remove('active');
          h.closest('.accordion-item').querySelector('.accordion-content').classList.remove('active');
        }
      });

      // Toggle current item
      this.classList.toggle('active');
      content.classList.toggle('active');
    });
  });
}

// ============================================================================
// FORMS
// ============================================================================

const countryCodeData = [
  // TOP: Nepal (local)
  { code: 'NP', dial: '+977', flag: '🇳🇵', name: 'Nepal' },
  
  // TOP TOURISTS TO NEPAL
  { code: 'US', dial: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'DE', dial: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dial: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'AU', dial: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'CA', dial: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'KR', dial: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: 'JP', dial: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: 'ES', dial: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: 'IT', dial: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: 'NL', dial: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'CH', dial: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: 'AT', dial: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: 'SE', dial: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: 'NO', dial: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: 'DK', dial: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: 'NZ', dial: '+64', flag: '🇳🇿', name: 'New Zealand' },
  { code: 'TH', dial: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: 'SG', dial: '+65', flag: '🇸🇬', name: 'Singapore' },
  
  // REST OF WORLD ALPHABETICALLY
  { code: 'AE', dial: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: 'AF', dial: '+93', flag: '🇦🇫', name: 'Afghanistan' },
  { code: 'AG', dial: '+1', flag: '🇦🇬', name: 'Antigua and Barbuda' },
  { code: 'AL', dial: '+355', flag: '🇦🇱', name: 'Albania' },
  { code: 'AM', dial: '+374', flag: '🇦🇲', name: 'Armenia' },
  { code: 'AO', dial: '+244', flag: '🇦🇴', name: 'Angola' },
  { code: 'AQ', dial: '+672', flag: '🇦🇶', name: 'Antarctica' },
  { code: 'AR', dial: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: 'AZ', dial: '+994', flag: '🇦🇿', name: 'Azerbaijan' },
  { code: 'BA', dial: '+387', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
  { code: 'BB', dial: '+1', flag: '🇧🇧', name: 'Barbados' },
  { code: 'BD', dial: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: 'BE', dial: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: 'BF', dial: '+226', flag: '🇧🇫', name: 'Burkina Faso' },
  { code: 'BG', dial: '+359', flag: '🇧🇬', name: 'Bulgaria' },
  { code: 'BH', dial: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: 'BI', dial: '+257', flag: '🇧🇮', name: 'Burundi' },
  { code: 'BJ', dial: '+229', flag: '🇧🇯', name: 'Benin' },
  { code: 'BN', dial: '+673', flag: '🇧🇳', name: 'Brunei' },
  { code: 'BO', dial: '+591', flag: '🇧🇴', name: 'Bolivia' },
  { code: 'BR', dial: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'BS', dial: '+1', flag: '🇧🇸', name: 'Bahamas' },
  { code: 'BT', dial: '+975', flag: '🇧🇹', name: 'Bhutan' },
  { code: 'BW', dial: '+267', flag: '🇧🇼', name: 'Botswana' },
  { code: 'BY', dial: '+375', flag: '🇧🇾', name: 'Belarus' },
  { code: 'BZ', dial: '+501', flag: '🇧🇿', name: 'Belize' },
  { code: 'CF', dial: '+236', flag: '🇨🇫', name: 'Central African Republic' },
  { code: 'CG', dial: '+242', flag: '🇨🇬', name: 'Congo' },
  { code: 'CI', dial: '+225', flag: '🇨🇮', name: 'Ivory Coast' },
  { code: 'CL', dial: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: 'CM', dial: '+237', flag: '🇨🇲', name: 'Cameroon' },
  { code: 'CN', dial: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'CO', dial: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: 'CR', dial: '+506', flag: '🇨🇷', name: 'Costa Rica' },
  { code: 'CU', dial: '+53', flag: '🇨🇺', name: 'Cuba' },
  { code: 'CV', dial: '+238', flag: '🇨🇻', name: 'Cape Verde' },
  { code: 'CY', dial: '+357', flag: '🇨🇾', name: 'Cyprus' },
  { code: 'CZ', dial: '+420', flag: '🇨🇿', name: 'Czech Republic' },
  { code: 'DJ', dial: '+253', flag: '🇩🇯', name: 'Djibouti' },
  { code: 'DM', dial: '+1', flag: '🇩🇲', name: 'Dominica' },
  { code: 'DO', dial: '+1', flag: '🇩🇴', name: 'Dominican Republic' },
  { code: 'DZ', dial: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: 'EC', dial: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: 'EE', dial: '+372', flag: '🇪🇪', name: 'Estonia' },
  { code: 'EG', dial: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: 'EH', dial: '+212', flag: '🇪🇭', name: 'Western Sahara' },
  { code: 'ER', dial: '+291', flag: '🇪🇷', name: 'Eritrea' },
  { code: 'ET', dial: '+251', flag: '🇪🇹', name: 'Ethiopia' },
  { code: 'FI', dial: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: 'FJ', dial: '+679', flag: '🇫🇯', name: 'Fiji' },
  { code: 'FK', dial: '+500', flag: '🇫🇰', name: 'Falkland Islands' },
  { code: 'FM', dial: '+691', flag: '🇫🇲', name: 'Micronesia' },
  { code: 'FO', dial: '+298', flag: '🇫🇴', name: 'Faroe Islands' },
  { code: 'GA', dial: '+241', flag: '🇬🇦', name: 'Gabon' },
  { code: 'GE', dial: '+995', flag: '🇬🇪', name: 'Georgia' },
  { code: 'GH', dial: '+233', flag: '🇬🇭', name: 'Ghana' },
  { code: 'GI', dial: '+350', flag: '🇬🇮', name: 'Gibraltar' },
  { code: 'GL', dial: '+299', flag: '🇬🇱', name: 'Greenland' },
  { code: 'GM', dial: '+220', flag: '🇬🇲', name: 'Gambia' },
  { code: 'GN', dial: '+224', flag: '🇬🇳', name: 'Guinea' },
  { code: 'GQ', dial: '+240', flag: '🇬🇶', name: 'Equatorial Guinea' },
  { code: 'GR', dial: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: 'GS', dial: '+500', flag: '🇬🇸', name: 'South Georgia' },
  { code: 'GT', dial: '+502', flag: '🇬🇹', name: 'Guatemala' },
  { code: 'GU', dial: '+1', flag: '🇬🇺', name: 'Guam' },
  { code: 'GW', dial: '+245', flag: '🇬🇼', name: 'Guinea-Bissau' },
  { code: 'GY', dial: '+592', flag: '🇬🇾', name: 'Guyana' },
  { code: 'HK', dial: '+852', flag: '🇭🇰', name: 'Hong Kong' },
  { code: 'HN', dial: '+504', flag: '🇭🇳', name: 'Honduras' },
  { code: 'HR', dial: '+385', flag: '🇭🇷', name: 'Croatia' },
  { code: 'HT', dial: '+509', flag: '🇭🇹', name: 'Haiti' },
  { code: 'HU', dial: '+36', flag: '🇭🇺', name: 'Hungary' },
  { code: 'ID', dial: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'IE', dial: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: 'IL', dial: '+972', flag: '🇮🇱', name: 'Israel' },
  { code: 'IM', dial: '+44', flag: '🇮🇲', name: 'Isle of Man' },
  { code: 'IQ', dial: '+964', flag: '🇮🇶', name: 'Iraq' },
  { code: 'IR', dial: '+98', flag: '🇮🇷', name: 'Iran' },
  { code: 'IS', dial: '+354', flag: '🇮🇸', name: 'Iceland' },
  { code: 'JE', dial: '+44', flag: '🇯🇪', name: 'Jersey' },
  { code: 'JM', dial: '+1', flag: '🇯🇲', name: 'Jamaica' },
  { code: 'JO', dial: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: 'KE', dial: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: 'KG', dial: '+996', flag: '🇰🇬', name: 'Kyrgyzstan' },
  { code: 'KH', dial: '+855', flag: '🇰🇭', name: 'Cambodia' },
  { code: 'KI', dial: '+686', flag: '🇰🇮', name: 'Kiribati' },
  { code: 'KM', dial: '+269', flag: '🇰🇲', name: 'Comoros' },
  { code: 'KN', dial: '+1', flag: '🇰🇳', name: 'Saint Kitts and Nevis' },
  { code: 'KP', dial: '+850', flag: '🇰🇵', name: 'North Korea' },
  { code: 'KW', dial: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: 'KY', dial: '+1', flag: '🇰🇾', name: 'Cayman Islands' },
  { code: 'KZ', dial: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
  { code: 'LA', dial: '+856', flag: '🇱🇦', name: 'Laos' },
  { code: 'LB', dial: '+961', flag: '🇱🇧', name: 'Lebanon' },
  { code: 'LC', dial: '+1', flag: '🇱🇨', name: 'Saint Lucia' },
  { code: 'LI', dial: '+423', flag: '🇱🇮', name: 'Liechtenstein' },
  { code: 'LK', dial: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: 'LR', dial: '+231', flag: '🇱🇷', name: 'Liberia' },
  { code: 'LS', dial: '+266', flag: '🇱🇸', name: 'Lesotho' },
  { code: 'LT', dial: '+370', flag: '🇱🇹', name: 'Lithuania' },
  { code: 'LU', dial: '+352', flag: '🇱🇺', name: 'Luxembourg' },
  { code: 'LV', dial: '+371', flag: '🇱🇻', name: 'Latvia' },
  { code: 'LY', dial: '+218', flag: '🇱🇾', name: 'Libya' },
  { code: 'MA', dial: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: 'MC', dial: '+377', flag: '🇲🇨', name: 'Monaco' },
  { code: 'MD', dial: '+373', flag: '🇲🇩', name: 'Moldova' },
  { code: 'ME', dial: '+382', flag: '🇲🇪', name: 'Montenegro' },
  { code: 'MG', dial: '+261', flag: '🇲🇬', name: 'Madagascar' },
  { code: 'MH', dial: '+692', flag: '🇲🇭', name: 'Marshall Islands' },
  { code: 'MK', dial: '+389', flag: '🇲🇰', name: 'Macedonia' },
  { code: 'ML', dial: '+223', flag: '🇲🇱', name: 'Mali' },
  { code: 'MM', dial: '+95', flag: '🇲🇲', name: 'Myanmar' },
  { code: 'MN', dial: '+976', flag: '🇲🇳', name: 'Mongolia' },
  { code: 'MO', dial: '+853', flag: '🇲🇴', name: 'Macau' },
  { code: 'MP', dial: '+1', flag: '🇲🇵', name: 'Northern Mariana Islands' },
  { code: 'MQ', dial: '+596', flag: '🇲🇶', name: 'Martinique' },
  { code: 'MR', dial: '+222', flag: '🇲🇷', name: 'Mauritania' },
  { code: 'MS', dial: '+1', flag: '🇲🇸', name: 'Montserrat' },
  { code: 'MT', dial: '+356', flag: '🇲🇹', name: 'Malta' },
  { code: 'MU', dial: '+230', flag: '🇲🇺', name: 'Mauritius' },
  { code: 'MV', dial: '+960', flag: '🇲🇻', name: 'Maldives' },
  { code: 'MW', dial: '+265', flag: '🇲🇼', name: 'Malawi' },
  { code: 'MX', dial: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'MY', dial: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: 'MZ', dial: '+258', flag: '🇲🇿', name: 'Mozambique' },
  { code: 'NA', dial: '+264', flag: '🇳🇦', name: 'Namibia' },
  { code: 'NC', dial: '+687', flag: '🇳🇨', name: 'New Caledonia' },
  { code: 'NE', dial: '+227', flag: '🇳🇪', name: 'Niger' },
  { code: 'NF', dial: '+672', flag: '🇳🇫', name: 'Norfolk Island' },
  { code: 'NG', dial: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: 'NI', dial: '+505', flag: '🇳🇮', name: 'Nicaragua' },
  { code: 'PA', dial: '+507', flag: '🇵🇦', name: 'Panama' },
  { code: 'PE', dial: '+51', flag: '🇵🇪', name: 'Peru' },
  { code: 'PF', dial: '+689', flag: '🇵🇫', name: 'French Polynesia' },
  { code: 'PG', dial: '+675', flag: '🇵🇬', name: 'Papua New Guinea' },
  { code: 'PH', dial: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: 'PK', dial: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: 'PL', dial: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: 'PM', dial: '+508', flag: '🇵🇲', name: 'Saint Pierre and Miquelon' },
  { code: 'PN', dial: '+64', flag: '🇵🇳', name: 'Pitcairn Islands' },
  { code: 'PR', dial: '+1', flag: '🇵🇷', name: 'Puerto Rico' },
  { code: 'PS', dial: '+970', flag: '🇵🇸', name: 'Palestine' },
  { code: 'PT', dial: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: 'PW', dial: '+680', flag: '🇵🇼', name: 'Palau' },
  { code: 'PY', dial: '+595', flag: '🇵🇾', name: 'Paraguay' },
  { code: 'QA', dial: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: 'RE', dial: '+262', flag: '🇷🇪', name: 'Reunion' },
  { code: 'RO', dial: '+40', flag: '🇷🇴', name: 'Romania' },
  { code: 'RS', dial: '+381', flag: '🇷🇸', name: 'Serbia' },
  { code: 'RU', dial: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: 'RW', dial: '+250', flag: '🇷🇼', name: 'Rwanda' },
  { code: 'SA', dial: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'SB', dial: '+677', flag: '🇸🇧', name: 'Solomon Islands' },
  { code: 'SC', dial: '+248', flag: '🇸🇨', name: 'Seychelles' },
  { code: 'SD', dial: '+249', flag: '🇸🇩', name: 'Sudan' },
  { code: 'SH', dial: '+290', flag: '🇸🇭', name: 'Saint Helena' },
  { code: 'SI', dial: '+386', flag: '🇸🇮', name: 'Slovenia' },
  { code: 'SJ', dial: '+47', flag: '🇸🇯', name: 'Svalbard and Jan Mayen' },
  { code: 'SK', dial: '+421', flag: '🇸🇰', name: 'Slovakia' },
  { code: 'SL', dial: '+232', flag: '🇸🇱', name: 'Sierra Leone' },
  { code: 'SM', dial: '+378', flag: '🇸🇲', name: 'San Marino' },
  { code: 'SN', dial: '+221', flag: '🇸🇳', name: 'Senegal' },
  { code: 'SO', dial: '+252', flag: '🇸🇴', name: 'Somalia' },
  { code: 'SR', dial: '+597', flag: '🇸🇷', name: 'Suriname' },
  { code: 'SS', dial: '+211', flag: '🇸🇸', name: 'South Sudan' },
  { code: 'ST', dial: '+239', flag: '🇸🇹', name: 'Sao Tome and Principe' },
  { code: 'SV', dial: '+503', flag: '🇸🇻', name: 'El Salvador' },
  { code: 'SX', dial: '+1', flag: '🇸🇽', name: 'Sint Maarten' },
  { code: 'SY', dial: '+963', flag: '🇸🇾', name: 'Syria' },
  { code: 'SZ', dial: '+268', flag: '🇸🇿', name: 'Eswatini' },
  { code: 'TC', dial: '+1', flag: '🇹🇨', name: 'Turks and Caicos Islands' },
  { code: 'TD', dial: '+235', flag: '🇹🇩', name: 'Chad' },
  { code: 'TF', dial: '+262', flag: '🇹🇫', name: 'French Southern Territories' },
  { code: 'TG', dial: '+228', flag: '🇹🇬', name: 'Togo' },
  { code: 'TJ', dial: '+992', flag: '🇹🇯', name: 'Tajikistan' },
  { code: 'TK', dial: '+690', flag: '🇹🇰', name: 'Tokelau' },
  { code: 'TL', dial: '+670', flag: '🇹🇱', name: 'Timor-Leste' },
  { code: 'TM', dial: '+993', flag: '🇹🇲', name: 'Turkmenistan' },
  { code: 'TN', dial: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: 'TO', dial: '+676', flag: '🇹🇴', name: 'Tonga' },
  { code: 'TR', dial: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: 'TT', dial: '+1', flag: '🇹🇹', name: 'Trinidad and Tobago' },
  { code: 'TV', dial: '+688', flag: '🇹🇻', name: 'Tuvalu' },
  { code: 'TW', dial: '+886', flag: '🇹🇼', name: 'Taiwan' },
  { code: 'TZ', dial: '+255', flag: '🇹🇿', name: 'Tanzania' },
  { code: 'UA', dial: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: 'UG', dial: '+256', flag: '🇺🇬', name: 'Uganda' },
  { code: 'UM', dial: '+1', flag: '🇺🇲', name: 'U.S. Minor Islands' },
  { code: 'UY', dial: '+598', flag: '🇺🇾', name: 'Uruguay' },
  { code: 'UZ', dial: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
  { code: 'VA', dial: '+379', flag: '🇻🇦', name: 'Vatican City' },
  { code: 'VC', dial: '+1', flag: '🇻🇨', name: 'Saint Vincent and Grenadines' },
  { code: 'VE', dial: '+58', flag: '🇻🇪', name: 'Venezuela' },
  { code: 'VG', dial: '+1', flag: '🇻🇬', name: 'British Virgin Islands' },
  { code: 'VI', dial: '+1', flag: '🇻🇮', name: 'Virgin Islands' },
  { code: 'VN', dial: '+84', flag: '🇻🇳', name: 'Vietnam' },
  { code: 'VU', dial: '+678', flag: '🇻🇺', name: 'Vanuatu' },
  { code: 'WF', dial: '+681', flag: '🇼🇫', name: 'Wallis and Futuna' },
  { code: 'WS', dial: '+685', flag: '🇼🇸', name: 'Samoa' },
  { code: 'YE', dial: '+967', flag: '🇾🇪', name: 'Yemen' },
  { code: 'YT', dial: '+262', flag: '🇾🇹', name: 'Mayotte' },
  { code: 'ZA', dial: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: 'ZM', dial: '+260', flag: '🇿🇲', name: 'Zambia' },
  { code: 'ZW', dial: '+263', flag: '🇿🇼', name: 'Zimbabwe' }
];

function initForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  initCountryCodeSelect();

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showFormSuccess();
        form.reset();
      } else {
        alert('Something went wrong. Please try WhatsApp or email us directly.');
      }
    } catch (err) {
      alert('Network error. Please try WhatsApp or email us directly.');
    } finally {
      submitBtn.textContent = 'Send My Inquiry';
      submitBtn.disabled = false;
    }
  });
}
function initCountryCodeSelect() {
  const select = document.getElementById('countryCode');
  if (!select) return;

  // Populate with popular countries first, then rest
  const popular = countryCodeData.slice(0, 9);
  const rest = countryCodeData.slice(9);

  popular.forEach(country => {
    const option = document.createElement('option');
    option.value = country.dial;
    option.textContent = `${country.flag} ${country.dial}`;
    option.dataset.code = country.code;
    select.appendChild(option);
  });

  const separator = document.createElement('option');
  separator.disabled = true;
  separator.textContent = '───────────';
  select.appendChild(separator);

  rest.forEach(country => {
    const option = document.createElement('option');
    option.value = country.dial;
    option.textContent = `${country.flag} ${country.dial} - ${country.name}`;
    option.dataset.code = country.code;
    select.appendChild(option);
  });

  select.value = '+977'; // Default to Nepal
}

function validateForm() {
  const form = document.getElementById('inquiryForm');
  const fields = {
    fullName: form.querySelector('[name="fullName"]'),
    email: form.querySelector('[name="email"]'),
    phone: form.querySelector('[name="phone"]'),
    checkIn: form.querySelector('[name="checkIn"]'),
    checkOut: form.querySelector('[name="checkOut"]'),
    guests: form.querySelector('[name="guests"]')
  };

  let isValid = true;

  // Clear previous errors
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    if (field) {
      field.closest('.form-group').classList.remove('error');
    }
  });

  // Validate Full Name
  if (!fields.fullName.value.trim()) {
    showFieldError(fields.fullName, 'Please enter your full name');
    isValid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fields.email.value)) {
    showFieldError(fields.email, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate Phone
  if (!fields.phone.value.trim() || fields.phone.value.length < 8) {
    showFieldError(fields.phone, 'Please enter a valid phone number');
    isValid = false;
  }

  // Validate Check-in Date
  if (!fields.checkIn.value) {
    showFieldError(fields.checkIn, 'Please select a check-in date');
    isValid = false;
  }

  // Validate Check-out Date
  if (!fields.checkOut.value) {
    showFieldError(fields.checkOut, 'Please select a check-out date');
    isValid = false;
  } else if (new Date(fields.checkOut.value) <= new Date(fields.checkIn.value)) {
    showFieldError(fields.checkOut, 'Check-out date must be after check-in date');
    isValid = false;
  }

  // Validate Guests
  if (fields.guests.value < 1 || fields.guests.value > 6) {
    showFieldError(fields.guests, 'Please enter between 1 and 6 guests');
    isValid = false;
  }

  return isValid;
}

function showFieldError(field, message) {
  const group = field.closest('.form-group');
  group.classList.add('error');
  const errorElement = group.querySelector('.form-error');
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function showFormSuccess() {
  const form = document.getElementById('inquiryForm');
  const successMessage = form.querySelector('.form-success');
  if (successMessage) {
    successMessage.classList.add('active');
    form.style.display = 'none';
    setTimeout(() => {
      successMessage.classList.remove('active');
    }, 5000);
  }
}

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe feature cards, apartment cards, testimonial cards
  document.querySelectorAll('.feature-card, .apartment-card, .testimonial-card, .video-card').forEach(el => {
    observer.observe(el);
  });
}

// ============================================================================
// TESTIMONIAL FILTER (on testimonials.html)
// ============================================================================

function initTestimonialFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter testimonials
      testimonialCards.forEach(card => {
        const type = card.dataset.type;
        if (filter === 'all' || type === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.classList.add('fade-in-up');
          }, 10);
        } else {
          card.style.display = 'none';
          card.classList.remove('fade-in-up');
        }
      });
    });
  });

  // Set 'All' as active by default
  const allButton = document.querySelector('[data-filter="all"]');
  if (allButton) allButton.click();
}

// Initialize filter if on testimonials page
if (document.querySelector('.filter-btn')) {
  document.addEventListener('DOMContentLoaded', initTestimonialFilter);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Set minimum check-out date to be after check-in date
function setupDateValidation() {
  const checkInInput = document.querySelector('[name="checkIn"]');
  const checkOutInput = document.querySelector('[name="checkOut"]');

  if (checkInInput && checkOutInput) {
    checkInInput.addEventListener('change', function() {
      const checkInDate = new Date(this.value);
      checkInDate.setDate(checkInDate.getDate() + 1);
      const minCheckOut = checkInDate.toISOString().split('T')[0];
      checkOutInput.min = minCheckOut;
    });
  }
}

document.addEventListener('DOMContentLoaded', setupDateValidation);

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================================================
// PAGE-SPECIFIC INITIALIZATION
// ============================================================================

// Initialize based on current page
window.addEventListener('load', function() {
  setupDateValidation();
});
