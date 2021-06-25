// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";

// EXECUTION
new Clock('#clock_1', clockData);
//new Clock(485545);
socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);

let count = 0;

const timer1 = setInterval(() => {
    if (count < 10) {
        console.log(count++);
    } else {
        clearInterval(timer1);
    }
}, 1000)

let x = 55;
const timer2 = setInterval(() => {
    if (x < 62) {
        console.log(x++);
    } else {
        clearInterval(timer2);
    }
}, 1000)