import React, {useState, useEffect} from 'react'
import {listBox} from './styles.jsx'
import {useNavigate} from 'react-router-dom'

export const PaymentColumn = ({handleCurrentCart}) => {
  const [checkout, changeCheckout] = useState(false)
  let navigate = useNavigate();
  const buy = () => {
    handleCurrentCart([])
    changeCheckout(true)
    }

  return (
    <div id='paymentColumn' style={listBox}>
    {checkout ? <div id='CompletedPurchase'> Purchase Complete </div> : <button onClick={buy}> Purchase Now </button>}
    <button onClick={() => {navigate('/')}}>Home</button>
    <button onClick={() => {handleCurrentCart([])}}>Clear Cart</button>
    </div>
  )
}