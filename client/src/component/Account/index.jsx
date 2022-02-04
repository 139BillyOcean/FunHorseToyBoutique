import React, { useState, useEffect } from 'react';
import AccountCSS from './Account.module.css';
import UserInfo from './UserInfo.jsx';
import Purchases from './Purchases.jsx';
import Listings from './Listings.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  }

  //add Anna's <Navbar /> instead home button to the top
  return (
    <div>
      <button onClick={handleHome}>Home</button>
      <div id= 'container' className = {AccountCSS.container}>
      <div
        className={AccountCSS.mainHeader}
        id="main-header"
        ><h1
          className={AccountCSS.headerText}
          id="header-text"
          >Account Overview
        </h1>
        </div>
        <div id = 'content' className = {AccountCSS.content}>
      <UserInfo
        userData={userData}
      />
      <div className={AccountCSS.listingRowContainer} id="purchases-listing-container">
        <div className={AccountCSS.columnContainer} id="purchases-container">
          <h3 className = {AccountCSS.title}>Purchases</h3>
          <Purchases
            productInfo={userPurchases}
          />
        </div>
        <div className={AccountCSS.columnContainer} id="listings-container">
          <h3 className = {AccountCSS.title}>Listings</h3>
          <Purchases
            productInfo={userPurchases}
          />
        </div>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Account;
