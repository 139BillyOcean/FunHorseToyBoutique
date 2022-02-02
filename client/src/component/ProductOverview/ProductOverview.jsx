import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Gallery from './Gallery.jsx';
import RightPanel from './RightPanel.jsx';
import Information from './Information.jsx';
import Quantity from './Quantity.jsx';
import styles from './Overview.styles.css';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

  const { productId } = useParams();

  const navigate = useNavigate();

  const [seller, setSeller] = useState('');

  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleQuantity = (quantity) => {
    setCurrentQuantity(quantity);
  }

  //sample id 61f89422edbb84b70e40df31 -> exchange with any product id in your database to view the page.

  useEffect(() => {
    axios.get(`/overview/${productId}`)
      .then((toyResults) => {
        setToy(toyResults.data);
        axios.get(`/overview/user/${toyResults.data.user}`)
          .then((userResults) => {
            setSeller(userResults.data.username);
          })
          .catch((err) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(error);
      });
  }, []);

  const handleSell = () => {
    axios.get('/authenticate')
      .then((results) => {
        if (results.data) {
          navigate('/listproduct/')
        } else {
          navigate('/signin/')
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleCart = () => {
    axios.get('/authenticate')
      .then((results) => {
        if (results.data) {
          navigate('/viewcart/')
        } else {
          navigate('/signin/')
        }
      })
      .catch((err) => {
        console.log(err);
      })
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
        seller={seller}
        tags={toy.tags}
        year={toy.yearManufactured}
        brand={toy.brand}
        condition={toy.condition}
      />
      <div className={styles.buttonContainer} id='button-container'>
        <button id='sell-button' onClick={handleSell}>Have This Product? Sell now!</button>
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
        <button onClick={handleAddToCart} id='cartadd-button'>Add to Cart</button>
        <button id='cartview-button' onClick={handleCart}>Check Out</button>
      </div>
      <RightPanel />
    </div>
  );
}

export default ProductOverview;
