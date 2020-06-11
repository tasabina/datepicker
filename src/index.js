import CalendarGenerator from './js/core/CalendarGenerator.js';
import './css/main.css';
import './scss/main.scss';

const dp = new CalendarGenerator();

console.log(JSON.stringify(dp.generateMonthDateArray()));