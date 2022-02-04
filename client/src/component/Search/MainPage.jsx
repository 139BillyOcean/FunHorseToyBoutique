import React, { useState, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Content from "./Content.jsx";
import SearchCSS from "./Search.module.css";
import faketoys from "./fakedata.js";
import axios from "axios";
// import Modal from './Modal.jsx';


const MainPage = ({handleCurrentCart, cart, user, handleCurrentUser}) => {
  const [toys, setToys] = useState([]);
  const [modal, showModal] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [newFilter, setNewFilter] = useState(false);
  const [usedFilter, setUsedFilter] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [appliedBrands, setAppliedBrands] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [appliedTags, setAppliedTags] = useState([]);
  const [sortOption, setSortOption] = useState('default');


  useEffect(() => {
    axios
      .get("/home")
      .then((toys) => {
        console.log(toys)
        setToys(toys.data);
        //creating unique tags arr
        const temp = new Set();
        toys.data.map(item => (
          item.tags.forEach(tag => {
            temp.add(tag)
          })
        ))
        setAvailableTags(Array.from(temp))

        const tempBrand = new Set();
        toys.data.map(item => (
          tempBrand.add(item.brand)
        ))
        setAvailableBrands(Array.from(tempBrand))
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const searchForItem = () => {
    var conditionFilter = [];
    var sellerFilter = [];
    var tags = appliedTags;
    var brands = appliedBrands;

    if (usedFilter) {
      conditionFilter.push('used')
    }
    if (newFilter) {
      conditionFilter.push('new')
    }

    // var targetConditionFilter = conditionFilterParam ? conditionFilterParam : conditionFilter;
    var searchParam = searchTerm && searchTerm.length > 0 ? `/${searchTerm}` : '';
    axios.get(`home/search${searchParam}`,
      {params: {
      conditionFilter: conditionFilter,
      maxPrice: maxPrice,
      tags: appliedTags,
      brands: appliedBrands,
      sortOption: sortOption}})
    .then((response) => {
      setToys(response.data)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div id="main" className ={SearchCSS.main} >
       {/* {modal ? <Modal modal={modal} showModal={showModal} /> : null} */}
    <NavBar toys={toys} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchForItem={searchForItem} user={user} handleCurrentUser={handleCurrentUser} />
    <ul id = 'mainContainer' className={SearchCSS.mainContainer}>
      <li id = 'sidebar' className={SearchCSS.sidebar}>
        <SideBar
          newFilter={newFilter} setNewFilter={setNewFilter}
          usedFilter={usedFilter} setUsedFilter={setUsedFilter}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          availableBrands={availableBrands} setAvailableBrands={setAvailableBrands}
          appliedBrands={appliedBrands} setAppliedBrands={setAppliedBrands}
          availableTags={availableTags} setAvailableTags={setAvailableTags}
          appliedTags={appliedTags} setAppliedTags={setAppliedTags}
          sortOption={sortOption} setSortOption={setSortOption}
          searchForItem={searchForItem}
        />
      </li>
      <li id = 'content' className={SearchCSS.content}><Content toys={toys} cart={cart} handleCurrentCart={handleCurrentCart}/></li>
    </ul>
    </div>
  )
}

export default MainPage;
