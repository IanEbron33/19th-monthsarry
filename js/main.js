// ── AOS ──
AOS.init({ duration: 700, once: true, offset: 60 });

// ── LOADING SCREEN ──
window.addEventListener('load', function() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 1500);
  }
});

// ── PARALLAX EFFECT ──
(function() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  
  const heroNumber = hero.querySelector('.hero-number');
  const heroContent = hero.querySelector('.hero-content');
  const heroPetals = hero.querySelector('.hero-petals');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroHeight = hero.offsetHeight;
    
    if (scrolled < heroHeight) {
      if (heroNumber) heroNumber.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.5}px)`;
      if (heroContent) heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      if (heroPetals) heroPetals.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
  }, { passive: true });
})();

// ── PHOTO FILTERS ──
(function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const slides = document.querySelectorAll('.swiper-slide');
  
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      
      slides.forEach(function(slide) {
        slide.className = 'swiper-slide';
        if (filter !== 'none') {
          slide.classList.add('filter-' + filter);
        }
      });
    });
  });
})();

// ── SWIPE NAVIGATION ──
(function() {
  let touchStartX = 0;
  let touchEndX = 0;
  const sections = ['hero', 'timeline', 'gallery', 'letter', 'map-section', 'stats', 'quiz'];
  let currentSection = 0;
  
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 100;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(sections[currentSection]);
      } else if (diff < 0 && currentSection > 0) {
        currentSection--;
        scrollToSection(sections[currentSection]);
      }
    }
  }
  
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
})();

// ── SCROLL PROGRESS BAR ──
(function () {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }, { passive: true });
})();

// ── MOBILE NAV TOGGLE ──
(function () {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.className = links.classList.contains('open') ? 'ph ph-x' : 'ph ph-list';
    }
  });

  // Close nav when a link is tapped
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'ph ph-list';
    });
  });
})();

// ── FALLING ELEMENTS (Petals & Cats) ──
(function () {
  const container = document.getElementById('petals');
  if (!container) return;
  const count = 30; // Increased count for more variety
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    
    // 60% chance for petal, 40% chance for cat/paw icon
    if (Math.random() > 0.4) {
      el.className = 'petal';
    } else {
      el.className = 'falling-icon';
      const icon = document.createElement('i');
      const isCat = Math.random() > 0.6;
      icon.className = isCat ? 'ph-fill ph-cat' : 'ph-fill ph-paw-print';
      el.appendChild(icon);
    }
    
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (6 + Math.random() * 12) + 's';
    el.style.animationDelay = (Math.random() * 10) + 's';
    el.style.fontSize = (0.8 + Math.random() * 0.7) + 'rem';
    el.style.opacity = 0.3 + Math.random() * 0.4;
    
    container.appendChild(el);
  }
})();

// ── SWIPER ──
new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});

// ── COUNTDOWN ──
// TODO: Replace this date with your actual start date
const START = new Date('2023-10-01T00:00:00');
function updateCountdown() {
  const now = new Date();
  const diff = now - START;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const daysElem = document.getElementById('cd-days');
  const hoursElem = document.getElementById('cd-hours');
  const minsElem = document.getElementById('cd-mins');
  const secsElem = document.getElementById('cd-secs');

  if (daysElem) daysElem.textContent = String(d).padStart(3, '0');
  if (hoursElem) hoursElem.textContent = String(h).padStart(2, '0');
  if (minsElem) minsElem.textContent = String(m).padStart(2, '0');
  if (secsElem) secsElem.textContent = String(s).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ── LETTER LINE REVEAL ──
(function () {
  const letterSection = document.getElementById('letter');
  const lines = document.querySelectorAll('.letter-line');
  if (!letterSection || lines.length === 0) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        lines.forEach(function (line, i) {
          setTimeout(function () {
            line.classList.add('visible');
          }, i * 300);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(letterSection);
})();

// ── NAV ACTIVE ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      navLinks.forEach(function (a) { a.classList.remove('active'); });
      const link = document.querySelector('.nav-links a[href="#' + e.target.id + '"]');
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(function (s) { navObserver.observe(s); });
