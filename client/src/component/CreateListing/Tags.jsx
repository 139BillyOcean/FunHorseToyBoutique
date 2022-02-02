import React, {useState, useEffect} from 'react';

const Tags = ({onClick, index, tag}) => {
  return(
  <ul onClick={()=>{
    // event.preventDefault()
    onClick(index)
    }}>
    {tag}
  </ul>
  )
}

export default Tags;