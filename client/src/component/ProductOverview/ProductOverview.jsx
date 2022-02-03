import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery.jsx";
import RightPanel from "./RightPanel.jsx";
import Information from "./Information.jsx";
import Quantity from "./Quantity.jsx";
import OverviewCSS from "./Overview.module.css";
import addToCart from '../../../dist/images/cart.png';
import { useNavigate } from "react-router-dom";
//import Anna's Nav bar and css:
import Navbar from "../Search/NavBar.jsx";
import SearchCSS from "../Search/Search.module.css";

const ProductOverview = ({
  toy,
  seller,
  cart,
  user,
  handleCurrentUser,
  handleCurrentCart,
}) => {
  const navigate = useNavigate();

  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleQuantity = (quantity) => {
    setCurrentQuantity(quantity);
  };

  const handleSell = () => {
    axios
      .get('/authenticate')
      .then((results) => {
        if (results.data) {
          navigate('/listproduct/');
        } else {
          navigate('/signin/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCart = () => {
    axios
      .get('/authenticate')
      .then((results) => {
        if (results.data) {
          navigate('/viewcart/');
        } else {
          navigate('/signin/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToCart = () => {
    toy.selectedQuantity = currentQuantity;
    cart.push(toy);
    handleCurrentCart(cart);
  };

  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <div className={OverviewCSS.productOverview} id="product-overview">
        <Gallery photos={toy.photos} />
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
        <div className={OverviewCSS.buttonContainer} id="button-container">
            <button id="sell-button" className={OverviewCSS.sell_btn} onclick={handleSell}>
              Have This Product? Sell now!
            </button>
          {toy.price.sale ? (
            <span className={OverviewCSS.price}>
              Price:
              <span className={OverviewCSS.salePrice} id="sale-price">
                {toy.price.sale}
              </span>
              <span className={OverviewCSS.slashedPrice} id="slashed-price">
                {toy.price.original}
              </span>
            </span>
          ) : (
            <span className={OverviewCSS.price}>
              Price: {toy.price.original}
            </span>
          )}
          <Quantity
            quantityInStock={toy.quantity}
            quantitySelected={currentQuantity}
            handleQuantity={handleQuantity}
          />
          <div className={OverviewCSS.addToCart} onClick={handleAddToCart} id="cartadd-button">
            Add to Cart
            <img className={OverviewCSS.cart_icon} src={addToCart} />
          </div>
            <button className={OverviewCSS.viewcart} id="cartview-button" onClick={handleCart}>View Your Cart</button>
        </div>
        <RightPanel />
=======
    <div className={styles.productOverview} id='product-overview'>
      {console.log(toy.price)}
      <Gallery photos={toy.photos} />
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
        <button id='sell-button' onClick={handleSell}>
          Have This Product? Sell now!
        </button>
        {toy.price.sale ? (
          <span>
            Price:
            <span className={styles.salePrice} id='sale-price'>
              {toy.price.sale}
            </span>
            <span className={styles.slashedPrice} id='slashed-price'>
              {toy.price.original}
            </span>
          </span>
        ) : (
          <span>Price: {toy.price.original}</span>
        )}
        <Quantity
          quantityInStock={toy.quantity}
          quantitySelected={currentQuantity}
          handleQuantity={handleQuantity}
        />
        <button onClick={handleAddToCart} id='cartadd-button'>
          Add to Cart
        </button>
        <button id='cartview-button' onClick={handleCart}>
          Check Out
        </button>
>>>>>>> 2ebd9e6fa7db789d207472fc933390c366d2c996
      </div>
    </div>
  );
};

export default ProductOverview;
