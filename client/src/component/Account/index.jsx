import React from 'react';
import css from './Account.styles.css';
import UserInfo from './UserInfo.jsx';
import Purchases from './Purchases.jsx';
import Listings from './Listings.jsx';
import Receipts from './Receipts.jsx';
// import toyData from '../../data/toys.js';

const Account = ({ currentUser }) => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    // fetch current user info
    axios.get('/users', {
      params: {
        user: currentUser
      }
    })
    .then((response) => {
      setUserData(response.data[0]);
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
      <UserInfo />
      <Purchases />
      <Listings />
      <Receipts />
    </div>
  );
};

export default Account;
