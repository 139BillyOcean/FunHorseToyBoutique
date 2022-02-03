import React, { useState, useEffect, useRef } from 'react';
//import styles from './Overview.styles.css';
import OverviewCSS from './Overview.module.css';

const Carousel = ({ photos, handleImageChange }) => {
  return (
    <div className={OverviewCSS.carousel} id='carousel'>
      {photos.map((photo, index) => {
        return (
          <div className={OverviewCSS.carouselItem} id='carousel-item' key={index} onClick={() => {handleImageChange(photos[index])}}>
            <img src={photo}/>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;