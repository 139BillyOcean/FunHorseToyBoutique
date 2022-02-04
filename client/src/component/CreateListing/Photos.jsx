import React, {useState, useEffect} from 'react';
import ListingCSS from './Listing.module.css';
const Photos = ({onClick, index, photo}) => {
  return(
  <ul
  className={ListingCSS.createlistingadds}
  onClick={()=>{
    event.preventDefault()
    onClick(index)
    }}>
    {photo}
  </ul>
  )
}

export default Photos;