import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the email address
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Send an email to the user with a verification link
    const emailData = {
      email: email,
    };
    fetch("/api/send-email-verification", {
      method: "POST",
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          alert(
            "An email has been sent to your inbox. Please check your inbox and click on the verification link to confirm your account."
          );
        } else {
          alert(
            "An error occurred while sending the email. Please try again later."
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <br></br>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <br></br>
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
