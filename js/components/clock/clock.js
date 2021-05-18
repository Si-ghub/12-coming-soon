/*function Clock() {
const HTML = `<div class="time">
                <div class="value">432</div>
                <div class="label">Days</div>
            </div>                                                                  ILGASIS BUDAS
            <div class="time">
                <div class="value">09</div>
                <div class="label">Hours</div>
            </div>
            <div class="time">
                <div class="value">37</div>
                <div class="label">Minutes</div>
            </div>
            <div class="time">
                <div class="value">39</div>
                <div class="label">Seconds</div>
            </div>`;
    const selector = `.clock`;
    const DOM = document.querySelector(selector);

    DOM.innerHTML = HTML;
}
*/

function Clock(selector) {
    const DOM = document.querySelector(selector);
    const timeValues = [432, 9, 37, 39];
    const labelValues = ['Days', 'Hours', 'Minutes', 'Seconds'];                 //GREITASIS BUDAS
    let HTML = '';

    for (let i = 0; i < timeValues.length; i++) {
        HTML += `<div class="time">
                    <div class="value">${timeValues[i]}</div>
                    <div class="label">${labelValues[i]}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;
}

export { Clock }

