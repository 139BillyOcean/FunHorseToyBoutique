import React, {useState, useEffect} from 'react';
import ListingCSS from './Listing.module.css';
const Tags = ({onClick, index, tag}) => {
  return(
  <ul
  className={ListingCSS.createlistingadds}
  onClick={()=>{
    // event.preventDefault()
    onClick(index)
    }}>
    {tag}
  </ul>
  )
}

export default Tags;