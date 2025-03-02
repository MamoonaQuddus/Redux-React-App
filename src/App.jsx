import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from "./store/slices/productsSlice"



export default function App() {
  const products = useSelector(store => store.productSlice.products)
  console.log("products", products)
  const dispatch = useDispatch();
  
  const onClickProducts = ()=>{
    dispatch(fetchProducts())
  }
  return (
    <div style={{ textAlign: "center" }}>
    
    <button onClick={onClickProducts}>get products</button>
    {products?.map(products=>{
      return <div key={products.id}>
        <h1>{products.title}</h1>
        <img  style={{ width: "200px", height: "auto" }}  src={products.image} alt={products.title}/>
        <p>{products.description}</p>
        <p>{products.price}</p>
      </div>
    } )}
    </div>
  )
}