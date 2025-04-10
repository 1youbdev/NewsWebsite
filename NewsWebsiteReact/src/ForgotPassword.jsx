import React from "react";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
  return (
    <center>
      <div style={{ padding: "25px", width: "300px" }} className="commentForm">
        <form>
          <span
            className="commentFormHeading"
            style={{
              position: "relative",
              fontSize: "26px",
              textAlign: "left",
              display: "block",
              width: "100%",
              color: "white",
            }}
          >
            Email
          </span>
          <br />
          <input
            type="text"
            className="formForCommentInput"
            name="email"
            style={{ width: "280px" }}
          />
          <br />
          <br />
          <br />
        </form>
        <br />
        <div
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            margin: "0",
            alignItems: "center",
          }}
        >
          <button
            href="#"
            style={{
              textDecoration: "none",
              padding: "8px",
              borderRadius: "10px",
              border: "none",
              width: "fit-content",
            }}
            className="commentFormHeading"
          >
            <span style={{ color: "black" }}>Reset Password</span>
          </button>
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
