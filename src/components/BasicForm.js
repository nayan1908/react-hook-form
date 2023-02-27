import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div
          className={`${
            firstNameHasError ? "form-control invalid" : "form-control"
          }`}
        >
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && (
            <p className="error-text">First Name should not be empty.</p>
          )}
        </div>
        <div
          className={`${
            lastNameHasError ? "form-control invalid" : "form-control"
          }`}
        >
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name should not be empty.</p>
          )}
        </div>
      </div>
      <div
        className={`${emailHasError ? "form-control invalid" : "form-control"}`}
      >
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Please enter valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
