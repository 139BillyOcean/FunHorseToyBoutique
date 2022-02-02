import React from 'react';
//import styles from './Search.styles.css';
import SearchCSS from "./Search.module.css";
import { useParams, Link } from 'react-router-dom';

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
        <img src={toy.photos[0]} width="100" height="100"/>
      </div>
      <div className={SearchCSS.search}>
      <Link to={`/product/${toy._id}`}>
      <p>{toy.name}</p>
      </Link>
      <p>${toy.price.original}</p>
      <p>By {toy.brand}</p>
      </div>
      <div >
      <button onClick={handleAddToCart}>Add to cart</button>
      <p>{toyStock}</p>
      </div>
      </div>

  )
}

export default ListEntry;