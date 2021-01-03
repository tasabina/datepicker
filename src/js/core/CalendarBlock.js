import {toMonth, toBlock} from '../template/template.js';
import CalendarGenerator from '../core/CalendarGenerator.js';


export default class CalendarBlock {
    constructor({day, month, year, options}) {
        this.day = day || new Date().getDate();
        this.month = month || new Date().getMonth();
        this.year = year || new Date().getFullYear();
        this.options = options;
    }

    init() {
        let validMonth = this.month > 11 ? 0 : this.month;
        const calendar = new CalendarGenerator(validMonth, this.year);
        if(this.options.double){
            let nextBlock = validMonth === 11 ?
                            calendar.generateMonthDateArray(0, this.year + 1) :
                            calendar.generateMonthDateArray(validMonth + 1, this.year);
            return toBlock(
                validMonth,
                calendar.generateMonthDateArray(validMonth, this.year),
                nextBlock,
                this.options
                );
        }
        return toMonth(validMonth, calendar.generateMonthDateArray(validMonth, this.year), this.options); 
    }
}