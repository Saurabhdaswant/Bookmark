import "../Sass/App.scss";
import "../Sass/Footer.scss";
import { useState } from "react";
import validator from "validator";
import FooterLinks from "./FooterLinks";

function Footer() {
  const [state, setstate] = useState(" ");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state || state === " " || !validator.isEmail(state)) {
      setError(true);
      console.log("its truee");
    } else {
      setError(false);
      console.log(state);
      console.log("its flase now");
    }
  };

  const errorMessage = "Whoops, make sure its an email";

  return (
    <>
      <div className="Footer">
        <div className="Footer__Primary">
          <p>35,000+ already joined</p>
          <h1>Stay up-to-date with what we're doing</h1>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                onChange={(e) => setstate(e.target.value)}
                type="text"
                id="email"
                placeholder="Enter email"
                className={error && `error`}
              />
              {error && <p className="errorMessage"> {errorMessage} </p>}
            </div>
            <button type="submit" id="submit" className="btn btn--softRed">
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <FooterLinks />
    </>
  );
}

export default Footer;

//!     Understand the Problem 💯
//      Receive an error message when the newsletter form is submitted if:
//      The input field is empty
//      The email address is not formatted correctly

// todo Divide and Conquer 🏆
//   1. Form Handling
//   2. Controlled Inputs
//   3. Conditional rendering
//   4. Alert component

//*     Research as much as you can 🔍
//   1. JS Validation For Empty Fields : https://www.w3schools.com/howto/howto_js_validation_empty_input.asp
//   2. How to validate an email in ReactJS ? : https://www.geeksforgeeks.org/how-to-validate-an-email-in-reactjs/

//?     Write Pseudo code ✅
//      first handle submission of the form
//      control input using state hooks
//      if state value is empty after submiting form then render the Alert Component
//      Alert C : z-index : -10 , Change Absolute Position , Animation : 0.5s
