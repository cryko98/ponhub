// ====== CONTRACT ADDRESS ======
// Once you have the real CA, change it here AND in index.html (header + footer).
const CONTRACT_ADDRESS = "xxxxxxxxxxxxxxxxxxxxxxxxx";

function copyCA(){
  const val = document.getElementById("ca").textContent.trim();
  navigator.clipboard.writeText(val).then(() => {
    const btn = document.querySelector(".ca-copy");
    const old = btn.textContent;
    btn.textContent = "Copied! ✓";
    setTimeout(() => (btn.textContent = old), 1500);
  });
}

// ====== VIDEO CARDS ======
// Give each card its own image: set the "img" field to the image path,
// e.g. img: "thumbs/1.jpg". Leave it "" to show the placeholder.
const videos = [
  { title: "$PONHUB Just 100x'd And My Wife Came Back — Full Diamond Hands Story", img: "", duration: "34:18", uploader: "DiamondChad", verified: true, crown: true, views: "44.6K", hd: true },
  { title: "Tea Time With My New Neighbor Turned Into A Hard Anal Pump And Sloppy Green Candles", img: "", duration: "16:16", uploader: "SweetieFox", verified: true, crown: true, views: "453K", hd: true },
  { title: "Sexy Big Bags And Gains — Colombian Degen Buys The Dip Hard — Luke Cooper", img: "", duration: "21:24", uploader: "LukeCooper", verified: true, crown: false, views: "11.8K", hd: true },
  { title: "$0.00 FEES FOR 7 DAYS — Trade $PONHUB Now", img: "", duration: "", uploader: "Ponhub Ads", verified: false, crown: false, views: "", hd: false, ad: true },
  { title: "ANGELS.LOVE Amazing Holders Cherry & Stacy Aping Into One Lucky Coin", img: "", duration: "15:07", uploader: "AngelsLove", verified: false, crown: false, views: "175K", hd: true },
  { title: "TRUTH OR DARE Gone Wild! — She Begged For Multiple 100x Entries!", img: "", duration: "16:36", uploader: "AliceRoss", verified: true, crown: false, views: "25.9K", hd: true },
  { title: "WHALES DAY — Filthy Whale Home Alone Needs More $PONHUB", img: "", duration: "10:00", uploader: "WhalesDay", verified: false, crown: false, views: "58.1K", hd: true },
  { title: "Got To Ape Early In The Morning — Vertical Pump", img: "", duration: "1:24", uploader: "Sabrina_Great", verified: true, crown: false, views: "2K", hd: false },
  { title: "POV: You Put Your Whole Paycheck Into The Meme Coin", img: "", duration: "8:21", uploader: "DegenKing", verified: true, crown: false, views: "2.8M", hd: true },
  { title: "The Whale Bought And Everyone Pumped — Community Reaction Full Uncut", img: "", duration: "24:00", uploader: "WhaleWatcher", verified: true, crown: true, views: "6.9M", hd: true },
  { title: "How To Hold Your Coin When Everybody Is Dumping — HODL Tutorial", img: "", duration: "5:55", uploader: "HodlMaster", verified: false, crown: false, views: "1.1M", hd: false },
  { title: "Full Send: All In On A Single Tweet — Not Financial Advice", img: "", duration: "2:10", uploader: "ApeStrong", verified: true, crown: false, views: "7.7M", hd: true }
];

const verifiedSvg = `<span class="verified" title="Verified"><svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2 9.8 4.2 6.7 3.6 5.6 6.6 2.6 7.7l.6 3.1L1 13l2.2 2.2-.6 3.1 3 1.1 1.1 3 3.1-.6L12 22l2.2-2.1 3.1.6 1.1-3 3-1.1-.6-3.1L23 13l-2.2-2.2.6-3.1-3-1.1-1.1-3-3.1.6L12 2zm-1.2 13.2-3-3 1.4-1.4 1.6 1.6 4-4 1.4 1.4-5.4 5.4z"/></svg></span>`;
const crownSvg = `<span class="crown" title="Top Holder">👑</span>`;
const eyeSvg = `<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`;

function renderCard(v){
  const thumb = v.img
    ? `<img src="${v.img}" alt="${v.title}" loading="lazy" />`
    : `<div class="placeholder">
         <div class="ph-logo"><span class="p1">Pon</span><span class="p2">hub</span></div>
         <div class="ph-text">Your image here</div>
       </div>`;

  const topRight = v.ad
    ? `<span class="ad-badge">Ad</span>`
    : (v.hd ? '<span class="hd">HD</span>' : '');

  const duration = v.duration ? `<span class="duration">${v.duration}</span>` : '';

  const metaTop = v.ad
    ? `<div class="card-meta-top"><span class="uploader">${v.uploader}</span></div>`
    : `<div class="card-meta-top">
         <span class="uploader">${v.uploader}${v.verified ? verifiedSvg : ''}${v.crown ? crownSvg : ''}</span>
         <span class="views">${eyeSvg}${v.views}</span>
       </div>`;

  return `
  <a href="#" class="card">
    <div class="thumb">
      ${thumb}
      ${topRight}
      ${duration}
    </div>
    <div class="card-body">
      ${metaTop}
      <div class="card-title">${v.title}</div>
    </div>
  </a>`;
}

document.getElementById("grid").innerHTML = videos.map(renderCard).join("");
