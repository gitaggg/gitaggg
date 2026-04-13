# Comfort Suites Apartment Pokhara - Website

A production-grade, multi-page website for a premium furnished apartment rental in Lakeside, Pokhara, Nepal. Built with pure HTML, CSS, and Vanilla JavaScript — no frameworks, no build tools required.

## Overview

This website is designed for immediate deployment and conversion. Simply open `index.html` in any modern browser to view the complete site. All styling, interactivity, and assets work without any build process.

### Key Features

✅ **7 Fully Responsive Pages**
- Homepage with hero carousel, trust bar, feature showcase, video section, location map, FAQ, and testimonials
- Apartments overview page with detailed comparison
- 3 apartment detail pages (Himalayan Summit, Peaceful Nest, Panorama OpenAir)
- Booking inquiry form with client-side validation
- Testimonials page with filterable reviews

✅ **Complete Interactivity (No Dependencies)**
- Sticky navigation with mobile hamburger menu and dropdowns
- Auto-playing hero carousel with touch swipe support
- Lightbox gallery with keyboard navigation (arrow keys, ESC)
- Accordion FAQ sections
- Form validation with friendly error messages
- Testimonial filter buttons
- Smooth scroll animations
- WhatsApp floating button (fixed across all pages)
- Lazy image loading

✅ **Design System**
- Luxury nature editorial aesthetic
- Hand-crafted color palette (forest green, warm terracotta, Himalayan gold)
- Premium Google Fonts (Cormorant Garamond, DM Sans, Josefin Sans)
- Smooth CSS transitions and animations
- Mobile-first responsive design
- CSS custom properties (variables) for easy customization

✅ **SEO & Social Ready**
- Meta tags on every page
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile viewport configuration
- Favicon support

---

## File Structure

```
d:/Comfortsuites/
│
├── index.html                    # Homepage
├── apartments.html               # Apartments showcase
├── apartment-summit.html         # Himalayan Summit detail
├── apartment-nest.html           # Peaceful Nest detail
├── apartment-panorama.html       # Panorama OpenAir detail
├── book.html                     # Booking inquiry form
├── testimonials.html             # Reviews & testimonials
│
├── css/
│   └── style.css                 # Complete stylsheet (2000+ lines)
│
├── js/
│   └── main.js                   # All interactivity (600+ lines)
│
├── assets/
│   ├── common/                   # Shared carousel & gallery images
│   │   ├── common1.jpg
│   │   ├── common2.jpg
│   │   ├── common3.jpg
│   │   ├── common4.jpg
│   │   ├── common5.jpg
│   │   └── common6.jpg
│   │
│   ├── summit/                   # Himalayan Summit room photos
│   │   ├── summit1.jpg
│   │   ├── summit2.jpg
│   │   ├── summit3.jpg
│   │   └── summit4.jpg
│   │
│   ├── peaceful-nest/            # Peaceful Nest room photos
│   │   ├── nest1.jpg
│   │   ├── nest2.jpg
│   │   ├── nest3.jpg
│   │   └── nest4.jpg
│   │
│   ├── panorama/                 # Panorama OpenAir room photos
│   │   ├── panorama1.jpg
│   │   ├── panorama2.jpg
│   │   ├── panorama3.jpg
│   │   └── panorama4.jpg
│   │
│   ├── shared/                   # Shared amenity photos
│   │   ├── bedroom1.jpg
│   │   ├── bedroom2.jpg
│   │   ├── kitchen1.jpg
│   │   ├── kitchen2.jpg
│   │   ├── kitchen3.jpg
│   │   ├── bathroom1.jpg
│   │   ├── balcony1.jpg
│   │   ├── balcony2.jpg
│   │   ├── balcony3.jpg
│   │   ├── rooftop1.jpg
│   │   ├── rooftop2.jpg
│   │   ├── rooftop3.jpg
│   │   ├── living1.jpg
│   │   ├── view1.jpg
│   │   └── view2.jpg
│   │
│   ├── videos/                   # Tour videos
│   │   ├── tour1.mp4
│   │   ├── tour2.mp4
│   │   ├── tour3.mp4
│   │   ├── tour4.mp4
│   │   ├── poster1.jpg
│   │   ├── poster2.jpg
│   │   ├── poster3.jpg
│   │   └── poster4.jpg
│   │
│   ├── logo.png                  # Brand logo
│   └── favicon.ico               # Browser tab icon
│
└── README.md                      # This file
```

---

## Getting Started

### View the Website Locally

1. Clone or download this entire folder to your computer
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
3. All pages, styles, scripts, and images will load immediately

**No local server required!** This is a static site. You can literally double-click `index.html` and it will work.

### Deploy to Web Host

To make this site live:

1. **Upload the entire folder** to your web hosting via FTP/SFTP
2. Configure your domain to point to the hosting
3. The site works as-is on any standard web host (Apache, Nginx, etc.)

**Popular Hosting Options:**
- **Vercel** (ideal for static sites): `vercel.com` — Free tier available
- **Netlify**: `netlify.com` — Drag-and-drop deploy
- **GitHub Pages**: `pages.github.com` — Free unlimited hosting
- **Traditional Hosting**: Any provider with FTP access (GoDaddy, Bluehost, etc.)

---

## Customization Guide

### Step 1: Add Your Images

Replace placeholder images in the `assets/` folder with real photos:

**Critical images** (must replace for best results):
- `assets/common/common1-6.jpg` — Hero carousel (16:9 aspect ratio recommended)
- `assets/summit/summit1-4.jpg` — Himalayan Summit room photos
- `assets/peaceful-nest/nest1-4.jpg` — Peaceful Nest room photos
- `assets/panorama/panorama1-4.jpg` — Panorama OpenAir room photos
- `assets/shared/bedroom1.jpg, kitchen1.jpg, etc.` — Amenity photos

**Image Specifications:**
- **Size**: Optimize for web (50-200KB per image for homepage speed)
- **Format**: JPG for photos (better compression), PNG for graphics
- **Resolution**: At least 1200px width for quality
- **Aspect Ratios**:
  - Hero carousel slides: 16:9
  - Gallery tiles: 3:2
  - Apartment cards: 4:3
  - Room detail photos: Can vary

**Tools to optimize images:**
- **TinyPNG**: `tinypng.com` — Compress without quality loss
- **ImageOptim**: Local tool for batch optimization
- **VS Code**: Use "Resize Image" extension to batch resize

### Step 2: Add Your Videos

Upload tour videos to `assets/videos/`:

**Video Specifications:**
- **Format**: MP4 (best browser support)
- **Codec**: H.264 video, AAC audio
- **Length**: 30 seconds to 3 minutes (shorter is better for loading)
- **Size**: Try to keep under 50MB per video
- **Resolution**: 1920x1080 (1080p) minimum

**Create Thumbnail/Poster Images:**
- For each video, create a 16:9 image (e.g., 1920x1080 JPG)
- Save as `poster1.jpg`, `poster2.jpg`, etc. in `assets/videos/`
- Site will display this while video loads

**Video Tools:**
- **Handbrake**: Free video encoder (`handbrake.fr`)
- **FFmpeg**: Command-line tool for batch conversion
- Your phone's built-in video editor works fine

### Step 3: Update Text Content

Edit each HTML file to customize copy:

**Homepage (index.html):**
- Update hero headline and tagline (around line 70)
- Update "Why Choose Us" feature descriptions
- Update FAQ questions and answers (search for `.accordion-item`)

**Apartment Pages (apartment-summit.html, etc.):**
- Update the description paragraph (search for `Experience Peak Pokhara Living`)
- Adjust pricing in the pricing section
- Update amenity features and descriptions

**Book Page (book.html):**
- Form fields are ready to use
- Add your actual contact info in footer

**Testimonials (testimonials.html):**
- Replace guest names and reviews with real testimonials
- Keep emoji flags but update country codes
- Adjust rating stars from 4-5 as needed

---

## Styling Customization

All colors and fonts use CSS custom properties. Edit the top of `css/style.css`:

```css
:root {
  --color-primary: #2C4A3E;      /* Deep forest green */
  --color-secondary: #C8956C;    /* Warm terracotta */
  --color-accent: #D4AF7A;       /* Himalayan gold */
  --color-cream: #F7F3EE;        /* Warm ivory background */
  --color-dark: #1A2E28;         /* Near-black green */
  --color-light: #FDFAF6;        /* Off-white */
  --color-text: #3D3530;         /* Warm dark brown text */
  --color-muted: #8A7E76;        /* Muted brown */
  
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'DM Sans', sans-serif;
  --font-accent: 'Josefin Sans', sans-serif;
}
```

Change these values to instantly transform the entire site's appearance. All 7 pages use these same variables!

---

## Form Handling

The booking form on `book.html` includes client-side validation and shows a success message. To actually receive inquiries:

### Option A: Use Formspree (Recommended - Free)
1. Go to `formspree.io`
2. Sign up for free account
3. Get your form endpoint
4. Update the form `action` attribute in `book.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: Use Backend Service
- **Basin**: `basin.io` — Simple form backend
- **Brevo**: `brevo.com` — Email forms
- **Zapier**: Automate to Google Sheets or email

### Option C: Backend Code (NodeJS Example)
Create a simple Lambda function or backend route that:
1. Receives form data
2. Sends email via SMTP
3. Stores in database (optional)

See `js/main.js` lines 350-380 for form validation logic.

---

## JavaScript Features Reference

### Auto-Playing Carousel
- **File**: `js/main.js` lines 45-150
- **Features**:
  - Auto-plays every 4 seconds
  - Pause on hover
  - Touch swipe support (left/right)
  - Smooth fade transitions
- **Customize**:
  - Change `carouselAutoPlayDelay = 4000` to adjust speed
  - Add/remove slides in HTML

### Lightbox Gallery
- **File**: `js/main.js` lines 160-230
- **Features**:
  - Click any `.gallery-item` to enlarge
  - Arrow keys to navigate
  - ESC to close
  - Keyboard support for accessibility
- **Customize**:
  - Automatically detects all gallery items
  - No changes needed

### Form Validation
- **File**: `js/main.js` lines 280-380
- **Features**:
  - Real-time error display
  - Country code selector with 25+ countries
  - Date validation (checkout > check-in)
  - Success message on submit
- **Customize**:
  - Add/remove fields in `validateForm()`
  - Update country list in `countryCodeData` array

### Testimonial Filter
- **File**: `js/main.js` lines 390-430
- **Features**:
  - Click filter buttons to show/hide reviews
  - Smooth fade animations
  - Works with `data-type` attributes
- **Customize**:
  - Add new filter categories by adding `data-type="category"` to testimonial cards

---

## Performance Tips

### Image Optimization
- Use JPG for photos, PNG for graphics
- Compress to < 100KB per image
- Use tools like TinyPNG or ImageOptim

### Lazy Loading
- Images use `loading="lazy"` attribute
- Modern browsers load images as they enter viewport
- Already implemented — no configuration needed

### Caching Headers
If using a web host, add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
</IfModule>
```

### Mobile Performance
- Site is mobile-first responsive
- All heavy animations use CSS (GPU accelerated)
- Minimal JavaScript execution time
- Use Chrome DevTools > Lighthouse to test

---

## Browser Support

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Android 90+

⚠️ **Limited Support (graceful degradation):**
- Internet Explorer — Not supported
- Older Android browsers — Basic functionality works

---

## SEO & Analytics

### Add Google Analytics
Add this to `<head>` of each HTML file:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

### Update Meta Tags
Edit the `<meta>` tags in each HTML's `<head>`:
- `description` — Page summary for search results
- `og:image` — Social sharing image
- `og:title` — Social sharing headline
- `keywords` — Search keywords (less important now)

### Structured Data
Consider adding JSON-LD schema for rich results:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Comfort Suites Apartment Pokhara",
  "address": "Street 45 via Pipal Tree, Lakeside, Pokhara, Nepal",
  "telephone": "+977 9745281226",
  "url": "https://yoursite.com"
}
</script>
```

---

## Security Notes

### Form Data Handling
- Current form shows success message locally
- No data transmitted unless you connect a backend
- Use HTTPS on production (all hosting providers offer free SSL)

### Sanitization
If adding backend, always sanitize user input:
- Validate email format
- Escape special characters
- Use parameterized queries for databases
- Never trust client-side validation alone

---

## Troubleshooting

### Images not showing?
- Check image file names match exactly (case-sensitive on Linux)
- Verify image paths in HTML
- Use Chrome DevTools > Network tab to see failed requests
- Ensure images are in correct `assets/` folder

### Form not submitting?
- Check browser console (F12) for JavaScript errors
- Verify form fields have `name` attributes
- Check that Formspree endpoint is configured correctly
- Ensure CORS is allowed if using external service

### Carousel not auto-playing?
- Check `js/main.js` loaded correctly (Network tab)
- Verify `.carousel-slide` elements exist in HTML
- Check browser console for errors

### Mobile menu not working?
- Verify hamburger button has class `hamburger`
- Check navbar menu has class `navbar-menu`
- Ensure media query breakpoint is 768px (in CSS)

---

## License & Attribution

This website template is provided as-is for Comfort Suites Apartment Pokhara.

**Third-Party Services Used:**
- Google Fonts (Cormorant Garamond, DM Sans, Josefin Sans)
- SVG icons (custom made)
- Responsive design patterns (standard HTML5 best practices)

---

## Quick Deployment Checklist

- [ ] Replace all placeholder images in `assets/`
- [ ] Add real videos to `assets/videos/` with poster images
- [ ] Update company info in footer (all 7 pages)
- [ ] Update meta descriptions for SEO
- [ ] Connect booking form to backend (Formspree or custom)
- [ ] Set up Google Analytics
- [ ] Test on mobile (iPhone, Android)
- [ ] Test forms and WhatsApp links
- [ ] Test gallery lightbox
- [ ] Compress images for web
- [ ] Upload to web host via FTP
- [ ] Configure domain DNS
- [ ] Enable HTTPS/SSL
- [ ] Test live site across browsers
- [ ] Monitor 404 errors in hosting logs

---

## Support & Questions

For any questions about this template:
1. Check the commented code sections
2. Review CSS variables for styling
3. Test in Chrome DevTools locally
4. Verify image paths and file names

---

**Last Updated:** April 2025
**Version:** 1.0.0 Production Release
**Website Status:** Ready for deployment ✅
