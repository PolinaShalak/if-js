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

// произведение элементов
const array1 = [2, 3, 5, 8];
let productOfNumbers = array1[0];
for (let i = 1; i < array1.length; i++) {
  productOfNumbers *= array1[i];
}
console.log(productOfNumbers);

//  элементы массива, которые больше 5, но меньше 10
const array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 5 && array2[i] < 10) {
    console.log(array2[i]);
  }
}

// четные элементы массива
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
  }
}

// функция palindrome (cлово палиндром может читаться справа-налево и слева-направо одинаково)
function checkPalindrome(word) {
  const wordReverse = word.split('').reverse().join(''); // split() - разбивает строки на массив, reverse() - обратный порядок элементов, join('') - объедияет  элементы массива в строку
  if (wordReverse === word) {
    return true;
  }
  return false;
}
console.log(checkPalindrome('abcecba')); // true

// функция, которая возвращает меньшее из чисел
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(4, 7)); // 4

// функция, которая возвращает большее из чисел
function max(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}
console.log(max(4, 7)); // 7

// функция min с тернарным оператором
function min1(a, b) {
  return a < b ? a : b;
}
console.log(min1(10, 11));

// функция max с тернарным оператором
function max1(a, y) {
  return a > y ? a : y;
}
console.log(max1(22, 5));

// функция, которая заменяет все 0 на строку 'zero'
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

// функция сложения с замыканием
function sum3(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum3(4)(10)); // 14

// // абзацы меняют цвета из массива по клику
const text1El = document.getElementById('text1');
const text2El = document.getElementById('text2');
const text3El = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const count = () => {
  let callNumber = 0;
  return (event) => {
    event.target.style.color = colors[callNumber];
    callNumber = callNumber > 3 ? 0 : callNumber + 1;
  };
};

text1El.addEventListener('click', count());
text2El.addEventListener('click', count());
text3El.addEventListener('click', count());

// преобразование формата даты из '2020-11-26' в '26.11.2020'
const date = '2020-11-26';
const dateReverse = (date1) => date1.split('-').reverse().join('.');
console.log(dateReverse(date));

// поиск объектов размещения
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

// поиск - 1
/* const search = str => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const object = data[i];
    if (object.country.includes(str) || object.city.includes(str) || object.hotel.includes(str)) {
      result[result.length] = `${object.country}, ${object.city}, ${object.hotel}`;
    }
  }
  return result;
}
console.log(search('Russia'));
 */

// поиск - 2
/* const search = str => {
  const result = [];
  data.forEach(object => {
    if (object.country.includes(str) || object.city.includes(str) || object.hotel.includes(str)) {
      result[result.length] = `${object.country}, ${object.city}, ${object.hotel}`;
    }
  })
  return result;
}
console.log(search('Russia'));
 */

// поиск - 3
/* const checkData = (str) => {
  const reg = new RegExp(str.trim(), 'gi');
  return data.filter((el) => (reg.test(el.country) || reg.test(el.city) || reg.test(el.hotel)));
};

const search = (str) => {
  const arraySearch = checkData(str);
  if (arraySearch.length > 0) {
    for (let i = 0; i < arraySearch.length; i++) {
      console.log(Страна: ${arraySearch[i].country}\nГород: ${arraySearch[i].city}\nОтель:
      ${arraySearch[i].hotel}`);
    }
  } else console.log('Ничего не найдено');
};

search('Germany');
 */

// поиск - 4
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

// календарь
/* const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  const calendarArray = [];
  let weekArray = [];
  if (dayOfWeek > 0) {
    for (let i = daysInMonth - dayOfWeek + 1; i <= daysInMonth; i++) {
      weekArray.push(i);
    }
  }
  for (let i = 1; i <= daysInMonth; i++) {
    weekArray.push(i);
    if (weekArray.length === daysInWeek) {
      calendarArray.push(weekArray);
      weekArray = [];
    }
  }
  if (weekArray.length < daysInWeek) {
    calendarArray.push(weekArray);
  }
  for (let i = 1; weekArray.length !== daysInWeek; i++) {
    weekArray.push(i);
  }
  return calendarArray;
};

//console.log(getCalendarMonth(30, 7, 6));
 */

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek = 0) => {
  if (dayOfWeek >= daysInWeek) {
    throw new Error('Invalid data');
  }
  const daysWithoutTail = daysInMonth + dayOfWeek;
  const iterations = daysWithoutTail + (daysInWeek - (daysWithoutTail % daysInWeek));
  let dayOfMonth = daysInMonth - dayOfWeek;
  let subArrayIndex = 0;
  const result = [];

  for (let i = 0; i <= iterations; i++) {
    if (!result[subArrayIndex]) {
      result[subArrayIndex] = [];
    }

    if (result[subArrayIndex].length === daysInWeek) {
      if (result[subArrayIndex][result[subArrayIndex].lenght - 1] === daysInMonth) {
        break;
      }
      subArrayIndex += 1;
      result[subArrayIndex] = [];
    }
    dayOfMonth += 1;

    if (dayOfMonth > daysInMonth) {
      dayOfMonth = 1;
    }
    result[subArrayIndex].push({dayOfMonth,
      notCurrentMonth: true, // optional field - день не входит в текущий месяц
      selectedDay: false,
    });
  }

  return result;
};

const calendarMonth = getCalendarMonth(30, 7, 1);
console.log(calendarMonth);
