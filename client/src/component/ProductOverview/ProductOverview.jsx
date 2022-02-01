import React, {useState, useEffect} from 'react';
import Gallery from './Gallery.jsx';
import RightPanel from './RightPanel.jsx';
import Information from './Information.jsx';
import Quantity from './Quantity.jsx';
import styles from './Overview.styles.css';

const ProductOverview = ({ cart, user, handleCurrentUser, handleCurrentCart }) => {
  const [toy, setToy] = useState({
    id: 1,
    dateCreated: Date(),
    user: 'Bobby',
    name: 'Black Lotus',
    condition: 'new',
    brand: 'hasbro',
    yearManufactured: 1991,
    tags: ['magic: the gathering', 'trading card'],
    photos: ['https://static.cardkingdom.com/images/magic-the-gathering/alpha/black-lotus-28010.jpg',
            'https://c1.scryfall.com/file/scryfall-cards/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838',
            'https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a2e428c-dd25-484c-bbc8-2d6ce10ef42c.jpg?1559591808',
            'https://proxyking.biz/wp-content/uploads/2020/10/il_fullxfull.2636242647_dm4a.jpg',
            'https://cdn.vox-cdn.com/thumbor/_Y08cn1Z7qhI8n-fg2cTkLJ8ce0=/0x0:2060x1380/920x613/filters:focal(1192x179:1520x507):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68731700/black_lotus_2.0.jpg'
          ],
    price: {
      original: 100000,
      sale: 1
    },
    quantity: 2,
    description: 'The best magic card to ever exist. The best magic card to ever exist. The best magic card to ever exist. The best magic card to ever exist.',
    ratings: [0, 3, 5],
    reviews: [{
      body: 'I hate this card.',
      reviewer: 'Joe',
      date: Date(),
      answers: [{
        body: 'Sucks to be you',
        date: 1,
        answerer: 'Bobby'
      }]
    }]
  });
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleQuantity = (quantity) => {
    setCurrentQuantity(quantity);
  }

  // useEffect(() => {
  //   //based on productId, get product info.
  //   setToy(sampleToy);
  //   console.log(toy);
  // }, []);

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
