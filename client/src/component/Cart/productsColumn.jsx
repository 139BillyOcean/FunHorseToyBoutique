import React, {useState, useEffect} from 'react'
import {Product} from './product.jsx'
import {mainbox} from './styles.jsx'

export const ProductsColumn = ({cart}) => {
  return (
    <div id='productsColumn' style={mainbox}>
      {cart.map((product) => <Product product={product} />)}
    </div>
  )
}