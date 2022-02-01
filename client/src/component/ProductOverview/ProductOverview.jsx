import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import RightPanel from './RightPanel.jsx';
import Information from './Information.jsx';
import Quantity from './Quantity.jsx';
import styles from './Overview.styles.css';

const ProductOverview = ({ cart, user, handleCurrentUser, handleCurrentCart }) => {
  const [toy, setToy] = useState({
    id: '',
    dateCreated: 0,
    user: '',
    name: '',
    condition: '',
    brand: '',
    yearManufactured: 1,
    tags: [''],
    photos: [''],
    price: {
      original: 1,
      sale: 1
    },
    quantity: 1,
    description: '',
    ratings: [],
    reviews: [{
      body: '',
      reviewer: '',
      date: 1,
      answers: [{
        body: '',
        date: 1,
        answerer: ''
      }]
    }]
  });

  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleQuantity = (quantity) => {
    setCurrentQuantity(quantity);
  }

  useEffect(() => {
    axios.get('/overview/61f889eb145fe868b3c6979a')
      .then((results) => {
        console.log(results.data);
        setToy(results.data);
      })
      .catch((err) => {
        console.log(error);
      })
  }, []);

  const handleSell = (userId) => {
    if (userId) {
      console.log('go to create listing');
    } else {
      console.log('go to account creation/login');
    }
  }

  const handleCart = (userId) => {
    if (userId) {
      console.log('go to cart');
    } else {
      console.log('go to account creation/login');
    }
  }

  const handleAddToCart = () => {
    toy.selectedQuantity = currentQuantity;
    cart.push(toy);
    handleCurrentCart(cart);
  }

  return (
    <div className={styles.productOverview} id='product-overview'>
      <Gallery photos={toy.photos}/>
      <Information
        name={toy.name}
        quantity={toy.quantity}
        description={toy.description}
        seller={toy.user}
        tags={toy.tags}
        year={toy.yearManufactured}
        brand={toy.brand}
        condition={toy.condition}
      />
      <div className={styles.buttonContainer} id='button-container'>
        <button onClick={handleSell}>Have This Product? Sell now!</button>
        {toy.price.sale
        ? <span>
          Price:
          <span className={styles.salePrice} id='sale-price'>
            {toy.price.sale}
          </span>
          <span className={styles.slashedPrice} id='slashed-price'>
            {toy.price.original}
          </span>
        </span>
        : <span>
          Price: {toy.price.original}
        </span>}
        <Quantity quantityInStock={toy.quantity} quantitySelected={currentQuantity} handleQuantity={handleQuantity}/>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleCart}>Check Out</button>
      </div>
      <RightPanel />
    </div>
  );
}

export default ProductOverview;
