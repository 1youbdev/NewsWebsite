import React from "react";

import { Link } from "react-router-dom";
export default function Register() {
  return (
    <center>
      <div
        style={{
          display: "flex",
          gap: "50px",
          padding: "25px",
          width: "fit-content",
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
            Register
          </p>{" "}
          <br />
          <p
            style={{ margin: "0", fontSize: "36px", lineHeight: "0.1" }}
            className="commentFormHeading"
          >
            On our portal
          </p>
        </div>
        <div>
          <form action="" className="formForComment">
            <label
              className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >
              Email/Username
            </label>
            <br />
            <input type="text" className="formForCommentInput" />
            <br />
            <br />
            <label
              // className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >
              Type Password
            </label>
            <br />
            <input
              type="password"
              placeholder="8 characters min."
              className="formForCommentInput"
            />
            <br /> <br />
            <label
              className="commentFormHeading"
              style={{
                position: "relative",
                fontSize: "16px",
                textAlign: "left",
                display: "block",
                width: "100%",
                color: "white",
              }}
            >
              Re-Type your password
            </label>
            <br />
            <input
              type="password"
              placeholder="8 characters min."
              className="formForCommentInput"
            />
            <br />
            <br />
            <button
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
            <br />
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              Already have an account?
            </Link>
          </form>
          <br />
        </div>
      </div>
    </center>
  );
}
