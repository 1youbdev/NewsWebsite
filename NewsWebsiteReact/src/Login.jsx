import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // First, get the CSRF cookie
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      // Then, make the login request
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      localStorage.setItem("token", response.data.token);

      // Optional: you can store user info if the backend returns it
      // localStorage.setItem("user", JSON.stringify(response.data.user));

      // Navigate based on role (assuming role is included in the response)
      if (response.data.role === "admin") {
        navigate("/Home");
      } else {
        navigate("/Article");
      }
    } catch (err) {
      setError("Email ou mot de passe incorrect");
      console.error(err);
    }
  };

  return (
    <center>
      <div
        style={{
          display: "flex",
          gap: "50px",
          padding: "25px",
        }}
        className="commentForm"
      >
        <div>
          <h1 className="commentFormHeading">Be able to comment</h1>
          <h1
            className="commentFormHeading"
            style={{ margin: "0px", textAlign: "left" }}
          >
            {" "}
            Be heard{" "}
          </h1>
        </div>
        <div>
          <form action="" className="formForComment" onSubmit={handleLogin}>
            {error && (
              <div
                style={{
                  color: "red",
                  marginBottom: "10px",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                {error}
              </div>
            )}
            <span
              className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >
              Email
            </span>
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="formForCommentInput"
              style={{ width: "fit-content" }}
              name="email"
              value={email}
            />
            <br />
            <br />
            <span
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >
              Password
            </span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="formForCommentInput"
              name="password"
              value={password}
            />{" "}
            <br /> <br />
            <button
              style={{
                borderRadius: "10px",
                padding: "8px",
                border: "none",
                width: "80px",
                cursor: "pointer",
              }}
              type="submit"
            >
              Log in
            </button>
          </form>
          <br />
          <div
            style={{
              display: "flex",
              gap: "1px",
              flexDirection: "column",
              margin: "0",
            }}
          >
            <Link
              to="/ForgotPassword"
              style={{
                textDecoration: "none",
                textAlign: "left",
                display: "block",
              }}
              className="commentFormHeading"
            >
              Forgotten password?
            </Link>
            <Link
              to="/Register"
              style={{ textDecoration: "none", textAlign: "left" }}
              className="commentFormHeading"
            >
              New to our portal? Register now
            </Link>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Login;
