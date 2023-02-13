const firstNameValidator = (fName) => {
  if (!fName) {
    return "First Name cannot be empty";
  }
  return "";
};

const lastNameValidator = (lName) => {
  if (!lName) {
    return "Last Name cannot be empty";
  }
  return "";
};

const emailValidator = (email) => {
  if (!email) {
    return "Email cannot be empty";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Looks like this is not an email";
  }
  return "";
};

const passwordValidator = (password) => {
  if (!password) {
    return "Password cannot be empty";
  } else if (password.length < 8) {
    return "Password must have a minimum 8 characters";
  }
  return "";
};

export function validate(name, value) {
  const fNameInput = document.querySelector("#fNameInput");
  const lNameInput = document.querySelector("#lNameInput");
  const emailInput = document.querySelector("#emailInput");
  const passwordInput = document.querySelector("#passwordInput");

  const fNameError = document.querySelector("#fNameError");
  const lNameError = document.querySelector("#lNameError");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");

  const fNameSpan = document.querySelector("#fName");
  const lNameSpan = document.querySelector("#lName");
  const emailSpan = document.querySelector("#email");
  const passwordSpan = document.querySelector("#password");

  if (name === "fName") {
    fNameSpan.innerText = firstNameValidator(value);
    if (!fNameSpan.innerText == "") {
      fNameInput.classList.add("invalid");
      fNameError.classList.remove("hide");
    } else {
      fNameInput.classList.remove("invalid");
      fNameError.classList.add("hide");
    }
  } else if (name === "lName") {
    lNameSpan.innerText = lastNameValidator(value);
    if (!lNameSpan.innerText == "") {
      lNameInput.classList.add("invalid");
      lNameError.classList.remove("hide");
    } else {
      lNameInput.classList.remove("invalid");
      lNameError.classList.add("hide");
    }
  } else if (name === "email") {
    emailSpan.innerText = emailValidator(value);
    if (!emailSpan.innerText == "") {
      emailInput.classList.add("invalid");
      emailError.classList.remove("hide");
    } else {
      emailInput.classList.remove("invalid");
      emailError.classList.add("hide");
    }
  } else if (name === "password") {
    passwordSpan.innerText = passwordValidator(value);
    if (!passwordSpan.innerText == "") {
      passwordInput.classList.add("invalid");
      passwordError.classList.remove("hide");
    } else {
      passwordInput.classList.remove("invalid");
      passwordError.classList.add("hide");
    }
  }
}
