import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <br></br>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          value={firstname}
          name="fname"
          onChange={(e) => setFirstname(e.target.value)}
          id="fname"
          placeholder="First Name"
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          value={lastname}
          name="lname"
          onChange={(e) => setLastname(e.target.value)}
          id="lname"
          placeholder="Last Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="phoneno">Phone no.</label>
        <input
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
          name="phoneno"
          id="phoneno"
          placeholder="phoneno"
        />
        <label htmlFor="password">Create Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="cpass">Confirm Password</label>
        <input
          value={cpass}
          onChange={(e) => setCpass(e.target.value)}
          name="cpass"
          id="cpass"
          placeholder="Confirm Password"
        />
        <br></br>
        <button type="submit" onClick={() => props.onFormSwitch("login")}>
          Sign Up
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
