import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Tags from './Tags.jsx'
import Photos from './Photos.jsx'
import { useNavigate } from 'react-router-dom';
import ListingCSS from './Listing.module.css';
import logo from '../../../dist/images/Fun-Horse-Transparent.png';

const CreateListing = ({user}) => {
  let navigate = useNavigate();
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
    // console.log('here')
    // console.log(photos)
    var newPhoto = [...photos]
    newPhoto.splice(index, 1)
    // console.log(newPhoto)
    setPhotos(newPhoto)
    //not updating?
  }

  const onClickOfTag = (index) => {
    // console.log('here')
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
    // console.log(price)
    // console.log(toy)
    // console.log(toy)
    // console.log('here')
    // axios.post()
    axios.post(`/createListing`, toy, {params: {user: userId}})
      .then((response)=>{
        alert('listing was added!')
        navigate('/accountoverview/');
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
    <div id='createListing-container' >
      <button className={ListingCSS.home_button} onClick={() => { navigate('/'); }}>
        Home
      </button>
      <Link to={'/'}>
        {/* logo acts as home button */}
      <img className={ListingCSS.logo} src ={logo}></img>
          {/* <button id='home-button'>Home</button> */}
      </Link>
      <div className={ListingCSS.pagetitle}>List  Your Toy!</div>
      <form className={ListingCSS.form} id='CreateListing-overview'>
        <div>
        <label
        className={ListingCSS.alllabel}id='product-title'>
          Title of your Listing:
          <input
            name="name"
            type="text"
            className={ListingCSS.input_name}
            value={inputs.name || ''}
            onChange={handleChange} />
        </label>
        </div>
        <br />
        <div>
        <label
        className={ListingCSS.alllabel}
        id='product-description'>
          Description:
          <input
            name="description"
            className={ListingCSS.input_desc}
            type="text"
            value={inputs.description || ''}
            onChange={handleChange} />
        </label>
        </div>

        <br />
        <label
        className={ListingCSS.alllabel}
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
            className={ListingCSS.input_photos}
            value={inputs.photos || ''}
            onChange={handleChange} />
        </label>
        <button
        onClick={(event)=>{
          event.preventDefault()
          handleAddPhoto(event)
        }}
          id='addPhotos'
          className = {ListingCSS.addPhotos}
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
        id='product-condition' className={ListingCSS.alllabel}>
          Condition:
          <select
          className = {ListingCSS.select}
            name="condition"
            value={inputs.condition || 'new'}
            onChange={handleChange} >
              <option value='new'>New</option>
              <option value='used'>Used</option>
            </select>
        </label>
        <label
        className={ListingCSS.alllabel}
        id='product-price'>
          Your Price: $
          <input
            name="price"
            type="number"
            placeholder = "Price must be 0.01 minimum"
            className={ListingCSS.input_price}
            value={inputs.price || 0}
            onChange={handleChange} />
        </label>
        <br />
        <label
        className={ListingCSS.alllabel}
        id='product-brand'>
          Brand:
          <input
            name="brand"
            type="text"
            className={ListingCSS.input_brand}
            value={inputs.brand || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label
        className={ListingCSS.alllabel}
        id='product-year'>
          Product Manufactured Year:
          <input
            name="year"
            type="number"
            max="2022"
            min="0"
            className={ListingCSS.input_year}
            value={inputs.year}
            onChange={handleChange} />
        </label>
        <br />
        <label
        className={ListingCSS.alllabel}
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
            className={ListingCSS.input_tags}
            value={inputs.tags || ''}
            onChange={handleChange} />
        </label>
        <button
        onClick={(event)=>{
          event.preventDefault()
          handleAddTag(event)
        }}
          id='addTag'
          className = {ListingCSS.addTag}
        type="submit">Add tag</button>
        <br />
        <label
        className={ListingCSS.alllabel}
        id='product-quantity'>
          How many do you want to sell?:
          <input
            name="quantity"
            type="number"
            min="1"
            className={ListingCSS.input_quantity}
            value={inputs.quantity || 1}
            onChange={handleChange} />
        </label>
        <br />
        <div>
        <button
        onClick={(event)=>{
          event.preventDefault()
          handleSubmit(event)
          //make it link to account overivew?
        }}
          id='addListing'
          className = {ListingCSS.addListing}
        type="submit">Add Listing Now</button>
        </div>
      </form>
    </div>
  )
}
export default CreateListing;