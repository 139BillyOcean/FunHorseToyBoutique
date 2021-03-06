import React, {useState, useEffect} from 'react'
import CartCSS from './Cart.module.css';

export const DataColumn = ({quantity, totalCost}) => {
  return (
    <div id='listbox' className={CartCSS.listBox}>
      You have {quantity || '0'} items in your cart.
      Your total cost is {totalCost || '0'}$.
    </div>
  )
}