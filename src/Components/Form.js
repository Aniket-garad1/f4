import React, {useState} from "react";


const Form = ({setSuccessMsg, setErrorMsg}) => {

   let [formValues, setFormValues] = useState({name:"", email:"", password:"", confirmPass:""});

   function validate(event){
      event.preventDefault();
      if(formValues.name===""){
         {setErrorMsg("Name Cannot Be Empty!!!")}
         {setSuccessMsg("")}
         return
      }

      if (formValues.email === "") {
         {setErrorMsg("Email Cannot Be Empty!!!");}
         {
            setSuccessMsg("");
         }
         return;
      }

      if (formValues.password.length < 8) {
         {setErrorMsg("Password Must Contain Atleast 8 Characters!!!");}
         {
            setSuccessMsg("");
         }
         return;
      }

      if (formValues.confirmPass !== formValues.password) {
         {setErrorMsg("Passwords Doesn't Match!!!");}
         {
            setSuccessMsg("");
         }
         return;
      }

      {setSuccessMsg("Successfully Signed Up!!!");}
      {
         setErrorMsg("");
      }
   }

   return (
      <form className="App" onSubmit={validate}>
         <input
            onChange={(event) =>
               setFormValues({ ...formValues, name: event.target.value.trim() })
            }
            type="text"
            placeholder="Full Name"
         />
         <input
            onChange={(event) =>
               setFormValues({ ...formValues, email: event.target.value.trim() })
            }
            type="email"
            placeholder="Email"
         />
         <input
            onChange={(event) =>
               setFormValues({ ...formValues, password: event.target.value.trim() })
            }
            type="password"
            placeholder="Password"
         />
         <input
            onChange={(event) =>
               setFormValues({
                  ...formValues,
                  confirmPass: event.target.value.trim(),
               })
            }
            type="password"
            placeholder="Confirm Password"
         />
         <button type="submit">Sign Up</button>
      </form>
   );
};

export default Form;