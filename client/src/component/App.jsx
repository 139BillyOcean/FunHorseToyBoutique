import React from 'react';
import styles from './App.styles.css';
import MainPage from './Search/MainPage.jsx';
import Account from './Account/index.jsx';
import CreateListing from './CreateListing/CreateListing.jsx';
import Reviews from '../component/Reviews/Reviews.jsx';

const App = () => {
  //  return <div className={styles.main}>hello world!</div>;
  // return (
  //   <>
  //   <MainPage/>
  //   </>
  // )

  return (
    <div>
      <Reviews />
    </div>
  );
};

export default App;
