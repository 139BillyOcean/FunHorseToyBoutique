import React from 'react';
import AccountCSS from './Account.module.css';

const Purchases = ({ productInfo }) => {
  if (productInfo) {
    return (
      <div className={AccountCSS.rowContainer}>
        <div className={AccountCSS.columnContainer.image}>
          <img
            src={productInfo.photos[0]}
            className={AccountCSS.item}
            id="product-picture"
          ></img>
          <div className = {AccountCSS.name}>{productInfo.name}
          </div>
        </div>
        <div className={AccountCSS.item_stats}>
          <div>Price: ${productInfo.price.original}</div>
          <div>Condition: {productInfo.condition}</div>
          <div>Date: {productInfo.dateCreated.slice(0,10)}</div>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Purchases;