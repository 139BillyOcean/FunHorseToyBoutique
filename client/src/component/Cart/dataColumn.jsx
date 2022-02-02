import React, {useState, useEffect} from 'react'
import {listBox} from './styles.jsx'

export const DataColumn = ({quantity, totalCost}) => {
  return (
    <div id='dataColumn' style={listBox}>
      You have {quantity} items in your cart.
      Your total cost is {totalCost}$.
    </div>
  )
}