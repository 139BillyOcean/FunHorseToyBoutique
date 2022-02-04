import React from 'react';
import css from './Account.styles.css';

const Purchases = ({ productInfo }) => {
  if (productInfo) {
    return (
      <div className={css.rowContainer}>
        <div className={css.columnContainer}>
          <img
            src={productInfo.photos[0]}
            className={css.profilePicture}
            id="product-picture"
          ></img>
          {productInfo.name}
        </div>
        <div className={css.columnContainer}>
          <div>Price: {productInfo.price.original}</div>
          <div>Condition: {productInfo.condition}</div>
          <div>Date: {productInfo.dateCreated}</div>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Purchases;