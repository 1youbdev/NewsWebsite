import React, { useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email || !token) {
      setMessage("Lien invalide ou expiré !");
      return;
    }

    if (password !== passwordConfirmation) {
      setMessage("Les mots de passe ne correspondent pas !");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          token,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Mot de passe réinitialisé avec succès !");
        setPassword("");
        setPasswordConfirmation("");
      } else {
        setMessage(data.message || data.error || "Erreur inconnue.");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      setMessage("Erreur réseau. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <center>
      <div style={{ padding: "50px", width: "300px" }} className="commentForm">
        <h1 className="commentFormHeading">Nouveau mot de passe</h1>
        <form
          className="form"
          onSubmit={handleReset}
          style={{
            display: "flex",
            gap: "25px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            className="formForCommentInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "250px" }}
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            className="formForCommentInput"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            style={{ width: "250px" }}
          />
          <button
            type="submit"
            className="SubscribeButton"
            style={{
              width: "150px",
              marginTop: "10px",
              height: "40px",
              padding: "10px",
            }}
            disabled={loading}
          >
            {loading ? "Réinitialisation..." : "Réinitialiser"}
          </button>
          {message && <h3 className="textColor">{message}</h3>}
        </form>
        <br />    
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            textAlign: "left",
            marginTop: "20px",
          }}
          className="commentFormHeading"
        >
          Retour à la connexion
        </Link>
      </div>
    </center>
  );
};

export default ResetPassword;
