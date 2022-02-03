import React, {useState, useEffect} from 'react';
// import styles from './Overview.styles.css';
import OverviewCSS from './Overview.module.css';
import heart_empty from '../../../dist/images/heart-empty.png';

const Information = ({ quantity, description, seller, tags, year, brand, condition, name }) => {
  return (
    <div className={OverviewCSS.information} id='information'>
      <div className={OverviewCSS.productTitle} id='product-title'>
        {name}
      </div>
      <div className={OverviewCSS.subInformation} id='sub-information'>
        <div className={OverviewCSS.categoryDescription} id='category'>
          <div className={OverviewCSS.categoryTitle} id='category-title'>
            Description:
          </div>
          <div className={OverviewCSS.categoryDescriptionValue} id='category-value'>
            {description}
          </div>
        </div>
        <div className={OverviewCSS.category} id='category'>
          <div className={OverviewCSS.categoryTitle} id='category-title'>
            Condition:
          </div>
          <div className={OverviewCSS.categoryValue} id='category-value'>
            {condition}
          </div>
        </div>
        <div className={OverviewCSS.category} id='category'>
          <div className={OverviewCSS.categoryTitle} id='category-title'>
            Year:
          </div>
          <div className={OverviewCSS.categoryValue} id='category-value'>
            {year}
          </div>
        </div>
        <div className={OverviewCSS.category} id='category'>
          <div className={OverviewCSS.categoryTitle} id='category-title'>
            Quantity in Stock:
          </div>
          <div className={OverviewCSS.categoryValue} id='category-value'>
            {quantity}
          </div>
        </div>
        <div className={OverviewCSS.category} id='category'>
          <div className={OverviewCSS.categoryTitle} id='category-title'>
            Brand:
          </div>
          <div className={OverviewCSS.categoryValue} id='category-value'>
            {brand}
          </div>
        </div>
        <div className={OverviewCSS.category} id='category'>
          <div className={OverviewCSS.categoryTitle} id='category-title'>
            Keywords:
          </div>
          <div className={OverviewCSS.categoryValue} id='category-value'>
            {tags.join(', ')}
          </div>
        </div>
        <div className={OverviewCSS.category} id='category'>
          <div className={OverviewCSS.categoryTitle} id='category-title'>
            Seller:
          </div>
          <div className={OverviewCSS.categoryValue} id='category-value'>
            {seller}
          </div>
        </div>
        <div className={OverviewCSS.category} id='category'>
          <div className={OverviewCSS.categoryTitle}>
            Add to Wishlist:
          </div>
          <img src={heart_empty} className={OverviewCSS.heart_hollow} />
          {/* <img src={heart_fill} className={OverviewCSS.heart_full} */}
        </div>
      </div>
    </div>
  );
}

export default Information;