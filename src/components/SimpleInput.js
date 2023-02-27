import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTocuhed, setNameIsTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const enteredNameIsValid = name.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && nameIsTocuhed;

  const enteredEmailIsValid = email.trim() !== "";
  const emailInputIsValid = !enteredEmailIsValid && emailIsTouched;
  
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameOnChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameOnBlurHandler = () => {
    setNameIsTouched(true);
  };


  const emailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const emailOnBlurHandler = () => {
    setEmailIsTouched(true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!name && !email){
        return;
    }
    
    console.log(name, email);
    setName("");
    setNameIsTouched(false);
    setEmail("");
    setEmailIsTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasess = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameOnChangeHandler}
          onBlur={nameOnBlurHandler}
          value={name}
        />
        {nameInputIsValid && (
          <p className="error-text">Name shold not be empty</p>
        )}
      </div>
      <div className={emailInputClasess}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailOnChangeHandler}
          onBlur={emailOnBlurHandler}
          value={email}
        />
        {emailInputIsValid && (
          <p className="error-text">Email shold not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
