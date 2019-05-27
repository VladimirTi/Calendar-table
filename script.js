function createCalendar(ID, year, month) {
  let html = '<tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>'
  let dayHTML = '';
  let date = new Date(year, month - 1);

  let firstDay = date.getDay() === 0 ? 7 : date.getDay();
  for(let i = 1; i < firstDay; i++) {
    dayHTML += `<td></td>`
  }

  while(date.getMonth() + 1 === month) {
    const firstDayToAdd = date.getDay() === 0 ? 7 : date.getDay()
    for (let i = firstDayToAdd; i < 8 && date.getMonth() + 1 === month; i++) {
      dayHTML += `<td>${date.getDate()}</td>`;
      date.setDate(date.getDate() + 1)
    }

    while(date.getDay() !== 1) {
      dayHTML += `<td></td>`
      date.setDate(date.getDate() + 1)
    }

    dayHTML = `<tr>${dayHTML}</tr>`
    html += dayHTML
    dayHTML = ''
  }

  html = `<table>${html}</table>`
  document.getElementById(ID).innerHTML = html
}

createCalendar('calendar', 2018, 7)
