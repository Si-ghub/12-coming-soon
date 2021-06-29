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

**2021 06 26**
Trumpesnis Form.js validacijos variantas, bet kol kas dar per sudetingas :)
index.html file reikia susikurti custom atributus: data-validation (gali buti skirtingi data-)prie form, kad galetume identifikuoti.

```html
Pirma form
<form>
  <input
    data-validation="email"
    id="subscribe_email"
    type="email"
    placeholder="Type your email"
    required
  />
  <button class="btn" type="submit">Subscribe now</button>
</form>
Antra form
<form>
  <input
    data-validation="name"
    id="name"
    type="text"
    placeholder="Name"
    required
  />
  <input
    data-validation="email"
    id="email"
    type="email"
    placeholder="Email"
    required
  />
  <textarea
    data-validation="text"
    id="message"
    placeholder="Message"
    required
    maxlength="20"
  ></textarea>
  <button class="btn" type="submit">Send message</button>
</form>
```

```js
home.js file eksportuojame ir susirandame new Form (bus du, riekia abu ir susirasti)
pirmiausiai Form.js turime padaryti export {Form}, tada home.js import {Form} - nurodome kelia kur yra failas. Siuo atveju data filo nera,todel turesime daryti validacijas.
```

```js
class Form {
  constructor(selector) {
    this.selector = selector;

    this.formDOM = null;
    this.allInputsDOM = [];
    this.submitButtonDOM = null;
    this.validations = {
      name: this.isValidName,
      email: this.isValidEmail,
      text: this.isValidText,
    };

    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      console.error('ERROR: nevalidus selector');
      return false;
    }

    this.formDOM = document.querySelector(this.selector);
    if (!this.formDOM) {
      console.error('ERROR: nerastas formos elementas');
      return false;
    }

    this.allInputsDOM = this.formDOM.querySelectorAll('input, textarea');
    this.submitButtonDOM = this.formDOM.querySelector('button[type="submit"]');

    this.addEvents();
  }

  isValidSelector() {
    return true;
  }

  isValidName(name) {
    if (typeof name !== 'string' || name === '') {
      return false;
    }
    return true;
  }

  isValidEmail(email) {
    if (typeof email !== 'string' || email === '') {
      return false;
    }
    return true;
  }

  isValidText(text) {
    if (typeof text !== 'string' || text === '') {
      return false;
    }
    return true;
  }

  addEvents() {
    this.submitButtonDOM.addEventListener('click', (event) => {
      // submit mygtuko paspaudimo metu reikia isjungti default veikima
      event.preventDefault();

      // issitraukti is visu formos lauku informacija
      // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija
      let allGood = true;

      for (const inputDOM of this.allInputsDOM) {
        // sukuriam taisykle
        const validationRule = inputDOM.dataset.validation;
        const value = inputDOM.value;

        if (!this.validations[validationRule](value)) {
          allGood = false;
          break;
        }
      }

      // jei patikrinus visus laukus, nerasta nei vienos klaidos, tai "siunciam pranesima"
      // jei patikrinus visus laukus, nerasta bent viena klaida, tai parodome visu klaidos pranesimus (kol kas, viskas pateikiama i console)
      console.log('All good:', allGood);
    });
  }
}

export { Form };
```

Paprastesnis variantas su komentarais:

```js
class Form {
  constructor(selector) {
    this.selector = selector;

    this.DOM = null;
    this.allInputsDOM = [];
    this.submitButtonDOM = null;

    this.init();
  }

  init() {
    // patikrinti ar validus selector
    // jei ne, baigiam darba
    if (!this.isValidSelector()) {
      return false;
    }

    // susirasti DOM elementa
    this.DOM = document.querySelector(this.selector);

    // jei rasti napavyksta, baigiam darba
    if (!this.DOM) {
      console.error('ERROR: nerestas elementas, pagal duota selector');
      return false;
    }

    // susirasti visus formos laukus: input, textarea
    this.allInputsDOM = this.DOM.querySelectorAll('input, textarea');

    // susirasti formos submit mygtuka
    this.submitButtonDOM = this.DOM.querySelector('button');

    this.addEvents();
  }

  isValidSelector() {
    if (typeof this.selector !== 'string' || this.selector === '') {
      console.error('ERROR: Selector must be a non empty string');
      return false;
    }
    return true;
  }
  isValidEmail(email) {
    if (
      typeof email !== 'string' ||
      email.length < 6 ||
      email.indexOf('@') === -1 || //reiskia @ stringe nerasta(-1)
      email[0] === '@' || // pirma string reiksme yra@
      email.slice(-4).indexOf('@') > -1 || //paima 4 paskutinius email simbolius ir iesko @
      this.countSimbols(email, '@') > 1
    ) {
      //tikrina kiek stringe yra atitinkamu simboliu!
      return false;
    }
    return true;
  }

  // jei patikrinus visus laukus, nerasta nei vienos klaidos, tai "siunciam pranesima"
  countSimbols(text, letter) {
    let count = 0;

    for (const t of text) {
      if (t === letter) {
        count++;
      }
    }

    return count;
  }
  isValidName(firstName) {
    if (
      firstName === undefined ||
      typeof firstName !== 'string' ||
      firstName.length < 2 ||
      !this.isUpperCase(firstName[0])
    ) {
      return false;
    }
    return true;
  }
  isUpperCase(letter) {
    return letter === letter.toUpperCase();
  }
  isValidMessage(msg) {
    if (typeof msg !== 'string' || msg === '') {
      return false;
    }
    return true;
  }

  // uzregistruojame mygtuko paspaudimo ivyki
  addEvents() {
    this.submitButtonDOM.addEventListener('click', (e) => {
      // submit mygtuko paspaudimo metu reikia isijungti default veikima
      e.preventDefault();
      let allGood = true;

      // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija
      for (let element of this.allInputsDOM) {
        const validationRule = element.dataset.validation;

        if (validationRule === 'email') {
          if (this.isValidEmail(element.value) === false) {
            allGood = false;
            break;
          }
        }
        if (validationRule === 'name') {
          if (this.isValidName(element.value) === false) {
            allGood = false;
            break;
          }
        }
        if (validationRule === 'text') {
          if (this.isValidMessage(element.value) === false) {
            allGood = false;
            break;
          }
        }
      }

      // jei patikrinus visus laukus, nerasta nei viena klaida, tai parodome visus klaidos pranesimus (kol kas, viskas pateikiama i console)
      console.log('All Good?', allGood);
    });
  }
}

export { Form };
```

**Toast variantas**
home.js

```js
// EXECUTION
const toast = new Toast();
// toast.success('Tau pavyko!');
// toast.info('Pranesimas apie kazka!');
// toast.warning('Tu cia ziurek..!');

// toast.error('Yra klaida!', 'Nauja antraste');
toast.error('Yra klaida!');
// toast.error();
```

Toast.js file

```js
hide() {
        this.DOM.classList.add('hide');
    }

    success(msg, title = 'Success!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'success';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    info(msg, title = 'Information!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'info';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    warning(msg, title = 'Warning!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'warning';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    error(msg, title = 'Error!') {
        if (!msg) {
            return false;
        }

        this.show();
        this.DOM.dataset.state = 'error';
        this.messageDOM.innerText = msg;
        this.titleDOM.innerText = title;
    }

    addEvents() {
        this.closeDOM.addEventListener('click', () => {
            this.hide();
        })
    }
}

export { Toast }

```
