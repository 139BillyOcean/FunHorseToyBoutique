import React, {useState, useEffect} from 'react';

const Photos = ({onClick, index, photo}) => {
  return(
  <ul onClick={()=>{
    event.preventDefault()
    onClick(index)
    }}>
    {photo}
  </ul>
  )
}

export default Photos;