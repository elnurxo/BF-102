let modeBtn = document.querySelector(".mode");

//dom load content
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("mode")=="dark") {
        localStorage.setItem("mode", "dark");
        document.body.classList.add("dark");
        document.body.style.transition = ".1s linear";
        modeBtn.classList.replace("btn-dark", "btn-light");
        modeBtn.innerHTML = `Light Mode <i class="fa-solid fa-sun"></i>`;
    }
});

//switch mode event
modeBtn.addEventListener("click", () => {
  SwitchMode();
});

//switch mode function
function SwitchMode() {
  if (!localStorage.getItem("mode")) {
    localStorage.setItem("mode","light");
  }

  if (localStorage.getItem("mode") == "light") {
    //local storage
    localStorage.setItem("mode", "dark");
    document.body.classList.add("dark");
    document.body.style.transition = ".1s linear";
    modeBtn.classList.replace("btn-dark", "btn-light");
    modeBtn.innerHTML = `Light Mode <i class="fa-solid fa-sun"></i>`;
  } else {
    localStorage.setItem("mode", "light");
    document.body.classList.remove("dark");
    document.body.style.transition = ".1s linear";
    modeBtn.classList.replace("btn-light", "btn-dark");
    modeBtn.innerHTML = `Dark Mode <i class="fa-solid fa-moon"></i>`;
  }
}
