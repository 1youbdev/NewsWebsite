import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Add_article() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    text: '',
    pdf: null,
    image: null // ✅ Added image
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.text.trim()) {
      newErrors.text = 'Text is required';
    }
    if (formData.pdf && formData.pdf.type !== 'application/pdf') {
      newErrors.pdf = 'Only PDF files are allowed';
    }
    if (formData.image && !formData.image.type.startsWith('image/')) {
      newErrors.image = 'Only image files are allowed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Article submitted:', formData);
      setSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Article submitted successfully!</h1>
        <p>
          You can now <Link to="/articles" style={{ color: "#00f" }}>view all articles</Link>.
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
            <label className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >Title</label><br />
            <input
              type="text"
              className="formForCommentInput"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              style={{ width: "93%" }}
            />
            {errors.title && <span style={{ color: "red", fontSize: "12px" }}>{errors.title}</span>}
            <br /><br />

            {/* Category */}
            <label className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >Category</label><br />
            <select
              className="formForCommentInput"
              name="categories"
              value={formData.category}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <option value="">Select a category</option>
              <option value="politics">Politics</option>
              <option value="society">Society</option>
              <option value="economy">Economy</option>
              <option value="mena">MENA</option>
              <option value="international">International</option>
              <option value="media">Media</option>
              <option value="culture">Culture</option>
              <option value="sports">Sports</option>
            </select>
            {errors.category && <span style={{ color: "red", fontSize: "12px" }}>{errors.category}</span>}
            <br /><br />

            {/* Text */}
            <label className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >Text</label><br />
            <textarea
              className="formForCommentInput"
              name="content"
              value={formData.text}
              onChange={handleChange}
              placeholder="Write you document here"
              rows="4"
              style={{ width: "93%" }}
            />
            {errors.text && <span style={{ color: "red", fontSize: "12px" }}>{errors.text}</span>}
            <br /><br />

            {/* PDF File Upload */}
            <label className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >Upload PDF</label><br />
            <input
              type="file"
              className="formForCommentInput"
              name="pdf"
              onChange={handleChange}
              style={{ width: "93%" }}
            />
            {errors.pdf && <span style={{ color: "red", fontSize: "12px" }}>{errors.pdf}</span>}
            <br /><br />

            {/* Image Upload */}
            <label className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >Upload Image</label><br />
            <input
              type="file"
              className="formForCommentInput"
              name="image"
              onChange={handleChange}
              style={{ width: "93%" }}
            />
            {errors.image && <span style={{ color: "red", fontSize: "12px" }}>{errors.image}</span>}
            <br /><br />

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
};
