
// let fruitsStr = fruits.toString();

//pop, push, shift, unshift

//pop
// fruits.pop();
//push
// fruits.push("Pineapple");

//shift
// fruits.shift();
// fruits.unshift("Pineapple");

// console.log(fruits);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myStudents = myBoys.concat(myGirls,["Peter"],);

// console.log(myStudents);

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();

// console.log(newArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //first parametr - nechenci index-e elave oluncacaq
// //second parametr - neche element silinecek

// fruits.splice(2,2);

// console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);

// console.log(citrus);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

// const numbers = [2,4,1,8,5,1,9,6];

// const person1 = {
//     name: "Baba",
//     age: 21
// };
// const person2 = {
//     name: "Cavidan",
//     age: 17
// };
// const person3 = {
//     name: "Aysel",
//     age: 19
// };

// const people = [person1,person2,person3];

// people.sort(function(a, b){return a.age - b.age});
// people.sort((a, b) => a.age - b.age);

// console.log(people);


const points = [40, 100, 1, 5, 25, 10];

console.log(Math.max.apply(null, points));