let grand = document.querySelector(".grand-box");
let box = document.querySelector(".box");
let child = document.querySelector(".child-box");


grand.addEventListener("click",()=>{
    console.log("hello grand");
},{capture:false})
box.addEventListener("click",()=>{
    console.log("hello box");
},{capture:true})
child.addEventListener("click",()=>{
    console.log("hello child");
},{capture:true})