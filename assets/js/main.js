// DARK MODE TOGGLE
document.querySelector('.dark-mode-swicth').onclick = () =>{
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('body').classList.toggle('light')
}

// CHECK LEAP YEAR
isLeapYear = (year)=>{
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 
        !== 0) ||(year % 100 === 0 && year % 400 === 0)
}
getFebDays = (year) =>{
    return isLeapYear(year) ? 29 : 28
}

let calendar = document.querySelector('.calendar')

const month_name = ['January','February','March','April',
'May','June','July','August','September','Octerber',
'November','December']
 

let month_picker = document.querySelector('#month-picker')

month_picker.onclick = () =>{
    month_list.classList.add('show')
}

// GENERATE CALENDAR

generateCalendar = (year, month) =>{
    let calendar_days = document.querySelector('.calendar-days')
    calendar_days.innerHTML = ""
    let calendar_header_year = document.querySelector('#year')
    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31,
         31, 30, 31, 30, 31]

    //let currDate = new Date()

    month_picker.innerHTML = month_name[curr_month.value]
    calendar_header_year.innerHTML = curr_year.value

    let first_day = new Date(year, month, 1)

    
    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
       if(i >= first_day.getDay()){
        day.classList.add('calendar-day-hover')
        day.innerHTML = i - first_day.getDay() + 1
        day.innerHTML += ` 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        `
        if(i - first_day.getDay() + 1 === currDate.getDate() && year ===
        currDate.getFullYear() && month === currDate.getMonth() ) {
            day.classList.add('curr-date')
        }
    }
    calendar_days.appendChild(day)
       
    }
}

let month_list = calendar.querySelector('.month-list')

month_name.forEach((e, index) =>{
    let months = document.createElement('div')
    months.innerHTML = `<div>${e}</div>`
    months.onclick = () =>{
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(curr_year.value, curr_month.value )

    }
    month_list.appendChild(months)
})

document.querySelector('#prev-year i').onclick = () =>{
   --curr_year.value
   generateCalendar(curr_year.value, curr_month.value )
}
document.querySelector('#next-year i').onclick = () =>{
   ++curr_year.value
   generateCalendar(curr_year.value, curr_month.value )
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_year.value, curr_month.value )
//console.log(first_day);