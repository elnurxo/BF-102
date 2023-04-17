let right = document.querySelector(".right");
let slides = document.querySelectorAll(".slide");

right.addEventListener("click",()=>{
    slides.forEach((slide)=>{
        if (slide.classList.contains("active")) {
            if (slide.nextElementSibling != undefined) {
                slide.classList.remove("active");
                slide.nextElementSibling.classList.add("active");
            }
           
        }
    });
});