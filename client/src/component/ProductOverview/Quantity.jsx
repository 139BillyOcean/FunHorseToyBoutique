import React, {useState, useEffect} from 'react';
import styles from './Overview.styles.css';

const Quantity = ({ quantityInStock, quantitySelected, handleQuantity }) => {
  const [hidePlus, setHidePlus] = useState(true);
  const [hideMinus, setHideMinus] = useState(true);

  useEffect(() => {
    viewPlusAndMinus(quantityInStock, quantitySelected);
  }, [hidePlus, hideMinus])

  const handlePlus = () => {
    if (quantityInStock > quantitySelected) {
      handleQuantity(quantitySelected + 1);
    }
    viewPlusAndMinus(quantityInStock, quantitySelected + 1);
  };

  const handleMinus = () => {
    if (quantitySelected > 1) {
      handleQuantity(quantitySelected - 1);
    }
    viewPlusAndMinus(quantityInStock, quantitySelected - 1);
  };

  const viewPlusAndMinus = (have, want) => {
    if (have <= want) {
      setHidePlus(true);
    } else {
      setHidePlus(false);
    }
    if (want === 1) {
      setHideMinus(true);
    } else {
      setHideMinus(false);
    }
  }

  return (
    <div className={styles.quantity} id='quantity'>
      Quantity:
      {hideMinus? ' ' : <span onClick={handleMinus} className={styles.minus} id='minus'>
        -
      </span>}
      {quantitySelected}
      {hidePlus? ' ' : <span onClick={handlePlus} className={styles.plus} id='plus'>
        +
      </span>}
    </div>
  );
}

export default Quantity;