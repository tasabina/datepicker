export function generateMonthName(month){
    return generateMonthesArray()[month];
}

export function generateMonthesArray(){
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return months;
}
export function generateWeeksArray(length=2){
    let weeks = null;
    let fullName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
    let shortNameThree = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',];
    let shortNameTwo = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su',];
    weeks = (length === 3) ? shortNameThree : (length === 2) ? shortNameTwo : fullName;
    return weeks;   
}

export function toDay(el){
    let currMonthClass = '';
    if(!el.inCurrentMonth){
        currMonthClass = "dp-unactual";
    }
    return `<td class="dp-cell dp-day-block ${currMonthClass}" data-month="${el.month}" data-day="${el.day}">${el.day}</td>`;;
}

export function toWeek(days){
    const week = days.map(toDay).join('');
    return `<tr class="dp-row">${week}</tr>`;
}

export function toTitleDays(){
    const title = generateWeeksArray().map(
        (element) => {
            return `<th class="dp-cell">${element}</th>`;

    }).join('');
    return `<tr class="dp-row dp-daytitle">${title}</tr>`;
}

export function generateTheme(theme, customClass){
    let mainClass = "dp-month-block";
    mainClass += customClass ? " " + customClass : "";

    if(theme){
        switch(theme) {
            case 'black':
                return `class="${mainClass} black"`;
            case 'red':
                return `class="${mainClass} red"`;
            default:
                return `class="${mainClass} white"`;
            }
    }
}

export function toMonth(monthTitle, year, weeks, options={}){
    const dayName = toTitleDays();
    const monthBlock = weeks.map(toWeek).join('');
    const theme = options.theme || null;
    const customClass = options.class || null;
    var clss = '';
    if(theme || customClass){
        clss = generateTheme(theme, customClass);
    }
    return `<div ${clss}>
                <div class="dp-month-title">${generateMonthName(monthTitle)} ${year}</div>
                <div class="dp-days-block">
                    <table>${dayName}${monthBlock}</table>
                </div>
            </div>`;
}

export function toBlock(month, year, firstBlock, secondBlock, options={}){
    let secondMonthTitle = month === 11 ? 0 : month + 1;
    let currentYear = month === 11 ? year + 1 : year;
    const firstMonth = toMonth(month, year, firstBlock, options);
    const secondMonth = toMonth(secondMonthTitle, currentYear, secondBlock, options);

    return `<div class="dp-container">${firstMonth + secondMonth}</div>`;
}