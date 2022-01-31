import React, {useState, useEffect} from 'react';

const SideBar = ({conditionFilter, setConditionFilter, searchForItem, searchTerm}) => {
  const [newFilter, setNewFilter] = useState(false);
  const [usedFilter, setUsedFilter] = useState(false)

  const handleNewClick = () => {
    var updatedValue = !newFilter;
    var updatedConditionFilter = [];

    if (updatedValue) {
      updatedConditionFilter = conditionFilter.slice();
      updatedConditionFilter.push('new');
    } else {
      updatedConditionFilter = conditionFilter.filter(item => item !== 'new');
    }
    setConditionFilter(updatedConditionFilter);
    setNewFilter(updatedValue);
    searchForItem(searchTerm, updatedConditionFilter);
  }

  const handleUsedClick = () => {
    var updatedValue = !usedFilter;
    var updatedConditionFilter = [];

    if (updatedValue) {
      updatedConditionFilter = conditionFilter.slice();
      updatedConditionFilter.push('used');
    } else {
      updatedConditionFilter = conditionFilter.filter(item => item !== 'used');
    }
    setConditionFilter(updatedConditionFilter);
    setUsedFilter(updatedValue);
    searchForItem(searchTerm, updatedConditionFilter);
  }

  return(
    <div>
      <div>Category</div>
      <></>
      <div>Condition</div>
      <form>
        <input type="checkbox" value="New" onClick={handleNewClick}/>
        <label> New</label>
        <input type="checkbox" value="Used" onClick={handleUsedClick} />
        <label>Used</label>
      </form>
      <div>Seller</div>
      <form>
        <input type="checkbox"  />
        <label>KGToys</label>
        <input type="checkbox" />
        <label>Other</label>
      </form>

    </div>
  )
}

export default SideBar;