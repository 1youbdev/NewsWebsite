import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function VerifyEmailPrompt() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id, token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/email/verify/${id}/${token}`,
          {},
          { withCredentials: true }
        );

        if (response.data.message === "Email successfully verified.") {
          console.log("Redirecting to /login..."); // Debug
          navigate("/login", { replace: true });
        } else {
          setError(response.data.message || "Verification failed.");
        }
      } catch (error) {
        setError("Failed to verify email.");
        console.error(error);
      }
    };

    verifyEmail();
  }, [id, token, navigate]);

  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return <div>Verifying email...</div>;
}
