// import {useInput} from '../hooks/use-input';

import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    reset: resetFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler
  } = useInput(isNotEmpty);
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    reset: resetLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    reset: resetEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormhandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitFormhandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameHasError && <p className='error-text'>First Name is invalid</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className='error-text'>Last Name is invalid</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className='error-text'>Email is invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
