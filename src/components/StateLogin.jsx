import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailInvalid,
  } = useInput("", (value) => isEmail(value) || isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordInvalid,
  } = useInput("", (value) => hasMinLength(value, 8));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailInvalid || passwordInvalid) {
      return;
    }
    console.log("Form submitted!", emailValue, passwordValue);
    // Here you would typically send the data to your server
    // and handle the response accordingly.
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailInvalid ? "Email is not valid" : ""}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={
            passwordInvalid
              ? "Password must be between 8 and 20 characters"
              : ""
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
