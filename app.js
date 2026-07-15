// ====== CONTRACT ADDRESS ======
const CONTRACT_ADDRESS = "0xb815e261f5a267dc33e4e610f591b766d6cbb6ec";

// ====== SOCIAL LINKS ======
const X_COMMUNITY = "https://x.com/i/communities/2038276050287993288";

// ====== HELPERS ======
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// ====== SVG ICONS (no emojis) ======
const ICON_PATHS = {
  fire:     '<path d="M12 2c1 3-1 5-2.5 6.5S7 12 7 14a5 5 0 0 0 10 0c0-1.5-.5-3-1.5-4 .2 1-.3 2-1.5 2 .8-2-.2-4.5-2-6.5zM12 20a3 3 0 0 1-3-3c0-1 .5-2 1.3-2.7-.1.9.4 1.7 1.2 1.7.9 0 1.3-.7 1.2-1.8.8.7 1.3 1.7 1.3 2.8a3 3 0 0 1-3 3z"/>',
  crown:    '<path d="M5 16 3 6l5 4 4-6 4 6 5-4-2 10H5zm0 2h14v2H5z"/>',
  thumbUp:  '<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.3l1-4.6.03-.3a1.5 1.5 0 0 0-.44-1.06L14.2 1 7.6 7.6c-.37.37-.6.88-.6 1.4v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3-7c.1-.23.16-.5.16-.78v-2z"/>',
  share:    '<path d="M18 16a3 3 0 0 0-2.4 1.2l-6.7-3.9c.06-.25.1-.5.1-.8s-.04-.55-.1-.8l6.6-3.85A3 3 0 1 0 14 7c0 .3.04.55.1.8L7.5 11.65a3 3 0 1 0 0 4.7l6.7 3.9c-.06.24-.1.5-.1.75A3 3 0 1 0 18 16z"/>',
  coin:     '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.9 15.5v1.3h-1.6v-1.25c-1.5-.15-2.7-.9-2.8-2.5h1.6c.1.7.6 1.2 1.9 1.2 1.1 0 1.6-.5 1.6-1.1 0-.6-.4-1-1.9-1.35-1.9-.45-3-1.1-3-2.6 0-1.35 1-2.15 2.4-2.4V7.2h1.6v1.3c1.4.25 2.3 1.1 2.35 2.35h-1.6c-.05-.7-.5-1.15-1.55-1.15-1 0-1.55.45-1.55 1.05 0 .6.5.9 1.9 1.25 1.9.45 3 1.1 3 2.7 0 1.4-1 2.2-2.55 2.5z"/>',
  diamond:  '<path d="M6 3h12l3 5.5L12 21 3 8.5 6 3zm1.2 2L5.3 8h4.2l1.3-3H7.2zm5.6 0-1.3 3h4.2l-1.9-3h-1zM9.4 10H5.9l4.4 6.6L9.4 10zm2.1 0-1 6.9L15.7 10h-4.2z"/>',
  home:     '<path d="M12 3 3 10.5V21h6v-6h6v6h6V10.5L12 3z"/>',
  film:     '<path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/>',
  folder:   '<path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/>',
  chart:    '<path d="M4 13h3v7H4v-7zm6-5h3v12h-3V8zm6-4h3v16h-3V4z"/>',
  chat:     '<path d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 2c-3 0-6 1.5-6 4v2h9v-2c0-1 .4-1.9 1-2.6C11.9 14.3 10.5 14 9 14zm7 0c-.3 0-.7 0-1 .05 1.2.9 2 2 2 3.45V20h5v-2c0-2.5-3-4-6-4z"/>',
  search:   '<path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.49 4.49 0 0 1 9.5 14z"/>',
  wallet:   '<path d="M3 6a2 2 0 0 1 2-2h12v2H5v12h14v-3h-6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h6V6h2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm10 5v2h8v-2h-8zm2.5 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>',
  heart:    '<path d="M12 21s-6.7-4.3-9.3-8.3C.9 9.8 2 6.5 5 5.6c1.9-.6 3.9.1 5 1.6 1.1-1.5 3.1-2.2 5-1.6 3 .9 4.1 4.2 2.3 7.1C18.7 16.7 12 21 12 21z"/>',
  photo:    '<path d="M4 5h3l2-2h6l2 2h3a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>',
  twitter:  '<path d="M18.9 2H22l-7.1 8.1L23 22h-6.6l-5.2-6.8L5.3 22H2l7.6-8.7L1.5 2h6.8l4.7 6.2L18.9 2zm-2.3 18h1.8L7.5 3.9H5.6L16.6 20z"/>',
  telegram: '<path d="M21.9 4.3 2.6 11.8c-.9.4-.9 1.6.1 1.9l4.9 1.5 1.9 5.9c.2.7 1.1.9 1.6.3l2.7-2.7 4.8 3.5c.6.4 1.4.1 1.6-.6l3.1-15c.2-.9-.7-1.6-1.4-1.3zM8.6 14.2l8.4-5.3c.2-.1.4.1.2.3l-6.9 6.4c-.2.2-.3.5-.4.8l-.3 2.3-1-4.5z"/>',
  check:    '<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>',
  play:     '<path d="M8 5v14l11-7z"/>',
  eye:      '<path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>',
  verified: '<path d="M12 2 9.8 4.2 6.7 3.6 5.6 6.6 2.6 7.7l.6 3.1L1 13l2.2 2.2-.6 3.1 3 1.1 1.1 3 3.1-.6L12 22l2.2-2.1 3.1.6 1.1-3 3-1.1-.6-3.1L23 13l-2.2-2.2.6-3.1-3-1.1-1.1-3-3.1.6L12 2zm-1.2 13.2-3-3 1.4-1.4 1.6 1.6 4-4 1.4 1.4-5.4 5.4z"/>'
};
function icon(name, cls = ""){
  return `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;
}

// ====== TOAST ======
let toastTimer;
function toast(msg, opts = {}){
  const t = $("#toast");
  t.innerHTML = (opts.icon ? icon(opts.icon) : "") + `<span>${msg}</span>`;
  t.classList.toggle("orange", !!opts.orange);
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}
function copyText(text, okMsg){
  navigator.clipboard.writeText(text).then(() => toast(okMsg || "Copied!", { icon: "check", orange: true }));
}

// ====== TAG FILTERS ======
const TAGS = [
  "$ponhub to the moon", "diamond hands", "buy the dip", "100x gains",
  "paper hands rekt", "whale alert", "degen mode", "liquidity locked",
  "green candles", "gm frens"
];

// ====== VIDEO DATA ======
// Give each card its own image via the "img" field, e.g. img: "thumbs/1.jpg".
// Leave it "" to show the placeholder. Edit title/desc freely.
const videos = [
  { title: "$PONHUB Just 100x'd And My Wife Came Back — Full Diamond Hands Story", desc: "The ultimate HODL story. He never sold, and neither should you. NSFG (Not Safe For Gains).", img: "", duration: "34:18", uploader: "DiamondChad", verified: true, crown: true, views: "44.6K", hd: true, tags: ["diamond hands", "100x gains"] },
  { title: "Tea Time With My New Neighbor Turned Into A Hard Pump And Sloppy Green Candles", desc: "It started with tea and ended with a full send. Green candles everywhere.", img: "", duration: "16:16", uploader: "SweetieFox", verified: true, crown: true, views: "453K", hd: true, tags: ["green candles", "degen mode"] },
  { title: "Sexy Big Bags And Gains — Colombian Degen Buys The Dip Hard — Luke Cooper", desc: "When the chart dips, degens buy. A masterclass in conviction.", img: "", duration: "21:24", uploader: "LukeCooper", verified: true, crown: false, views: "11.8K", hd: true, tags: ["buy the dip", "degen mode"] },
  { title: "$0.00 FEES FOR 7 DAYS — Trade $PONHUB Now", desc: "Sponsored — zero fees for a week. Buy, hold, repeat.", img: "", duration: "", uploader: "Ponhub Ads", verified: false, crown: false, views: "", hd: false, ad: true, tags: [] },
  { title: "ANGELS.LOVE Amazing Holders Cherry & Stacy Aping Into One Lucky Coin", desc: "Two holders, one lucky coin. The community goes wild.", img: "", duration: "15:07", uploader: "AngelsLove", verified: false, crown: false, views: "175K", hd: true, tags: ["$ponhub to the moon", "degen mode"] },
  { title: "TRUTH OR DARE Gone Wild! — She Begged For Multiple 100x Entries!", desc: "Truth: she's all in. Dare: buy more. She did both.", img: "", duration: "16:36", uploader: "AliceRoss", verified: true, crown: false, views: "25.9K", hd: true, tags: ["100x gains", "buy the dip"] },
  { title: "WHALES DAY — Filthy Whale Home Alone Needs More $PONHUB", desc: "A whale alone at home, refreshing the chart. Relatable content.", img: "", duration: "10:00", uploader: "WhalesDay", verified: false, crown: false, views: "58.1K", hd: true, tags: ["whale alert", "liquidity locked"] },
  { title: "Got To Ape Early In The Morning — Vertical Pump", desc: "GM frens. Coffee, chart, ape. In that order.", img: "", duration: "1:24", uploader: "Sabrina_Great", verified: true, crown: false, views: "2K", hd: false, tags: ["gm frens", "degen mode"] },
  { title: "POV: You Put Your Whole Paycheck Into The Meme Coin", desc: "Valhalla or the basement — you decide. An epic degen journey.", img: "", duration: "8:21", uploader: "DegenKing", verified: true, crown: false, views: "2.8M", hd: true, tags: ["degen mode", "100x gains"] },
  { title: "The Whale Bought And Everyone Pumped — Community Reaction Full Uncut", desc: "One whale, one buy, infinite green. The community reacts in real time.", img: "", duration: "24:00", uploader: "WhaleWatcher", verified: true, crown: true, views: "6.9M", hd: true, tags: ["whale alert", "green candles"] },
  { title: "How To Hold Your Coin When Everybody Is Dumping — HODL Tutorial", desc: "Patience tutorial for beginners. Diamond hands technique explained.", img: "", duration: "5:55", uploader: "HodlMaster", verified: false, crown: false, views: "1.1M", hd: false, tags: ["diamond hands", "paper hands rekt"] },
  { title: "Full Send: All In On A Single Tweet — Not Financial Advice", desc: "Don't try this at home. Or do. I'm not a financial advisor.", img: "", duration: "2:10", uploader: "ApeStrong", verified: true, crown: false, views: "7.7M", hd: true, tags: ["degen mode", "$ponhub to the moon"] }
];

// ====== NAV CONFIG ======
const NAV = {
  home:       { label: "Hot Meme Videos", icon: "fire" },
  videos:     { label: "Meme Videos",     icon: "film" },
  categories: { label: "Categories",      icon: "folder" },
  charts:     { label: "Live Charts",     icon: "chart" },
  holders:    { label: "Top Holders",     icon: "crown" },
  community:  { label: "Community",       icon: "chat" },
  photos:     { label: "Photos & GIFs",   icon: "photo" },
  buy:        { label: "Buy $PONHUB",     icon: "coin" }
};

// ====== REUSABLE MARKUP ======
const verifiedSvg = `<span class="verified" title="Verified">${icon("verified")}</span>`;
const crownSvg = `<span class="crown" title="Top Holder">${icon("crown")}</span>`;
const viewsSvg = v => `<span class="views">${icon("eye")}${v}</span>`;

function placeholderHtml(text){
  return `<div class="placeholder">
      <div class="ph-logo"><span class="p1">Pon</span><span class="p2">hub</span></div>
      <div class="ph-text">${text}</div>
    </div>`;
}

// ====== RENDER GRID ======
let state = { search: "", tag: null };

function matches(v){
  const q = state.search.toLowerCase();
  const inSearch = !q || v.title.toLowerCase().includes(q) || v.uploader.toLowerCase().includes(q) || (v.tags || []).some(t => t.includes(q));
  const inTag = !state.tag || v.ad || (v.tags || []).includes(state.tag);
  return inSearch && inTag;
}

function renderGrid(){
  const grid = $("#grid");
  const list = videos.map((v, i) => ({ v, i })).filter(o => matches(o.v));
  grid.innerHTML = list.map(({ v, i }) => renderCard(v, i)).join("");
  $("#noResults").hidden = list.length > 0;
  $$(".card", grid).forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const idx = +card.dataset.idx;
      if (videos[idx].ad) { openBuy(); return; }
      openVideo(idx);
    });
  });
}

function renderCard(v, i){
  const thumb = v.img ? `<img src="${v.img}" alt="${v.title}" loading="lazy" />` : placeholderHtml("Your image here");
  const topRight = v.ad ? `<span class="ad-badge">Ad</span>` : (v.hd ? '<span class="hd">HD</span>' : '');
  const duration = v.duration ? `<span class="duration">${v.duration}</span>` : '';
  const metaTop = v.ad
    ? `<div class="card-meta-top"><span class="uploader">${v.uploader}</span></div>`
    : `<div class="card-meta-top">
         <span class="uploader">${v.uploader}${v.verified ? verifiedSvg : ''}${v.crown ? crownSvg : ''}</span>
         ${viewsSvg(v.views)}
       </div>`;
  return `
  <a href="#" class="card" data-idx="${i}">
    <div class="thumb">
      ${thumb}
      ${topRight}
      ${duration}
      <span class="play-hint">${icon("play")}</span>
    </div>
    <div class="card-body">
      ${metaTop}
      <div class="card-title">${v.title}</div>
    </div>
  </a>`;
}

function setSectionTitle(key){
  const n = NAV[key] || NAV.home;
  $("#sectionTitle").innerHTML = `${icon(n.icon)} <span>${n.label}</span>`;
}

// ====== RENDER TAGS ======
function renderTags(){
  const row = $("#tagRow");
  row.innerHTML = TAGS.map(t => `<a href="#" data-tag="${t}">${t}</a>`).join("") + `<span class="tags-more" title="More">${icon("search")}</span>`;
  $$("a[data-tag]", row).forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const t = a.dataset.tag;
      state.tag = state.tag === t ? null : t;
      $$("a[data-tag]", row).forEach(x => x.classList.toggle("active", x.dataset.tag === state.tag));
      if (state.tag) $("#sectionTitle").innerHTML = `${icon("fire")} <span>#${state.tag}</span>`;
      else setSectionTitle("home");
      renderGrid();
    });
  });
}

// ====== RENDER DRAWER + SOCIALS ======
function renderDrawer(){
  const keys = ["home", "videos", "categories", "charts", "holders", "buy", "community"];
  $("#drawerNav").innerHTML = keys.map(k => `<a href="#" data-nav="${k}">${icon(NAV[k].icon)} <span>${NAV[k].label}</span></a>`).join("");
}
function renderSocials(){
  $("#socials").innerHTML =
    `<a href="${X_COMMUNITY}" target="_blank" rel="noopener">${icon("twitter")} <span>X Community</span></a>` +
    `<a href="#" data-toast="Join our Telegram" data-icon="telegram">${icon("telegram")} <span>Telegram</span></a>` +
    `<a href="#" data-toast="Chart on Dexscreener" data-icon="chart">${icon("chart")} <span>Dexscreener</span></a>`;
}

// ====== VIDEO MODAL ======
function getLikes(){ try { return JSON.parse(localStorage.getItem("ponhub_likes") || "{}"); } catch { return {}; } }
function setLikes(o){ localStorage.setItem("ponhub_likes", JSON.stringify(o)); }

let currentVideo = -1;
function openVideo(idx){
  currentVideo = idx;
  const v = videos[idx];
  $("#modalPlayer").innerHTML = v.img ? `<img src="${v.img}" alt="${v.title}" />` : placeholderHtml("Your video goes here");
  $("#modalTitle").textContent = v.title;
  $("#modalUploader").innerHTML = `${v.uploader}${v.verified ? verifiedSvg : ''}${v.crown ? crownSvg : ''}`;
  $("#modalViews").innerHTML = `${icon("eye")} ${v.views} views`;
  $("#modalDesc").textContent = v.desc;

  const liked = !!getLikes()["v" + idx];
  const base = 100 + idx * 37;
  $("#likeBtn").innerHTML = `${icon("thumbUp")} <span id="likeCount">${base + (liked ? 1 : 0)}</span>`;
  $("#likeBtn").classList.toggle("liked", liked);

  $("#videoModal").classList.add("open");
}
function closeVideo(){ $("#videoModal").classList.remove("open"); }

function toggleLike(){
  if (currentVideo < 0) return;
  const likes = getLikes();
  const key = "v" + currentVideo;
  likes[key] = !likes[key];
  setLikes(likes);
  const base = 100 + currentVideo * 37;
  $("#likeCount").textContent = base + (likes[key] ? 1 : 0);
  $("#likeBtn").classList.toggle("liked", likes[key]);
  toast(likes[key] ? "Liked" : "Like removed", { icon: "thumbUp" });
}

// ====== BUY MODAL ======
const BUY_STEPS = [
  ["Get a wallet", " — MetaMask or any Web3 wallet."],
  ["Fund it", " — buy some ETH on your favorite exchange."],
  ["Copy the contract address", " below."],
  ["Swap", " on your DEX using the CA. Set slippage if needed."],
  ["Hold with diamond hands", " and welcome to Ponhub."]
];
function renderBuyModal(){
  $("#buyHeading").innerHTML = `How to buy <span class="hl">$PONHUB</span> ${icon("coin", "big")}`;
  $("#buySteps").innerHTML = BUY_STEPS.map(([b, rest], i) =>
    `<li><strong>${b}</strong>${rest}${i === 4 ? " " + icon("diamond") : ""}</li>`).join("");
}
function openBuy(){ $("#buyModal").classList.add("open"); }
function closeBuy(){ $("#buyModal").classList.remove("open"); }

// ====== DRAWER ======
function openDrawer(){ $("#drawer").classList.add("open"); $("#drawerOverlay").classList.add("open"); }
function closeDrawer(){ $("#drawer").classList.remove("open"); $("#drawerOverlay").classList.remove("open"); }

// ====== NAV HANDLING ======
function handleNav(key){
  if (key === "buy") { openBuy(); return; }
  state.tag = null; state.search = ""; $("#searchInput").value = ""; $("#searchClear").hidden = true;
  $$("a[data-tag]").forEach(x => x.classList.remove("active"));
  $$("#navRow a").forEach(a => a.classList.toggle("active", a.dataset.nav === key));
  setSectionTitle(key);
  renderGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (key !== "home") toast(`${NAV[key].label} — demo section`, { icon: NAV[key].icon });
}

// ====== SET UP MODAL BUTTON LABELS ======
function renderModalButtons(){
  $("#likeBtn").innerHTML = `${icon("thumbUp")} <span id="likeCount">0</span>`;
  $("#shareBtn").innerHTML = `${icon("share")} <span>Share</span>`;
  $("#modalBuy").innerHTML = `${icon("coin")} <span>Buy $PONHUB</span>`;
}

// ====== INIT ======
function init(){
  setSectionTitle("home");
  renderTags();
  renderGrid();
  renderDrawer();
  renderSocials();
  renderBuyModal();
  renderModalButtons();

  $("#caCopy").addEventListener("click", () => copyText($("#ca").textContent.trim(), "Contract address copied!"));
  $("#buyCopy").addEventListener("click", () => copyText($("#buyCa").textContent.trim(), "Contract address copied!"));

  const input = $("#searchInput"), clear = $("#searchClear");
  input.addEventListener("input", () => {
    state.search = input.value.trim();
    clear.hidden = !state.search;
    renderGrid();
  });
  $("#searchForm").addEventListener("submit", e => e.preventDefault());
  clear.addEventListener("click", () => { input.value = ""; state.search = ""; clear.hidden = true; renderGrid(); input.focus(); });

  $$("#navRow a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); handleNav(a.dataset.nav); }));
  $$("#drawerNav a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); closeDrawer(); handleNav(a.dataset.nav); }));
  $$("[data-nav-link]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); handleNav(a.dataset.navLink); }));
  $("#logoHome").addEventListener("click", e => { e.preventDefault(); handleNav("home"); });

  $("#hamburger").addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  $("#drawerOverlay").addEventListener("click", closeDrawer);
  $("#accountBtn").addEventListener("click", e => { e.preventDefault(); toast("Connect wallet coming soon", { icon: "wallet", orange: true }); });

  // Generic toast triggers (header icons, upload, socials) — skip real links
  $$("[data-toast]").forEach(el => el.addEventListener("click", e => {
    e.preventDefault();
    toast(el.dataset.toast, { icon: el.dataset.icon });
  }));

  $("#videoClose").addEventListener("click", closeVideo);
  $("#videoModal").addEventListener("click", e => { if (e.target.id === "videoModal") closeVideo(); });
  $("#likeBtn").addEventListener("click", toggleLike);
  $("#shareBtn").addEventListener("click", () => copyText(location.href, "Link copied to clipboard!"));
  $("#modalBuy").addEventListener("click", () => { closeVideo(); openBuy(); });

  $("#buyClose").addEventListener("click", closeBuy);
  $("#buyModal").addEventListener("click", e => { if (e.target.id === "buyModal") closeBuy(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeVideo(); closeBuy(); closeDrawer(); }
  });
}

init();
