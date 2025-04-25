import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // CSRF Cookie from Laravel Sanctum
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      // Login request
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email: email.trim(),
          password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          withCredentials: true,
        }
      );

      // Save token and user
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirect
      const redirectPath =
        response.data.user.role === "admin" ? "/Dashboard" : "/Home";
      navigate(redirectPath);
    } catch (err) {
      if (err.response?.status === 422) {
        const errors = err.response.data.errors;
        setError(
          Object.values(errors).flat().join(" ") ||
            "Invalid email or password format"
        );
      } else {
        setError(
          err.response?.data?.message || "Login failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <center>
      <div
        style={{ display: "flex", gap: "50px", padding: "25px" }}
        className="commentForm"
      >
        <div>
          <h1 className="commentFormHeading">Be able to comment</h1>
          <h1
            className="commentFormHeading"
            style={{ margin: "0px", textAlign: "left" }}
          >
            Be heard
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="formForComment">
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
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="formForCommentInput"
              style={{ width: "fit-content" }}
              name="email"
              value={email}
              required
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
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="formForCommentInput"
              name="password"
              value={password}
              required
            />
            <br />
            <br />
            <button
              style={{
                borderRadius: "10px",
                padding: "8px",
                border: "none",
                width: "80px",
                cursor: "pointer",
              }}
              type="submit"
              disabled={loading}
            >
              {loading ? "..." : "Log in"}
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
