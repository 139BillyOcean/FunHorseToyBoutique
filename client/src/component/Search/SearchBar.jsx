import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
      <input placeholder="Search for a toy" type="text" value={searchTerm} onChange={handleChange}/>
      <button>Search</button>
      </form>
    </div>
  )

}

export default SearchBar;