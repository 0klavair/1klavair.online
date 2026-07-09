// Site 100% factice : rien n'est envoyé nulle part. Panier gardé en sessionStorage (uniquement dans le navigateur,
// le temps de l'onglet) pour survivre à la navigation entre pages catégories — aucune donnée ne quitte le poste.

function stars(n) { return '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n); }
function formatPrice(n) { return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'; }

function show(id) { const el = document.getElementById(id); if (el) el.classList.add('active'); }
function hide(id) { const el = document.getElementById(id); if (el) el.classList.remove('active'); }

// Chaque ligne panier : { type: 'product'|'bodyguard', id, qty }
let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
let discountPercent = parseInt(sessionStorage.getItem('discount') || '0', 10);

function saveCart() {
  sessionStorage.setItem('cart', JSON.stringify(cart));
  sessionStorage.setItem('discount', String(discountPercent));
}

const cartCountEl = document.getElementById('cartCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

function cartEntity(item) {
  return item.type === 'bodyguard' ? BODYGUARDS.find(b => b.id === item.id) : PRODUCTS.find(p => p.id === item.id);
}
function cartItemIcon(entity, item) {
  return item.type === 'bodyguard' ? bgAvatarHtml((entity.photos && entity.photos[0]) || null) : entity.icon;
}
function cartItemName(entity, item) {
  return item.type === 'bodyguard' ? `Location : ${entity.name} (1 jour)` : entity.name;
}

function updateCartUI() {
  if (!cartCountEl) return;
  cartCountEl.textContent = cart.reduce((n, i) => n + i.qty, 0);
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    const entity = cartEntity(item);
    if (!entity) return;
    const lineTotal = entity.price * item.qty;
    total += lineTotal;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-icon">${cartItemIcon(entity, item)}</div>
      <div class="cart-item-info">
        <span class="cart-item-name">${cartItemName(entity, item)}</span>
        <div class="cart-qty">
          <button class="qty-btn" data-idx="${idx}" data-dir="-1">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" data-idx="${idx}" data-dir="1">+</button>
        </div>
      </div>
      <span class="cart-item-price">${formatPrice(lineTotal)}</span>
    `;
    cartItemsEl.appendChild(div);
  });
  const discounted = total * (1 - discountPercent / 100);
  cartTotalEl.innerHTML = discountPercent > 0
    ? `<span class="old-total">${formatPrice(total)}</span>${formatPrice(discounted)}`
    : formatPrice(total);
  saveCart();
}
updateCartUI();

cartItemsEl && cartItemsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.qty-btn');
  if (!btn) return;
  const idx = parseInt(btn.dataset.idx, 10);
  const dir = parseInt(btn.dataset.dir, 10);
  if (!cart[idx]) return;
  cart[idx].qty += dir;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
});

function flashBtn(btn) {
  if (!btn) return;
  const original = btn.textContent;
  btn.textContent = 'Ajouté ✓';
  setTimeout(() => btn.textContent = original, 1000);
}

function addProductToCart(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(c => c.type === 'product' && c.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ type: 'product', id, qty: 1 });
  updateCartUI();
  flashBtn(btn);
}

function addBodyguardToCart(id, btn) {
  const b = BODYGUARDS.find(x => x.id === id);
  if (!b) return;
  const existing = cart.find(c => c.type === 'bodyguard' && c.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ type: 'bodyguard', id, qty: 1 });
  updateCartUI();
  flashBtn(btn);
}

// ---- Grille produits (clic sur l'image/titre => page produit dédiée) ----
function productCardHtml(p) {
  return `
    <div class="product" data-id="${p.id}">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <a class="product-link" href="produit.html?id=${p.id}">
        <div class="product-img">${p.icon}</div>
        <h3>${p.name}</h3>
      </a>
      <p class="desc">${p.shortDesc}</p>
      <p class="rating">${stars(p.stars)} <span>(${p.reviewCount} avis)</span></p>
      <p class="price">${formatPrice(p.price)}</p>
      <button class="add-btn">Ajouter au panier</button>
    </div>
  `;
}

function renderProductGrid(containerEl, products) {
  if (!containerEl) return;
  containerEl.innerHTML = products.length ? products.map(productCardHtml).join('') : '<p class="no-results">Aucun produit trouvé.</p>';
}

function wireProductGrid(containerEl) {
  if (!containerEl) return;
  containerEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('add-btn')) return;
    const el = e.target.closest('.product');
    if (el) addProductToCart(el.dataset.id, e.target);
  });
}

// ---- Grille gardes du corps (clic => page dédiée) ----
function bgAvatarHtml(photo) { return photo ? `<img src="${photo}" alt="">` : silhouetteIcon(); }
function bgStatsHtml(statsObj) {
  return Object.entries(statsObj).map(([label, val]) => `
    <div class="bg-stat-row">
      <span>${label}</span>
      <div class="bg-stat-bar"><div class="bg-stat-fill" style="width:${val}%"></div></div>
    </div>
  `).join('');
}

function bgCardHtml(b) {
  return `
    <div class="bg-card" data-id="${b.id}">
      <a class="bg-link" href="garde.html?id=${b.id}">
        <div class="bg-avatar">${bgAvatarHtml((b.photos && b.photos[0]) || null)}</div>
        <h3>${b.name}</h3>
      </a>
      <p class="desc">${b.shortDesc}</p>
      <div class="bg-stats">${bgStatsHtml(b.stats)}</div>
      <p class="price">${formatPrice(b.price)} / jour</p>
      <button class="add-btn">Louer 1 jour</button>
    </div>
  `;
}

function renderBodyguardGrid(containerEl, guards) {
  if (!containerEl) return;
  containerEl.innerHTML = guards.length ? guards.map(bgCardHtml).join('') : '<p class="no-results">Aucun garde du corps trouvé.</p>';
}

function wireBodyguardGrid(containerEl) {
  if (!containerEl) return;
  containerEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('add-btn')) return;
    const el = e.target.closest('.bg-card');
    if (el) addBodyguardToCart(el.dataset.id, e.target);
  });
}

wireProductGrid(document.getElementById('catalogGrid'));
wireBodyguardGrid(document.getElementById('bodyguardGrid'));

// ---- Galerie photo (page produit / page garde du corps) ----
function renderGallery(mainEl, thumbsEl, images) {
  if (!mainEl) return;
  let current = 0;
  function paint() {
    mainEl.innerHTML = images[current];
    if (thumbsEl) thumbsEl.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === current));
  }
  if (thumbsEl) {
    if (images.length > 1) {
      thumbsEl.innerHTML = images.map((img, i) => `<div class="thumb${i === 0 ? ' active' : ''}" data-i="${i}">${img}</div>`).join('');
      thumbsEl.querySelectorAll('.thumb').forEach(t => {
        t.addEventListener('click', () => { current = parseInt(t.dataset.i, 10); paint(); });
      });
    } else {
      thumbsEl.innerHTML = '';
    }
  }
  paint();
}

// ---- Modales communes (panier, compte, concours, validation, reveal) ----
const $openCart = document.getElementById('openCart');
$openCart && $openCart.addEventListener('click', () => show('cartOverlay'));
const $closeCart = document.getElementById('closeCart');
$closeCart && $closeCart.addEventListener('click', () => hide('cartOverlay'));

const $goCheckout = document.getElementById('goCheckout');
$goCheckout && $goCheckout.addEventListener('click', () => {
  if (cart.length === 0) return;
  hide('cartOverlay');
  show('accountModal');
});

const $accountNext = document.getElementById('accountNext');
$accountNext && $accountNext.addEventListener('click', () => { hide('accountModal'); show('contestModal'); });
const $accountSkip = document.getElementById('accountSkip');
$accountSkip && $accountSkip.addEventListener('click', () => { hide('accountModal'); show('contestModal'); });

function goToFinal() {
  const summary = cart.map(item => {
    const entity = cartEntity(item);
    return entity ? `${cartItemName(entity, item)} x${item.qty}` : null;
  }).filter(Boolean).join(', ');
  document.getElementById('finalSummary').textContent = summary || 'Panier vide';
  show('finalModal');
}

const $finalConfirm = document.getElementById('finalConfirm');
$finalConfirm && $finalConfirm.addEventListener('click', () => { hide('finalModal'); show('revealScreen'); });

const $restartBtn = document.getElementById('restartBtn');
$restartBtn && $restartBtn.addEventListener('click', () => {
  cart = [];
  discountPercent = 0;
  updateCartUI();
  hide('revealScreen');
  document.querySelectorAll('input').forEach(i => i.value = '');
});

const PROMO_CODES = { 'TIKTOK10': 10, 'FREEDOM20': 20, 'SWAT50': 50, 'ARMEGRATUITE': 100 };
const $promoApply = document.getElementById('promoApply');
$promoApply && $promoApply.addEventListener('click', () => {
  const code = document.getElementById('promoInput').value.trim().toUpperCase();
  const msgEl = document.getElementById('promoMsg');
  if (PROMO_CODES[code] !== undefined) {
    discountPercent = PROMO_CODES[code];
    msgEl.textContent = `Code appliqué : -${discountPercent}%`;
    msgEl.className = 'promo-msg ok';
  } else {
    discountPercent = 0;
    msgEl.textContent = 'Code invalide';
    msgEl.className = 'promo-msg error';
  }
  updateCartUI();
});

// ---- Recherche globale : redirige vers resultats.html?q=... ----
const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = document.getElementById('searchInput').value.trim();
    window.location.href = 'resultats.html' + (q ? '?q=' + encodeURIComponent(q) : '');
  });
}

document.querySelectorAll('.brand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'resultats.html?q=' + encodeURIComponent(btn.dataset.brand);
  });
});

// ---- Jeu concours : roue de la fortune (100% fictive, aucun envoi, aucun vrai lot) ----
const WHEEL_PRIZES = ['Munitions 9mm', 'Rien du tout', 'Gilet pare-balles', 'Munitions 5.56', 'Pistolet Glock 17', 'Code promo -10%', 'Silencieux', 'Rejoue plus tard'];

function initWheel() {
  const modalRoot = document.querySelector('#contestModal .modal');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <h2>${uiGiftIcon()} Jeu concours — Tourne la roue</h2>
    <p class="modal-sub">Tirage 100% fictif : rien n'est envoyé, aucun vrai lot.</p>
    <div class="wheel-outer">
      <div class="wheel-pointer"></div>
      <div class="wheel" id="wheelEl"></div>
      <div class="wheel-labels" id="wheelLabels"></div>
    </div>
    <button class="modal-btn" id="spinBtn">Tourner la roue</button>
    <p class="wheel-result" id="wheelResult"></p>
    <button class="modal-btn" id="contestNext" style="display:none">Continuer</button>
    <button class="modal-skip" id="contestSkip">Non merci</button>
  `;

  const wheelEl = document.getElementById('wheelEl');
  const segAngle = 360 / WHEEL_PRIZES.length;
  const colors = ['#b3161a', '#1c1c1e'];
  const gradientParts = WHEEL_PRIZES.map((_, i) => `${colors[i % 2]} ${i * segAngle}deg ${(i + 1) * segAngle}deg`).join(', ');
  wheelEl.style.background = `conic-gradient(${gradientParts})`;

  document.getElementById('wheelLabels').innerHTML = WHEEL_PRIZES.map((prize, i) => {
    const angle = i * segAngle + segAngle / 2;
    return `<div class="wheel-label" style="transform: translate(-50%,-50%) rotate(${angle}deg) translate(90px) rotate(${-angle}deg)">${prize}</div>`;
  }).join('');

  let spinning = false;
  document.getElementById('spinBtn').addEventListener('click', () => {
    if (spinning) return;
    spinning = true;
    const prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
    const targetCenter = prizeIndex * segAngle + segAngle / 2;
    const finalRotation = 5 * 360 + (360 - targetCenter);
    wheelEl.style.transform = `rotate(${finalRotation}deg)`;
    document.getElementById('spinBtn').disabled = true;
    setTimeout(() => {
      document.getElementById('wheelResult').innerHTML = `${uiStarIcon()} Résultat : ${WHEEL_PRIZES[prizeIndex]} (fictif, rien n'est envoyé)`;
      document.getElementById('spinBtn').style.display = 'none';
      document.getElementById('contestNext').style.display = '';
      spinning = false;
    }, 4200);
  });

  document.getElementById('contestNext').addEventListener('click', () => { hide('contestModal'); goToFinal(); });
  document.getElementById('contestSkip').addEventListener('click', () => { hide('contestModal'); goToFinal(); });
}
initWheel();

// ---- Remplacement des émojis d'interface par des icônes SVG maison (style gribouillage) ----
function uiPhoneIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M9 9 Q6 22 18 31 Q26 36 31 30 L28 22 L21 25 Q15 20 16 13 L20 11 L15 4 Q10 5 9 9 Z" fill="#e8a13c"/>
  </g></svg></span>`;
}
function uiSearchIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <circle cx="17" cy="17" r="11" fill="none"/>
    <path d="M26 26 L35 35"/>
  </g></svg></span>`;
}
function uiAccountIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <circle cx="20" cy="13" r="7" fill="#999"/>
    <path d="M7 34 Q7 20 20 20 Q33 20 33 34 Z" fill="#999"/>
  </g></svg></span>`;
}
function uiCartIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M6 12 L10 12 L14 28 L30 28 L34 15 L12 15" fill="none"/>
    <circle cx="16" cy="34" r="2.5" fill="#fff"/>
    <circle cx="28" cy="34" r="2.5" fill="#fff"/>
  </g></svg></span>`;
}
function uiCloseIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="currentColor" stroke-width="5" stroke-linecap="round">
    <path d="M8 8 L32 32 M32 8 L8 32"/>
  </g></svg></span>`;
}
function uiCheckIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 20 L16 30 L33 8" fill="none"/>
  </g></svg></span>`;
}
function uiSocialIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M6 10 L34 10 L34 26 L18 26 L10 34 L12 26 L6 26 Z" fill="#f0f0f2"/>
  </g></svg></span>`;
}
function uiGiftIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="8" y="16" width="24" height="18" fill="#b3161a"/>
    <rect x="6" y="10" width="28" height="8" fill="#e8a13c"/>
    <path d="M20 10 L20 34"/>
  </g></svg></span>`;
}
function uiStarIcon() {
  return `<span class="ui-icon"><svg viewBox="0 0 40 40"><g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <path d="M20 4 L23 16 L34 12 L25 20 L34 28 L23 24 L20 36 L17 24 L6 28 L15 20 L6 12 L17 16 Z" fill="#e8a13c"/>
  </g></svg></span>`;
}

function swapEmoji(el, emojiChar, iconHtml) {
  if (el && el.innerHTML.includes(emojiChar)) {
    el.innerHTML = el.innerHTML.replace(emojiChar, iconHtml);
  }
}

swapEmoji(document.querySelector('.top-bar-inner span:first-child'), '📞', uiPhoneIcon());
swapEmoji(document.getElementById('searchBtn'), '🔍', uiSearchIcon());
swapEmoji(document.querySelector('.header-actions .icon-btn:not(.cart-btn)'), '👤', uiAccountIcon());
swapEmoji(document.getElementById('openCart'), '🛒', uiCartIcon());
swapEmoji(document.getElementById('closeCart'), '✕', uiCloseIcon());
swapEmoji(document.getElementById('closeDetail'), '✕', uiCloseIcon());
swapEmoji(document.getElementById('closeBodyguard'), '✕', uiCloseIcon());
swapEmoji(document.getElementById('finalConfirm'), '✅', uiCheckIcon());
swapEmoji(document.getElementById('bgSocialBtn'), '📱', uiSocialIcon());
