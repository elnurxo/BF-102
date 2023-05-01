let list = document.querySelector("#list");
import { baseURL } from "./baseURL.js";

//fetch
// fetch(`${baseURL}/categories`)
// .then(res => res.json())
// .then(data =>{
//     data.forEach(item => {
//         list.innerHTML += `<li>${item.name}</li>`
//     });
// })

//axios
axios.get(`${baseURL}/categories`)
  .then(function (response) {
    response.data.forEach(item => {
        list.innerHTML += `<li>${item.name}</li>`
    });
})

// let id = 12;
// axios.delete(`${baseURL}/categories/${id}`)
//     .then(response => list.innerHTML = '<li style="color:green;">Delete successful</li>')
//     .catch(error => {
//         list.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
// });

axios.post(`${baseURL}/categories`,{name:'salam',description:'test 1234'})
    .then(response => list.innerHTML = '<li style="color:green;">Post successful</li>')
    .catch(error => {
        list.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
});