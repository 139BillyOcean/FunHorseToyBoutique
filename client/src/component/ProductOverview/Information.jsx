import React, {useState, useEffect} from 'react';
import ReviewStars from './ReviewStars.jsx';
import styles from './Overview.styles.css';

const Information = () => {
  return (
    <div className={styles.information} id='information'>
      <ReviewStars />
    </div>
  );
}

export default Information;