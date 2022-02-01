import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';
import styles from './Overview.styles.css';
const Gallery = ({ photos }) => {
  const [mainImage, setMainImage] = useState(photos ? photos[0] : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png');
  const [remainingImages, setRemainingImages] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setRemainingImages(photos.filter(photo => photo !== mainImage));
  }, [mainImage])

  const handleImageChange = (url) => {
    setMainImage(url);
  };

  const handleModal = () => {
    setModal(!modal);
  }

  return (
    <div className={styles.gallery} id='gallery'>
      <div className={styles.mainImage} id='main-image'>
        <img src={mainImage} onClick={handleModal}/>
      </div>
      {remainingImages.length
      ? <Carousel photos={remainingImages} handleImageChange={handleImageChange}/>
      : ''}
      {modal
      ? <Modal photo={mainImage} handleModal={handleModal}/>
      : ''}
    </div>
  );
}

export default Gallery;