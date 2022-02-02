import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Tags from './Tags.jsx'
import Photos from './Photos.jsx'

const CreateListing = ({user}) => {
  // need to grab current account info - user id to send in post
  // console.log(user)
  var curYear = new Date().getFullYear()
  var userId = '61f889eb145fe868b3c6979c'

  // need to grab home button
  //need to implement handleSubmit to either 1: refresh the page to a blank state with a ntoification saying (successfully added!) or 2: redirect to account overview page

  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [condition ,setCondition] = useState('')
  // const [features, setFeatures] = useState('')
  const [tags, setTags] = useState([])
  const [photos, setPhotos] = useState([])
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    photos: "",
    condition: "New",
    price: 0,
    brand: "",
    year:  2022,
    tags: "",
    quantity: 1
  })
  // const [photos, setPhotos] = useState([])
  const onClickOfPhoto = (index) => {
    console.log('here')
    console.log(photos)
    var newPhoto = [...photos]
    newPhoto.splice(index, 1)
    console.log(newPhoto)
    setPhotos(newPhoto)
    //not updating?
  }

  const onClickOfTag = (index) => {
    console.log('here')
    var newTag = [...tags]
    newTag.splice(index, 1)
    setTags(newTag)

  }

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
    var year = inputs.year
    var toy = inputs
    toy.price = {}
    toy.photos = photos
    toy.tags = tags
    inputs.yearManufactured = year
    // console.log(toy)
    toy.price.original = price
    console.log(price)
    console.log(toy)
    // console.log(toy)
    // console.log('here')
    // axios.post()
    axios.post(`/createListing`, toy, {params: {user: userId}})
      .then((response)=>{
        alert('listing was added!')
      })
  }
  const handleAddTag = (event) => {
    // var newTags = tags.concat(inputs.tags)
    // setTags(newTags)
    setTags(prevState => [...prevState, inputs.tags])
  }
  useEffect(()=>{
    setInputs((prevState)=>({
      ...prevState, tags: ""
    }))
  }, [tags])

  const handleAddPhoto = (event) => {
    setPhotos(prevState => [...prevState, inputs.photos])
  }
  useEffect(()=>{
    setInputs((prevState)=>({
      ...prevState, photos: ""
    }))
  }, [photos])

  useEffect(()=>{

  }, [photos, tags])
  return (
    <div id='CreateListing-container'>
    <Link to={'/'}>
          <button id='home-button'>Home</button>
        </Link>
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
          {photos.map((photo)=>{
            return(
            <Photos
            key={'photo' + photos.indexOf(photo)}
            photo={photo}
            index={photos.indexOf(photo)}
            onClick={onClickOfPhoto}
            />
            )
          })}
          <input
            name="photos"
            type="text"
            value={inputs.photos || ''}
            onChange={handleChange} />
        </label>
        <button
        onClick={(event)=>{
          event.preventDefault()
          handleAddPhoto(event)
        }}
        id='addPhotos'
        type="submit">Add photos</button>
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
            value={inputs.year}
            onChange={handleChange} />
        </label>
        <br />
        <label
        id='product-tags'>
          Tags:
          {tags.map((tag)=>{
            return(
            <Tags
              key={'tag' + tags.indexOf(tag)}
              tag={tag}
              onClick={onClickOfTag}
              index={tags.indexOf(tag)}
            />
            )
          })}
          <input
            name="tags"
            type="text"
            value={inputs.tags || ''}
            onChange={handleChange} />
        </label>
        <button
        onClick={(event)=>{
          event.preventDefault()
          handleAddTag(event)
        }}
        id='addTag'
        type="submit">Add tag</button>
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
        <br />
        <button
        onClick={(event)=>{
          event.preventDefault()
          handleSubmit(event)
          //make it link to account overivew?
        }}
        id='addListing'
        type="submit">Add Listing Now</button>
      </form>
    </div>
  )
}
export default CreateListing;