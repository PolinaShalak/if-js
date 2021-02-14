// calendar
// calendar is added and removed on click
const calendarElement = document.getElementById('header__calendar');
const formsWithDateElement = document.getElementById('form__check');
formsWithDateElement.addEventListener('click', (event) => {
  if (event.currentTarget === formsWithDateElement) {
    calendarElement.classList.toggle('display-none');
  }
});

const arrayMonthName = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentDay = new Date().getDate();

const dayNow = new Date().getDate();

const yearNumber = new Date().getFullYear();
const yearNow = new Date().getFullYear();

const monthNow = new Date().getMonth();
let monthNumber = new Date().getMonth();

let selectedDateCheckIN;
let selectedDateCheckOut;

// returns an array with dates
const getCalendarMonth = (checkInDate, checkOutDate, monthCount, elementID, yearCount) => {
  const daysInWeek = 7;
  const date = new Date(yearNumber, monthCount + 1, 0);
  const daysInMonth = date.getDate();
  let dayOfWeek = new Date(yearCount, monthCount, 1).getDay();
  dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

  const nameOfMonth = document.getElementById(elementID);
  nameOfMonth.textContent = `${arrayMonthName[date.getMonth()]} ${date.getFullYear()}`;

  const calendarArray = [];
  let weekArray = [];
  if (dayOfWeek > 0) {
    for (let i = daysInMonth - dayOfWeek + 2; i <= daysInMonth; i++) {
      weekArray.push({
        dayOfMonth: i,
        notCurrentMonth: true,
      });
    }
  }
  for (let i = 1; i <= daysInMonth; i++) {
    weekArray.push({
      dayOfMonth: i,
      selectedDay: (i >= checkInDate && i <= checkOutDate),
      currentDay: (i === currentDay),
      currentMonth: monthCount,
      numberYear: yearCount,
    });
    if (weekArray.length === daysInWeek) {
      calendarArray.push(weekArray);
      weekArray = [];
    }
  }
  if (weekArray.length === 0) {
    return calendarArray;
  }
  for (let i = 1; weekArray.length !== daysInWeek; i++) {
    weekArray.push({
      dayOfMonth: i,
      notCurrentMonth: true,
    });
  }
  calendarArray.push(weekArray);
  return calendarArray;
};

// an array with dates is added to the variable
const currentMonthCalendar = function () {
  return getCalendarMonth(5, 10,
    monthNumber, 'month', yearNumber);
};

const nextMonthCalendar = function () {
  return getCalendarMonth(5, 10,
    monthNumber + 1, 'month-next', yearNumber);
};

// adds html and css to the calendar block
function createCalendarInHTML(item, calendarElements) {
  const el = document.getElementById(calendarElements);
  item.forEach((weeks) => {
    const week = document.createElement('div');
    week.classList.add('calendar__day-of-week');
    weeks.forEach((days) => {
      const day = document.createElement('div');
      if (days.notCurrentMonth) {
        day.classList.add('cell');
        week.appendChild(day);
        return;
      }
      // add class to selected days
      if (selectedDateCheckIN !== undefined) {
        if (days.numberYear === selectedDateCheckIN.getFullYear()
           && days.currentMonth === selectedDateCheckIN.getMonth()
           && days.dayOfMonth === selectedDateCheckIN.getDate()) {
          day.classList.add('calendar__selected-days');
        }
      }
      if (selectedDateCheckOut !== undefined) {
        if (days.numberYear === selectedDateCheckOut.getFullYear()
           && days.currentMonth === selectedDateCheckOut.getMonth()
           && days.dayOfMonth === selectedDateCheckOut.getDate()) {
          day.classList.add('calendar__selected-days');
        }
      }
      day.classList.add('cell-days');
      // adding a class to the days gone
      if (days.numberYear < yearNow
                || (days.currentMonth <= monthNow && days.dayOfMonth < dayNow)) {
        day.textContent = `${days.dayOfMonth}`;
        day.classList.add('calendar__grey-days');
        week.appendChild(day);
      }
      // adding a class to the current day
      if (days.currentDay && days.currentMonth === monthNow && days.numberYear === yearNow) {
        day.textContent = `${days.dayOfMonth}`;
        day.classList.add('calendar__current-day');
        week.appendChild(day);
      } else {
        day.textContent = `${days.dayOfMonth}`;
        week.appendChild(day);
      }
    });
    el.appendChild(week);
  });
}

createCalendarInHTML(currentMonthCalendar(), 'calendar');
createCalendarInHTML(nextMonthCalendar(), 'calendar-next');

const deleteCalendar = () => {
  const calendarEl = document.getElementById('calendar');
  const calendarNextEl = document.getElementById('calendar-next');
  calendarEl.innerHTML = '';
  calendarNextEl.innerHTML = '';
};

// deletes the calendar and adds a new one with changes
function changeCalendar() {
  deleteCalendar();
  createCalendarInHTML(currentMonthCalendar(), 'calendar');
  createCalendarInHTML(nextMonthCalendar(), 'calendar-next');
}

const calendarArrowBack = document.getElementById('calendar__arrow-back');
const calendarArrowNext = document.getElementById('calendar__arrow-next');

// event is added to the arrows
function addClick(event) {
  if (event.currentTarget === calendarArrowNext) {
    monthNumber++;
  }
  if (event.currentTarget === calendarArrowBack) {
    if (monthNumber === monthNow) return;
    monthNumber--;
  }
  console.log(monthNumber);
  changeCalendar();
}

calendarArrowNext.addEventListener('click', addClick);
calendarArrowBack.addEventListener('click', addClick);

const calendarForClickFirstEl = document.getElementById('calendar');
const calendarForClickSecondEl = document.getElementById('calendar-next');

const inputCheckInEl = document.getElementById('check-in');
const inputCheckOutEl = document.getElementById('check-out');

const addValueInInput = () => {
  inputCheckInEl.value = selectedDateCheckIN.toLocaleDateString('ru');
  if (selectedDateCheckOut === undefined) {
    inputCheckOutEl.value = '';
    return;
  }
  inputCheckOutEl.value = selectedDateCheckOut.toLocaleDateString('ru');
};

const selectedDate = (event, selector) => {
  if (event.target.classList.contains('cell')) return;
  if (event.target.classList.contains('calendar__grey-days')) return;
  const numberOfMonth = document.getElementById(selector);
  const [month, year] = numberOfMonth.textContent.split(' ');
  const day = event.target.textContent;
  const dateCheck = new Date(`  ${month}, ${day}, ${year} `);

  if (selectedDateCheckIN === undefined) {
    selectedDateCheckIN = dateCheck;
  } else if (selectedDateCheckIN.getTime() >= dateCheck.getTime()) {
    selectedDateCheckIN = dateCheck;
    selectedDateCheckOut = undefined;
  } else if (selectedDateCheckOut === undefined) {
    selectedDateCheckOut = dateCheck;
  } else {
    selectedDateCheckOut = undefined;
    selectedDateCheckIN = dateCheck;
  }
  addValueInInput();
  changeCalendar();
  console.log(selectedDateCheckIN, selectedDateCheckOut);
};

calendarForClickFirstEl.addEventListener('click', (event) => {
  selectedDate(event, 'month');
});

calendarForClickSecondEl.addEventListener('click', (event) => {
  selectedDate(event, 'month-next');
});

const homesElements = document.getElementById('homes-cards');

const screenBrowserWidth = window.screen.availWidth;

function addHomesCards(array, element, nameCards = 'cards') {
  array.forEach((item, index) => {
    const el = document.createElement('div');
    el.classList.add('col-3', 'col-xs-3', 'col-sm-2', nameCards);
    el.innerHTML = `
   <img class="homes__images" src ="${item.imageUrl}" alt="${item.name}">
   <a class="homes__link" href="">${item.name}</a>
   <p class="homes__text">${item.city}, ${item.country}</p>
   `;
    element.appendChild(el);
    if (index > 3) {
      el.classList.add('display-none');
    }
    if (index > 1 && screenBrowserWidth < 768) {
      el.classList.add('display-none');
    }
  });
}

function bubbleSort(array) {
  let buff;
  for (let n = 0; n < array.length; n++) {
    let wasSwap = false;
    for (let i = 0; i < array.length - 1 - n; i++) {
      if (array[i].name > array[i + 1].name) {
        buff = array[i].name;
        array[i].name = array[i + 1].name;
        array[i + 1].name = buff;
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return array;
}

// array dataHomes query
async function getDataFromAPI(url, options = {}) {
  const results = await fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));
  return results;
}

(async () => {
  let dataHomes;
  if (!sessionStorage.getItem('homes')) {
    dataHomes = await getDataFromAPI('https://fe-student-api.herokuapp.com/api/hotels/popular');
    sessionStorage.setItem('homes', JSON.stringify(dataHomes));
  } else {
    dataHomes = JSON.parse(sessionStorage.getItem('homes'));
  }
  if (!dataHomes) {
    console.log('Array dataHomes not found');
  } else {
    bubbleSort(dataHomes);
    addHomesCards(dataHomes, homesElements);
  }
})();

// slider
function slider(arrowNextEl, arrowBackEl, cardsSelector) {
  const homesArrowNextEl = document.getElementById(arrowNextEl);
  const homesArrowBackEl = document.getElementById(arrowBackEl);

  let startNumberSlider = 0;
  let nextNumberSlider = 4;

  const homesCardsElements = document.querySelectorAll(cardsSelector);
  //  console.log(homesCardsElements);

  if (homesCardsElements.length <= 3) {
    homesArrowNextEl.classList.add('display-none');
  }

  homesArrowNextEl.addEventListener('click', () => {
    homesCardsElements[startNumberSlider].classList.add('display-none');
    homesCardsElements[nextNumberSlider].classList.remove('display-none');

    if (nextNumberSlider === homesCardsElements.length - 1) {
      homesArrowNextEl.classList.add('display-none');
      return;
    }
    startNumberSlider++;
    nextNumberSlider++;

    if (startNumberSlider > 0) {
      homesArrowBackEl.classList.remove('display-none');
    }
  });

  homesArrowBackEl.addEventListener('click', () => {
    if (nextNumberSlider === homesCardsElements.length - 1) {
      homesArrowNextEl.classList.remove('display-none');
    }

    homesCardsElements[nextNumberSlider].classList.add('display-none');
    homesCardsElements[startNumberSlider].classList.remove('display-none');
    if (startNumberSlider === 0) {
      homesArrowBackEl.classList.add('display-none');
      return;
    }
    startNumberSlider--;
    nextNumberSlider--;
  });
}

slider('homes__arrow-next', 'homes__arrow-back', '.cards');
