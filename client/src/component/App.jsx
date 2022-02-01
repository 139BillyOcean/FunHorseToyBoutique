import React from 'react';
// import styles from './App.styles.css';
// import MainPage from './Search/MainPage.jsx';
import Account from './Account/index.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import CreateListing from './CreateListing/CreateListing.jsx';
import LoginSignUp from './Login/LoginSignUp.jsx';

const App = ({ user, cart, handleCurrentCart, handleCurrentUser }) => {

//  return <div className={styles.main}>hello world!</div>;
return (
  <>
  <ProductOverview user={user} cart={cart} handleCurrentUser={handleCurrentUser} handleCurrentCart={handleCurrentCart} />
  {/* <MainPage /> */}
  {/* <LoginSignUp /> */}
  </>
)

};

export default App;
