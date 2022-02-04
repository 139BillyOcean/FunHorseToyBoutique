import React, {useState, useEffect} from 'react'
import {Product} from './product.jsx'
import CartCSS from './Cart.module.css';

export const ProductsColumn = ({cart}) => {
  return (
    <div id='mainbox' className={CartCSS.mainbox}>
      {cart.map((product) => <Product product={product} />)}
    </div>
  )
}