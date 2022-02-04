import React, { useState, useEffect } from 'react';
import SearchCSS from "./Search.module.css";

const SideBar = ({searchForItem, usedFilter, setUsedFilter, newFilter, setNewFilter, setMaxPrice, maxPrice,
  availableBrands, setAvailableBrands, appliedBrands, setAppliedBrands,
   availableTags, setAvailableTags, appliedTags, setAppliedTags, sortOption, setSortOption}) => {

  const handleNewClick = () => {
    setNewFilter(!newFilter)
  }

  const handleUsedClick = () => {
    setUsedFilter(!usedFilter);
  }

  const handleBrandClick = (brandName) => {
    var tmp = appliedBrands.slice();
    tmp.push(brandName.item)
    setAppliedBrands(tmp);

    var index = availableBrands.indexOf(brandName.item);
    if (index !== -1) {
      availableBrands.splice(index, 1);
    }
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
      <div className={SearchCSS.sidebarElement}>
      <label for="sortOptions">Sort By:</label>
        <select name="desc" onChange={ () => handleSortOptionsClick(event.target.value)}>
          <option value="default" >New Arrivals</option>
          <option value="desc" >Price: High To Low</option>
          <option value="asc">Price: Low To High</option>
        </select>
        <button onClick={() => {searchForItem()}} className={SearchCSS.sort_button }>Sort</button>
        </div>
        <hr/>
      <div className={SearchCSS.sidebarElement}>
        <p>Filter By:</p>
      <div>
        <label for="price">Price </label>
        <input type="range" name="price" min="0" max="1000" defaultValue="1000" onChange={handleSliderChange} />
        <output for="price">$0 - ${maxPrice}</output>
      </div>
      </div>
      <div className={SearchCSS.sidebarElement}>
      <hr/>
        <p>Condition</p>
      <form className = {SearchCSS.form}>
        <input type="checkbox" className = {SearchCSS.checkbox} value="New" onClick={handleNewClick}/>
        <label> New</label>
        <input type="checkbox" className = {SearchCSS.checkbox} value="Used" onClick={handleUsedClick} />
        <label>Used</label>
      </form>
      </div>
      <hr/>
      <div className={SearchCSS.sidebarElement}>
        <p>Brand</p>
      <ul>
        {
          availableBrands.map((item,index)=> (
            <li key={index} onClick={()=>{handleBrandClick({item})}}><input type="checkbox" value={item}/><label>{item}</label></li>
          ))
        }
      </ul>
      {appliedBrands.length > 0 ? <ul>
        <li>Selected brands:</li>
        {appliedBrands.map((item, index)=> (
          <li key={index}>#{item}  <strong>x</strong></li>
        ))}
      </ul> : null}
      </div>
      <hr/>
      <div className={SearchCSS.sidebarElement}>
        <p>Keyword</p>
      <ul>
        {
          availableTags.map((item, index) => (
            <li key={index} onClick={()=>{handleClickTag({item})}}>#{item}</li>
          ))
        }
      </ul>
      {appliedTags.length > 0 ? <ul>
        <li>Selected tags:</li>
        {appliedTags.map((item, index) => (
          <li key={index}>#{item}  <strong>x</strong></li>
        ))}
      </ul> : null}
      </div>
      <button className={SearchCSS.filter_button} onClick={() => {searchForItem()}}>Apply filters</button>
    </div>
  )
}

export default SideBar;