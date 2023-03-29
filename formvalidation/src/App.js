import './App.css';
import FormInput from './components/formInput';
import { useRef, useState } from 'react';

function App() {
  //Causes reRender so
  // const [userName, setUserName] = useState("")
  //We use useRef()
  // const userNameRef = useRef();

  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phone: "",
    createPassword: "",
    reTypePassword: "",
    Gender: "",
    Country: ""
  })

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "*First name should be more than 3 letters and shouldnt include special character",
      label: "First Name",
      // this are the prewritten attribute
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true

    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder:"Last Name",
      errorMessage: "*Last name should be more than 3 letters and shouldnt include special character",
      label: "Last Name",
      required: true
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder:"Email",
      errorMessage: "*It should be valid email address",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      placeholder:"Phone",
      errorMessage: "*Enter atlest 10 number",
      label: "Phone",
      required: true
    },
    {
      id: 5,
      name: "createPassword",
      type: "password",
      placeholder:"Create Password",
      errorMessage: "*Password should contain aleast 8-10 number",
      label: "Create Password",
      pattern: "^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$",
      required: true
    },
    {
      id: 6,
      name: "reTypePassword",
      type: "password",
      placeholder:"Retype password",
      errorMessage: "*Password does not match",
      label: "Retype password",
      pattern: values.createPassword,
      required: true
    },
    {
      id: 7,
      name: "Gender",
      type: "radio",
      placeholder:"Gender",
      errorMessage: "",
      label: "Gender"
    },
    {
      id: 8,
      name: "Country",
      type: "text",
      placeholder:"Country",
      errorMessage: "*Select a country",
      label: "Country",
      required: true
    }
  ]

  const handleSubmit = (e) =>{
    //**We should try to prevent the page from reloading */
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  const onChange = (e) => {
    // console.log(e.target.value)
    //e.tr.name: from input and e.tr.value is from the value we enter inside the input
    setValues({...values, [e.target.name] : e.target.value});
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
      <h1>Register</h1>

        {inputs.map((input) => (
          <FormInput 
            key={input.id} 
            {...input}
            value = {values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;