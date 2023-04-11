// pure function, arrow function, anonym function



//function declare
//parametr
// function greet(name){ 
//     if (name == undefined) {
//         console.log("Hello anonymous");
//     }
//     else{
//         console.log(`Hello ${name}`)
//     }
// };

// greet("Elnur"); //argument
// greet();
// greet();

// function sum() {
//     let sum = 0;
//     let str = "";
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] == "number") {
//             sum+=arguments[i];
//         }
//         else{
//             str += (arguments[i] + " ")
//         }
//     }

//     let result = sum+" "+str;

//     return result;
// }


// sum of numbers + concat of string
// console.log(sum(1,2,4,"hello",5,"world"));


//anonym function
const sum = function (num1,num2){
    return num1+num2;
}
console.log(sum(2,3));

//arrow functions
const sum1 = (num1,num2) =>{
    return num1+num2;
}

const sum2 = (num1,num2) => num1+num2;

let result = sum2(4,5);
console.log(result);



//num1,num2,num3 parametrleri qebul eden bir function yazirsiniz.
// bu function hemin 3 ededin ededi ortasini qaytarmalidir.

function avg() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
       sum+=arguments[i];
    }

    return sum/arguments.length;
}
const avg1 = ()=> (num1+num2+num3)/3;

const avg2 = function(num1,num2,num3){
    return (num1+num2+num3)/3;
}

console.log(avg(1,2,3,4,5));





