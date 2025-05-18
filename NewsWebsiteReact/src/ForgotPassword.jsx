import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // You still need axios unless you're using fetch

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/forgot-password",
        {
          email: email,
        }
      );

      setMessage(response.data?.message || "Lien envoyé.");
    } catch (error) {
      console.error("Erreur:", error.response?.data);

      setMessage(
        error.response?.data?.error ||
          "Une erreur est survenue. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
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
              placeholder="Entrez votre email"
              className="formForCommentInput"
              value={email}
              style={{ width: "250px" }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="SubscribeButton"
              style={{
                width: "150px",
                marginTop: "30px",
                height: "40px",
                padding: "10px",
              }}
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Recevoir le lien"}
            </button>

            {message && <h3 className="textColor">{message}</h3>}
          </form>

          <Link
            to="/login"
            style={{ textDecoration: "none", textAlign: "left" }}
            className="commentFormHeading"
          >
            Mot de passe retrouvé ? Se connecter
          </Link>
        </div>
      </div>
    </center>
  );
}
