// ── MAP ──
// TODO: Replace lat/lng with your actual places
const map = L.map('map', { zoomControl: true }).setView([11.776081804416505, 124.88356665275472], 14.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Custom cute map pin using Phosphor icon
const pinIcon = L.divIcon({
  html: '<i class="ph-fill ph-map-pin" style="font-size:28px;color:#8a7656;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));"></i>',
  className: '',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28]
});

const places = [
  { lat: 11.77197343534006, lng: 124.88076600368761, title: '<i class="ph-fill ph-shooting-star"></i> Where We First Met', desc: 'Replace with your story of this place.' },
  { lat: 11.775177490367227, lng: 124.88510705869955, title: '<i class="ph-fill ph-bowl-food"></i> Our Favorite Restaurant', desc: 'The place we always go back to.' },
  { lat: 11.776476922130447, lng: 124.8828561973491, title: '<i class="ph-fill ph-sun-horizon"></i> Our Sunset Spot', desc: 'Where we watch the sun go down.' },
  { lat: 11.776036730632955, lng: 124.88550961231236, title: '<i class="ph-fill ph-confetti"></i> First Anniversary Spot', desc: 'How we celebrated our first year.' },
];

places.forEach(function (p) {
  L.marker([p.lat, p.lng], { icon: pinIcon })
    .addTo(map)
    .bindPopup(
      '<strong style="font-family:Fredoka,sans-serif;color:#4a3c2e;display:flex;align-items:center;gap:6px;">' + p.title + '</strong>' +
      '<br><span style="font-size:.85rem;color:#8a7d6f;font-family:Quicksand,sans-serif;">' + p.desc + '</span>',
      { className: 'cute-popup' }
    );
});
