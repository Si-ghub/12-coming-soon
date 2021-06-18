**Some notes for project or good things dont forget about**

<!-- const a = [2, 3, 1, 4, 2];

1. karta i sekunde isspausdinti po reiksme
2. arejuje nurodyta, kiek sekundziu reikia laukti kol bus isspausdinta nurodyta reiksme

const a = [2, 3, 1, 4, 2];
let index = 0
const timer2 = setInterval(() => {
if(index < a.length)
{

    }

console.log(a[index++]);
}, 1000) -->

**Psiaudo selectoriai ir ju panaudojimas**
Psiaudo elementai zymisi su : Gali buti simbolis, pagaliukas, nuotrauka ir t.t
Gali buti du before ir after: pries turini arba uz jo.
pvz: .multi-text::div::before Elementas be turinio ne elemetas, todel butina nurodyti content. Galima tik tuscias `css content: '';`
Nusirodom elemento ploti ir auksti: width ir height
Kaip pastatyti pagaliukus? 2021 06 18 20:15 video

```html
<form>
  <ul>
    <li>Labas</li>
    <li>Labas</li>
    <li>Labas</li>
  </ul>
</form>
```

```css
ul {
  list-style: none;
}
ul > li {
  line-height: 20px;
}
/* nuotrauka meta i ta pacia eile kartu su tekstu, nes nurodytas content: ''; Tokiu atveju reikia check zenkliuka paleisti iki teksto vidurio su transform (53) */
ul > li::before {
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  background-image: url(../img/check.png);
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
  transform: translateY(20%);
}
```
