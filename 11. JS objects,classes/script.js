const pi = 3.14;
const person = {
    firstName: "Cavidan",
    surname: "Shushayev",
    age: 21,
    details: {
        email: "cavidan@code.edu.az",
        username: "java",
        password: "12345"
    },
    hobbies: ["eating","driving"],
    getName(){
        console.log(this.firstName);
    },
    getFullName: function(){
        return `${this.firstName} ${this.surname}`;
    }
};


const person1 = new Person("Elnur","Khalilov",22);
const person2 = new Person("Chinare","Agazade",21);

// console.log(person1.ad);
// console.log(person2);

//object create
const person3 = Object.create({
    name:"Baba",
    surname: "Kazimov",
    age:21
});

const person4 = {};

person4.name = "Nuray";
person4.surname = "Baxishli";

// console.log(person4);

// console.log(person3);

// person.point = "77.5";
// let POINT_KEY = "point";
// person.POINT_KEY = 77.5;
// person[POINT_KEY] = 77.5;

// console.log(person);

const prices = [1,2,3,5,6]; //array


//constructor function
function Person(firstName,surname,age=0) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
}

// function Student(groupNo, point){
//     this.groupNo = groupNo;
//     this.point = point;
// }

// const person5 = new Person("Hikmet","Abbasov",19);
// console.log(person5);

// const stu1 = new Student("BF-102",87.8);

// Object.setPrototypeOf(stu1,person5);

// console.log(stu1);

//KEYS,VALUES,ENTRIES
// console.log(Object.keys(person));
// console.log(Object.values(person)[4][0]);
// console.log(Object.entries(person5)[1]);


//Copying Array, Destruct, spread
let dog1 = {
    name: "John",
    age: 7
};

// dog1 = dog2; //reference

// let dog2 =  Object.assign({},dog1);

//object destructing, spread operator
let dog2 = {...dog1};

dog2.name = "Beck";

console.log(dog1.name); //John
console.log(dog2.name); //Beck

//CLASS
class Fish{
    constructor(type,color){
        this.color = color;
        this.type = type;
    }
}

class Shark extends Fish{
    constructor(name,age,kill,save,color,type,){
        super(color,type);
        this.name = name;
        this.age = age;
        this.kill = kill;
        this.save = save;
        this.color = color;
        this.type = type;
    }

    AvgDeath() {
        return (this.kill+this.save)/2;
    }
}

const shark1 = new Shark("Billy",245,98,2,"white","white shark");
const fish1 = new Fish("white shark","white");
console.log(shark1);

class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    GetData() {
        return `name: ${this.name} | age: ${this.age}`;
    }
}

class Student extends Human{
    constructor(groupNo,point,name,age){
        super(name,age)
        this.groupNo = groupNo;
        this.point = point;
        this.name = name;
        this.age = age;
    }
}

class Employee extends Human{
    constructor(salary,experienceYear,name,age){
        super(name,age);
        this.salary = salary;
        this.experienceYear = experienceYear;
        this.name = name;
        this.age = age;
    }
}

const employee1 = new Employee(4000,2,"Elnur",21);
console.log(employee1.GetData());
const student1 = new Student("BF-102",99,"Leman",20);
console.log(student1.GetData());

let objSTR = JSON.stringify(employee1);
let objJSON = JSON.parse(objSTR);

console.log(objJSON.name);





