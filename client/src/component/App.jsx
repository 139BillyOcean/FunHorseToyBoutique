import React from 'react';
import styles from './App.styles.css';
// import MainPage from './Search/MainPage.jsx';
import Account from './Account/index.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import CreateListing from './CreateListing/CreateListing.jsx';
import LoginSignUp from './Login/LoginSignUp.jsx';
import { Routes, Route } from 'react-router-dom';

const App = ({ user, cart, handleCurrentCart, handleCurrentUser }) => {
  return (
    <div className={styles.main} id='main'>
      <Routes>
        {/* May need the mailing list page here */}
        <Route path='/banner/' element={
          <div>
            Banner
          </div>
        }/>
        {/* Need to un-.gitignore image folder in dist; I'm getting errors otherwise */}
        {/* <Route path='/' element={
          <MainPage />
        }/> */}
        {/* Need the navigation bar and reviews module here */}
        <Route path='/product/:productId' element={
          <ProductOverview user={user} cart={cart} handleCurrentUser={handleCurrentUser} handleCurrentCart={handleCurrentCart} />
        } />
        <Route path='/signin/' element={
          <LoginSignUp />
        }/>
        {/* Need the list product page here */}
        <Route path='/listproduct/' element={
          <div>
            List Product
          </div>
        }/>
        {/* Need the cart page here */}
        <Route path='/viewcart/' element={
          <div>
            Cart
          </div>
        }/>
        {/* Need the account overview page here */}
        <Route path='/accountoverview/' element={
          <div>
            Account
          </div>
        }/>
      </Routes>
    </div>
  );
};

export default App;
