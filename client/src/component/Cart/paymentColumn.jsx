import React, {useState, useEffect} from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import CartCSS from './Cart.module.css';


export const PaymentColumn = ({handleCurrentCart}) => {
  const [checkout, changeCheckout] = useState(false)
  let navigate = useNavigate();
  const buy = () => {
    handleCurrentCart([])
    changeCheckout(true)
    }

  return (
    <div id='paymentColumn' className={CartCSS.payment}>
      {checkout ? <div id='CompletedPurchase' className={CartCSS.purchase_done}> Awesome! Your purchase is complete! </div> : <button className={ CartCSS.purchase_btn}onClick={buy}> Purchase Now </button>}
    <button className = {CartCSS.home_btn} id= 'home' onClick={() => {navigate('/')}}>Home</button>
      <button id='clear' className={CartCSS.clear_btn}onClick={() => {handleCurrentCart([])}}>Clear Cart</button>
    </div>
  )
}