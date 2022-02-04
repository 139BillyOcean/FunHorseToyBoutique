import React, {useState, useEffect} from 'react'
import CartCSS from './Cart.module.css';

export const Product = ({product}) => {
  const cost = product.price.sale || product.price.original

  return (
    <div id='flexsetup Product' className={CartCSS.item}>
      <img src={product.photos[0]} id='listbox' className={CartCSS.img}></img>
      <div id='listbox' className={CartCSS.listBox}>
        <div id='productName and price' className={CartCSS.name}>{product.name}  {cost}$</div>
        <div id='productDescription' className={CartCSS.desc}>{product.description}</div>
      </div>
    </div>
  )
}