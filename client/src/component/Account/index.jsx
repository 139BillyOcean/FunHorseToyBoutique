import React, { useState, useEffect } from 'react';
import css from './Account.styles.css';
import UserInfo from './UserInfo.jsx';
import Purchases from './Purchases.jsx';
import Listings from './Listings.jsx';
import axios from 'axios';
// import toyData from '../../data/toys.js';

const Account = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [userData, setUserData] = useState('');
  const [userPurchases, setUserPurchases] = useState('');
  const [userListings, setUserListings] = useState('');

  useEffect(() => {
    // fetch current user info
    axios.get('/authenticate')
    .then((response) => {
      setCurrentUser(response.data.username);
    })
    .catch((error) => {
      console.log(error);
    })

    axios.get('/overview/61fb1c3c42574c780d0891a1')
      .then((response) => {
        setUserPurchases(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    axios.get('/users', {
      params: {
        user: currentUser
      }
    })
    .then((response) => {
      setUserData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [currentUser])

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
    </div>
  );
};

export default Account;
