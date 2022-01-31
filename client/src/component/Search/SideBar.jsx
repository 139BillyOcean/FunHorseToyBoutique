import React, {useState, useEffect} from 'react';

const SideBar = ({searchForItem, usedFilter, setUsedFilter, newFilter, setNewFilter, setMaxPrice, maxPrice}) => {


  const handleNewClick = () => {
    // var updatedValue = !newFilter;
    // var updatedConditionFilter = [];

    // if (updatedValue) {
    //   updatedConditionFilter = conditionFilter.slice();
    //   updatedConditionFilter.push('new');
    // } else {
    //   updatedConditionFilter = conditionFilter.filter(item => item !== 'new');
    // }
    // setConditionFilter(updatedConditionFilter);
    // setNewFilter(updatedValue);
    // searchForItem(searchTerm, updatedConditionFilter);
    setNewFilter(!newFilter)

  }

  const handleUsedClick = () => {
    // var updatedValue = !usedFilter;
    // var updatedConditionFilter = [];

    // if (updatedValue) {
    //   updatedConditionFilter = conditionFilter.slice();
    //   updatedConditionFilter.push('used');
    // } else {
    //   updatedConditionFilter = conditionFilter.filter(item => item !== 'used');
    // }
    // setConditionFilter(updatedConditionFilter);
    // setUsedFilter(updatedValue);
    // searchForItem(searchTerm, updatedConditionFilter);


    setUsedFilter(!usedFilter);
    // await
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
      <button onClick={() => {searchForItem()}}>Apply</button>
    </div>
  )
}

export default SideBar;