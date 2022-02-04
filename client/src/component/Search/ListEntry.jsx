import React from 'react';
import SearchCSS from "./Search.module.css";
import { useParams, Link } from 'react-router-dom';
import pinkCart from '../../../dist/images/cart-pink.png';


const ListEntry = ({toy, handleCurrentCart, cart}) => {
  var toyStock = '';


  if (toy.quantity === 0){
      toyStock = 'OUT OF STOCK';
  } else if (toy.quantity <= 2) {
    toyStock = 'LOW IN STOCK';
  } else {
    toyStock ='IN STOCK';
  }

  const handleAddToCart = () => {
    cart.push(toy);
    handleCurrentCart(cart);
    console.log(cart)
  }






  return (
    <div className={SearchCSS.itemContainer}>
      <div>
        <img className={SearchCSS.thumbnail} src={toy.photos[0]} width="100" height="100"/>
      </div>
      <div className = {SearchCSS.title_container} >
      <Link to={`/product/${toy._id}`}>
      <p className = {SearchCSS.title}>{toy.name}</p>
      </Link>
      <p className = {SearchCSS.price}>${toy.price.original}</p>
      <p className = {SearchCSS.brand}>By {toy.brand}</p>
      </div>
      <div >
      <img className={SearchCSS.pink_cart} onClick={handleAddToCart} src={pinkCart}></img>
      <p className = {SearchCSS.stock}>{toyStock}</p>
      </div>
      </div>

  )
}

export default ListEntry;