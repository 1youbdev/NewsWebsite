import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VerifyEmailPrompt() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/email/verify/12/d77017e2debbcd9b7bae1f4e8d61818285d8648e", // Update with dynamic email verification URL
        {},
        {
          withCredentials: true,
        }
      );

      // If email verification is successful
      if (response.data.message === "Email successfully verified.") {
        // Redirect to login page
        navigate("/Login");
      } else {
        alert(response.data.message || "Verification failed.");
      }
    } catch (error) {
      setError("Failed to verify email.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, background: "#ffeeba", borderRadius: 10 }}>
      <p>Your email isn't verified yet. Please verify it.</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleVerify} disabled={loading}>
        {loading ? "Verifying..." : "Verify Email"}
      </button>
    </div>
  );
}
