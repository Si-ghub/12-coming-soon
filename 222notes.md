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
pvz: .multi-text::div::before Elementas be turinio ne elemetas, todel butina nurodyti content. Galima tik tuscias content: '';
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

**Progress-bar be flex (projekte paliekam su flex, cia tik pavyzdys kiap galima padaryti be flex**

```html
<div class="left-column">
  <h2 class="section-title">About startup</h2>
  <p class="section-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores
    praesentium totam doloremque, <a href="#">Matrox</a> magni ipsum error illo,
    voluptate exercitationem aliquid nobis laudantium itaque quis nulla.
  </p>
  <div class="progress-bar">
    <div class="top">
      <label class="title">UX design</label>
      <label class="value">90%</label>
    </div>
    <div class="bottom">
      <div class="progress" style="width: 90%;"></div>
    </div>
  </div>
  <div class="progress-bar">
    <div class="top">
      <label class="title">Web design</label>
      <label class="value">86%</label>
    </div>
    <div class="bottom">
      <div class="progress" style="width: 86%;"></div>
    </div>
  </div>
  <div class="progress-bar">
    <div class="top">
      <label class="title">Web development</label>
      <label class="value">86%</label>
    </div>
    <div class="bottom">
      <div class="progress" style="width: 86%;"></div>
    </div>
  </div>
</div>
```

**Stiliu apsirasome atskirame css file progress-bar(components)**

```css
.progress-bar {
  display: inline-block;
  width: 100%;
}
.progress-bar > .top {
  display: inline-block;
  width: 100%;
  font-size: 20px;
}
.progress-bar > .top > .title {
  float: left;
}
.progress-bar > .top > .value {
  float: right;
}
.progress-bar > .bottom {
  display: inline-block;
  width: 100%;
  height: 6px;
  background-color: lightgrey;
}
.progress-bar > .bottom > .progress {
  height: 100%;
  width: 90%;
  background-color: var(--color-primary);
}
```

**Form ir button** (pirmas variantas)

```html
<form>
  <input id="text" type="text" placeholder="Name" required />
  <input id="email" type="email" placeholder="Email" required />
  <textarea
    name="message"
    id="message"
    placeholder="Message"
    required
  ></textarea>
  <button class="btn" type="button">Send Messsage</button>
</form>
```

form.css filas

```css
form {
  display: inline-block;
  width: 100%;
  /* flex-direction: column; */
  gap: 10px;
}
form > input {
  margin-bottom: 20px;
  line-height: 40px;
  border: none;
  border-bottom: 2px solid lightgrey;
  width: 45%;
}

form > input:nth-of-type(2) {
  float: right;
}

form > textarea {
  width: 100%;
  margin-bottom: 20px;
  line-height: 40px;
  border: none;
  border-bottom: 2px solid lightgrey;
}
```

button.css

```css
.btn {
  background-color: #ea1e63;
  line-height: 40px;
  display: inline-block;
  float: right;
  padding: 0 20px;
  color: white;
  border-radius: 3px;
  border: none;
  box-shadow: 1px 1px 2px 1px darkgrey;
  /* letter-spacing: 1px; */
}
```

**2021 06 25 Progress-bar generavimas**
Objektinis programavimas. Objektas sudarytas is 2 elementu: selektoriaus ir duomenu.

- Komponentai - komponentas pasiima duomenis
- Duomenys
- Home viska mixuoja: kur istatyti ir kuri duomenu rinkini panaudoti
  pvz.: ieskok (left-column) ir panaudok progressBar

Su js sugeneruojam progress-bar

```js
init() {
  {
```

// patikrinti, ar validus selector

```js
if (!this.isValidSelector() || !this.isValidData()) {
  console.error('ERROR: nepraejo pirmines patikros');
  return false;
}

isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }
```

// patikrinti, ar validus data

```js
isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            return false;
        }
        return true;
    }
```

// jei bent vienas is ju nevalidus, tai baigiam darba (return false;)

- susirandame reikiama vieta, pagal pateikta selector

```js
this.DOM = document.querySelector(this.selector);
if (!this.DOM) {
  console.error('ERROR: nerestas elementas, pagal duota selector');
  return false;
}
```

- jeigu vieta neegzistuoja, tai baigiam darba (in case of return false;)

// generuojame turini ir istatome i reikiama vieta
render() {

```js
render() {
        let HTML = '';

        for (const bar of this.data) {
            HTML += `<div class="progress-bar">
                        <div class="top">
                            <div class="title">${bar.title}</div>
                            <div class="value">${bar.value}%</div>
                        </div>
                        <div class="bottom">
                            <div class="progress" style="width: ${bar.value}%;">
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>`;
        }

        this.DOM.innerHTML += HTML;
    }
}

```

index.html file istrinam

```html
<div class="progress-bar">
  <div class="top">
    <div class="title">UX Design</div>
    <div class="value">90%</div>
  </div>
  <div class="bottom">
    <div class="progress" style="width: 90%;">
      <div class="value"></div>
    </div>
  </div>
</div>
<div class="progress-bar">
  <div class="top">
    <div class="title">Web Design</div>
    <div class="value">86%</div>
  </div>
  <div class="bottom">
    <div class="progress" style="width: 86%;">
      <div class="value"></div>
    </div>
  </div>
</div>
<div class="progress-bar">
  <div class="top">
    <div class="title">Web Development</div>
    <div class="value">86%</div>
  </div>
  <div class="bottom">
    <div class="progress" style="width: 86%;">
      <div class="value"></div>
    </div>
  </div>
</div>
```
