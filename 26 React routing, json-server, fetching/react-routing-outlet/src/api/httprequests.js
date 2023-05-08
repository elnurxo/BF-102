import axios from "axios";
import { BASE_URL } from "./base_url";

//get all products
export const getAllProducts = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/products`)
    .then(res=>{
        globalData = res.data;
    });

    return globalData;
}
//get product by id
export const getProductByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then(res=>{
        globalData = res.data;
    });
    return globalData;
}
//post new product
export const postProduct = (newProduct)=>{
    axios.post(`${BASE_URL}/products`,newProduct);
}
//delete product by id
export const deleteProductByID = (id)=>{
    axios.delete(`${BASE_URL}/products/${id}`);
}
//edit product by id
export const editProductByID = (id,updatedProduct)=>{
    axios.put(`${BASE_URL}/products/${id}`,updatedProduct);
}