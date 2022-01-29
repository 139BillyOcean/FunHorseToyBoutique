import changeStyle from './exampleAction1.js';
import store from '../store/store.js';
import axios from 'axios';

var handleProductInit = (productId) => {
  return (dispatch) => {
    return axios.get(`/api/product/init/?product_id=${productId}`)
      .then((product) => {
        store.dispatch(changeStyle(product.data.stylesData[0]));
      })
      .catch((error) => {
        store.dispatch(setError(error));
      });
  };
};

export default handleProductInit;
