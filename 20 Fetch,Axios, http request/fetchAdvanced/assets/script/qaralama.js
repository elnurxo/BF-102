import {
    getAllCategories,
    getCategoryByID,
    deleteCategoryByID,
    postCategory,
    editCategoryByID
  } from "./httprequests.js";
  
  let list = document.querySelector("#categories");
  let detail = document.querySelector("#detail");
  
  //use categories
  getAllCategories().then((data) => {
    data.forEach((category) => {
      list.innerHTML += `<li>${category.name}</li>`;
    });
  });
  
  //use category by ID
  getCategoryByID(5).then(data=>{
      if (data.id) {
          detail.textContent = `${data.name}, desc: ${data.description}`;
      }
      else{
          detail.textContent = `category not found`;
          detail.style.color = "red";
      }
  })
  
  //use delete category by ID
  deleteCategoryByID(5);
  
  //use post category
  postCategory({name:'Code Academy',description:'1234'});
  
  //use edit category
  editCategoryByID(3,{name:'salam',description:'salam 1233'});