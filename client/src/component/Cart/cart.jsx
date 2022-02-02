import React, {useState, useEffect} from 'react'

export const Cart = () => {
  return (
    <div>
      <div id={SearchBar}>This will be the overhead search bar</div>
      <div>
        <div id={dataColumn}>
          this will be the right most column, it will have total items and price
        </div>
        <div id={productsColumn}>
          this will be the centre column, it will have an overview of each product in the cart
        </div>
        <div id={paymentColumn}>
          this will be the left column, it will have inputs for card info
        </div>
      </div>
    </div>
  )
}