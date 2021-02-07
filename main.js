let user = 'John Doe';
console.log(user);
const student = 'Polina';
console.log(student);
user = student;
console.log(user); // Polina

let test = 1;
test++;
test += '1';
console.log(test); // 21
test -= 1;
console.log(test); // 20
test = Boolean(test);
console.log(test); // true
console.log(typeof test);

// product of elements
const array1 = [2, 3, 5, 8];
let productOfNumbers = array1[0];
for (let i = 1; i < array1.length; i++) {
  productOfNumbers *= array1[i];
}
console.log(productOfNumbers);

//  array elements that are greater than 5 but less than 10
const array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 5 && array2[i] < 10) {
    console.log(array2[i]);
  }
}

// even array elements
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
  }
}

// palindrome function (the word palindrome can be read right-to-left and left-to-right the same)
function checkPalindrome(word) {
  const wordReverse = word.split('').reverse().join('');
  if (wordReverse === word) {
    return true;
  }
  return false;
}

console.log(checkPalindrome('abcecba')); // true

// a function that returns the smaller of the numbers
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(min(4, 7)); // 4

// a function that returns the larger of the numbers
function max(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}

console.log(max(4, 7)); // 7

// min function with ternary operator
function min1(a, b) {
  return a < b ? a : b;
}

console.log(min1(10, 11));

// max function with ternary operator
function max1(a, y) {
  return a > y ? a : y;
}

console.log(max1(22, 5));

// a function that replaces all numbers 0 with a string  'zero'
function createRandomArray() {
  const array3 = [];
  for (let i = 0; i < 10; i++) {
    array3[i] = Math.floor(Math.random() * 101);
  }
  return array3;
}

const arrayRandom = createRandomArray();
console.log(arrayRandom);

function changeZero(array) {
  const array5 = array;
  for (let i = 0; i < array5.length; i++) {
    let b = String(array5[i]);
    if (b.endsWith('0')) {
      b = b.replaceAll('0', 'zero');
      array5[i] = b;
    }
  }
  return array5;
}

console.log(changeZero(arrayRandom));

// closure addition function
function sum3(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum3(4)(10)); // 14

// paragraphs change colors from array on click
// const text1El = document.getElementById('text1');
// const text2El = document.getElementById('text2');
// const text3El = document.getElementById('text3');
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// const count = () => {
//   let callNumber = 0;
//   return (event) => {
//     event.target.style.color = colors[callNumber];
//     callNumber = callNumber > 3 ? 0 : callNumber + 1;
//   };
// };
//
// text1El.addEventListener('click', count());
// text2El.addEventListener('click', count());
// text3El.addEventListener('click', count());

// date format conversion from  '2020-11-26' to '26.11.2020'
const dateChang = '2020-11-26';
const dateReverse = (date1) => date1.split('-').reverse().join('.');
console.log(dateReverse(dateChang));

// object search
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

// search
const replaceStrForSearch = (str) => str.toLowerCase().replaceAll(' ', '');
const search = (str) => {
  const searchStr = replaceStrForSearch(str);
  const result = [];

  data.forEach((object) => {
    const string = `${object.country}, ${object.city}, ${object.hotel}`;

    if (replaceStrForSearch(string).includes(searchStr)) {
      result.push(string);
    }
  });
  return result;
};

console.log(search('Ber'));

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
  // let selectedDayIn;
  // let selectedMonthIn;
  // let selectedYearIn; // split the selected date into other variables
  // let selectedDayOut;
  // let selectedMonthOut;
  // let selectedYearOut;
  // if (selectedDateCheckIN !== undefined) {
  //   selectedDayIn = selectedDateCheckIN.getDate();
  //   selectedMonthIn = selectedDateCheckIN.getMonth();
  //   selectedYearIn = selectedDateCheckIN.getFullYear();
  // }// If the date is not undef, assign a value to the variables
  // if (selectedDateCheckOut !== undefined) {
  //   selectedDayOut = selectedDateCheckOut.getDate();
  //   selectedMonthOut = selectedDateCheckOut.getMonth();
  //   selectedYearOut = selectedDateCheckOut.getFullYear();
  // }

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

// LESSON 8
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(students) {
    this.students = students.map(({
      firstName, lastName, admissionYear, courseName,
    }) => (new Student(firstName, lastName, admissionYear, courseName)));
  }

  getInfo() {
    const arrayStudents = this.students.sort((prev, next) => prev.course - next.course);
    const array = [];
    arrayStudents.forEach((item) => {
      array.push(`${item.fullName} - ${item.courseName}, ${item.course} курс`);
    });
    return array;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());

// // paragraphs change colors from array on click
// const text1El = document.getElementById('text1');
// const text2El = document.getElementById('text2');
// const text3El = document.getElementById('text3');
// const colors = {
//   color: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
//   [Symbol.iterator]() {
//     return this;
//   },
//   next(count) {
//     return {
//       value: this.color[count],
//       done: false,
//     };
//   },
// };

// const count = () => {
//   let callNumber = 0;
//   return (event) => {
//     event.target.style.color = colors.next(callNumber).value;
//     callNumber = callNumber > 3 ? 0 : callNumber + 1;
//   };
// };
//
// text1El.addEventListener('click', count());
// text2El.addEventListener('click', count());
// text3El.addEventListener('click', count());

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
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length - 1 - n; i++) {
      if (array[i].name > array[i + 1].name) {
        const buff = array[i].name;
        array[i].name = array[i + 1].name;
        array[i + 1].name = buff;
      }
    }
  }
  return array;
}

// array dataHomes query
(async () => {
  let dataHomes;
  if (!sessionStorage.getItem('homes')) {
    dataHomes = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((data1) => data1)
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
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
    console.log(homesCardsElements[nextNumberSlider]);
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

// поиск и отправка формы
const formEl = document.getElementById('header__form');
const formDestinationEl = document.getElementById('city');
const availableHotelsEl = document.getElementById('available--hotels');
formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const search1 = formDestinationEl.value.toLowerCase().trim();

  const res = await fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${search1
  }&dateFrom=${selectedDateCheckIN.getTime()}&dateTo=${selectedDateCheckOut.getTime()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));
  if (res.length === 0) {
    if (availableHotelsEl.classList.contains('background__successfully')) {
      availableHotelsEl.classList.remove('background__successfully');
    }
    availableHotelsEl.classList.add('background__not-successfully');
    availableHotelsEl.innerHTML = `
    <div class="container">
        <h2 class="title">Available hotels</h2>
        <p class="available--text">Unfortunately, your search returned no results </p>
    </div>
    `;
  }
  if (res.length !== 0) {
    bubbleSort(res);
    availableHotelsEl.classList.add('background__successfully');
    availableHotelsEl.innerHTML = `
    <div class="container">
        <h2 class="title">Available hotels</h2>
        <div class="row" id="available--cards">
        <svg class="available__svg_arrow-back display-none" id="available__arrow-back">
            <use href="#arrow"></use>
        </svg>
        <svg class="homes__svg_arrow-next" id="available__arrow-next">
            <use href="#arrow"></use>
        </svg>
    </div>
    `;
    const availableCardsEl = document.getElementById('available--cards');
    addHomesCards(res, availableCardsEl, 'availableCards');
  }
  slider('available__arrow-next', 'available__arrow-back', '.availableCards');
  console.log(res);
});
