// ====== CONTRACT ADDRESS ======
// Ha megvan az igazi CA, írd át itt ÉS az index.html két helyén.
const CONTRACT_ADDRESS = "xxxxxxxxxxxxxxxxxxxxxxxxx";

function copyCA(){
  const val = document.getElementById("ca").textContent.trim();
  navigator.clipboard.writeText(val).then(() => {
    const btn = document.querySelector(".ca-copy");
    const old = btn.textContent;
    btn.textContent = "Másolva! ✓";
    setTimeout(() => (btn.textContent = old), 1500);
  });
}

// ====== VIDEÓ KÁRTYÁK ======
// Minden kártyához adhatsz saját képet: az "img" mezőbe írd a kép útvonalát,
// pl. img: "thumbs/1.jpg". Ha üresen hagyod (""), placeholder jelenik meg.
const videos = [
  { title: "Amikor a $PONHUB 100x-ozott és a feleséged visszajön", desc: "Klasszikus diamond hands sztori. NSFG (Not Safe For Gains).", img: "", duration: "12:34", uploader: "DiamondChad", views: "4.2M", rating: "99%", hd: true },
  { title: "POV: Beleraktad az egész fizetésed a memecoinba", desc: "Egy epikus utazás a Valhallába vagy a pincébe. Te döntöd el.", img: "", duration: "8:21", uploader: "DegenKing", views: "2.8M", rating: "97%", hd: true },
  { title: "A whale bevásárolt és mindenki pumpált", desc: "Community reakció valós időben. Full uncut.", img: "", duration: "24:00", uploader: "WhaleWatcher", views: "6.9M", rating: "98%", hd: true },
  { title: "Hogyan tartsd a coinod amikor mindenki elad", desc: "Türelem tutorial kezdőknek. HODL technikák.", img: "", duration: "5:55", uploader: "HodlMaster", views: "1.1M", rating: "95%", hd: false },
  { title: "Éjszakai pump közben nem tudtam aludni", desc: "Insomnia + green candles = a legjobb éjszakám.", img: "", duration: "18:42", uploader: "MoonBoy420", views: "3.3M", rating: "96%", hd: true },
  { title: "A CA-t bemásoltam és minden megváltozott", desc: "Egy ember, egy contract address, végtelen gainz.", img: "", duration: "9:09", uploader: "CopyPaster", views: "888K", rating: "94%", hd: true },
  { title: "Amikor a barátod nem vett $PONHUB-ot", desc: "Reaction compilation. Fájdalmas de vicces.", img: "", duration: "6:66", uploader: "FOMOgod", views: "2.1M", rating: "97%", hd: false },
  { title: "Roadmap felolvasás sötétben gyertyafénynél", desc: "ASMR a közösségnek. Utolsó fázis: to the moon.", img: "", duration: "33:33", uploader: "RoadmapReader", views: "5.5M", rating: "99%", hd: true },
  { title: "Full send: all in egy tweet alapján", desc: "Ne csináld otthon. Vagy csináld. Nem vagyok pénzügyi tanácsadó.", img: "", duration: "2:10", uploader: "ApeStrong", views: "7.7M", rating: "98%", hd: true },
  { title: "Amikor a chart végre zöld lett", desc: "Örömtánc a képernyő előtt. Hangosítsd fel.", img: "", duration: "4:20", uploader: "GreenCandle", views: "1.9M", rating: "96%", hd: false },
  { title: "A liquidity locked és mindenki megnyugodott", desc: "Trust arc a közösségben. Wholesome content.", img: "", duration: "15:00", uploader: "SafuChad", views: "3.0M", rating: "97%", hd: true },
  { title: "Meme háború: $PONHUB vs a többi coin", desc: "Csak egy maradhat. Spoiler: mi.", img: "", duration: "11:11", uploader: "MemeLord", views: "9.1M", rating: "99%", hd: true }
];

function renderCard(v){
  const thumb = v.img
    ? `<img src="${v.img}" alt="${v.title}" loading="lazy" />`
    : `<div class="placeholder">
         <div class="ph-logo"><span class="p1">Pon</span><span class="p2">hub</span></div>
         <div class="ph-text">Ide jön a kép</div>
       </div>`;

  return `
  <a href="#" class="card">
    <div class="thumb">
      ${thumb}
      ${v.hd ? '<span class="hd">HD</span>' : ''}
      <span class="duration">${v.duration}</span>
    </div>
    <div class="card-body">
      <div class="card-title">${v.title}</div>
      <div class="card-desc">${v.desc}</div>
      <div class="card-meta">
        <span class="uploader">${v.uploader}</span>
      </div>
      <div class="card-stats">
        <span>${v.views} views</span>
        <span class="rating">${v.rating}</span>
      </div>
    </div>
  </a>`;
}

document.getElementById("grid").innerHTML = videos.map(renderCard).join("");
