const baseURL = "https://northwind.vercel.app/api";

//get all Categories
export const getAllCategories = async()=>{
    let globalData;
    await fetch(`${baseURL}/categories`)
    .then(response => response.json())
    .then(data => {
        globalData = data;
    })

    return globalData;
}

//get Category by ID
export const getCategoryByID = async(id)=>{
    let globalData;
    await fetch(`${baseURL}/categories/${id}`)
    .then(response => response.json())
    .then(data =>{
        globalData = data;
    })
    return globalData;
}

//delete Category by ID
export const deleteCategoryByID = async(id)=>{
    await fetch(`${baseURL}/categories/${id}`,{
        method: 'DELETE'
    })
}

//post Category
export const postCategory = async(category)=>{
    let globalData;
    await fetch(`${baseURL}/categories`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(category)
    }).then(res=>res.json())
    .then(data =>{
        globalData = data;
    })

    return globalData;
}

//put Category by ID
export const editCategoryByID = async(id,category)=>{
    fetch(`${baseURL}/categories/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(category)
    })
}