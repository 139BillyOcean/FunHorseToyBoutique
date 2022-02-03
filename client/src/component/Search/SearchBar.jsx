import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchCSS from "./Search.module.css";
import searchIcon from '../../../dist/images/search.png';

const SearchBar = ({searchTerm, setSearchTerm, searchForItem}) => {

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchForItem(searchTerm)
  }

  return (
    <div >
      <form onSubmit={handleSearchSubmit}>
      <input  className={SearchCSS.search} placeholder="Search for a toy" type="text" value={searchTerm} onChange={handleChange}/>
      <img className={SearchCSS.search_icon} src={searchIcon} onClick={handleSearchSubmit} alt = 'search icon'></img>
      </form>
    </div>
  )

}

export default SearchBar;