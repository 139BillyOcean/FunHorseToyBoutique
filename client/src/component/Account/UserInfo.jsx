import React from 'react';
import AccountCSS from './Account.module.css';

const UserInfo = ({ userData }) => {
  if (userData) {
    return (
      <div className={AccountCSS.rowContainer} id="user-info-container">
        <div className={AccountCSS.columnContainer}>
          {
            userData.profilePicture ?
            <img
              className={AccountCSS.profilePicture}
              id="profile-picture"
              src={userData.profilePicture}
            ></img> :
            <img
              className={AccountCSS.profilePicture}
              id="default-profile-picture"
              src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
            ></img>
          }
          <div className = {AccountCSS.username}>{userData.username}</div>
        </div>
        <div className={AccountCSS.columnContainer}>
          <div className = {AccountCSS.stats}>Name: {userData.name}</div>
          <div className = {AccountCSS.stats}>Member since: {userData.date}</div>
          <div className = {AccountCSS.stats}>Email: {userData.email}</div>
          <div className = {AccountCSS.stats} >Address: {userData.address.street} {userData.address.city} {userData.address.state}, {userData.address.zipcode}</div>
        </div>
      </div>
    )
  } else {
    return <div>Loading Data</div>
  }
}

export default UserInfo;