import React from 'react';
//import styles from './Search.styles.css';
import SearchCSS from "./Search.module.css";

const ListEntry = ({toy}) => {
  var toyStock = '';

  if (toy.quantity === 0){
      toyStock = 'OUT OF STOCK';
  } else if (toy.quantity <= 2) {
    toyStock = 'LOW IN STOCK';
  } else {
    toyStock ='IN STOCK';
  }
  return (
    <div className={SearchCSS.itemContainer}>
      <div>
        <img src={toy.photos[0]} width="100" height="100"/>
      </div>
      <div className={SearchCSS.search}>
      <p>{toy.name}</p>
      <p>${toy.price.original}</p>
      <p>By {toy.brand}</p>
      </div>
      <div >
      <button>Add to cart</button>
      <p>{toyStock}</p>
      </div>
      </div>

  )
}

export default ListEntry;