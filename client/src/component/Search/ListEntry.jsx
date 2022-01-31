import React from 'react';
import styles from './Search.styles.css';

const ListEntry = ({toy}) => {
  return (
    <div className={styles.itemContainer}>
      <div>
        <img src={toy.photos[0]} width="100" height="100"/>
      </div>
      <div className={styles.search}>
      <p>{toy.name}</p>
      <p>{toy.price.original}</p>
      {/* <p>By {toy.seller}</p> */}
      </div>
      <div >
      <button>Add to cart</button>
      { toy.stock > 2 ? <p> {toy.quantity} IN STOCK</p> : <p>LOW IN STOCK</p> }
      </div>
      </div>

  )
}

export default ListEntry;