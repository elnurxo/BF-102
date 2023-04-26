let list = document.querySelector("#data-list");
let btn = document.querySelector(".fetch-btn");
let loading = document.querySelector(".loader");
let search = document.querySelector("#search");

//fetch
let API_URL = 'https://jsonplaceholder.typicode.com/users';

//get Users
function getUsers(API_URL){
    loading.style.display = "block";
    fetch(API_URL).then((res)=>{
       return res.json();
    }).then((data)=>{
        list.innerHTML = "";
        loading.style.display = "none";
        data.forEach(user => {
            list.innerHTML += `<li><a href="detail.html?id=${user.id}">${user.username}</a></li>`
        });
    }).catch(()=>{
        list.innerHTML = `<span style="color:red;">Some Error Has Occurred!</span>`
    })
}

btn.addEventListener("click",()=>{
    getUsers(API_URL);
});

search.addEventListener("keyup",(e)=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>{
        list.innerHTML = "";
        let filteredData = data.filter((user)=>user.username.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()))
        filteredData.forEach((user)=>{
            list.innerHTML += `<li><a href="detail.html?id=${user.id}">${user.username}</a></li>`
        })
    })
})

