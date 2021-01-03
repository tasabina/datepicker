import CalendarBlock from './js/core/CalendarBlock.js';
import './css/main.css';
import './scss/main.scss';

const dp = new CalendarBlock({
    day:1,
    month: 11,
    year: 2020,
    options:{
        double: true,
        theme: 'white',
        showEnable: true,
        class: 'custom'
    }
});

document.getElementById('app').innerHTML = dp.init();