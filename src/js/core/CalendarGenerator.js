/*	DPST.Class
*   OOP facilities of the library.
*/
export default class CalendarGenerator {

    constructor({day, month, year, options}) {
        this.day = day || new Date().getDate();
        this.month = month || new Date().getMonth();
        this.year = year || new Date().getFullYear();
        this.options = options;
    }

    generateMonthDateArray(month, year){
        const y = year || this.year;
        const m = month || this.month;
        let months = [];
        let counter = 0;
        let newDate = new Date(y, m, 1, 0, 0, 0, 0);
        let currentDate = newDate.getDay() !== 0 ? newDate.getDay() * -1 + 2 : newDate.getDay() * -1 - 5;

        for(let w = 0; w < 5; w++){
            let week = [];
            for(let d = 0; d < 7; d++){
                let day = new Date(y, m, counter + currentDate, 0, 0, 0, 0);
                if(day.getMonth() == m){
                    week.push(day.getDate());
                } else {
                    week.push(0);
                }
                counter ++;
            }
            months.push(week);
        }
        console.log(months);
        return months;
    }

    generateYearArray(year){
        let years = [];
        let start = year-(year % 10);

        for(let i=0; i<10; i++){
            years.push(start);
            start++;
        }
        return years;
    }
}