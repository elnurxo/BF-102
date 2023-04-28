// GET, POST, DELETE, PUT
//get all categories
fetch("https://northwind.vercel.app/api/categories")
.then(response => response.json())
.then(data => {
    console.log(data);
})

// get category by id
// fetch("https://northwind.vercel.app/api/categories/5")
// .then(res => res.json())
// .then(data =>{
//     console.log(data);
// })

//delete category by id
// fetch("https://northwind.vercel.app/api/categories/6",{
//     method: 'DELETE'
// });

//post category
// fetch("https://northwind.vercel.app/api/categories",{
//     method: 'POST',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Code Academy',
//         description:'test'
//     })
// })

//put request
// fetch("https://northwind.vercel.app/api/categories/1",{
//     method: 'PUT',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name:'Code Academy 2',
//     })
// })



