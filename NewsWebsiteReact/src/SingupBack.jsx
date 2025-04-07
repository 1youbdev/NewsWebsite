import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SingupBack() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup submitted:", formData);
      setSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Signup successful!</h1>
        <p>
          You can now <Link to="/login" style={{ color: "#00f" }}>log in</Link>.
        </p>
      </div>
    );
  }

  return (
    <center>
      <div
        style={{
          display: "flex",
          gap: "50px",
          padding: "25px",
          width: "50%",
          marginTop: "80px"
        }}
        className="commentForm"
      >
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p
            style={{ margin: "0", fontSize: "64px", lineHeight: "1" }}
            className="commentFormHeading"
          >
            Welcome 
            
            Back 
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} 
          style={{width : "100%"}}
          className="formForComment">
            {/* Username */}
            <label
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
              Username
            </label><br />
            <input
              type="text"
              className="formForCommentInput"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: "93%" }}
            />
            {errors.username && (
              <span style={{ color: "red", fontSize: "12px" }}>{errors.username}</span>
            )}
            <br /><br />

            {/* Password */}
            <label
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
              Password
            </label><br />
            <input
              type="password"
              className="formForCommentInput"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "93%" }}
            />
            {errors.password && (
              <span style={{ color: "red", fontSize: "12px" }}>{errors.password}</span>
            )}
            <br /><br />

            {/* Submit button */}
            <button
              type="submit"
              className="RegisterButton"
              style={{
                fontFamily: "Oswald",
                fontWeight: "200",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "5px",
                border: "solid 1px black",
                cursor: "pointer",
                width: "70%",
              }}
            >
              Sign Up
            </button>
            <br />

          </form>
        </div>
      </div>
    </center>
  );
}
