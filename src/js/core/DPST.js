/*	DPST.Class
*   OOP facilities of the library.
*/
export default class DPST {

    constructor(month, year) {
        this.month = month || new Date().getMonth();
        this.year = year || new Date().getFullYear();
    }

    generateMonthDateArray(){
        const y = this.year;
        const m = this.month;
        let month = [];
        let counter = 0;
        let newDate = new Date(y, m, 1, 0, 0, 0, 0);
        let currentDate = newDate.getDay() !== 0 ? newDate.getDay() * -1 + 2 : newDate.getDay() * -1 - 5;

        for(let w = 0; w < 6; w++){
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
            month.push(week);
        }
        return month;
    }
}