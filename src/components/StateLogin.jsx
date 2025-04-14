import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailInvalid = didEdit.email && !values.email.includes("@");
  const passwordInvalid =
    didEdit.password &&
    (values.password.length < 8 || values.password.length > 20);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted:", values);
  }

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }

  function handleValuesChange(identifier, event) {
    setValues((preValues) => ({
      ...preValues,
      [identifier]: event.target.value,
    }));
    setDidEdit((preEdit) => ({
      ...preEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((preEdit) => ({
      ...preEdit,
      [identifier]: true,
    }));
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
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleValuesChange("email", event)}
          value={values.email}
          error={emailInvalid ? "Email is not valid" : ""}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleValuesChange("passsword", event)}
          value={values.password}
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
