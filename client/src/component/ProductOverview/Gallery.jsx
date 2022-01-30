import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';
import styles from './Overview.styles.css';
const Gallery = ({ photos }) => {
  const [mainImage, setMainImage] = useState(photos.length ? photos[0] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png');

  const handleImageChange = (url) => {
    setMainImage(url);
  };

  return (
    <div className={styles.gallery} id='gallery'>
      <div className={styles.mainImage} id='main-image'>
        <img src={mainImage} />
      </div>
      {photos.length
      ? <Carousel photos={photos} handleImageChange={handleImageChange}/>
      : ''}
      <Modal />
    </div>
  );
}

export default Gallery;