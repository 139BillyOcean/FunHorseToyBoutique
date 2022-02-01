import React, {useState, useEffect} from 'react';
import styles from './Overview.styles.css';

const Information = ({ quantity, description, seller, tags, year, brand, condition, name }) => {
  console.log(seller);
  return (
    <div className={styles.information} id='information'>
      <div className={styles.productTitle} id='product-title'>
        {name}
      </div>
      <div className={styles.subInformation} id='sub-information'>
        <div className={styles.category} id='category'>
          <div className={styles.categoryTitle} id='category-title'>
            Description:
          </div>
          <div className={styles.categoryValue} id='category-value'>
            {description}
          </div>
        </div>
        <div className={styles.category} id='category'>
          <div className={styles.categoryTitle} id='category-title'>
            Condition:
          </div>
          <div className={styles.categoryValue} id='category-value'>
            {condition}
          </div>
        </div>
        <div className={styles.category} id='category'>
          <div className={styles.categoryTitle} id='category-title'>
            Year:
          </div>
          <div className={styles.categoryValue} id='category-value'>
            {year}
          </div>
        </div>
        <div className={styles.category} id='category'>
          <div className={styles.categoryTitle} id='category-title'>
            # in Stock:
          </div>
          <div className={styles.categoryValue} id='category-value'>
            {quantity}
          </div>
        </div>
        <div className={styles.category} id='category'>
          <div className={styles.categoryTitle} id='category-title'>
            Brand:
          </div>
          <div className={styles.categoryValue} id='category-value'>
            {brand}
          </div>
        </div>
        <div className={styles.category} id='category'>
          <div className={styles.categoryTitle} id='category-title'>
            Tags:
          </div>
          <div className={styles.categoryValue} id='category-value'>
            {tags.join(', ')}
          </div>
        </div>
        <div className={styles.category} id='category'>
          <div className={styles.categoryTitle} id='category-title'>
            Seller:
          </div>
          <div className={styles.categoryValue} id='category-value'>
            {seller}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;