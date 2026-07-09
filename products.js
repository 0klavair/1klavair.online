// Site 100% factice : rien n'est envoyé nulle part, aucun stockage réseau, aucune vraie commande.
// Icônes générées en SVG maison (aucune photo, aucun asset externe).

// Chaque arme a désormais sa silhouette propre (traits distinctifs réels : marteau apparent,
// chargeur banane, crosse pliante, poignée de transport, bipied, levier de verrou...).

function glock17Icon(body, grip) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M14 50 L76 46 L79 36 L79 46 L60 49 L58 62 L44 65 L18 68 Z" fill="${body}"/>
    <rect x="17" y="55" width="13" height="27" rx="2" fill="${grip}"/>
    <path d="M38 63 Q33 70 39 76" fill="none"/>
    <rect x="74" y="41" width="4" height="5" fill="#ccc"/>
  </g></svg>`;
}

function sigP320Icon(body, grip) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M13 50 Q9 48 13 54 L58 50 L62 36 L80 34 L82 45 L62 48 L60 60 L46 64 L20 66 Z" fill="${body}"/>
    <rect x="18" y="46" width="3" height="8" fill="#222"/>
    <rect x="23" y="45" width="3" height="8" fill="#222"/>
    <rect x="28" y="44" width="3" height="8" fill="#222"/>
    <rect x="64" y="50" width="4" height="3" fill="#222"/>
    <rect x="70" y="49" width="4" height="3" fill="#222"/>
    <rect x="24" y="56" width="12" height="24" rx="2" fill="${grip}"/>
  </g></svg>`;
}

function beretta92fsIcon(body, grip) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="16" y="52" width="15" height="28" rx="2" fill="${grip}"/>
    <path d="M18 50 L78 45 L80 36 L82 36 L82 46 L64 49 L60 60 L46 63 L20 65 Z" fill="${body}"/>
    <path d="M24 47 L74 43" fill="none" stroke="#ddd" stroke-width="2"/>
    <circle cx="20" cy="52" r="4" fill="#222"/>
    <path d="M36 64 Q30 72 37 78" fill="none"/>
  </g></svg>`;
}

function colt1911Icon(body, grip) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M18 50 L74 47 L77 40 L78 47 L60 49 L58 60 L46 63 L20 65 Z" fill="${body}"/>
    <rect x="18" y="55" width="11" height="26" rx="2" fill="${grip}"/>
    <path d="M18 48 L13 41 L20 45 Z" fill="#222"/>
    <circle cx="76" cy="44" r="3" fill="#ccc"/>
    <path d="M33 63 Q28 70 34 76" fill="none"/>
  </g></svg>`;
}

function hkUspIcon(body, grip) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M22 52 L60 50 L62 40 L64 50 L52 52 L50 62 L38 64 L24 66 Z" fill="${body}"/>
    <rect x="54" y="46" width="3" height="4" fill="#222"/>
    <rect x="59" y="46" width="3" height="4" fill="#222"/>
    <rect x="25" y="56" width="11" height="22" rx="2" fill="${grip}"/>
    <rect x="20" y="58" width="5" height="7" rx="1" fill="${grip}"/>
  </g></svg>`;
}

function ak47Icon(metal, wood) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M15 36 L100 33 L102 25 L122 24 L123 33 L104 35 L100 47 L60 49 L58 37 Z" fill="${metal}"/>
    <rect x="18" y="37" width="38" height="9" rx="2" fill="${wood}"/>
    <path d="M6 40 L6 56 L20 56 L20 42 Z" fill="${wood}"/>
    <path d="M55 49 Q50 62 62 68 Q70 70 68 60 L58 49 Z" fill="${metal}"/>
    <rect x="118" y="27" width="4" height="10" fill="${metal}"/>
  </g></svg>`;
}

function m4a1Icon(body, accent) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M10 38 L95 35 L97 28 L100 28 L100 37 L70 39 Z" fill="${body}"/>
    <rect x="40" y="33" width="40" height="8" rx="2" fill="${body}"/>
    <circle cx="50" cy="37" r="1.5" fill="#111"/>
    <circle cx="58" cy="37" r="1.5" fill="#111"/>
    <circle cx="66" cy="37" r="1.5" fill="#111"/>
    <rect x="2" y="36" width="9" height="10" rx="2" fill="${accent}"/>
    <path d="M2 34 L2 46" fill="none"/>
    <path d="M55 48 L64 48 L62 68 L57 68 Z" fill="${accent}"/>
  </g></svg>`;
}

function scarlIcon(body, accent) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M10 40 L98 36 L100 27 L118 26 L119 35 L102 37 L96 50 L60 52 Z" fill="${body}"/>
    <circle cx="14" cy="40" r="4" fill="#222"/>
    <path d="M14 36 L2 34 L2 42 L14 44 Z" fill="${accent}"/>
    <path d="M58 52 L67 52 L65 66 L60 66 Z" fill="${accent}"/>
  </g></svg>`;
}

function g36Icon(body, mag) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M12 42 L90 39 L92 30 L115 29 L116 37 L94 39 L90 52 L58 54 Z" fill="${body}"/>
    <rect x="45" y="26" width="30" height="12" rx="3" fill="${body}"/>
    <rect x="58" y="36" width="4" height="6" fill="${body}"/>
    <path d="M10 40 L2 38 M10 46 L2 48" stroke-width="3"/>
    <rect x="0" y="36" width="4" height="14" rx="2" fill="#333"/>
    <path d="M60 54 Q55 66 66 70 Q72 71 70 62 L62 54 Z" fill="${mag}"/>
  </g></svg>`;
}

function barrettIcon(body) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M5 42 L110 39 L112 32 L138 31 L139 38 L114 40 L110 52 L60 54 Z" fill="${body}"/>
    <rect x="130" y="30" width="10" height="11" fill="#222"/>
    <path d="M132 30 L132 41 M136 30 L136 41" stroke-width="2"/>
    <path d="M100 50 L92 66 M108 50 L116 66" stroke-width="4"/>
    <circle cx="92" cy="66" r="2.5" fill="#222"/>
    <circle cx="116" cy="66" r="2.5" fill="#222"/>
    <rect x="70" y="18" width="36" height="10" rx="5" fill="#222"/>
    <rect x="78" y="27" width="4" height="6" fill="#222"/>
    <rect x="94" y="27" width="4" height="6" fill="#222"/>
  </g></svg>`;
}

function remington700Icon(wood, metal) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M5 44 L60 42 L62 34 L100 33 L101 40 L64 42 L60 54 L20 56 L8 52 Z" fill="${wood}"/>
    <rect x="100" y="35" width="36" height="6" fill="${metal}"/>
    <path d="M65 38 L72 46" stroke-width="4"/>
    <circle cx="72" cy="47" r="4" fill="${metal}"/>
    <rect x="60" y="20" width="34" height="9" rx="4" fill="#222"/>
    <rect x="68" y="28" width="3" height="6" fill="#222"/>
    <rect x="84" y="28" width="3" height="6" fill="#222"/>
  </g></svg>`;
}

function remington870Icon(body) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M6 40 L55 38 L57 46 L20 50 L8 48 Z" fill="${body}"/>
    <rect x="75" y="40" width="20" height="8" rx="3" fill="${body}"/>
    <rect x="57" y="36" width="75" height="5" fill="#2e2e2e"/>
    <rect x="57" y="46" width="70" height="4" fill="#2e2e2e"/>
    <circle cx="130" cy="38" r="2" fill="#fff"/>
  </g></svg>`;
}

function mossberg500Icon(body) {
  return `<svg viewBox="0 0 140 70"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M6 40 L55 38 L57 46 L20 50 L8 48 Z" fill="${body}"/>
    <circle cx="50" cy="36" r="3" fill="#e63946"/>
    <rect x="75" y="40" width="20" height="8" rx="3" fill="${body}"/>
    <path d="M79 41 L79 47 M84 41 L84 47 M89 41 L89 47" stroke-width="2"/>
    <rect x="57" y="36" width="75" height="5" fill="#2e2e2e"/>
    <rect x="57" y="46" width="70" height="4" fill="#2e2e2e"/>
    <circle cx="130" cy="38" r="2" fill="#fff"/>
  </g></svg>`;
}

function ammoIcon(box, bullet, count) {
  let bullets = '';
  const start = 50 - (count * 17) / 2;
  for (let i = 0; i < count; i++) {
    bullets += `<rect x="${start + i * 17}" y="18" width="9" height="30" fill="${bullet}"/>`;
  }
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="15" y="45" width="70" height="40" fill="${box}"/>
    ${bullets}
  </g></svg>`;
}

function vestIcon(body, plate) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M30 10 L70 10 L80 28 L75 92 L25 92 L20 28 Z" fill="${body}"/>
    <rect x="37" y="36" width="26" height="24" rx="3" fill="${plate}"/>
  </g></svg>`;
}

function holsterIcon(color) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M35 15 Q30 50 40 85 L65 85 Q70 50 62 15 Z" fill="${color}"/>
    <rect x="30" y="20" width="40" height="10" fill="#5c3a1e"/>
  </g></svg>`;
}

function scopeIcon() {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="20" y="42" width="60" height="16" rx="8" fill="#2e2e2e"/>
    <circle cx="20" cy="50" r="10" fill="#1a1a1a"/>
    <circle cx="80" cy="50" r="10" fill="#1a1a1a"/>
  </g></svg>`;
}

function headsetIcon() {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M20 50 Q20 15 50 15 Q80 15 80 50" fill="none"/>
    <rect x="12" y="45" width="16" height="26" rx="6" fill="#333"/>
    <rect x="72" y="45" width="16" height="26" rx="6" fill="#333"/>
  </g></svg>`;
}

function tankIcon(body) {
  return `<svg viewBox="0 0 140 80"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="65" cy="62" rx="58" ry="12" fill="#2b2b2b"/>
    <rect x="18" y="35" width="94" height="26" rx="6" fill="${body}"/>
    <rect x="55" y="18" width="30" height="18" rx="4" fill="${body}"/>
    <rect x="83" y="22" width="45" height="8" fill="#2b2b2b"/>
    <circle cx="35" cy="62" r="9" fill="#1a1a1a"/>
    <circle cx="65" cy="62" r="9" fill="#1a1a1a"/>
    <circle cx="95" cy="62" r="9" fill="#1a1a1a"/>
  </g></svg>`;
}

function droneIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M50 15 L58 55 L50 80 L42 55 Z" fill="${body}"/>
    <path d="M15 45 L42 52 L42 60 L15 58 Z" fill="${body}"/>
    <path d="M85 45 L58 52 L58 60 L85 58 Z" fill="${body}"/>
    <circle cx="50" cy="20" r="6" fill="#e63946"/>
  </g></svg>`;
}

function heliIcon(body) {
  return `<svg viewBox="0 0 140 80"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M30 40 Q30 25 55 25 L85 28 Q100 30 100 42 Q100 52 85 53 L45 53 Q30 52 30 40 Z" fill="${body}"/>
    <path d="M100 42 L130 38 L130 46 L100 46 Z" fill="${body}"/>
    <rect x="10" y="20" width="60" height="5" fill="#333"/>
    <rect x="95" y="18" width="5" height="16" fill="#333"/>
  </g></svg>`;
}

function launcherIcon(body) {
  return `<svg viewBox="0 0 140 80"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="20" y="30" width="90" height="30" rx="4" fill="${body}"/>
    <rect x="30" y="18" width="16" height="16" fill="#333"/>
    <rect x="52" y="18" width="16" height="16" fill="#333"/>
    <rect x="74" y="18" width="16" height="16" fill="#333"/>
    <circle cx="35" cy="70" r="9" fill="#1a1a1a"/>
    <circle cx="95" cy="70" r="9" fill="#1a1a1a"/>
  </g></svg>`;
}

function javelinIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="20" y="42" width="70" height="18" rx="9" fill="${body}"/>
    <rect x="40" y="30" width="24" height="14" fill="#333"/>
    <path d="M90 45 L100 51 L90 57 Z" fill="#e63946"/>
  </g></svg>`;
}

function silhouetteIcon() {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <circle cx="50" cy="35" r="18" fill="#999"/>
    <path d="M20 90 Q20 55 50 55 Q80 55 80 90 Z" fill="#999"/>
  </g></svg>`;
}

function flipperIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="25" y="15" width="50" height="70" rx="8" fill="${body}"/>
    <rect x="33" y="25" width="34" height="24" rx="3" fill="#e8843c"/>
    <circle cx="50" cy="65" r="10" fill="#2b2b2b"/>
  </g></svg>`;
}

function phoneIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="30" y="10" width="40" height="80" rx="8" fill="${body}"/>
    <rect x="35" y="18" width="30" height="55" fill="#8fd6ff"/>
    <circle cx="50" cy="82" r="3" fill="#111"/>
  </g></svg>`;
}

function switchIcon(body) {
  return `<svg viewBox="0 0 140 80"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="15" y="20" width="25" height="45" rx="6" fill="${body}"/>
    <rect x="100" y="20" width="25" height="45" rx="6" fill="${body}"/>
    <rect x="40" y="15" width="60" height="55" rx="4" fill="#333"/>
    <rect x="48" y="24" width="44" height="30" fill="#8fd6ff"/>
  </g></svg>`;
}

function hddIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="15" y="30" width="70" height="45" rx="4" fill="${body}"/>
    <circle cx="50" cy="52" r="14" fill="#2b2b2b"/>
    <circle cx="50" cy="52" r="5" fill="#8fd6ff"/>
  </g></svg>`;
}

function aiChipIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="30" y="30" width="40" height="40" rx="6" fill="${body}"/>
    <path d="M35 20 L35 30 M50 20 L50 30 M65 20 L65 30 M35 70 L35 80 M50 70 L50 80 M65 70 L65 80 M20 35 L30 35 M20 50 L30 50 M20 65 L30 65 M70 35 L80 35 M70 50 L80 50 M70 65 L80 65" fill="none" stroke="${body}"/>
    <circle cx="50" cy="50" r="8" fill="#e63946"/>
  </g></svg>`;
}

function eyeImplantIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <circle cx="50" cy="50" r="34" fill="${body}"/>
    <circle cx="50" cy="50" r="16" fill="#111"/>
    <circle cx="50" cy="50" r="7" fill="#e63946"/>
  </g></svg>`;
}

function clawIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="35" y="55" width="30" height="30" rx="6" fill="${body}"/>
    <path d="M40 55 L30 15 L45 55 Z" fill="#c8c8c8"/>
    <path d="M55 55 L60 12 L68 55 Z" fill="#c8c8c8"/>
    <path d="M65 55 L82 20 L75 58 Z" fill="#c8c8c8"/>
  </g></svg>`;
}

function cyberArmIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="42" y="10" width="18" height="45" rx="6" fill="${body}"/>
    <rect x="36" y="52" width="30" height="20" rx="6" fill="${body}"/>
    <rect x="30" y="70" width="42" height="14" rx="5" fill="#8a8a8a"/>
  </g></svg>`;
}

function silencerIcon(body) {
  return `<svg viewBox="0 0 140 60"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="10" y="20" width="90" height="20" rx="10" fill="${body}"/>
    <rect x="100" y="24" width="30" height="12" rx="4" fill="#5a5a5a"/>
  </g></svg>`;
}

function bottleIcon(body, label) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="42" y="6" width="16" height="12" fill="#999"/>
    <path d="M38 18 L62 18 L66 30 L70 90 L30 90 L34 30 Z" fill="${body}"/>
    <rect x="32" y="46" width="36" height="26" rx="3" fill="${label}"/>
  </g></svg>`;
}

function pouchIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M22 20 L78 20 L74 90 L26 90 Z" fill="${body}"/>
    <path d="M30 20 Q50 8 70 20" fill="none"/>
    <circle cx="50" cy="55" r="14" fill="#fff"/>
  </g></svg>`;
}

function canIcon(body, accent) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M30 20 Q30 12 50 12 Q70 12 70 20 L68 88 Q68 94 50 94 Q32 94 32 88 Z" fill="${body}"/>
    <ellipse cx="50" cy="20" rx="20" ry="6" fill="#d8d8d8"/>
    <ellipse cx="50" cy="19" rx="13" ry="3" fill="#aaa"/>
    <rect x="45" y="13" width="10" height="4" rx="2" fill="#888"/>
    <rect x="31" y="46" width="38" height="26" fill="${accent}"/>
    <rect x="31" y="46" width="38" height="5" fill="#fff"/>
    <circle cx="50" cy="59" r="8" fill="#fff"/>
    <path d="M22 42 L19 48 M78 42 L81 48" stroke-width="2"/>
  </g></svg>`;
}

function friendsIllustration() {
  return `<svg viewBox="0 0 400 220"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M30 220 L30 165 Q30 120 60 120 Q90 120 90 165 L90 220 Z" fill="#3a3a3a"/>
    <circle cx="60" cy="95" r="24" fill="#e8b98a"/>
    <path d="M60 130 L20 100 M20 100 L14 82 M20 100 L28 96" fill="none"/>
    <path d="M60 130 L92 155 L96 200 L84 202 L80 165" fill="#e8b98a"/>
    <rect x="76" y="168" width="18" height="42" rx="4" fill="#2ba8d1"/>
    <rect x="79" y="182" width="12" height="10" fill="#fff"/>

    <path d="M150 220 L150 160 Q150 108 190 108 Q230 108 230 160 L230 220 Z" fill="#b3161a"/>
    <circle cx="190" cy="80" r="27" fill="#e8b98a"/>
    <path d="M190 118 L160 150 L156 195 L168 197 L174 158" fill="#e8b98a"/>
    <rect x="150" y="160" width="18" height="44" rx="4" fill="#2ba8d1"/>
    <rect x="153" y="175" width="12" height="10" fill="#fff"/>
    <path d="M190 118 L220 150 L224 195 L212 197 L206 158" fill="#e8b98a"/>

    <path d="M300 220 L300 168 Q300 122 332 122 Q364 122 364 168 L364 220 Z" fill="#2b2b2b"/>
    <circle cx="332" cy="98" r="23" fill="#e8b98a"/>
    <path d="M332 132 L364 108 M364 108 L372 92 M364 108 L354 104" fill="none"/>
    <path d="M332 132 L302 155 L298 200 L310 202 L314 165" fill="#e8b98a"/>
    <rect x="356" y="86" width="17" height="40" rx="3" fill="#2ba8d1" transform="rotate(-18 364 106)"/>
  </g></svg>`;
}

function walkieIcon(body) {
  return `<svg viewBox="0 0 100 100"><g filter="url(#crayon)" stroke="#111" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <rect x="30" y="8" width="8" height="20" fill="#333"/>
    <rect x="25" y="25" width="50" height="65" rx="6" fill="${body}"/>
    <rect x="33" y="40" width="34" height="18" fill="#333"/>
    <circle cx="50" cy="72" r="6" fill="#e63946"/>
  </g></svg>`;
}

// Catégories valides : pistolet, fusil, munitions, equipement, lourd
const PRODUCTS = [
  {
    id: 'glock-17', cat: 'pistolet', ammoIds: ['munitions-9mm'],
    name: 'Glock 17', price: 620, badge: 'Nouveau', stars: 5, reviewCount: 214,
    icon: glock17Icon('#5a5a5a', '#2b2b2b'),
    shortDesc: 'Pistolet semi-automatique autrichien, référence des forces de police dans le monde. Carcasse polymère, fiabilité légendaire.',
    specs: [['Calibre', '9×19mm Parabellum'], ['Capacité', '17 coups'], ['Poids à vide', '625g'], ['Longueur', '186mm'], ['Canon', '114mm']],
    reviews: [
      { author: 'MarcT.', stars: 5, date: '12/03/2026', text: "Aucun enrayement en 2000 coups. Prise en main excellente." },
      { author: 'Sophie_D', stars: 4, date: '28/02/2026', text: "Détente un peu dure au début, s'assouplit avec le rodage." }
    ]
  },
  {
    id: 'sig-p320', cat: 'pistolet', ammoIds: ['munitions-9mm'],
    name: 'Sig Sauer P320', price: 680, stars: 5, reviewCount: 187,
    icon: sigP320Icon('#8a7355', '#5c4a35'),
    shortDesc: 'Pistolet modulaire américano-suisse, chassis interchangeable. Adopté par plusieurs armées de l\'OTAN.',
    specs: [['Calibre', '9×19mm'], ['Capacité', '17 coups'], ['Poids à vide', '840g'], ['Longueur', '203mm'], ['Canon', '119mm']],
    reviews: [
      { author: 'Kevin_R', stars: 5, date: '05/04/2026', text: "Recul très doux, précis à 25m sans souci." },
      { author: 'Antoine88', stars: 5, date: '19/01/2026', text: "Meilleur achat de l'année, finition impeccable." }
    ]
  },
  {
    id: 'beretta-92fs', cat: 'pistolet', ammoIds: ['munitions-9mm'],
    name: 'Beretta 92FS', price: 590, stars: 4, reviewCount: 165,
    icon: beretta92fsIcon('#b0b0b0', '#3a3a3a'),
    shortDesc: 'Pistolet italien à la carcasse ouverte caractéristique. Un classique héritier d\'un demi-siècle de service militaire.',
    specs: [['Calibre', '9×19mm'], ['Capacité', '15 coups'], ['Poids à vide', '970g'], ['Longueur', '217mm'], ['Canon', '125mm']],
    reviews: [
      { author: 'Julien_M', stars: 4, date: '02/03/2026', text: "Lourd mais très stable au tir. Look increvable." },
      { author: 'Fabrice_L', stars: 4, date: '14/02/2026', text: "Munitions un peu chères mais l'arme le mérite." }
    ]
  },
  {
    id: 'colt-1911', cat: 'pistolet', ammoIds: ['munitions-45acp'],
    name: 'Colt 1911', price: 710, stars: 5, reviewCount: 142,
    icon: colt1911Icon('#2f2f2f', '#5c3a1e'),
    shortDesc: 'Pistolet américain historique en calibre .45, plaquettes bois. Simple, robuste, collector.',
    specs: [['Calibre', '.45 ACP'], ['Capacité', '7 coups'], ['Poids à vide', '1105g'], ['Longueur', '216mm'], ['Canon', '127mm']],
    reviews: [
      { author: 'Georges_P', stars: 5, date: '22/03/2026', text: "Un bijou, pièce de collection autant que de tir." },
      { author: 'Nadia_K', stars: 5, date: '08/01/2026', text: "Recul franc mais très plaisant, arme de caractère." }
    ]
  },
  {
    id: 'hk-usp', cat: 'pistolet', ammoIds: ['munitions-9mm'],
    name: 'Heckler & Koch USP', price: 650, stars: 4, reviewCount: 98,
    icon: hkUspIcon('#3f4a3f', '#2b2b2b'),
    shortDesc: 'Pistolet compact allemand, polymère renforcé. Format sub-compact pensé pour le port discret.',
    specs: [['Calibre', '9×19mm'], ['Capacité', '13 coups'], ['Poids à vide', '748g'], ['Longueur', '194mm'], ['Canon', '108mm']],
    reviews: [
      { author: 'Lucas_V', stars: 4, date: '30/03/2026', text: "Compact, tient bien en poche holster." },
      { author: 'Emma_C', stars: 4, date: '11/02/2026', text: "Sûreté ambidextre très pratique." }
    ]
  },

  {
    id: 'ak-47', cat: 'fusil', ammoIds: ['munitions-762'],
    name: 'AK-47 (Kalashnikov)', price: 1150, badge: 'Nouveau', stars: 5, reviewCount: 341,
    icon: ak47Icon('#3a3a3a', '#7a5230'),
    shortDesc: 'Fusil d\'assaut soviétique le plus produit au monde. Robustesse et simplicité mécanique légendaires.',
    specs: [['Calibre', '7,62×39mm'], ['Capacité', '30 coups'], ['Poids à vide', '3,8kg'], ['Longueur', '870mm'], ['Cadence', '600 coups/min']],
    reviews: [
      { author: 'Rachid_B', stars: 5, date: '15/03/2026', text: "Increvable même sale, c'est sa réputation qui parle." },
      { author: 'Vincent_A', stars: 5, date: '20/02/2026', text: "Précision correcte, fiabilité au top." }
    ]
  },
  {
    id: 'm4a1', cat: 'fusil', ammoIds: ['munitions-556'],
    name: 'M4A1 Carbine', price: 1290, stars: 5, reviewCount: 298,
    icon: m4a1Icon('#3a3a3a', '#2b2b2b'),
    shortDesc: 'Carabine américaine modulaire, crosse rétractable, rail picatinny complet. Standard de l\'infanterie US.',
    specs: [['Calibre', '5,56×45mm OTAN'], ['Capacité', '30 coups'], ['Poids à vide', '2,9kg'], ['Longueur', '840mm (crosse déployée)'], ['Cadence', '850 coups/min']],
    reviews: [
      { author: 'Damien_F', stars: 5, date: '01/04/2026', text: "Ultra modulable, accessoires faciles à monter." },
      { author: 'Karim_S', stars: 4, date: '17/01/2026', text: "Léger, agréable en tir prolongé." }
    ]
  },
  {
    id: 'scar-l', cat: 'fusil', ammoIds: ['munitions-556'],
    name: 'FN SCAR-L', price: 1480, stars: 5, reviewCount: 87,
    icon: scarlIcon('#8a7355', '#5c4a35'),
    shortDesc: 'Fusil d\'assaut belge modulaire, conçu pour les forces spéciales. Changement de calibre rapide.',
    specs: [['Calibre', '5,56×45mm'], ['Capacité', '30 coups'], ['Poids à vide', '3,3kg'], ['Longueur', '885mm'], ['Cadence', '625 coups/min']],
    reviews: [
      { author: 'Olivier_D', stars: 5, date: '25/03/2026', text: "Finition haut de gamme, très peu de recul." },
      { author: 'Bastien_G', stars: 5, date: '09/02/2026', text: "Cher mais qualité militaire au rendez-vous." }
    ]
  },
  {
    id: 'g36', cat: 'fusil', ammoIds: ['munitions-556'],
    name: 'Heckler & Koch G36', price: 1390, stars: 4, reviewCount: 112,
    icon: g36Icon('#4a5a3a', '#8fd6ff'),
    shortDesc: 'Fusil d\'assaut allemand, poignée de transport intégrée, optique 3x native.',
    specs: [['Calibre', '5,56×45mm'], ['Capacité', '30 coups'], ['Poids à vide', '3,6kg'], ['Longueur', '999mm'], ['Cadence', '750 coups/min']],
    reviews: [
      { author: 'Thibault_M', stars: 4, date: '03/03/2026', text: "Optique intégrée très pratique pour débuter." },
      { author: 'Sarah_N', stars: 4, date: '22/01/2026', text: "Un poil lourd mais très précis." }
    ]
  },
  {
    id: 'barrett-m82', cat: 'fusil', ammoIds: ['munitions-50bmg'],
    name: 'Barrett M82', price: 4200, badge: 'Nouveau', stars: 5, reviewCount: 41,
    icon: barrettIcon('#a08558'),
    shortDesc: 'Fusil de précision anti-matériel américain, calibre .50. Bipied intégré, frein de bouche massif.',
    specs: [['Calibre', '.50 BMG'], ['Capacité', '10 coups'], ['Poids à vide', '13,5kg'], ['Longueur', '1450mm'], ['Portée efficace', '1800m']],
    reviews: [
      { author: 'Frederic_H', stars: 5, date: '28/03/2026', text: "Puissance hors norme, recul étonnamment gérable." },
      { author: 'Laurent_Q', stars: 5, date: '05/02/2026', text: "Il faut de la place pour le stocker mais quelle bête." }
    ]
  },
  {
    id: 'remington-700', cat: 'fusil', ammoIds: ['munitions-308'],
    name: 'Remington 700', price: 1890, stars: 5, reviewCount: 76,
    icon: remington700Icon('#6b4423', '#5c5c4d'),
    shortDesc: 'Fusil de précision à culasse verrouillée, canon lourd flottant. Lunette 4-16x incluse.',
    specs: [['Calibre', '.308 Winchester'], ['Capacité', '5 coups'], ['Poids à vide', '3,8kg'], ['Longueur', '1090mm'], ['Précision', '< 1 MOA à 300m']],
    reviews: [
      { author: 'Guillaume_T', stars: 5, date: '14/03/2026', text: "Groupement serré dès la première sortie." },
      { author: 'Pauline_R', stars: 5, date: '30/01/2026', text: "Culasse très douce, lunette de bonne qualité." }
    ]
  },
  {
    id: 'remington-870', cat: 'fusil', ammoIds: ['munitions-12ga'],
    name: 'Remington 870', price: 780, stars: 4, reviewCount: 152,
    icon: remington870Icon('#4a3524'),
    shortDesc: 'Fusil à pompe américain, tube magasin 8 coups. Le classique de la défense rapprochée.',
    specs: [['Calibre', '12'], ['Capacité', '8 coups'], ['Poids à vide', '3,2kg'], ['Longueur canon', '470mm']],
    reviews: [
      { author: 'Yannick_B', stars: 4, date: '19/03/2026', text: "Pompe fluide, aucun accroc après 500 cartouches." },
      { author: 'Cedric_W', stars: 5, date: '02/02/2026', text: "Increvable, entretien minimal." }
    ]
  },
  {
    id: 'mossberg-500', cat: 'fusil', ammoIds: ['munitions-12ga'],
    name: 'Mossberg 500', price: 690, stars: 4, reviewCount: 133,
    icon: mossberg500Icon('#333'),
    shortDesc: 'Fusil à pompe américain, double barrette d\'action. Rapport qualité-prix réputé.',
    specs: [['Calibre', '12'], ['Capacité', '7 coups'], ['Poids à vide', '3,1kg'], ['Longueur canon', '470mm']],
    reviews: [
      { author: 'Mathieu_C', stars: 4, date: '11/03/2026', text: "Bon compromis prix/qualité, sûreté au top du guidon pratique." },
      { author: 'Ines_F', stars: 4, date: '27/01/2026', text: "Un peu rugueux à la pompe au début, ça se rode." }
    ]
  },

  {
    id: 'munitions-9mm', cat: 'munitions', compatibleWith: ['glock-17', 'sig-p320', 'beretta-92fs', 'hk-usp'],
    name: 'Munitions 9×19mm x500', price: 180, stars: 5, reviewCount: 430,
    icon: ammoIcon('#c9a227', '#b5651d', 3),
    shortDesc: 'Boîtes hermétiques de munitions 9mm, conservation longue durée. Compatible tous pistolets standards.',
    specs: [['Calibre', '9×19mm'], ['Quantité', '500 cartouches'], ['Conditionnement', 'Boîtes de 50'], ['Amorçage', 'Boxer']],
    reviews: [
      { author: 'Nicolas_E', stars: 5, date: '20/03/2026', text: "Zéro raté sur les 500, amorçage impeccable." },
      { author: 'Amelie_S', stars: 5, date: '08/02/2026', text: "Livraison rapide, emballage discret et solide." }
    ]
  },
  {
    id: 'munitions-556', cat: 'munitions', compatibleWith: ['m4a1', 'scar-l', 'g36'],
    name: 'Munitions 5.56 OTAN x1000', price: 320, stars: 5, reviewCount: 287,
    icon: ammoIcon('#4a5a3a', '#c9a227', 4),
    shortDesc: 'Munitions standard OTAN pour carabines et fusils d\'assaut. Le pack préféré des acheteurs réguliers.',
    specs: [['Calibre', '5,56×45mm'], ['Quantité', '1000 cartouches'], ['Conditionnement', 'Boîtes de 100'], ['Amorçage', 'Boxer']],
    reviews: [
      { author: 'Romain_K', stars: 5, date: '25/03/2026', text: "Précision constante, aucun enrayement." },
      { author: 'Julie_H', stars: 5, date: '13/01/2026', text: "Le format 1000 est très économique." }
    ]
  },
  {
    id: 'munitions-308', cat: 'munitions', compatibleWith: ['remington-700'],
    name: 'Munitions .308 Winchester x200', price: 210, stars: 4, reviewCount: 94,
    icon: ammoIcon('#5c5c5c', '#c9a227', 3),
    shortDesc: 'Munitions de précision pour fusils à verrou, ogive appairée pour un groupement serré.',
    specs: [['Calibre', '.308 Winchester'], ['Quantité', '200 cartouches'], ['Conditionnement', 'Boîtes de 20'], ['Ogive', 'Pointe polymère']],
    reviews: [
      { author: 'Sebastien_L', stars: 4, date: '02/03/2026', text: "Groupement net à 300m, un peu chère au coup." },
      { author: 'Camille_B', stars: 5, date: '19/02/2026', text: "Qualité constante d'une boîte à l'autre." }
    ]
  },
  {
    id: 'munitions-762', cat: 'munitions', compatibleWith: ['ak-47'],
    name: 'Munitions 7.62×39mm x500', price: 175, stars: 5, reviewCount: 201,
    icon: ammoIcon('#8a7355', '#b5651d', 3),
    shortDesc: 'Munitions standard pour fusils d\'assaut de type soviétique. Robuste, bon marché, dispo en grande quantité.',
    specs: [['Calibre', '7,62×39mm'], ['Quantité', '500 cartouches'], ['Conditionnement', 'Boîtes de 50'], ['Amorçage', 'Berdan']],
    reviews: [
      { author: 'Igor_T', stars: 5, date: '11/03/2026', text: "Aucun souci de fonctionnement, même munitions bas de gamme testées." },
      { author: 'Yannis_P', stars: 5, date: '29/01/2026', text: "Prix imbattable pour la quantité." }
    ]
  },
  {
    id: 'munitions-45acp', cat: 'munitions', compatibleWith: ['colt-1911'],
    name: 'Munitions .45 ACP x300', price: 195, stars: 5, reviewCount: 88,
    icon: ammoIcon('#7a4a26', '#b5651d', 2),
    shortDesc: 'Munitions calibre .45, arrêt puissant. Pour pistolets classiques type 1911.',
    specs: [['Calibre', '.45 ACP'], ['Quantité', '300 cartouches'], ['Conditionnement', 'Boîtes de 30'], ['Amorçage', 'Boxer']],
    reviews: [
      { author: 'Bruno_C', stars: 5, date: '16/03/2026', text: "Recul franc mais aucun raté sur les 300." },
      { author: 'Sandra_L', stars: 4, date: '04/02/2026', text: "Un peu chère mais qualité au rendez-vous." }
    ]
  },
  {
    id: 'munitions-50bmg', cat: 'munitions', compatibleWith: ['barrett-m82'],
    name: 'Munitions .50 BMG x50', price: 480, stars: 5, reviewCount: 22,
    icon: ammoIcon('#3a3a3a', '#c9a227', 2),
    shortDesc: 'Munitions anti-matériel calibre .50. Boîte compacte, coup unitaire impressionnant.',
    specs: [['Calibre', '.50 BMG'], ['Quantité', '50 cartouches'], ['Conditionnement', 'Boîte de 10'], ['Poids unitaire', '110g']],
    reviews: [
      { author: 'Henri_D', stars: 5, date: '21/03/2026', text: "Chaque cartouche pèse une tonne, littéralement." },
      { author: 'Farid_N', stars: 5, date: '02/02/2026', text: "Précision remarquable pour du calibre aussi lourd." }
    ]
  },
  {
    id: 'munitions-12ga', cat: 'munitions', compatibleWith: ['remington-870', 'mossberg-500'],
    name: 'Cartouches calibre 12 x250', price: 150, stars: 5, reviewCount: 267,
    icon: ammoIcon('#c9a227', '#2b2b2b', 4),
    shortDesc: 'Cartouches à plombs calibre 12, standard pour fusils à pompe. Le grand classique.',
    specs: [['Calibre', '12'], ['Quantité', '250 cartouches'], ['Conditionnement', 'Boîtes de 25'], ['Type', 'Plombs n°6']],
    reviews: [
      { author: 'Gerard_F', stars: 5, date: '09/03/2026', text: "Standard fiable, jamais un souci d'alimentation." },
      { author: 'Melissa_R', stars: 5, date: '23/01/2026', text: "Bon rapport quantité-prix, livraison rapide." }
    ]
  },

  {
    id: 'gilet-iiia', cat: 'equipement',
    name: 'Gilet tactique niveau IIIA', price: 220, stars: 4, reviewCount: 266,
    icon: vestIcon('#3a3a3a', '#555'),
    shortDesc: 'Gilet tactique multi-poches modulables MOLLE, fermeture rapide, coloris noir/coyote. Tailles S à XXL.',
    specs: [['Niveau de protection', 'NIJ IIIA'], ['Poids', '2,1kg'], ['Tailles', 'S à XXL'], ['Fixation', 'MOLLE / velcro']],
    reviews: [
      { author: 'Florian_P', stars: 4, date: '15/03/2026', text: "Confortable, bonne répartition du poids." },
      { author: 'Manon_T', stars: 4, date: '30/01/2026', text: "Poches bien pensées, respirant l'été." }
    ]
  },
  {
    id: 'gilet-iv', cat: 'equipement',
    name: 'Gilet pare-balles niveau IV', price: 890, badge: 'Nouveau', stars: 5, reviewCount: 59,
    icon: vestIcon('#2b2b2b', '#6b6b6b'),
    shortDesc: 'Plaques céramique amovibles niveau IV, protection frontale et dorsale, sangles réglables.',
    specs: [['Niveau de protection', 'NIJ IV'], ['Poids', '3,2kg'], ['Plaques', 'Céramique amovibles'], ['Tailles', 'M à XXL']],
    reviews: [
      { author: 'Jerome_V', stars: 5, date: '22/03/2026', text: "Lourd mais rassurant, plaques faciles à retirer." },
      { author: 'Chloe_M', stars: 5, date: '06/02/2026', text: "Finition sérieuse, sangles très solides." }
    ]
  },
  {
    id: 'holster', cat: 'equipement',
    name: 'Holster cuir QuickDraw', price: 65, stars: 4, reviewCount: 112,
    icon: holsterIcon('#7a4a26'),
    shortDesc: 'Holster en cuir pleine fleur cousu main. Rétention réglable, port ceinture ou cuisse.',
    specs: [['Matière', 'Cuir pleine fleur'], ['Fixation', 'Ceinture / cuisse'], ['Compatibilité', 'Pistolets compacts'], ['Rétention', 'Réglable']],
    reviews: [
      { author: 'Alexandre_J', stars: 4, date: '10/03/2026', text: "Cuir de belle qualité, rétention parfaite après réglage." },
      { author: 'Elodie_K', stars: 5, date: '24/01/2026', text: "Confortable même en port prolongé." }
    ]
  },
  {
    id: 'scope-predator', cat: 'equipement',
    name: 'Lunette de visée Predator 4x', price: 340, stars: 4, reviewCount: 83,
    icon: scopeIcon(),
    shortDesc: 'Lunette grossissement 4x fixe, réticule gravé, étanche et anti-buée. Livrée avec montage picatinny.',
    specs: [['Grossissement', '4x fixe'], ['Étanchéité', 'IPX7'], ['Réticule', 'Gravé, éclairé'], ['Montage', 'Rail picatinny inclus']],
    reviews: [
      { author: 'Patrick_O', stars: 4, date: '18/03/2026', text: "Image nette, bon contraste même en faible lumière." },
      { author: 'Aurelie_N', stars: 4, date: '01/02/2026', text: "Montage rapide, tourelles précises au clic." }
    ]
  },
  {
    id: 'headset-silentpro', cat: 'equipement',
    name: 'Casque anti-bruit électronique SilentPro', price: 120, stars: 5, reviewCount: 140,
    icon: headsetIcon(),
    shortDesc: 'Réduction active du bruit, amplification des sons ambiants. Idéal pour le tir sportif prolongé.',
    specs: [['Réduction bruit', 'Active électronique'], ['Autonomie', '200h'], ['Amplification', 'Sons ambiants'], ['Poids', '310g']],
    reviews: [
      { author: 'Baptiste_R', stars: 5, date: '27/03/2026', text: "Coupe net les détonations, on entend les voix normalement." },
      { author: 'Marine_D', stars: 5, date: '12/02/2026', text: "Autonomie annoncée respectée, très confortable." }
    ]
  },
  {
    id: 'silencieux-pistolet', cat: 'equipement',
    name: 'Silencieux « QuietTech 9 » (pistolet)', price: 210, stars: 4, reviewCount: 76,
    icon: silencerIcon('#3a3a3a'),
    shortDesc: 'Modérateur de son fileté pour pistolets 9mm. Réduction sonore significative, montage rapide.',
    specs: [['Calibre', '9mm'], ['Filetage', '1/2-28 UNEF'], ['Réduction sonore', '~28 dB'], ['Matière', 'Acier inoxydable']],
    reviews: [
      { author: 'Tony_Silent', stars: 5, date: '19/03/2026', text: "Différence énorme au tir, montage simple." },
      { author: 'Farid_B', stars: 4, date: '06/02/2026', text: "Rallonge un peu l'arme mais rien de gênant." }
    ]
  },
  {
    id: 'silencieux-fusil', cat: 'equipement',
    name: 'Silencieux « SilentBore 556 » (fusil)', price: 320, stars: 4, reviewCount: 52,
    icon: silencerIcon('#2b2b2b'),
    shortDesc: 'Modérateur de son pour carabines calibre 5.56, chambres de détente multiples, finition mate.',
    specs: [['Calibre', '5.56mm'], ['Filetage', '1/2-28 UNEF'], ['Réduction sonore', '~30 dB'], ['Matière', 'Titane']],
    reviews: [
      { author: 'Marco_Tir', stars: 5, date: '23/03/2026', text: "Léger malgré le titane, recul quasi inchangé." },
      { author: 'Isabelle_K', stars: 4, date: '11/02/2026', text: "Un peu cher mais qualité de fabrication au rendez-vous." }
    ]
  },
  {
    id: 'talkie-walkie', cat: 'equipement',
    name: 'Talkie-walkie « TacCom Pro » (paire)', price: 89, stars: 4, reviewCount: 310,
    icon: walkieIcon('#3a3a3a'),
    shortDesc: 'Paire de talkies-walkies longue portée, robustes, avec kit main-libre. Basique mais efficace.',
    specs: [['Portée', 'Jusqu\'à 10km (terrain dégagé)'], ['Canaux', '16'], ['Autonomie', '18h'], ['Étanchéité', 'IP54']],
    reviews: [
      { author: 'Camping_Team', stars: 5, date: '15/03/2026', text: "Portée annoncée respectée en zone dégagée, très pratique." },
      { author: 'Raph_O', stars: 4, date: '28/01/2026', text: "En forêt dense la portée chute pas mal, sinon très correct." }
    ]
  },

  {
    id: 'char-leclerc', cat: 'lourd',
    name: 'Char Leclerc', price: 7800000, badge: 'Nouveau', stars: 5, reviewCount: 3,
    icon: tankIcon('#5c6b47'),
    shortDesc: 'Char de combat français, blindage composite, canon 120mm à chargement automatique. Ne rentre pas au garage.',
    specs: [['Calibre canon', '120mm lisse'], ['Poids', '54,5 tonnes'], ['Vitesse max', '71 km/h'], ['Équipage', '3 personnes'], ['Livraison', 'Non homologuée route ouverte']],
    reviews: [
      { author: 'Christophe_Z', stars: 5, date: '30/03/2026', text: "Le voisin ne se gare plus devant chez moi, mission accomplie." },
      { author: 'Didier_X', stars: 4, date: '14/02/2026', text: "Consommation abusée mais le respect du quartier est total." }
    ]
  },
  {
    id: 'drone-switchblade', cat: 'lourd',
    name: 'Drone kamikaze Switchblade 300', price: 42000, stars: 5, reviewCount: 8,
    icon: droneIcon('#3a3a3a'),
    shortDesc: 'Munition rôdeuse portable à charge explosive. Se lance à la main, revient jamais.',
    specs: [['Type', 'Munition rôdeuse à usage unique'], ['Autonomie de vol', '15 min'], ['Poids', '2,5kg'], ['Portée', '10km']],
    reviews: [
      { author: 'Quentin_Y', stars: 5, date: '22/03/2026', text: "Discret en vol, on ne l'entend presque pas arriver." },
      { author: 'Steven_U', stars: 5, date: '03/01/2026', text: "Usage unique seulement, prévoir le stock en conséquence." }
    ]
  },
  {
    id: 'apache-ah64', cat: 'lourd',
    name: 'Hélicoptère d\'attaque AH-64 Apache', price: 38000000, stars: 5, reviewCount: 2,
    icon: heliIcon('#4a4a3a'),
    shortDesc: 'Hélicoptère de combat américain, radar Longbow, canon de 30mm en tourelle. Parking compliqué en ville.',
    specs: [['Vitesse max', '293 km/h'], ['Équipage', '2 personnes'], ['Armement', 'Canon 30mm + roquettes'], ['Autonomie', '480km']],
    reviews: [
      { author: 'Grégory_W', stars: 5, date: '18/03/2026', text: "Livraison compliquée, le camion habituel ne suffisait pas." },
      { author: 'Vincent_P', stars: 4, date: '25/01/2026', text: "Le bruit du rotor dérange un peu le voisinage à 6h du matin." }
    ]
  },
  {
    id: 'mlrs-m270', cat: 'lourd',
    name: 'Lance-roquettes multiple M270 MLRS', price: 4200000, stars: 5, reviewCount: 4,
    icon: launcherIcon('#4a5a3a'),
    shortDesc: 'Système d\'artillerie sur chenilles, 12 roquettes guidées. Pour ceux qui trouvaient le fusil à pompe insuffisant.',
    specs: [['Portée', 'Jusqu\'à 300km'], ['Tubes', '12 roquettes'], ['Poids', '24,5 tonnes'], ['Équipage', '3 personnes']],
    reviews: [
      { author: 'Maxime_V', stars: 5, date: '10/03/2026', text: "Un poil encombrant pour le garage, sinon nickel." },
      { author: 'Anthony_S', stars: 5, date: '02/02/2026', text: "Portée annoncée respectée, service client très patient au téléphone." }
    ]
  },
  {
    id: 'javelin', cat: 'lourd',
    name: 'Missile portable FGM-148 Javelin', price: 178000, stars: 5, reviewCount: 6,
    icon: javelinIcon('#5c5c5c'),
    shortDesc: 'Système antichar portable à guidage infrarouge, tir et oublie. Overkill pour un cambrioleur, mais bon.',
    specs: [['Portée', '2,5km'], ['Poids', '22,3kg (système complet)'], ['Guidage', 'Infrarouge, tir et oublie'], ['Rechargement', 'Missile non réutilisable']],
    reviews: [
      { author: 'Jonathan_R', stars: 5, date: '28/03/2026', text: "Précision au rendez-vous, un peu lourd à transporter seul." },
      { author: 'Loic_Q', stars: 5, date: '11/01/2026', text: "Clairement plus que nécessaire mais pourquoi pas." }
    ]
  },

  {
    id: 'flipper-zero', cat: 'hacking',
    name: 'Flipper Zero', price: 189, badge: 'Nouveau', stars: 5, reviewCount: 522,
    icon: flipperIcon('#e8843c'),
    shortDesc: 'Multi-outil de pentest portable : RFID, NFC, Bluetooth LE, sub-GHz, infrarouge. Le jouet préféré des audits de sécurité.',
    specs: [['Fréquences', 'RFID 125kHz, NFC 13.56MHz, sub-GHz'], ['Connectivité', 'Bluetooth LE, USB-C'], ['Écran', 'Monochrome 128x64'], ['Batterie', '2000mAh']],
    reviews: [
      { author: 'Théo_Dev', stars: 5, date: '12/03/2026', text: "Indispensable pour tester la sécurité de mes propres badges. Firmware custom au top." },
      { author: 'Nina_Sec', stars: 5, date: '28/02/2026', text: "Communauté énorme, mises à jour toutes les semaines." }
    ]
  },
  {
    id: 'pixel-grapheneos', cat: 'hacking',
    name: 'Google Pixel 8 sous GrapheneOS', price: 890, stars: 5, reviewCount: 231,
    icon: phoneIcon('#3a3a3a'),
    shortDesc: 'Smartphone durci vie privée : aucun service Google, sandboxing renforcé, mises à jour de sécurité mensuelles.',
    specs: [['OS', 'GrapheneOS (AOSP durci)'], ['Stockage', '256 Go'], ['Sans', 'Google Play Services'], ['Chiffrement', 'Intégral, verrou matériel']],
    reviews: [
      { author: 'Marc_Priv', stars: 5, date: '05/03/2026', text: "Zéro télémétrie, autonomie excellente malgré tout." },
      { author: 'Julia_K', stars: 4, date: '19/01/2026', text: "Certaines apps bancaires râlent, sinon parfait." }
    ]
  },
  {
    id: 'switch-cfw', cat: 'hacking',
    name: 'Nintendo Switch débridée (CFW)', price: 250, stars: 4, reviewCount: 344,
    icon: switchIcon('#333'),
    shortDesc: 'Console modifiée avec firmware personnalisé. Charge ses jeux « depuis sa propre bibliothèque personnelle ».',
    specs: [['Modification', 'Firmware custom (Atmosphère-like)'], ['Stockage', 'Carte SD 512 Go incluse'], ['Garantie constructeur', 'Annulée'], ['Support', 'Communauté uniquement']],
    reviews: [
      { author: 'Gamer_Lucas', stars: 5, date: '22/03/2026', text: "Bibliothèque de jeux qui grossit toute seule, comment est-ce possible." },
      { author: 'RetroFan', stars: 3, date: '08/02/2026', text: "Bannie du Nintendo eShop en ligne comme prévu, on s'en doutait." }
    ]
  },
  {
    id: 'disque-pirate', cat: 'hacking',
    name: 'Disque dur « Archive Pirate » 20To', price: 340, stars: 5, reviewCount: 198,
    icon: hddIcon('#2b2b2b'),
    shortDesc: 'Disque externe pré-rempli de « contenus culturels variés ». Ne posez pas de questions sur la provenance.',
    specs: [['Capacité', '20 To'], ['Interface', 'USB 3.2'], ['Contenu', 'Non divulgué'], ['Support technique', 'Aucun']],
    reviews: [
      { author: 'Cinephile_44', stars: 5, date: '14/03/2026', text: "Filmographie complète de tout ce qui existe, impressionnant." },
      { author: 'Anon_User', stars: 5, date: '01/02/2026', text: "Rapide, discret, aucune trace de vendeur sur la facture." }
    ]
  },
  {
    id: 'ia-silverchrome', cat: 'hacking',
    name: 'IA Compagnon neural « Silverchrome »', price: 15000, badge: 'Nouveau', stars: 5, reviewCount: 12,
    icon: aiChipIcon('#3a3a3a'),
    shortDesc: 'Implant neural hébergeant une IA compagnon à forte personnalité, façon rockerboy numérique. Se loge directement dans le cortex.',
    specs: [['Interface', 'Neuroport direct'], ['Personnalité', 'Pré-configurée, non modifiable'], ['Latence', '2ms'], ['Effets secondaires', 'Non documentés']],
    reviews: [
      { author: 'ChromeRunner', stars: 5, date: '30/03/2026', text: "Compagnie constante, conseils audio discutables mais présence rassurante." },
      { author: 'V_Anonyme', stars: 4, date: '10/02/2026', text: "Prend un peu trop de place dans la tête, au sens propre." }
    ]
  },
  {
    id: 'chromeeye', cat: 'hacking',
    name: 'Implant oculaire « ChromeEye »', price: 8000, stars: 5, reviewCount: 34,
    icon: eyeImplantIcon('#5c5c5c'),
    shortDesc: 'Œil cybernétique subdermal : zoom optique, vision nocturne, enregistrement HUD. Remplace l\'œil d\'origine (non réversible).',
    specs: [['Zoom optique', 'x8'], ['Vision nocturne', 'Oui'], ['Enregistrement', 'HUD 4K'], ['Réversibilité', 'Non']],
    reviews: [
      { author: 'Kenji_Aug', stars: 5, date: '25/03/2026', text: "Zoom bluffant, petite gêne d'adaptation la première semaine." },
      { author: 'Sasha_Mod', stars: 5, date: '15/02/2026', text: "Vision nocturne changeante niveau confort en soirée." }
    ]
  },
  {
    id: 'mantis-x', cat: 'hacking',
    name: 'Griffes rétractables « Mantis-X »', price: 12000, stars: 4, reviewCount: 19,
    icon: clawIcon('#3a3a3a'),
    shortDesc: 'Lames sous-cutanées rétractables, avant-bras. Déploiement mécanique instantané, esthétique chromée.',
    specs: [['Matériau lames', 'Alliage chromé'], ['Déploiement', 'Instantané'], ['Emplacement', 'Avant-bras, sous-cutané'], ['Entretien', 'Trimestriel obligatoire']],
    reviews: [
      { author: 'Blade_Runner77', stars: 5, date: '18/03/2026', text: "Look dingue, portes qui s'ouvrent difficilement en trop par contre." },
      { author: 'Nova_Chrome', stars: 3, date: '02/02/2026', text: "Douloureux à l'installation, personne ne l'avait précisé." }
    ]
  },
  {
    id: 'neurolimb', cat: 'hacking',
    name: 'Bras cybernétique modulaire « NeuroLimb »', price: 22000, stars: 5, reviewCount: 27,
    icon: cyberArmIcon('#4a4a4a'),
    shortDesc: 'Prothèse de bras complète, force augmentée, modules interchangeables. Contrôle neural direct après calibration.',
    specs: [['Force augmentée', 'x4 par rapport à un bras normal'], ['Modules', 'Interchangeables'], ['Calibration', '2 à 3 semaines'], ['Poids', '3,4kg']],
    reviews: [
      { author: 'Marcus_Chrome', stars: 5, date: '27/03/2026', text: "Calibration longue mais résultat impressionnant, force réelle au rendez-vous." },
      { author: 'Elena_V', stars: 5, date: '09/02/2026', text: "Modules interchangeables très pratiques, SAV réactif." }
    ]
  },

  {
    id: 'glou-fruits-rouges', cat: 'boissons',
    name: 'GLOU « Fruits Rouges »', price: 4.5, badge: 'Nouveau', stars: 4, reviewCount: 88,
    icon: bottleIcon('#b3161a', '#e8a13c'),
    shortDesc: 'Boisson fermentée pétillante, saveur fruits rouges. Parfaite après une session tir ou une planque prolongée.',
    specs: [['Format', '330ml'], ['Fermentation', 'Naturelle'], ['Sucre ajouté', 'Non'], ['Pétillance', 'Légère']],
    reviews: [
      { author: 'Sandra_W', stars: 4, date: '14/03/2026', text: "Bon goût, pas trop sucré, agréable au frais." },
      { author: 'Momo_44', stars: 5, date: '02/02/2026', text: "Devenu mon réflexe après l'entraînement." }
    ]
  },
  {
    id: 'glou-dragon', cat: 'boissons',
    name: 'GLOU « Dragon »', price: 4.5, stars: 4, reviewCount: 63,
    icon: bottleIcon('#8a3fa0', '#d896e8'),
    shortDesc: 'Boisson fermentée pétillante, saveur fruit du dragon. Édition exotique, même bulle discrète.',
    specs: [['Format', '330ml'], ['Fermentation', 'Naturelle'], ['Sucre ajouté', 'Non'], ['Pétillance', 'Légère']],
    reviews: [
      { author: 'Julien_V', stars: 4, date: '20/03/2026', text: "Saveur originale, un peu acidulée, ça change." },
      { author: 'Claire_B', stars: 5, date: '05/02/2026', text: "Ma préférée de la gamme, très rafraîchissante." }
    ]
  },
  {
    id: 'monsterpump-citron', cat: 'boissons',
    name: 'MonsterPump « Citron Explosif »', price: 32, stars: 5, reviewCount: 145,
    icon: pouchIcon('#e8d900'),
    shortDesc: 'Pré-workout goût citron, formule dynamisante pour les entraînements intensifs. Effet immédiat annoncé.',
    specs: [['Format', '320g (environ 32 doses)'], ['Ingrédients clés', 'Arginine, citrulline, tyrosine'], ['Sans colorant', 'Oui'], ['Origine', 'Fabriqué en France']],
    reviews: [
      { author: 'GymBro_59', stars: 5, date: '17/03/2026', text: "Bon boost, pas de crash après contrairement à d'autres marques." },
      { author: 'Yasmine_F', stars: 4, date: '01/02/2026', text: "Goût citron vraiment agréable, effet correct." }
    ]
  },
  {
    id: 'zapcan-energy', cat: 'boissons',
    name: 'ZAPCAN Energy (pack 6 saveurs)', price: 12, stars: 4, reviewCount: 210,
    icon: canIcon('#2ba8d1', '#1c1c1e'),
    gallery: [canIcon('#2ba8d1', '#1c1c1e'), friendsIllustration()],
    shortDesc: 'Pack découverte 6 canettes, 6 saveurs différentes. Format compact pour le sac tactique ou le sac de sport.',
    specs: [['Format', '6x250ml'], ['Caféine', '80mg par canette'], ['Sucre', 'Faible'], ['Saveurs', '6 différentes']],
    reviews: [
      { author: 'Nico_Speed', stars: 4, date: '22/03/2026', text: "Bon compromis goût/effet, le pack découverte est malin." },
      { author: 'Lea_K', stars: 5, date: '08/02/2026', text: "Ma canette du matin depuis 2 mois, aucun regret." }
    ]
  }
];

// "photos" : tableau de chemins réels (ex: ["photos/momo-1.jpg", "photos/momo-2.jpg"]) une fois les fichiers ajoutés dans /photos.
// Un tableau vide ou avec des null affiche un avatar silhouette à la place (placeholder). Plusieurs entrées = galerie cliquable.
// Remplace "social" par les vraies URLs (Instagram, TikTok...).
const BODYGUARDS = [
  {
    id: 'momo', name: '1klavair', photos: ['photos/momo-1.jpg', 'photos/momo-2.jpg'], price: 9245389,
    stats: { Force: 100, Vitesse: 100, Fidélité: 100 },
    shortDesc: "Ne recule devant rien.",
    social: 'https://www.tiktok.com/@1klavair'
  },
  {
    id: 'fifi', name: 'Fifi « Discrétion »', photos: [null, null], price: 35, priceLifetime: 690,
    stats: { Force: 60, Vitesse: 85, Fidélité: 95 },
    shortDesc: "Repéré à 100m grâce à son rire. Discrétion en option, non incluse de base.",
    social: '#'
  },
  {
    id: 'big-steevy', name: 'Big Steevy', photos: [null, null, null], price: 60, priceLifetime: 1190,
    stats: { Force: 100, Vitesse: 20, Fidélité: 80 },
    shortDesc: "Impressionnant à l'arrêt. En mouvement, aucune garantie de résultat.",
    social: '#'
  }
];

const CATEGORY_LABELS = {
  pistolet: 'Armes de poing',
  fusil: 'Fusils',
  munitions: 'Munitions',
  equipement: 'Équipements',
  lourd: 'Matériel lourd',
  hacking: 'Hacking & Cyberware',
  boissons: 'Boissons & Compléments'
};

const CATEGORY_PAGES = {
  pistolet: 'armes-de-poing.html',
  fusil: 'fusils.html',
  hacking: 'hacking-cyberware.html',
  munitions: 'munitions.html',
  equipement: 'equipements.html',
  lourd: 'materiel-lourd.html',
  boissons: 'boissons-complements.html',
  gardes: 'gardes-du-corps.html'
};
