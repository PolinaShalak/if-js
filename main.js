let user = 'John Doe';
console.log(user);
let student = 'Polina';
console.log(student);
user = student;
console.log(user); // Polina

let test = 1;
test++;
test += '1';
console.log(test);  // 21
test -= 1;
console.log(test); // 2
test = Boolean(test);
console.log(test); // true
console.log(typeof test);

let array1 = [2, 3, 5, 8];
let productOfNumbers = array1[0];
for (let i = 1; i < array1.length; i++) {
    productOfNumbers *= array1[i];
}
console.log(productOfNumbers);
