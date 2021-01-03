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
    return `<td>${day}</td>`;
}

export function toWeek(days){
    const week = days.map(toDay).join('');
    return `<tr>${week}</tr>`;
}

export function toTitleDays(){
    const title = generateWeeksArray().map(
        (element) => {
            return `<th>${element}</th>`;

    }).join('');
    return `<tr>${title}</tr>`;
}

export function generateTheme(theme){
    switch(theme) {
        case 'black':
          return 'class="black"';
        case 'red':
          return 'class="red"';
        default:
          return 'class="white"';
      }
}

export function toMonth(weeks, options={}){
    const dayName = toTitleDays();
    const month = weeks.map(toWeek).join('');
    const theme = options.theme || null;
    var clss = '';
    if(theme){
        clss = generateTheme(theme);
    }
    return `<table ${clss}>${dayName}${month}</table>`;
}

export function toBlock(first, second, options={}){
    const firstMonth = toMonth(first, options);
    const secondMonth = toMonth(second, options);

    return `<div class="dp_container"><div>${firstMonth}</div><div>${secondMonth}</div></div>`;
}