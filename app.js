// ====== CONTRACT ADDRESS ======
// Once you have the real CA, change it here AND in index.html (header CA bar + footer + buy modal).
const CONTRACT_ADDRESS = "xxxxxxxxxxxxxxxxxxxxxxxxx";

// ====== HELPERS ======
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

let toastTimer;
function toast(msg, orange = false){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.toggle("orange", orange);
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

function copyText(text, okMsg){
  navigator.clipboard.writeText(text).then(() => toast(okMsg || "Copied! ✓", true));
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

// ====== SVG SNIPPETS ======
const verifiedSvg = `<span class="verified" title="Verified"><svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2 9.8 4.2 6.7 3.6 5.6 6.6 2.6 7.7l.6 3.1L1 13l2.2 2.2-.6 3.1 3 1.1 1.1 3 3.1-.6L12 22l2.2-2.1 3.1.6 1.1-3 3-1.1-.6-3.1L23 13l-2.2-2.2.6-3.1-3-1.1-1.1-3-3.1.6L12 2zm-1.2 13.2-3-3 1.4-1.4 1.6 1.6 4-4 1.4 1.4-5.4 5.4z"/></svg></span>`;
const crownSvg = `<span class="crown" title="Top Holder">👑</span>`;
const eyeSvg = `<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`;
const playSvg = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

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
         <span class="views">${eyeSvg}${v.views}</span>
       </div>`;
  return `
  <a href="#" class="card" data-idx="${i}">
    <div class="thumb">
      ${thumb}
      ${topRight}
      ${duration}
      <span class="play-hint">${playSvg}</span>
    </div>
    <div class="card-body">
      ${metaTop}
      <div class="card-title">${v.title}</div>
    </div>
  </a>`;
}

// ====== RENDER TAGS ======
function renderTags(){
  const row = $("#tagRow");
  row.innerHTML = TAGS.map(t => `<a href="#" data-tag="${t}">${t}</a>`).join("") + `<span class="tags-more" title="More">›</span>`;
  $$("a[data-tag]", row).forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const t = a.dataset.tag;
      state.tag = state.tag === t ? null : t;
      $$("a[data-tag]", row).forEach(x => x.classList.toggle("active", x.dataset.tag === state.tag));
      $("#sectionTitle").textContent = state.tag ? `#${state.tag} 🚀` : "Hot Meme Videos 🚀";
      renderGrid();
    });
  });
}

// ====== VIDEO MODAL ======
function getLikes(){ try { return JSON.parse(localStorage.getItem("ponhub_likes") || "{}"); } catch { return {}; } }
function setLikes(o){ localStorage.setItem("ponhub_likes", JSON.stringify(o)); }

let currentVideo = -1;
function openVideo(idx){
  currentVideo = idx;
  const v = videos[idx];
  $("#modalPlayer").innerHTML = v.img ? `<img src="${v.img}" alt="${v.title}" />` : placeholderHtml("▶ Your video goes here");
  $("#modalTitle").textContent = v.title;
  $("#modalUploader").innerHTML = `${v.uploader}${v.verified ? verifiedSvg : ''}${v.crown ? crownSvg : ''}`;
  $("#modalViews").innerHTML = `${eyeSvg} ${v.views} views`;
  $("#modalDesc").textContent = v.desc;

  const likes = getLikes();
  const liked = !!likes["v" + idx];
  const base = 100 + idx * 37;
  $("#likeCount").textContent = base + (liked ? 1 : 0);
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
  toast(likes[key] ? "Liked 👍" : "Like removed");
}

// ====== BUY MODAL ======
function openBuy(){ $("#buyModal").classList.add("open"); }
function closeBuy(){ $("#buyModal").classList.remove("open"); }

// ====== DRAWER ======
function openDrawer(){ $("#drawer").classList.add("open"); $("#drawerOverlay").classList.add("open"); }
function closeDrawer(){ $("#drawer").classList.remove("open"); $("#drawerOverlay").classList.remove("open"); }

// ====== NAV HANDLING ======
const NAV_LABELS = {
  home: "Hot Meme Videos 🚀",
  videos: "Meme Videos 🎬",
  categories: "Categories 📂",
  charts: "Live Charts 📈",
  holders: "Top Holders 👑",
  community: "Community 💬",
  photos: "Photos & GIFs 🖼️"
};
function handleNav(key){
  if (key === "buy") { openBuy(); return; }
  // reset filters, update active + title
  state.tag = null; state.search = ""; $("#searchInput").value = ""; $("#searchClear").hidden = true;
  $$("a[data-tag]").forEach(x => x.classList.remove("active"));
  $$("#navRow a").forEach(a => a.classList.toggle("active", a.dataset.nav === key));
  $("#sectionTitle").textContent = NAV_LABELS[key] || "Hot Meme Videos 🚀";
  renderGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (key !== "home") toast(`${(NAV_LABELS[key] || "").replace(/[^\w\s&]/g, "").trim()} — demo section`);
}

// ====== WIRE EVERYTHING UP ======
function init(){
  renderTags();
  renderGrid();

  // CA copy (header + buy modal)
  $("#caCopy").addEventListener("click", () => copyText($("#ca").textContent.trim(), "Contract address copied! ✓"));
  $("#buyCopy").addEventListener("click", () => copyText($("#buyCa").textContent.trim(), "Contract address copied! ✓"));

  // Search
  const input = $("#searchInput"), clear = $("#searchClear");
  input.addEventListener("input", () => {
    state.search = input.value.trim();
    clear.hidden = !state.search;
    renderGrid();
  });
  $("#searchForm").addEventListener("submit", e => e.preventDefault());
  clear.addEventListener("click", () => { input.value = ""; state.search = ""; clear.hidden = true; renderGrid(); input.focus(); });

  // Nav row
  $$("#navRow a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); handleNav(a.dataset.nav); }));
  // Drawer nav
  $$("#drawerNav a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); closeDrawer(); handleNav(a.dataset.nav); }));
  // Promo link -> buy
  $$("[data-nav-link]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); handleNav(a.dataset.navLink); }));

  // Logo -> home
  $("#logoHome").addEventListener("click", e => { e.preventDefault(); handleNav("home"); });

  // Hamburger + drawer close
  $("#hamburger").addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  $("#drawerOverlay").addEventListener("click", closeDrawer);

  // Account button
  $("#accountBtn").addEventListener("click", e => { e.preventDefault(); toast("Connect wallet coming soon 👛", true); });

  // Generic toast triggers (header icons, socials, upload)
  $$("[data-toast]").forEach(el => el.addEventListener("click", e => { e.preventDefault(); toast(el.dataset.toast); }));

  // Video modal
  $("#videoClose").addEventListener("click", closeVideo);
  $("#videoModal").addEventListener("click", e => { if (e.target.id === "videoModal") closeVideo(); });
  $("#likeBtn").addEventListener("click", toggleLike);
  $("#shareBtn").addEventListener("click", () => copyText(location.href, "Link copied to clipboard! 🔗"));
  $("#modalBuy").addEventListener("click", () => { closeVideo(); openBuy(); });

  // Buy modal
  $("#buyClose").addEventListener("click", closeBuy);
  $("#buyModal").addEventListener("click", e => { if (e.target.id === "buyModal") closeBuy(); });

  // Esc closes anything open
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeVideo(); closeBuy(); closeDrawer(); }
  });
}

init();
