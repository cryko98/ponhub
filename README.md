# Ponhub 🔞💰

**The World's Leading Meme Coin Platform** — `$PONHUB`

Pornhub-stílusú meme coin landing page. Statikus oldal (HTML/CSS/JS), Vercelen deployolható.

## CA (Contract Address)
```
xxxxxxxxxxxxxxxxxxxxxxxxx
```
> Ha megvan az igazi CA, cseréld ki 3 helyen: `index.html` (header + footer) és `app.js` (`CONTRACT_ADDRESS`).

## Struktúra
- `index.html` — oldal váza (fejléc, CA bar, kategóriák, hero, grid, footer)
- `styles.css` — Pornhub-szerű dark/orange dizájn
- `app.js` — videó-kártyák generálása + CA másolás
- `ponhub.jpg` — logó / favicon

## Saját képek hozzáadása
A videók helyén jelenleg placeholder ("Ide jön a kép") van. Az `app.js`-ben minden
videónál töltsd ki az `img` mezőt a képed útvonalával, pl.:
```js
{ title: "...", desc: "...", img: "thumbs/1.jpg", duration: "12:34", ... }
```
A címet (`title`) és leírást (`desc`) is ott tudod szerkeszteni.

## Helyi futtatás
```bash
python -m http.server 8099
# majd: http://localhost:8099
```

## Deploy (Vercel)
Statikus oldal, nincs build lépés. A Vercel automatikusan felismeri.

---
*$PONHUB egy meme coin, kizárólag szórakoztatási célból. Nincs pénzügyi tanácsadás. DYOR. 18+*
