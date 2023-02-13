import { useState } from "react";
import { validate } from "./FormValidators";

function Form() {
  const [contactInfo, setContactInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
    validate(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setContactInfo({
      fName: "",
      lName: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="form-container">
      <div className="form-banner">
        <p>
          Try it free 7 days <span>then $20/mo. thereafter</span>
        </p>
      </div>
      <form name="contactForm" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            id="fNameInput"
            name="fName"
            onChange={handleChange}
            value={contactInfo.fName}
            type="text"
            placeholder="First Name"
          />
          <img
            id="fNameError"
            className="error-icon hide"
            src="https://sam-xander.github.io/signup-form-component/images/icon-error.svg"
            alt="error"
          />
        </div>
        <span id="fName"></span>
        <div className="input-container">
          <input
            id="lNameInput"
            name="lName"
            onChange={handleChange}
            value={contactInfo.lName}
            type="text"
            placeholder="Last Name"
          />
          <img
            id="lNameError"
            className="error-icon hide"
            src="https://sam-xander.github.io/signup-form-component/images/icon-error.svg"
            alt="error"
          />
        </div>
        <span id="lName"></span>
        <div className="input-container">
          <input
            id="emailInput"
            name="email"
            onChange={handleChange}
            value={contactInfo.email}
            type="email"
            placeholder="Email Address"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <img
            id="emailError"
            className="error-icon hide"
            src="https://sam-xander.github.io/signup-form-component/images/icon-error.svg"
            alt="error"
          />
        </div>
        <span id="email"></span>
        <div className="input-container">
          <input
            id="passwordInput"
            name="password"
            onChange={handleChange}
            value={contactInfo.password}
            type="password"
            placeholder="Password"
          />
          <img
            id="passwordError"
            className="error-icon hide"
            src="https://sam-xander.github.io/signup-form-component/images/icon-error.svg"
            alt="error"
          />
        </div>
        <span id="password"></span>
        <button>CLAIM YOUR FREE TRIAL</button>
        <p>
          By clicking the button you are agreeing to our
          <a>Terms and Services</a>
        </p>
      </form>
    </div>
  );
}

export default Form;
