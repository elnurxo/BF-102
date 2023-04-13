let arr = [1, 3, -5, 2, 4];
// arr.forEach((item,idx) => {
//     if (item>0) {
//         array.pop()
//     }
// });

let employee1 = {
  name: "John 1",
  age: 23,
  salary: 400,
};
let employee2 = {
  name: "John 2",
  age: 45,
  salary: 900,
};
let employee3 = {
  name: "John 3",
  age:67,
  salary: 1200,
};
let employee4 = {
    name: "John 4",
    age: 61,
    salary: 2500,
  };

// let newEmployees = employees.map((employee)=> {
//     return {
//         name: employee.name,
//         salary: employee.salary+500
//     }
// })

// console.log(employees);
// console.log(newEmployees);

// const myArr = [[1,2], 3, 3, 4, 5, 6];
// const newArr = myArr.flat().map((x) => x * 2);

// console.log(newArr);


let employees = [employee1,employee2,employee3,employee4];

// let filteredEmployees =  employees.filter((employee)=> employee.age>60)

// let totalSalary = employees.reduce(Total,0)

// function Total(total,employee) {
//         console.log(`employee salary: ${employee.salary}`);
//         console.log(`total salary: ${total}`);
//         return total+employee.salary;
// }

// console.log(totalSalary);


// let numbers = [1,2,4,5,7];

// let result = employees.every((employee)=>{
//     return employee.salary>1000;
// })

// let result1 = employees.some((employee,idx)=> {
//     return employee.salary>5000;
// })

// console.log(result1);



// let searchedValue = fruits.filter((fruit)=> !fruit.toLowerCase().includes(inputValue.toLowerCase()))

// let index = -1;
// index = fruits.map((fruit,idx)=>{
//     if (fruit.toLowerCase()==inputValue.toLowerCase()) {
//         return idx;
//     }
// }).filter((item)=> item!=undefined).toString();

// console.log(index);

//findIndex, array form, join

// const fruits = ["Apple", "Orange", "Mango","Oranges 2"];

// let idx = fruits.indexOf("Apple");
// let search = "mAnGo";
// let index = fruits.findIndex((fruit)=>fruit.toLowerCase()==search.toLowerCase())

// console.log(idx);
// console.log(index);

// let arr1 = Array.from("A BCDEFG");

// console.log(arr1);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// console.log(keys);

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join("");

console.log(text);

// let fruitsStr = "banana,orange";
// let fruitsArr = fruitsStr.split(",");
// console.log(fruitsArr);


