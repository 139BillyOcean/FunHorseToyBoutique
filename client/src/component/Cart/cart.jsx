import React, {useState, useEffect} from 'react'
import {DataColumn} from './dataColumn.jsx'
import {ProductsColumn} from './productsColumn.jsx'
import {PaymentColumn} from './paymentColumn.jsx'
import {flexSetup, img} from './styles.jsx'

export const Cart = ({cart, handleCurrentCart}) => {
  const [quantity, updateQuantity] = useState(0)
  const [totalCost, updateTotalCost] = useState(0)

  useEffect(() => {
    let items = 0
    let cost = 0
    cart.map((item) => {
      let price = item.price.sale || item.price.original
      items += item.selectedQuantity
      cost += (item.selectedQuantity * price)
    })
    updateQuantity(items)
    updateTotalCost(cost)
  }, [cart])

  return (
    <div>
      <img src='./images/Animated-Fun-Horse-Logo.gif' style={img}></img>
      <div id='flexSetup' style={flexSetup}>
        <DataColumn quantity={quantity} totalCost={totalCost}/>
        <ProductsColumn cart={cart}/>
        <PaymentColumn handleCurrentCart={handleCurrentCart}/>
      </div>
    </div>
  )
}