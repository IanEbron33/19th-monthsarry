// ── AOS ──
AOS.init({ duration: 700, once: true, offset: 60 });

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
