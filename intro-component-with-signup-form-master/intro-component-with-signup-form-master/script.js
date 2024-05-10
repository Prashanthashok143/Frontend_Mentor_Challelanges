const Firstname = document.getElementById("Firstname");
const Lastname = document.getElementById("Lastname");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const Form = document.getElementById("Form");
const eyeChanger = document.getElementById("eyeChanger");
const ThankYou = document.getElementById("ThankYou");
const FormBOX = document.getElementById("FormBOX");

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputsAreValid = checkInputs();

  if (!inputsAreValid) {
    clearInputs();
  } else {
    console.log("Hello");
  }
});

const clearInputs = () => {
  const inputs = document.querySelectorAll(
    "input[type=text], input[type=number], input[type=password] "
  );
  inputs.forEach(function (input) {
    input.value = "";
  });

  inputs[0].focus();
};

const setError = (input, message) => {
  const parentElement = input.parentElement;
  const small = parentElement.querySelector("small");
  parentElement.className = "formcontrol error";
  small.innerText = message;
  small.style.display = "inline";
  const i = parentElement.querySelector(".fa-exclamation-circle");
  i.style.display = "inline-block";
  const inputs = Form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      input.style.borderColor = "red";
    });
  });
};

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "formcontrol success";
  isValid = true;
};

const setEmail = (Email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    Email
  );
};

const setPassword = (Password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
    Password
  );
};

const removeError = (input) => {
  const parentElement = input.parentElement;
  const small = parentElement.querySelector("small");
  small.style.display = "none";
  const i = parentElement.querySelector(".fa-exclamation-circle");
  i.style.display = "none";

  const inputs = Form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      input.style.borderColor = "green";
    });
  });
};

let isValid = true;

const checkInputs = () => {
  const FirstnameValue = Firstname.value.trim();
  const LastnameValue = Lastname.value.trim();
  const EmailValue = Email.value.trim();
  const PasswordValue = Password.value.trim();

  if (FirstnameValue === "") {
    setError(Firstname, "First Name cannot be empty");
    isValid = false;
  } else {
    setSuccess(Firstname);
    removeError(Firstname);
  }

  if (LastnameValue === "") {
    setError(Lastname, "Last Name cannot be empty");
    isValid = false;
  } else {
    setSuccess(Lastname);
  }

  if (EmailValue === "") {
    setError(Email, "Email Address cannot be empty");
    isValid = false;
  } else if (!setEmail(EmailValue)) {
    setError(Email, "Looks like this is not an Email");
    isValid = false;
  } else {
    setSuccess(Email);
  }

  if (PasswordValue === "") {
    setError(Password, "Password cannot be empty");
    isValid = false;
  } else if (!setPassword(PasswordValue)) {
    setError(Password, "Password is not Valid");
    isValid = false;
  } else {
    setSuccess(Password);
  }

  const inputs = Form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      removeError(input);
    });
  });

  if (isValid) {
    ThankYou.style.display = "flex";
    FormBOX.style.display = "none";
    const FLname = document.createElement("h3");
    FLname.innerText = `${FirstnameValue} ${LastnameValue}💓😊`;
    FLname.className="element";
    ThankYou.appendChild(FLname);
  }
};
let intially = false;
eyeChanger.addEventListener("click", function () {
  if (!intially) {
    Password.type = "text";
    eyeChanger.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
    </svg>`;
  } else {
    eyeChanger.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" id="bieye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
    </svg>`;
    Password.type = "password";
  }
  intially = !intially;
});
