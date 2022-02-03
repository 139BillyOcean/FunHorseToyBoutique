import React, {useState, useEffect} from 'react'
import {flexSetup, listBox, img} from './styles.jsx'

export const Product = ({product}) => {
  const cost = product.price.sale || product.price.original

  return (
    <div id='flexsetup Product' style={flexSetup}>
      <img src={product.photos[0]} id='listbox' style={img}></img>
      <div id='listbox' style={listBox}>
        <div id='productName and price'>{product.name}  {cost}$</div>
        <div id='productDescription'>{product.description}</div>
      </div>
    </div>
  )
}