function createCalendar(ID, year, month) {
  const table = document.createElement('table');
  table.innerHTML = '<tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>';
  let row = table.insertRow();
  let date = new Date(year, month - 1);

  let firstDay = date.getDay() === 0 ? 7 : date.getDay();
  for (let i = 1; i < firstDay; i++) {
    row.insertCell();
  }

  while (true) {
    const firstDayToAdd = date.getDay() === 0 ? 7 : date.getDay();
    for (let i = firstDayToAdd; i < 8 && date.getMonth() + 1 === month; i++) {
      const cell = row.insertCell();
      cell.innerText = date.getDate();
      date.setDate(date.getDate() + 1);
    }

    while (date.getDay() !== 1) {
      row.insertCell();
      date.setDate(date.getDate() + 1);
    }

    if(date.getMonth() + 1 === month) {
      row = table.insertRow();
    } else {
      break;
    }
  }

  document.getElementById(ID).append(table);
}

createCalendar('calendar', 2018, 7);
