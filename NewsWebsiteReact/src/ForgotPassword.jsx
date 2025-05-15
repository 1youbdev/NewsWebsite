import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sendResetEmail } from "./services/api"; // Import API function

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setLoading(true); // Show loading state

    try {
      const response = await sendResetEmail(email);
      setMessage(response.data?.message || "Lien envoyé.");
    } catch (error) {
      console.error("Error response:", error.response?.data); // Log the error

      // Display the correct error message from backend
      setMessage(
        error.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <center>
      <div style={{ padding: "50px", width: "300px" }} className="commentForm">
        <h1 className="commentFormHeading">Mot de passe oublié?</h1>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            margin: "0",
            alignItems: "center",
          }}
        >
          <form className="form" onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              className="formForCommentInput"
              value={email}
              style={{ width: "250px" }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="commentFormHeading "
              style={{ width: "150px", marginTop: "30px", height: "40px", padding:"10px" }}
              disabled={loading}
            >
              {loading ? <p>Processing...</p> : <p>Recevoir le lien</p>}
            </button>

            {message && (
              <h3
              className="textColor"
              >
                {message}
              </h3>
            )}
          </form>
          <Link
            to="/login"
            style={{ textDecoration: "none", textAlign: "left" }}
            className="commentFormHeading"
          >
            Remembered your password? Log in
          </Link>
        </div>
      </div>
    </center>
  );
}
