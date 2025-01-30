import './App.css';
import { useState } from 'react'

function App() {

  // const [firstName, setfirstName] = useState('');
  // const [lastName, setlastName] = useState('');

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event) {
  //   // console.log(event.target); //This prints the input element
  //   // console.log("Printing first name")
  //   // console.log(event.target.value);
  //   setfirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("Printing last name")
  //   // console.log(event.target.value)
  //   setlastName(event.target.value);
  // }

  //<--------------------------------To handle multiple stateUpdation using one useSate--------------------------->

  const [formData, setformData] = useState({ firstname: "", lastname: "", email: "", comments: "", isVisible: "", mode: "", favCar: "" })

  console.log(formData);

  //<-----------------------------------------------1st way------------------------------------------------------>
  // function changeHandler(event) {
  //   setformData((prevformData) => {
  //     return {
  //       ...prevformData,
  //       [event.target.name]: event.target.value //This is the syntax to use the property in forms
  //     }

  //   });
  // }

  //<-----------------------------------------------2nd way------------------------------------------------------>
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prevformData) => {

      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value //this is not hte checked or value of the input field. This is actually event.target.checked and event.target.value.
      }

    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("printing the final data");
    console.log(formData);
  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="first name "
          // onChange={changeFirstNameHandler}
          onChange={changeHandler}
          name='firstname'
          //Controlled states
          value={formData.firstname}
        />

        <br></br>
        <br></br>

        <input
          type="text"
          placeholder="last name"
          // onChange={changeLastNameHandler}
          onChange={changeHandler}
          name='lastname'
          value={formData.lastname}
        />

        <br></br>
        <br></br>

        <input
          type="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br></br>
        <br></br>

        <textarea
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br></br>
        <br></br>

        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible ?</label>

        <br></br>
        <br></br>

        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor='Online-Mode'>Online Mode</label>


        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode === "Offline-Mode"}

        />
        <label htmlFor='Offline-Mode'>Offline Mode</label>

        <br></br>
        <br></br>

        <label htmlFor='favCar'>Tell me your favourite car </label>
        <select
          name="favCar"
          id="favCar"
          onChange={changeHandler}
          value={formData.favCar}

        >
          <option value="Scorpio ">Scorpio</option>
          <option value="Harrier">Harrier</option>
          <option value="Curvv">Curvv</option>

        </select>

        <br></br>
        <br></br>

        {/* <input type='submit' value="submit" /> */}
        <button>Submit</button>



      </form>
    </div>
  );
}

export default App;


