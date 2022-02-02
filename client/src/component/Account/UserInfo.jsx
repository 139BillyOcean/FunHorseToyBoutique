import React from 'react';
import css from './Account.styles.css';

const UserInfo = ({ userData }) => {
  if (userData) {
    return (
      <div className={css.rowContainer}>
        <div className={css.columnContainer}>
          {
            userData.profilePicture ?
            <img
              className={css.profilePicture}
              src={userData.profilePicture}
            ></img> :
            <img
              className={css.profilePicture}
              src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
            ></img>
          }
          <div>{userData.username}</div>
        </div>
        <div className={css.columnContainer}>
          <div>Name: {userData.name}</div>
          <div>Member since: {userData.date}</div>
          <div>Email: {userData.email}</div>
          <div>Address: {userData.address.street} {userData.address.city} {userData.address.state}, {userData.address.zipcode}</div>
        </div>
      </div>
    )
  } else {
    return <div>Loading Data</div>
  }
}

export default UserInfo;