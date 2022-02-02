import React, {useState, useEffect} from 'react'
import {flexSetup, listBox} from './styles.jsx'

export const Product = ({product}) => {
  const cost = product.price.sale || product.price.original

  return (
    <div id='flexsetup' style={flexSetup}>
      <img src={product.photos[0]} id='listbox'></img>
      <div id='listbox' style={listBox}>
        <div>{product.name}  {cost}$</div>
        <div>{product.description}</div>
      </div>
    </div>
  )
}