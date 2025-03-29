import React from "react";
import {Link} from "react-router-dom";
function CommentForm() {
  return (
    <center>
      <div
        style={{
          display: "flex",
          gap: "50px",
          padding: "25px",
        }}
        className="commentForm"
      >
        <div>
          <h1 className="commentFormHeading">Be able to comment</h1>
          <h1
            className="commentFormHeading"
            style={{ margin: "0px", textAlign: "left" }}
          >
            {" "}
            Be heard{" "}
          </h1>
        </div>
        <div>
          <form action="" className="formForComment">
            <span
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
            </span>
            <br />
            <input type="text" className="formForCommentInput" />
            <br /> 
            <br />
            <span
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
              Password
            </span>
            <br />  
            <input type="email" className="formForCommentInput" />
          </form>
          <br />
          <div
            style={{
              display: "flex",
              gap: "1px",
              flexDirection: "column",
              margin: "0",
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: "none",
                textAlign: "left",
                display: "block",
              }}
              className="commentFormHeading"
            >
              Forgotten password?
            </a>
            <Link
              to="/Register"
              style={{ textDecoration: "none", textAlign: "left" }}
              className="commentFormHeading"
            >
              New to our portal? Register now
            </Link>
          </div>
        </div>
      </div>
    </center>
  );
}

export default CommentForm;
