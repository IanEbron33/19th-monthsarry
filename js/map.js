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
  { lat: 11.77197343534006, lng: 124.88076600368761, title: '<i class="ph-fill ph-shooting-star"></i> SEASIDE', desc: 'This the most often place where we stay, to watch the sunset and talk about the future aww haha.' },
  { lat: 11.775177490367227, lng: 124.88510705869955, title: '<i class="ph-fill ph-bowl-food"></i> IMELDA PARK ', desc: 'An park ni Tita hahaha jk, ancha kuno an place na uuranan kita except han seaside haha, ancha la medyo naawod kuno ka pag damo tawo pero okay lait. Tapos an nag ka storya kuno kit nga guti la kuno mag break up hahaha.' },
  { lat: 11.776476922130447, lng: 124.8828561973491, title: '<i class="ph-fill ph-sun-horizon"></i> JOLIBEE', desc: 'This place is the most often we eat togehter because they said "Bida ang saya" hahaha, tapos marasa an gravy, tapos marasa liwat an nakaon hahahaha.' },
  { lat: 11.776036730632955, lng: 124.88550961231236, title: '<i class="ph-fill ph-confetti"></i> ERNES RESTAURANT', desc: 'This is the first place we ate together and the first time we had a date and nakaka akward duro hine na stage hahahaha.' },
  { lat: 11.771832152567388,  lng: 124.88431846370977, title: '<i class="ph-fill ph-confetti"></i> METRO MALL', desc: 'This is the place for our waiting area haha, mayakan ak "Baks adi laak metro" tapos imo reply "Otw naak, maydara ka payong?" hahahaha.' },
  { lat: 11.772477958167432,   lng: 124.88597190318347, title: '<i class="ph-fill ph-confetti"></i> BH NI BAKS HAHA', desc: 'Imo kuno BH hahaha, dre la kuno ine normal place para haak, kay ngadi ko kuno na experience an first kisses hahaha, kiss ha cheeks ngan lips tapos nakaka akward.' },
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
