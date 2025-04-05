import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Registre_author  (){
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    rePassword: '',
    phoneNumber: '',
    description: ''
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.rePassword) {
      newErrors.rePassword = 'Passwords do not match';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission triggered"); // Ajoute ça
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };
  

  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        <h1>Registration successful!</h1>
        <p>
          You can now <Link to="/login" style={{ color: "#00f" }}>login</Link>.
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
            Join 
          </p>
          <br />
          <p
            style={{ margin: "0", fontSize: "36px", lineHeight: "0.1" }}
            className="commentFormHeading"
          >
            our community today!
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="formForComment">
            {/* Full Name */}
            <label className="commentFormHeading"
                                      style={{
                                        position: "relative",
                                        fontSize: "16px",
                                        textAlign: "left",
                                        display: "block",
                                        width: "100%",
                                        color: "white",
                                      }}
            >Full Name</label><br />
            <input
              type="text"
              className="formForCommentInput"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span style={{ color: "red", fontSize: "12px" }}>{errors.fullName}</span>}
            <br /><br />

            {/* Email */}
            <label className="commentFormHeading"
                                      style={{
                                        position: "relative",
                                        fontSize: "16px",
                                        textAlign: "left",
                                        display: "block",
                                        width: "100%",
                                        color: "white",
                                      }}
            >Email</label><br />
            <input
              type="email"
              className="formForCommentInput"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
            <br /><br />

            {/* Password */}
            <label className="commentFormHeading"
                                      style={{
                                        position: "relative",
                                        fontSize: "16px",
                                        textAlign: "left",
                                        display: "block",
                                        width: "100%",
                                        color: "white",
                                      }}
            >Password</label><br />
            <input
              type="password"
              placeholder="8 characters min."
              className="formForCommentInput"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span style={{ color: "red", fontSize: "12px" }}>{errors.password}</span>}
            <br /><br />

            {/* Re-enter Password */}
            <label className="commentFormHeading"
                                      style={{
                                        position: "relative",
                                        fontSize: "16px",
                                        textAlign: "left",
                                        display: "block",
                                        width: "100%",
                                        color: "white",
                                      }}
            >Re-enter Password</label><br />
            <input
              type="password"
              placeholder="8 characters min."
              className="formForCommentInput"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
            />
            {errors.rePassword && <span style={{ color: "red", fontSize: "12px" }}>{errors.rePassword}</span>}
            <br /><br />

            {/* Phone Number */}
            <label className="commentFormHeading"
                                      style={{
                                        position: "relative",
                                        fontSize: "16px",
                                        textAlign: "left",
                                        display: "block",
                                        width: "100%",
                                        color: "white",
                                      }}
            >Phone Number</label><br />
            <input
              type="tel"
              className="formForCommentInput"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span style={{ color: "red", fontSize: "12px" }}>{errors.phoneNumber}</span>}
            <br /><br />

            {/* Description */}
            <label className="commentFormHeading"
                                      style={{
                                        position: "relative",
                                        fontSize: "16px",
                                        textAlign: "left",
                                        display: "block",
                                        width: "100%",
                                        color: "white",
                                      }}
            >Description</label><br />
            <textarea
              className="formForCommentInput"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
            <br /><br />
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Add_article"
            >
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
                width: "50%",
              }}
            >
              Register
            </button>
            </Link>
            <br />

              Already have an account?
            
          </form>
        </div>
      </div>
    </center>
  );
};


