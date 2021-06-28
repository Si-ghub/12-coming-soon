class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;

        this.init()

    }

    init() {
        // patikrinti ar validus selector
        // jei ne, baigiam darba
        if (!this.isValidSelector()) {
            return false;
        }

        // susirasti DOM elementa
        this.DOM = document.querySelector(this.selector)

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
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: Selector must be a non empty string');
            return false;
        }
        return true;
    }
    isValidEmail(email) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 || //reiskia @ stringe nerasta(-1)
            email[0] === '@' ||         // pirma string reiksme yra@
            email.slice(-4).indexOf('@') > -1 || //paima 4 paskutinius email simbolius ir iesko @
            this.countSimbols(email, '@') > 1) { //tikrina kiek stringe yra atitinkamu @ simboliu!
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
        if (firstName === undefined ||
            typeof firstName !== 'string' ||
            firstName.length < 2 ||
            !this.isUpperCase(firstName[0])) {
            return false;
        }
        return true;
    }
    isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }
    isValidMessage(msg) {
        if (typeof msg !== 'string' ||
            msg === '') {
            return false;
        }
        return true;
    }

    // uzregistruojame mygtuko paspaudimo ivyki
    // submit mygtuko paspaudimo metu reikia isijungti default veikima
    addEvents() {
        this.submitButtonDOM.addEventListener('click', (e) => {
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
            console.log('All Good?', allGood)


        });


    }


}

export { Form }
