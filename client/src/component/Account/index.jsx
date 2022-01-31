import React from 'react';
import css from './Account.styles.css';
import UserInfo from './UserInfo.jsx';
import Purchases from './Purchases.jsx';
import Listings from './Listings.jsx';
import Receipts from './Receipts.jsx';

const Account = () => {
  return (
    <div>
      <div
        className={css.mainHeader}
        ><img
          className={css.mainLogo}
          src="https://cdn.discordapp.com/attachments/936386714199535648/936777518608949248/Fun-Horse-Logo.png"
        ></img>
        <h1
          className={css.headerText}
          >Account Overview
        </h1>
      </div>
      <UserInfo />
      <Purchases />
      <Listings />
      <Receipts />
    </div>
  )
}

export default Account;