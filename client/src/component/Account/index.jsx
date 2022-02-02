import React, { useState, useEffect } from 'react';
import css from './Account.styles.css';
import UserInfo from './UserInfo.jsx';
import Purchases from './Purchases.jsx';
import Listings from './Listings.jsx';
import Receipts from './Receipts.jsx';
import axios from 'axios';
// import toyData from '../../data/toys.js';

const Account = ({ currentUser }) => {
  const [userData, setUserData] = useState('');
  const [userPurchases, setUserPurchases] = useState('');
  const [userListings, setUserListings] = useState('');

  useEffect(() => {
    // fetch current user info
    axios.get('/users', {
      params: {
        user: currentUser
      }
    })
    .then((response) => {
      setUserData(response.data);
      return axios.get(`/overview/${response.data.listings[0]}`);
    })
    .then((response) => {
      setUserPurchases(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div>
      <button>Home</button>
      <div
        className={css.mainHeader}
        ><h1
          className={css.headerText}
          >Account Overview
        </h1>
      </div>
      <UserInfo
        userData={userData}
      />
      <div className={css.listingRowContainer}>
        <div className={css.columnContainer}>
          <h3>Purchases</h3>
          <Purchases
            productInfo={userPurchases}
          />
        </div>
        <div className={css.columnContainer}>
          <h3>Listings</h3>
          <Purchases
            productInfo={userPurchases}
          />
        </div>
      </div>
      <Receipts />
    </div>
  );
};

export default Account;
