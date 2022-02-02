import React, {useState, useEffect} from 'react'
import {Product} from './product.jsx'
import {listBox} from './styles.jsx'

export const ProductsColumn = ({cart}) => {
  return (
    <div id='productsColumn' style={listBox}>
      {cart.map((product) => {<Product product={product} />})}
    </div>
  )
}