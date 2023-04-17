let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let count = document.querySelector("#count");

//increase Button click
increaseBtn.addEventListener("click",()=>{
    // console.log(e.target);
    let nextCount  = count.innerText;
    count.innerText = ++nextCount;
});

//decrease Button click
decreaseBtn.addEventListener("click",function (e){
    let prevCount = count.textContent;
    if (prevCount>0) {
        count.innerText = --prevCount;
        if (prevCount==0) {
            e.target.style.backgroundColor = "red";
            e.target.setAttribute("disabled","");
        }
   }
})


//favorites
let row = document.querySelector(".row");
let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let fullname = document.querySelector("#fullname");
    let age = document.querySelector("#age");
    let errorMsg = document.querySelector(".error");

    console.log();
    if (fullname.value.trim()=="" || age.value.trim()=="" || !(/[a-zA-Z]/).test(fullname.value.trim())) {
        errorMsg.classList.replace("d-none","d-block");
    }
    else{
        row.innerHTML += `<div class="col-6 my-4">
    <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${fullname.value}</h5>
    <p class="card-text">${age.value}</p>
  </div>
</div>
    </div>`;
    errorMsg.classList.replace("d-block","d-none");
    }
    
    //empty input data
    fullname.value = "";
    age.value = "";
});

let name = document.querySelector("#name");


name.addEventListener("keyup",(e)=>{
    if (e.target.value.length<5) {
        e.target.nextElementSibling.classList.replace("d-none","d-block");
    }
    else{
        e.target.nextElementSibling.classList.replace("d-block","d-none");
    }
});





