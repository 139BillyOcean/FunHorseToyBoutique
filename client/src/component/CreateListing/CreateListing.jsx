import React, {useState, useEffect} from 'react';
import axios from 'axios'

const CreateListing = () => {
  // need to grab current account info - user id to send in post
  var curYear = new Date().getFullYear()
  var userId = '61f84088f6630f99b59136ab'
  // need to grab home button
  //need to implement handleSubmit to either 1: refresh the page to a blank state with a ntoification saying (successfully added!) or 2: redirect to account overview page

  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [condition ,setCondition] = useState('')
  // const [features, setFeatures] = useState('')
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    photos: "",
    condition: "",
    price: 0,
    brand: "",
    year: curYear,
    tags: "",
    quantity: 1
  })
  // const [photos, setPhotos] = useState([])


  const handleChange = (event) => {
    event.preventDefault()
    setInputs((prevState)=>({
      ...prevState, [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    // console.log(toy)
    // console.log(event.target.form)
    var price = inputs.price
    var toy = inputs
    toy.price = {}
    // console.log(toy)
    toy.price.original = price
    // console.log(toy)
    // console.log('here')
    // axios.post()
    axios.post(`/createListing`, toy, {params: {user: userId}})
      .then((response)=>{
        console.log(response)
      })
  }

  return (
    <form id='CreateListing-overview'>
        <label id='product-title'>
          Title of your Listing:
          <input
            name="name"
            type="text"
            value={inputs.name || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-description'>
          Description:
          <input
            name="description"
            type="text"
            value={inputs.description || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-photos'>
          urls of Photos:
          <input
            name="photos"
            type="text"
            value={inputs.photos || ''}
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
            name="condition"
            value={inputs.condition || 'new'}
            onChange={handleChange} >
              <option value='new'>New</option>
              <option value='used'>Used</option>
            </select>
        </label>
        <label
        id='product-price'>
          Your Price: $
          <input
            name="price"
            type="number"
            min="0.01"
            value={inputs.price || 0}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-brand'>
          Brand:
          <input
            name="brand"
            type="text"
            value={inputs.brand || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-year'>
          Product Manufactured Year:
          <input
            name="year"
            type="number"
            max="2022"
            min="0"
            value={inputs.year || curYear}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-tags'>
          Tags:
          <input
            name="tags"
            type="text"
            value={inputs.tags || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-quantity'>
          How many do you want to sell?:
          <input
            name="quantity"
            type="number"
            min="1"
            value={inputs.quantity || 1}
            onChange={handleChange} />
        </label>
        <button
        onClick={(event)=>{
          event.preventDefault()
          handleSubmit(event)
        }}
        id='addListing'
        type="submit">Add Listing Now</button>
      </form>
  )
}
export default CreateListing;