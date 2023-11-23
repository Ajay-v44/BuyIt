import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';

const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productid}=useParams()
  const product=all_products.find((e)=>e.id===Number(productid))
  return (
    <div className='Product'>


    </div>
  )
}

export default Product