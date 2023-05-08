import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postProduct } from '../../api/httprequests';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const[newProduct,setNewProduct] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    newProduct.id = uuidv4();
    await postProduct(newProduct);
    navigate('/admin/products');
  }
  function handleChange(e){
    setNewProduct({...newProduct,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input name='name' onChange={(e)=>handleChange(e)} placeholder='product name' type='text' required/>
      <input name='price' onChange={(e)=>handleChange(e)} placeholder='product price' type='number' min='0' required/>
      <button type='submit'>Add New Product</button>
    </form>
  )
}

export default AddProduct