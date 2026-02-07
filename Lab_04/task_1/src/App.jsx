import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
 
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");

    const [successMessage, setSuccessMessage] = useState("");

    const isValidEmail = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        let isValid = true;

        setNameError("");
        setEmailError("");
        setAgeError("");
        setSuccessMessage("");
        if(!name.trim()){
            setNameError("type name");
            isValid=false;
        }
        else if (name.length <2){
            setNameError("give more than 2 symbols")
            isValid = false
        }

        if(!email.trim()){
            setEmailError("type email");
            isValid = false;
        }
        else if(!isValidEmail(email)){
            setEmailError("invalid mail");
            isValid = false;
        }

        if (!age) {
            setAgeError("Age is required");
            isValid = false;
        }
            else if (Number(age) < 18) {
            setAgeError("You must be at least 18 years old");
            isValid = false;
        }

        if (isValid){
            setSuccessMessage("KAAAAIF");

            setName("");
            setEmail("");
            setAge("");
        }
    };
  return (
    <div className="form-container">
      <h2 className="form-title">User Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-field">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          {nameError && (
            <p className="error-message">{nameError}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          {emailError && (
            <p className="error-message">{emailError}</p>
          )}
        </div>

        {/* Age */}
        <div className="form-field">
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-input"
          />
          {ageError && (
            <p className="error-message">{ageError}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="submit-button"
        >
          Submit
        </button>

        {/* Success message */}
        {successMessage && (
          <p className="success-message">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}


