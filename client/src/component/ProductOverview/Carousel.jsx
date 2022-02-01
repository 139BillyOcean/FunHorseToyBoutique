import React, { useState, useEffect, useRef } from 'react';
import styles from './Overview.styles.css';

const Carousel = ({ photos, handleImageChange }) => {
  return (
    <div className={styles.carousel} id='carousel'>
      {photos.map((photo, index) => {
        return (
          <div className={styles.carouselItem} id='carousel-item' key={index} onClick={() => {handleImageChange(photos[index])}}>
            <img src={photo}/>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;