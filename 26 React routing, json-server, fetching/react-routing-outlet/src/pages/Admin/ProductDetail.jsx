import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductByID } from '../../api/httprequests';

const ProductDetail = () => {
  const{id} = useParams();
  const[product,setProduct] = useState({});
  console.log(id);
  useEffect(()=>{
    getProductByID(id).then(res=>{
      setProduct(res);
    })
  },[id]);
  return (
    <>
      <h1>Detail page of {product.name}</h1>
      <ul>
        <li>Product ID: {product.id}</li>
        <li>Product Name: {product.name}</li>
        <li>Product Price: {product.price}</li>
      </ul>
      <button><Link to='/admin/products'>Go Back</Link></button>
    </>
  )
}

export default ProductDetail