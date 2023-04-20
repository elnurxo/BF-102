let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let count = document.querySelector(".count");
let removeBtn = document.querySelector(".remove");

document.addEventListener("DOMContentLoaded",()=>{
    if (localStorage.getItem("count")) {
        count.textContent = localStorage.getItem("count");
    }
    else{
        count.textContent = 0;
    }
});

//increase button click
increaseBtn.addEventListener("click", () => {
  localStorage.setItem("count", ++count.textContent);
  count.textContent = localStorage.getItem("count");
});

//decrease button click
decreaseBtn.addEventListener("click", () => {
  localStorage.setItem("count", --count.textContent);
  count.textContent = localStorage.getItem("count");
});

//remove local storage
removeBtn.addEventListener("click",()=>{
    if (localStorage.getItem("count")) {
        // localStorage.removeItem("count");
        localStorage.clear(); //removes all local storage
        count.textContent = 0;
    }
});