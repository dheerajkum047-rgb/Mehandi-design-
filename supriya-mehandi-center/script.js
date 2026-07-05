/* ============================================================
   Illustrated sample art (hand-drawn style SVG line art)
   These are original illustrations built for this site to show
   the design style on a hand / saree / garment silhouette.
   Replace with real studio photos any time by swapping the
   card-art innerHTML for an <img src="photos/xxx.jpg">.
============================================================ */

// ---- Hand illustrations (used for Mehandi cards) ----
const handBase = (pattern) => `
<svg viewBox="0 0 140 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M55 174 C40 174 33 160 33 138 L33 92 C33 84 39 78 47 78 L47 42 C47 34 53 28 60 28 C67 28 73 34 73 42 L73 33 C73 25 79 19 86 19 C93 19 99 25 99 33 L99 47 C99 39 105 33 112 33 C119 33 125 39 125 47 L125 100 C125 142 112 174 88 174 Z"/>
  <path d="M33 112 C18 107 8 96 11 86 C13 78 23 76 29 82 L47 100"/>
  ${pattern}
</svg>`;

const handPatterns = [
  // floral vine
  `<path d="M58 145 C64 130 56 122 62 108 C68 96 84 100 82 114 C80 124 68 126 70 138" stroke-width="1.4"/>
   <circle cx="60" cy="146" r="3"/><circle cx="82" cy="112" r="3"/><circle cx="70" cy="139" r="2.2"/>`,
  // mandala dots
  `<circle cx="79" cy="128" r="16" stroke-width="1.2"/><circle cx="79" cy="128" r="8" stroke-width="1.2"/>
   <circle cx="79" cy="128" r="2.4"/>
   <circle cx="79" cy="108" r="2"/><circle cx="79" cy="148" r="2"/><circle cx="60" cy="128" r="2"/><circle cx="98" cy="128" r="2"/>`,
  // paisley trail
  `<path d="M62 118 C58 112 62 104 70 106 C76 108 76 116 70 118 C66 120 62 116 65 112" stroke-width="1.3"/>
   <path d="M84 138 C80 132 84 124 92 126 C98 128 98 136 92 138 C88 140 84 136 87 132" stroke-width="1.3"/>
   <circle cx="70" cy="150" r="2.2"/>`,
  // geometric net
  `<path d="M50 100 L96 146 M96 100 L50 146 M73 92 L73 156" stroke-width="1"/>
   <circle cx="73" cy="123" r="3"/><circle cx="58" cy="108" r="1.6"/><circle cx="88" cy="138" r="1.6"/>`
];

const handIllustrations = handPatterns.map(p => handBase(p));

// ---- Saree / pallu illustrations (used for Embroidery cards) ----
const sareeBase = (pattern) => `
<svg viewBox="0 0 140 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M28 18 L112 18 L98 168 L42 168 Z"/>
  <path d="M28 18 C20 40 20 60 30 76" stroke-width="1.3"/>
  <path d="M112 18 C120 40 120 60 110 76" stroke-width="1.3"/>
  ${pattern}
</svg>`;

const sareePatterns = [
  // zari border
  `<path d="M42 150 L98 150 M46 158 L94 158" stroke-width="1.2"/>
   <path d="M50 150 L58 158 L66 150 L74 158 L82 150 L90 158" stroke-width="1.2"/>`,
  // mirror dots
  `<circle cx="50" cy="150" r="4" stroke-width="1.2"/><circle cx="65" cy="155" r="4" stroke-width="1.2"/>
   <circle cx="80" cy="150" r="4" stroke-width="1.2"/><circle cx="90" cy="158" r="3" stroke-width="1.2"/>
   <path d="M42 145 L98 145" stroke-width="1"/>`,
  // floral border
  `<circle cx="52" cy="152" r="3"/><circle cx="70" cy="158" r="3"/><circle cx="88" cy="152" r="3"/>
   <path d="M45 148 C55 140 65 156 75 148 C85 140 95 156 96 148" stroke-width="1.2"/>`,
  // kundan dots
  `<circle cx="55" cy="150" r="5" stroke-width="1.3"/><circle cx="55" cy="150" r="1.6"/>
   <circle cx="85" cy="158" r="5" stroke-width="1.3"/><circle cx="85" cy="158" r="1.6"/>
   <path d="M42 140 L98 140" stroke-width="1"/>`
];

const sareeIllustrations = sareePatterns.map(p => sareeBase(p));

// ---- Garment silhouettes (used for Dress Designing cards) ----
const dressIllustrations = [
  // Lehenga silhouette
  `<svg viewBox="0 0 140 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M52 20 L88 20 L92 62 L48 62 Z"/>
    <path d="M40 62 L100 62 L124 168 L16 168 Z"/>
    <path d="M40 62 L100 62" stroke-width="1.2"/>
    <path d="M30 100 Q70 110 110 100" stroke-width="1"/>
    <path d="M25 135 Q70 148 115 135" stroke-width="1"/>
  </svg>`,
  // Gown silhouette
  `<svg viewBox="0 0 140 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M58 18 L82 18 L88 55 L52 55 Z"/>
    <path d="M52 55 C40 90 34 130 30 168 L110 168 C106 130 100 90 88 55 Z"/>
    <path d="M52 55 L88 55" stroke-width="1.2"/>
    <path d="M45 110 Q70 118 95 110" stroke-width="1"/>
  </svg>`,
  // Anarkali silhouette
  `<svg viewBox="0 0 140 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M56 18 L84 18 L90 50 L50 50 Z"/>
    <path d="M50 50 C36 80 30 110 22 168 L118 168 C110 110 104 80 90 50 Z"/>
    <path d="M70 50 L70 168" stroke-width="1"/>
    <path d="M38 95 Q70 102 102 95" stroke-width="1"/>
    <path d="M30 135 Q70 145 110 135" stroke-width="1"/>
  </svg>`,
  // Suit (kurta + palazzo) silhouette
  `<svg viewBox="0 0 140 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M55 18 L85 18 L92 100 L48 100 Z"/>
    <path d="M48 100 L38 168 L62 168 L68 108 L72 108 L78 168 L102 168 L92 100 Z"/>
    <path d="M55 18 L85 18" stroke-width="1.2"/>
    <path d="M48 60 Q70 66 92 60" stroke-width="1"/>
  </svg>`
];

function handFor(i){ return handIllustrations[i % handIllustrations.length]; }
function sareeFor(i){ return sareeIllustrations[i % sareeIllustrations.length]; }
function dressFor(i){ return dressIllustrations[i % dressIllustrations.length]; }

/* ============================================================
   Sample data
============================================================ */
const mehandiData = [
  ["Bridal Full Hand Mehandi","Detailed bridal pattern for both hands, designed especially for the bride.",8000],
  ["Groom & Bride Special Mehandi","Matching motifs for the couple in a premium bridal design.",12000],
  ["Arabic Mehandi (Full Hand)","Bold floral vine pattern in modern Arabic style.",1200],
  ["Arabic Mehandi (Front Hand)","Light Arabic design for just the front of the hand.",600],
  ["Indo-Arabic Fusion Design","A beautiful blend of Indian motifs and Arabic vines.",900],
  ["Traditional Rajasthani Mehandi","Classic Rajasthani pattern with fine net-style detailing.",1500],
  ["Karva Chauth Special","Design with space for the husband's name and moon-star theme.",700],
  ["Party Wear Mehandi","Light and stylish design, perfect for any function.",500],
  ["Simple Floral Mehandi","Light floral pattern for everyday and small occasions.",300],
  ["Kids Mehandi Design","Cute and simple motifs designed for children.",150],
  ["Bridal Feet Mehandi","Matching bridal pattern for the feet.",2000],
  ["Simple Feet Mehandi","Light and comfortable foot design.",400],
  ["Mandala Mehandi Design","Geometric mandala pattern for a modern look.",800],
  ["Personalised / Portrait Mehandi","Fully custom design or portrait as per your request.",2500],
  ["Glitter & Stone Work Mehandi","Mehandi finished with glitter and stone detailing.",1000],
  ["Traditional Marwari Mehandi","Rich Marwari-style pattern with dense fine linework.",1800],
  ["Minimalist Finger Mehandi","Subtle, minimal design just for the fingers.",250],
  ["Engagement Special Mehandi","Elegant design created specially for engagement ceremonies.",3500]
];

const embroideryData = [
  ["Zardozi Heavy Border","Rich border work made with gold and silver threads.",6000],
  ["Resham Thread Work","Fine embroidery using colourful silk threads.",2500],
  ["Mirror Work Embroidery","Traditional Rajasthani embroidery decorated with tiny mirrors.",3000],
  ["Kundan Stone Embroidery","Premium bridal look decorated with kundan stones.",5500],
  ["Aari Embroidery","Fine chain-stitch embroidery done with a hook needle.",3500],
  ["Sequence & Stone Work","A dazzling combination of sequins and stones.",2800],
  ["Cutdana Embroidery","Rich finish created with fine cutdana beads.",4000],
  ["Gota Patti Work","Festive saree decorated with traditional gota patti.",2000],
  ["Pearl Border Embroidery","Elegant border design decorated with pearls.",3200],
  ["Thread + Zari Combo","A royal combination of thread and zari work.",4500],
  ["Bridal Heavy Embroidery Saree","Fully handcrafted heavy saree for weddings.",9000],
  ["Simple Border Embroidery","Light border work for everyday sarees.",1200],
  ["Chikankari Embroidery","Delicate Lucknowi-style shadow work embroidery.",2200],
  ["Phulkari Work","Vibrant Punjabi-style Phulkari embroidery.",1800],
  ["Tassel & Lace Border","Decorative tassel and lace finishing along the border.",1500]
];

const dressData = [
  ["Bridal Lehenga Design","Fully custom bridal lehenga with heavy work.",15000],
  ["Party Wear Anarkali","Elegant Anarkali suit with a flowy silhouette.",5000],
  ["Indo-Western Gown","A fusion gown blending modern cuts with traditional touches.",6500],
  ["Designer Blouse Stitching","Perfectly fitted designer blouse to pair with any saree.",1800],
  ["Sharara Set Design","Trendy sharara set designed for festive occasions.",4500],
  ["Palazzo Suit Design","Comfortable and stylish palazzo suit set.",2500],
  ["Custom Wedding Gown","Fully custom gown designed for wedding receptions.",18000],
  ["Kurti Designing","Trendy kurti design for everyday wear.",1200],
  ["Salwar Suit (Party Wear)","Salwar suit specially designed for parties.",3000],
  ["Crop Top Lehenga","Crop-top style lehenga for the modern bride.",7500],
  ["Festive Kids Wear","Special festive outfit designed for children.",1500],
  ["Custom Fusion Wear","A completely unique fusion outfit designed to your vision.",5000],
  ["Peplum Blouse Design","Stylish peplum-cut blouse for a modern silhouette.",2200],
  ["Co-ord Set Designing","Trendy matching co-ord set for a chic, easy look.",2800],
  ["Cape Style Gown","Statement gown with a flowing cape overlay.",8500]
];

/* ============================================================
   Render cards
============================================================ */
function renderGrid(containerId, data, tag, artFn){
  const el = document.getElementById(containerId);
  el.innerHTML = data.map((item,i)=>{
    const [name, desc, price] = item;
    return `
    <div class="card">
      <div class="card-art">
        <span class="card-tag">${tag}</span>
        <div style="width:92px;height:92px;color:var(--maroon);">${artFn(i)}</div>
        <span class="card-caption">Design preview</span>
      </div>
      <div class="card-body">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="card-foot">
          <span class="price">₹${price.toLocaleString('en-IN')}</span>
          <button class="card-book" data-name="${name}" data-price="${price}" data-service="${tag}">Book</button>
        </div>
      </div>
    </div>`;
  }).join('');
}
renderGrid('grid-mehandi', mehandiData, 'Mehandi', handFor);
renderGrid('grid-embroidery', embroideryData, 'Embroidery', sareeFor);
renderGrid('grid-dress', dressData, 'Dress Design', dressFor);

/* ============================================================
   Booking form logic
============================================================ */
const serviceMap = { "Mehandi": mehandiData, "Saree Embroidery": embroideryData, "Dress Designing": dressData };
const serviceSelect = document.getElementById('b-service');
const designSelect = document.getElementById('b-design');
const amountEl = document.getElementById('b-amount');

function populateDesigns(){
  const list = serviceMap[serviceSelect.value];
  designSelect.innerHTML = list.map(d => `<option value="${d[0]}" data-price="${d[2]}">${d[0]} — ₹${d[2].toLocaleString('en-IN')}</option>`).join('');
  updateAmount();
}
function updateAmount(){
  const opt = designSelect.options[designSelect.selectedIndex];
  amountEl.textContent = opt ? '₹' + Number(opt.dataset.price).toLocaleString('en-IN') : '₹—';
}
serviceSelect.addEventListener('change', populateDesigns);
designSelect.addEventListener('change', updateAmount);
populateDesigns();

// gallery "Book" buttons prefill the form
document.querySelectorAll('.card-book').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const { name, service } = btn.dataset;
    serviceSelect.value = service === 'Mehandi' ? 'Mehandi' : (service === 'Embroidery' ? 'Saree Embroidery' : 'Dress Designing');
    populateDesigns();
    designSelect.value = name;
    updateAmount();
    document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  });
});

// payment pill active state
document.querySelectorAll('.pay-pill').forEach(p=>{
  p.addEventListener('click', ()=>{
    document.querySelectorAll('.pay-pill').forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
  });
});

// form submit -> WhatsApp deep link
document.getElementById('booking-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('b-name').value.trim();
  const phone = document.getElementById('b-phone').value.trim();
  const service = serviceSelect.value;
  const design = designSelect.value;
  const date = document.getElementById('b-date').value;
  const note = document.getElementById('b-note').value.trim();
  const pay = document.querySelector('input[name="pay"]:checked').value;
  const amount = amountEl.textContent;

  const msg = `Hello Supriya Mehandi Center%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADesign: ${encodeURIComponent(design)}%0ADate: ${encodeURIComponent(date)}%0AEstimated amount: ${encodeURIComponent(amount)}%0APayment method: ${encodeURIComponent(pay)}%0ANote: ${encodeURIComponent(note || '-')}`;
  window.open(`https://wa.me/919559087315?text=${msg}`, '_blank');

  document.getElementById('success-box').classList.add('show');
});

/* ============================================================
   Henna vine divider scroll reveal
============================================================ */
const vines = document.querySelectorAll('.vine');
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('draw'); });
},{threshold:0.4});
vines.forEach(v=>io.observe(v));
