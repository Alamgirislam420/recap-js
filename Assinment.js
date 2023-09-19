// 1. write a program to find the grade, based on a student mark

// var bangla = 40;
// var english = 50;
// var math = 44;
// var total = (bangla + english + math);

// console.log(total);

// 2. write a program to find leap year using if else statement

// function leapyear(march) {
//     return (2016 % 100 === 0) ? (1800 % 400 === 0) : (2012 % 4 === 0);
// }

// console.log(leapyear(2016));
// console.log(leapyear(1800));
// console.log(leapyear(2012));

// function leapyear(february) {
//     return (2016 % 100 === 0) ? (2000 % 400 === 0) : (1700 % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// var year = 2016;
// if ((year % 4 == 0) && (year % 100 != 0))
//     console.log(year + 'is a leap year');
// else if (year % 400 == 0)
//     console.log(year + 'is a leap year');
// else
//     console.log(year + 'is not a leap year')

// 3. write a program to find if the number is odd or even using an if else statement

// var number = 5;
// var remainder = (number % 5)
// if (remainder == 0) {
//     console.log('${number} is even');
// }
// else {
//     console.log('${number} is odd');
// }

// var number = 5;
// var remainder = (number % 2)
// if (remainder == 0) {
//     console.log('${number} is even');
// }
// else {
//     console.log('${number} is odd');
// }

// 2 ti songkkhar joog fol function



// maltiPle(num1, num2);

// function alamgirAsha() {
//     console.log('I love you');
// }

// alamgirAsha();
// console.log('i hate you');

// Array of object

// const product = {
//     name: 'laptop', price: 45000, brand: 'lenovo', color: 'yellow',
//     name: 'sunglass', price: 450, brand: 'gtg', color: 'black'
// }

// const productsJSON = JSON.stringify(product);
// console.log(product);

// // fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));


// // keys, values
// const keys = Object.keys(students);
// const values = Object.values(students);

// // for
// const number = [45, 85, 99, 78, 75, 65]
// number.forEach(num => console.log(num));
// number.map(num => num * 2);


const money = 250;
let food;
if (money > 200) {
    food = 'briyani';
}
else {
    food = 'cha biscut';
}

console.log(food);