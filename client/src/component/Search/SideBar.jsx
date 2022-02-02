import React, { useState, useEffect } from 'react';
import SearchCSS from "./Search.module.css";

const SideBar = ({searchForItem, usedFilter, setUsedFilter, newFilter, setNewFilter, setMaxPrice, maxPrice,
  kgToys, setKGToys, availableTags, setAvailableTags, appliedTags, setAppliedTags, sortOption, setSortOption}) => {

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

  const handleClickTag = (tagName) => {
    var tmp = appliedTags.slice();
    tmp.push(tagName.item)
    setAppliedTags(tmp);

    var index = availableTags.indexOf(tagName.item);
    if (index !== -1) {
      availableTags.splice(index, 1);
    }
  }

  const handleSortOptionsClick = (val) => {
    setSortOption(val)
  }

  return(
    <div>
      <div>
      <label for="sortOptions">Sort By:</label>
        <select name="desc" onChange={ () => handleSortOptionsClick(event.target.value)}>
          <option value="default" >New Arrivals</option>
          <option value="desc" >Price: High To Low</option>
          <option value="asc">Price: Low To High</option>
        </select>
        <button onClick={() => {searchForItem()}}>Sort</button>
        </div>
      <div>Filter By: </div>
      <div>
        <label for="price">Price </label>
        <input type="range" name="price" min="0" max="1000" defaultValue="1000" onChange={handleSliderChange} />
        <output for="price">$0 - ${maxPrice}</output>
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
        <input type="checkbox" value="Others" />
        <label>All Sellers</label>
      </form>
      <div>Tag</div>
      <ul>
        {
          availableTags.map(item => (
            <li onClick={()=>{handleClickTag({item})}}>#{item}</li>
          ))
        }
      </ul>
      {appliedTags.length > 0 ? <ul>
        <li>Selected tags:</li>
        {appliedTags.map(item => (
          <li>#{item}  <strong>x</strong></li>
        ))}
      </ul> : null}
      <button onClick={() => {searchForItem()}}>Apply filters</button>
    </div>
  )
}

export default SideBar;