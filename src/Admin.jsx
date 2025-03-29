// Dashboard.jsx
import React, { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/news", {
        title,
        summary,
        body,
        image,
      });
      console.log(response.data);
      // Reset form after submit
      setTitle("");
      setSummary("");
      setBody("");
      setImage("");
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  return (
    <center>
      <div
        className="dashboard"
        style={{
          backgroundColor: "#afafef",
          padding: "50px",
          margin: "20px",
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "fit-content",
        }}
      >
        <h1 style={{ fontStyle: "Oswald" }}>Add News Article</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <input
            className="dashboardInput"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="dashboardTextarea"
            placeholder="Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
          <textarea
            className="dashboardTextarea"
            placeholder="Full body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <input
            className="dashboardInput"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button className="dashboardButton" type="submit">
            Add Article
          </button>
        </form>
      </div>
    </center>
  );
}
