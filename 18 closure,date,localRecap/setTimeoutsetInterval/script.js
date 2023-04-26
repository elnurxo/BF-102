let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset");
let title = document.querySelector("#title");
let intervalId = undefined;
let count = 0;
start.onclick = function(){
    intervalId = setInterval(() => {
        count++;
        title.textContent = count;
    }, 1000);
}

reset.onclick = function(){
    count = 0;
    clearInterval(intervalId);
    title.textContent = 0;
}

stop.onclick = function(){
    clearInterval(intervalId);
}

let getDateBtn = document.querySelector("#get-date");
let date = document.querySelector("#date");

let weekdays = ["mon","tuesday","wednesday","thursday","fri","sat","sunday"]
getDateBtn.addEventListener("click",()=>{
    let today = new Date();
    date.textContent = today.getHours();
});


GetTime();

function GetTime() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let clock = document.querySelector("#clock");
    clock.textContent = hours+'h'+':'+minutes+'m'+':'+seconds+'s'

    setInterval(GetTime,1000);
}