import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData,
        { withCredentials: true }
      );

      setMessage(response.data.message);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Something went wrong");
      } else {
        setError("Registration failed.");
      }
    }
  };

  return (
    <center>
      <div
        style={{
          display: "flex",
          gap: "50px",
          padding: "25px",
          width: "fit-content",
        }}
        className="commentForm"
      >
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "50px",
          }}
        >
          <p
            style={{ margin: "0", fontSize: "64px", lineHeight: "1" }}
            className="commentFormHeading"
          >
            Register
          </p>{" "}
          <br />
          <p
            style={{ margin: "0", fontSize: "36px", lineHeight: "0.1" }}
            className="commentFormHeading"
          >
            On our portal
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="formForComment">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p style={{ color: "green" }}>{message}</p>}

            <label className="commentFormHeading" style={labelStyle}>
              Name
            </label>
            <input
              type="text"
              name="name"
              className="formForCommentInput"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            <label className="commentFormHeading" style={labelStyle}>
              Email
            </label>
            <input
              type="email"
              name="email"
              className="formForCommentInput"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <label style={labelStyle}>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="formForCommentInput"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <br />
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              name="password"
              className="formForCommentInput"
              value={formData.password}
              onChange={handleChange}
              placeholder="8 characters min."
              required
            />
            <br />
            <label style={labelStyle}>Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              className="formForCommentInput"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
            <br />
            <button className="RegisterButton" style={buttonStyle}>
              Register
            </button>
            <br />
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              Already have an account?
            </Link>
          </form>
          <br />
        </div>
      </div>
    </center>
  );
}

const labelStyle = {
  position: "relative",
  fontSize: "16px",
  textAlign: "left",
  display: "block",
  width: "100%",
  color: "white",
};

const buttonStyle = {
  fontFamily: "Oswald",
  fontWeight: "200",
  backgroundColor: "white",
  borderRadius: "30px",
  padding: "5px",
  border: "solid 1px black",
  cursor: "pointer",
  width: "50%",
};
