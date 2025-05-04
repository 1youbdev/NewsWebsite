import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import instance from "./axios";

export default function Add_article() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    text: "",
    pdf: null,
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.text.trim()) newErrors.text = "Text is required";
    if (formData.pdf && formData.pdf.type !== "application/pdf")
      newErrors.pdf = "Only PDF files are allowed";
    if (formData.image && !formData.image.type.startsWith("image/"))
      newErrors.image = "Only image files are allowed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user?.id);
    try {
      const payload = new FormData();
      payload.append("idUser", user?.id);
      payload.append("title", formData.title);
      payload.append("idCategory", formData.category);
      payload.append("content", formData.text);
      if (formData.pdf) payload.append("file", formData.pdf);
      if (formData.image) payload.append("image", formData.image);

      await instance.post("/api/articles", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSubmitted(true);
    } catch (error) {
      console.error(
        "Error submitting article:",
        error.response?.data || error.message
      );
      setErrors({ general: "Failed to submit article. Please try again." });
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Article submitted successfully!</h1>
        <p>
          You can now{" "}
          <Link to="/articles" style={{ color: "#00f" }}>
            view all articles
          </Link>
          .
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
            width: "50%",
          }}
        >
          <p
            style={{ margin: "0", fontSize: "64px", lineHeight: "1" }}
            className="commentFormHeading"
          >
            We Value Transparency and Credibility .
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="formForComment">
            {/* Title */}
            <label className="commentFormHeading" style={labelStyle}>
              Title
            </label>
            <br />
            <input
              type="text"
              className="formForCommentInput"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              style={{ width: "93%" }}
            />
            {errors.title && <span style={errorStyle}>{errors.title}</span>}
            <br />
            <br />

            {/* Category */}
            <label className="commentFormHeading" style={labelStyle}>
              Category
            </label>
            <br />
            <select
              className="formForCommentInput"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <option value="">Select a category</option>
              <option value="1">Politics</option>
              <option value="2">Society</option>
              <option value="3">Economy</option>
              <option value="4">MENA</option>
              <option value="5">International</option>
              <option value="6">Media</option>
              <option value="7">Culture</option>
              <option value="8">Sports</option>
            </select>
            {errors.category && (
              <span style={errorStyle}>{errors.category}</span>
            )}
            <br />
            <br />

            {/* Text */}
            <label className="commentFormHeading" style={labelStyle}>
              Text
            </label>
            <br />
            <textarea
              className="formForCommentInput"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Write your document here"
              rows="4"
              style={{ width: "93%" }}
            />
            {errors.text && <span style={errorStyle}>{errors.text}</span>}
            <br />
            <br />

            {/* PDF Upload */}
            <label className="commentFormHeading" style={labelStyle}>
              Upload PDF
            </label>
            <br />
            <input
              type="file"
              className="formForCommentInput"
              name="pdf"
              onChange={handleChange}
              style={{ width: "93%" }}
            />
            {errors.pdf && <span style={errorStyle}>{errors.pdf}</span>}
            <br />
            <br />

            {/* Image Upload */}
            <label className="commentFormHeading" style={labelStyle}>
              Upload Image
            </label>
            <br />
            <input
              type="file"
              className="formForCommentInput"
              name="image"
              onChange={handleChange}
              style={{ width: "93%" }}
            />
            {errors.image && <span style={errorStyle}>{errors.image}</span>}
            <br />
            <br />

            {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}

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
              Submit Article
            </button>
            <br />
          </form>
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

const errorStyle = {
  color: "red",
  fontSize: "12px",
};
