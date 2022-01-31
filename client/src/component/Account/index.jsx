import React from 'react';
import css from './Account.styles.css';
import UserInfo from './UserInfo.jsx';
import Purchases from './Purchases.jsx';
import Listings from './Listings.jsx';
import Receipts from './Receipts.jsx';
import toyData from '../../data/toys.js';
import userData from '../../data/users.js';

const Account = () => {
  return (
    <div>
      <div
        className={css.mainHeader}
        ><button>Home</button>
        <h1
          className={css.headerText}
          >Account Overview
        </h1>
      </div>
      <UserInfo
        userData={userData}
      />
      <Purchases />
      <Listings />
      <Receipts />
    </div>
  )
}

export default Account;