import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import AppContainer from './redux/containers/appContainer.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);
