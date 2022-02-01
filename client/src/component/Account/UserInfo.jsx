import React from 'react';
import css from './Account.styles.css';

const UserInfo = ({ userData }) => {
  return (
    <div className={css.userInfo}>
      <div className={css.userInfoColumn}>
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
      <div className={css.userInfoColumn}>
        <div>Name: {userData.name}</div>
        <div>Member since: {userData.date}</div>
      </div>
    </div>
  )
}

export default UserInfo;