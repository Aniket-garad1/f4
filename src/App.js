import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
   let [error, setError] = useState("");
   let [success, setSuccess] = useState("");

   const handleError = (err) => {
    setError(err)
   }

   const handleSuccess = (success) => {
      setSuccess(success);
   };

   return (
      <div className="form-container">
         <h1>Sign Up</h1>
         <Form setSuccessMsg={handleSuccess} setErrorMsg={handleError} />
         <div className="msg">
            {error &&
              <p className="error-msg">Error: {error}</p>
            }
            {
              success &&
              <p className="success-msg">Sucess: {success}</p>
            }
         </div>
      </div>
   );
}

export default App;
