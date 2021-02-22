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