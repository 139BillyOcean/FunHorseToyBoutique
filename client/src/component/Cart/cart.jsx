import React, {useState, useEffect} from 'react'
import {DataColumn} from './dataColumn.jsx'
import {ProductsColumn} from './productsColumn.jsx'
import {PaymentColumn} from './paymentColumn.jsx'
import CartCSS from './Cart.module.css';

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
      <img src='./images/Animated-Fun-Horse-Logo.gif' style={img} id='logo'></img>
      <div id='flexSetup mainCart' className={CartCSS.content}>
        <div className = {CartCSS.total}>
        <DataColumn quantity={quantity} totalCost={totalCost}/>
        </div>
        <ProductsColumn cart={cart}/>
        <PaymentColumn handleCurrentCart={handleCurrentCart}/>
      </div>
    </div>
  )
}