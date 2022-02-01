import React from 'react';
// import styles from './App.styles.css';
import MainPage from './Search/MainPage.jsx';
// import Account from './Account/index.jsx';
import CreateListing from './CreateListing/CreateListing.jsx';
import LoginSignUp from './Login/LoginSignUp.jsx';
import Login from './Login/Login.jsx';
import SignUp from './Login/SignUp.jsx';
import styles from './Login/Login.styles.css';

const App = () => {

//  return <div className={styles.main}>hello world!</div>;
// return (
//   <>
//   <MainPage/>
//   </>
// )

  return (
    <div className={styles.main}>
      <Login />
      <SignUp />
    </div>
  );

};

export default App;
