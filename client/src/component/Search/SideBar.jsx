import React, { useState, useEffect } from 'react';
import SearchCSS from "./Search.module.css";

const SideBar = ({searchForItem, usedFilter, setUsedFilter, newFilter, setNewFilter, setMaxPrice, maxPrice,
  kgToys, setKGToys}) => {

  const handleNewClick = () => {
    setNewFilter(!newFilter)
  }

  const handleUsedClick = () => {
    setUsedFilter(!usedFilter);
  }

  const handleSellerClick = () => {
    setKGToys(!kgToys)
  }

  const handleSliderChange = (event) => {
    event.preventDefault();
    setMaxPrice(event.target.value);
  }



  return(
    <div>
      <div>Filter By Tag</div>
      <div></div>
      <div>
        <label for="price">Filter By Price </label>
        <input type="range" name="price" min="0" max="1000" defaultValue="1000" onChange={handleSliderChange} />
      </div>
      <div>Condition</div>
      <form>
        <input type="checkbox" value="New" onClick={handleNewClick}/>
        <label> New</label>
        <input type="checkbox" value="Used" onClick={handleUsedClick} />
        <label>Used</label>
      </form>
      <div>Seller</div>
      <form>
        <input type="checkbox" value="KGToys" onClick={handleSellerClick}/>
        <label> KGToys</label>
        <input type="checkbox" value="Others"  />
        <label>Other Sellers</label>
      </form>
      <button onClick={() => {searchForItem()}}>Apply filters</button>
    </div>
  )
}

export default SideBar;