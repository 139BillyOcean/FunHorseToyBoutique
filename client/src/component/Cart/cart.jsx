import React, {useState, useEffect} from 'react'
import {DataColumn} from './dataColumn.jsx'
import {ProductsColumn} from './productsColumn.jsx'
import {PaymentColumn} from './paymentColumn.jsx'
import {flexSetup} from './styles.jsx'

export const Cart = ({cart, handleCurrentCart}) => {
  const [quantity, updateQuantity] = useState(0)
  const [totalCost, updateTotalCost] = useState(0)

  useEffect(() => {
    let items = 0
    let price = 0
    cart.map((item) => {
      items += item.
      price += (item. * item.)
    })
  }, [cart])

  return (
    <div>
      <div id='SearchBar'>This will be the overhead search bar</div>
      <div id='flexSetup' style={flexSetup}>
        <DataColumn quantity={quantity} totalCost={totalCost}/>
        <ProductsColumn />
        <PaymentColumn />
      </div>
    </div>
  )
}