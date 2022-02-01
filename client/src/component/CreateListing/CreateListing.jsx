import React, {useState, useEffect} from 'react';

const CreateListing = () => {
  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [condition ,setCondition] = useState('')
  // const [features, setFeatures] = useState('')
  const [inputs, setInputs] = useState({})
  // const [photos, setPhotos] = useState([])


  const handleChange = (event) => {
    event.preventDefault()
    setInputs((prevState)=>({
      ...prevState, [event.target.name]: event.target.value
    }))
  }

  return (
    <form id='CreateListing-overview'>
        <label id='product-title'>
          Title of your Listing:
          <input
            name="toyTitle"
            type="text"
            value={inputs.toyTitle || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-description'>
          Description:
          <input
            name="toyDescription"
            type="text"
            value={inputs.toyDescription || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-photos'>
          urls of Photos:
          <input
            name="toyPhotos"
            type="text"
            value={inputs.toyTags || ''}
            onChange={handleChange} />
        </label>
        {/* <br />
        <label
        id='product-photos'>
          Add your photos:
          <input
            name="toyPhotos"
            type="file"
            value={inputs.toyDescription || ''}
            onChange={handleChange} />
        </label> */}
        <br />
        <label
        id='product-condition'>
          Condition:
          <select
            name="toyCondition"
            value={inputs.toyCondition || 'new'}
            onChange={handleChange} >
              <option value='new'>New</option>
              <option value='used'>Used</option>
            </select>
        </label>
        <label
        id='product-price'>
          Your Price: $
          <input
            name="toyPrice"
            type="number"
            value={inputs.toyPrice || 0}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-brand'>
          Brand:
          <input
            name="toyBrand"
            type="text"
            value={inputs.toyDescription || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-year'>
          Product Manufactured Year:
          <input
            name="toyYear"
            type="number"
            value={inputs.toyYear || 2022}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-tags'>
          Tags:
          <input
            name="toyTags"
            type="text"
            value={inputs.toyTags || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-quantity'>
          How many do you want to sell?:
          <input
            name="toyQuantity"
            type="number"
            value={inputs.toyQuantity || 1}
            onChange={handleChange} />
        </label>
      </form>
  )
}
export default CreateListing;