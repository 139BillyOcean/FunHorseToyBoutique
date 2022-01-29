import React from 'react';

const SideBar = () => {
  return(
    <div>
      <div>Category</div>
      <></>
      <div>Condition</div>
      <form>
        <input type="checkbox" value="New" />
        <label> New</label>
        <input type="checkbox" value="Used" />
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