import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProductByID, getProductByID } from '../../api/httprequests';

const EditProduct = () => {
  const{id} = useParams();
  const navigate = useNavigate();
  const[product,setProduct] = useState([]);
  useEffect(()=>{
    getProductByID(id).then(res=>{
      console.log(res);
      setProduct(res);
    })
  },[id]);
  function handleSubmit(){
    editProductByID(id,product);
    navigate('/admin/products');
  }
  function handleChange(e){
    setProduct({...product,[e.target.name]:e.target.value});
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input name='name' onChange={(e)=>handleChange(e)} placeholder='product name' value={product.name} type='text'/>
      <input name='price' onChange={(e)=>handleChange(e)} placeholder='product price' type='number' step='any' value={product.price} min='0'/>
      <button>Edit</button>
    </form>
  )
}

export default EditProduct