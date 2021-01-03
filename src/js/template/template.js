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

export function toDay(day){
    if(day === 0){
        day = '';
    }
    return `<div class="dp-day-cell">${day}</div>`;
}

export function toWeek(days){
    const week = days.map(toDay).join('');
    return `<div class="dp-week-row">${week}</div>`;
}

export function toTitleDays(){
    const title = generateWeeksArray().map(
        (element) => {
            return `<div class="dp-title-cell">${element}</div>`;

    }).join('');
    return `<div class="dp-title-row">${title}</div>`;
}

export function generateTheme(theme){
    let mainClass = "dp-month-block";
    switch(theme) {
        case 'black':
          return `class="${mainClass} black"`;
        case 'red':
          return `class="${mainClass} red"`;
        default:
          return `class="${mainClass} white"`;
      }
}

export function toMonth(monthTitle, weeks, options={}){
    const dayName = toTitleDays();
    const monthBlock = weeks.map(toWeek).join('');
    const theme = options.theme || null;
    var clss = '';
    if(theme){
        clss = generateTheme(theme);
    }
    return `<div ${clss}><div class="dp-month-title">${generateMonthName(monthTitle)}</div>${dayName}${monthBlock}</div>`;
}

export function toBlock(month, firstBlock, secondBlock, options={}){
    let secondMonthTitle = month === 11 ? 0 : month + 1;
    const firstMonth = toMonth(month, firstBlock, options);
    const secondMonth = toMonth(secondMonthTitle, secondBlock, options);

    return `<div class="dp-container">${firstMonth + secondMonth}</div>`;
}