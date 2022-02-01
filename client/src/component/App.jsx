import React from 'react';
// import styles from './App.styles.css';
// import MainPage from './Search/MainPage.jsx';
import Account from './Account/index.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import CreateListing from './CreateListing/CreateListing.jsx';
import LoginSignUp from './Login/LoginSignUp.jsx';

const App = () => (
  //  return <div className={styles.main}>hello world!</div>;
  <div>
    {/* <ProductOverview /> */}
    {/* <MainPage /> */}
    <LoginSignUp />
  </div>

);

export default App;