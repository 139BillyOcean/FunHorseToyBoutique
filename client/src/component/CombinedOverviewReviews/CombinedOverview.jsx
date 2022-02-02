import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductOverview from '../ProductOverview/ProductOverview.jsx'
import { useParams, Link } from 'react-router-dom';

const CombinedOverview = ({ cart, user, handleCurrentUser, handleCurrentCart }) => {
  const [toy, setToy] = useState({
    id: '',
    dateCreated: 0,
    user: '',
    name: '',
    condition: '',
    brand: '',
    yearManufactured: 1,
    tags: [''],
    photos: [''],
    price: {
      original: 1,
      sale: 1
    },
    quantity: 1,
    description: '',
    ratings: [],
    reviews: [{
      body: '',
      reviewer: '',
      date: 1,
      answers: [{
        body: '',
        date: 1,
        answerer: ''
      }]
    }]
  });

  const { productId } = useParams();

  const [seller, setSeller] = useState('');

  //sample id 61f89422edbb84b70e40df31 -> exchange with any product id in your database to view the page.

  useEffect(() => {
    axios.get(`/overview/${productId}`)
      .then((toyResults) => {
        setToy(toyResults.data);
        axios.get(`/overview/user/${toyResults.data.user}`)
          .then((userResults) => {
            setSeller(userResults.data.username);
          })
          .catch((err) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ProductOverview seller={seller} toy={toy} user={user} cart={cart} handleCurrentUser={handleCurrentUser} handleCurrentCart={handleCurrentCart} />
    </div>
  );
}

export default CombinedOverview;
