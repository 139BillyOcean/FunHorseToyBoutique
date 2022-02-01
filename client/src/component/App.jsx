import React from 'react';
// import styles from './App.styles.css';
// import MainPage from './Search/MainPage.jsx';
import Account from './Account/index.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import CreateListing from './CreateListing/CreateListing.jsx';
import LoginSignUp from './Login/LoginSignUp.jsx';

<<<<<<< HEAD
const App = ({ user, cart, handleCurrentCart, handleCurrentUser }) => {

//  return <div className={styles.main}>hello world!</div>;
return (
  <>
  <ProductOverview user={user} cart={cart} handleCurrentUser={handleCurrentUser} handleCurrentCart={handleCurrentCart} />
  </>
)

};

export default App;
=======
const App = () => (
  //  return <div className={styles.main}>hello world!</div>;
  <div>
    {/* <ProductOverview /> */}
    {/* <MainPage /> */}
    <LoginSignUp />
  </div>

);

export default App;
>>>>>>> 0241a2c61a628fad73c50d6905a29a6501d25e8f
