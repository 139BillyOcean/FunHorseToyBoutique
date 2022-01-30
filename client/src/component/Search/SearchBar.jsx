import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = ({toys, searchTerm, setSearchTerm, setToys}) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios.get(`home/search/${searchTerm}`)
    .then((response) => {
      setToys(response.data)
    })
    .then(() => {
      console.log("toys searched: ", toys)
    })
    .catch((err) => console.log(err))
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