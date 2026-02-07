import { useState } from "react";
export default function RegForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
 
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageArror, setAgeError] = useState("");

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
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">User Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Age */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {ageError && (
            <p className="text-red-500 text-sm mt-1">{ageError}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {/* Success message */}
        {successMessage && (
          <p className="text-green-600 text-center mt-4">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}