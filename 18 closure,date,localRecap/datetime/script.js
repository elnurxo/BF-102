let person1 = {
    name: 'Chinara',
    birthdate: new Date("Dec 27, 2001 01:15:00")
}
let person2 = {
    name: 'Ayshan',
    birthdate: new Date("Dec 31, 2001 01:25:00")
}
let milliseconds = undefined;
if (person1.birthdate.getTime()>person2.birthdate.getTime()) {
    console.log(person2.name);
    milliseconds = person1.birthdate.getTime()-person2.birthdate.getTime();
}
else{
    milliseconds = person2.birthdate.getTime()-person1.birthdate.getTime();
    console.log(person1.name);
}
// console.log(milliseconds);
let seconds = milliseconds/1000;
let minutes = seconds/60;
let hours = minutes/60;
let days = Math.round(hours/24);
console.log(days);




// function comparePeople(p1,p2) {
//     if (p1.birthdate.getFullYear()>p2.birthdate.getFullYear()) {
//         console.log(`${p2.name} is older`);
//     }
//     else{
//         console.log(`${p1.name} is older`);
//     }
// }
// comparePeople(person1,person2);


// document.querySelector("#date").textContent;