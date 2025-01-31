import './App.css';
import { useState } from 'react'

function App() {
  const [formData, setformData] = useState({ firstname: "", lastname: "", email: "", country: "", address: "", city: "", postal: "", comments: "", candidates: "", offers: "" })
  const [todo, setTodo] = useState([])


  console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setformData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === 'checkbox' ? checked : value
      }
    })

  }

  return (
    <div className="App">

      <form className='form'>


        <p>First name</p>
        <input
          type='text'
          placeholder='Pranay'
          name='firstname'
          onChange={changeHandler}
          value={formData.firstname}
        />

        <p>Last name</p>
        <input
          type='text'
          placeholder='Gupta'
          name='lastname'
          onChange={changeHandler}
          value={formData.lastname}
        />

        <p>Email address</p>
        <input
          type='email'
          placeholder='pranay@duck.com'
          name='email'
          onChange={changeHandler}
          value={formData.email}
        />

        <label htmlFor='country'><p>Country</p></label>
        <select
          name='country'
          value={formData.country}
          onChange={changeHandler}
          id='country'
        >
          <option value="India">India</option>5
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>

        </select>

        <p>Street address</p>
        <input
          type='text'
          placeholder='1234 Main St'
          name='address'
          onChange={changeHandler}
          value={formData.address}
        />

        <p>City</p>
        <input
          type='text'
          placeholder='Asansol'
          name='city'
          onChange={changeHandler}
          value={formData.city}
        />

        <p>ZIP/Postal code</p>
        <input
          type='text'
          placeholder='713301'
          name='postal'
          onChange={changeHandler}
          value={formData.postal}
        />


        <fieldset>
          <legend>  By email </legend>

          <label htmlFor='comments' className='select-class' >
            <input
              type='checkbox'
              name='comments'
              id='comments'
              onChange={changeHandler}
              checked={formData.comments}
            />
            Comments
            <p>Get Notified when someone post a comment.</p></label>

          <label htmlFor='candidates' className='select-class' >
            <input
              type='checkbox'
              name='candidates'
              id='candidates'
              onChange={changeHandler}
              checked={formData.candidates}
            />
            Candidates
            <p>Get Notified when someone post a candidates.</p></label>

          <label htmlFor='offers' className='select-class' >
            <input
              type='checkbox'
              name='offers'
              id='offers'
              onChange={changeHandler}
              checked={formData.offers}
            />
            Offers
            <p>Get Notified when someone post a offers.</p></label>
        </fieldset>

      </form>
    </div>
  );
}

export default App;
