import React from 'react';
import styles from './App.styles.css';
import MainPage from './Search/MainPage.jsx';
import Account from './Account/index.jsx';
import CombinedOverview from './CombinedOverviewReviews/CombinedOverview.jsx';
import CreateListing from './CreateListing/CreateListing.jsx';
import LoginSignUp from './Login/LoginSignUp.jsx';
import {Cart} from './Cart/cart.jsx';
import { Routes, Route } from 'react-router-dom';

const App = ({ user, cart, handleCurrentCart, handleCurrentUser }) => {
  return (
    <div className={styles.main} id='main'>
      <Routes>
        <Route path='/' element={
          <MainPage />
        }/>
        {/* Need the navigation bar and reviews module here */}
        <Route path='/product/:productId' element={
          <CombinedOverview user={user} cart={cart} handleCurrentUser={handleCurrentUser} handleCurrentCart={handleCurrentCart} />
        } />
        <Route path='/signin/' element={
          <LoginSignUp user={user} handleCurrentUser={handleCurrentUser}/>
        }/>
        {/* Need the list product page here */}
        <Route path='/listproduct/' element={
          <CreateListing
          user={user}

          />
        }/>
        {/* Need the cart page here */}
        <Route path='/viewcart/' element={
          <div>
            <Cart cart={cart} handleCurrentCart={handleCurrentCart}/>
          </div>
        }/>
        {/* Need the account overview page here */}
        <Route path='/accountoverview/' element={
          <Account currentUser='user01'/>
        }/>
      </Routes>
    </div>
  );
};

export default App;
