import React, { useState, useEffect } from "react";
import "./website.css";
import logodark from "./logodark.png";
import logolight from "./logolight.png";
import instagram from "./instagramw.png";
import facebook from "./facebookw.png";
import twitter from "./twitterw.png";
export default function Footer() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <>
      <div
        className="footer"
        style={{
          color: "white",
          marginTop: "10%",
          display: "flex",
          flexDirection: "row",
          gap: "200px",
          height: "fit-content",
          padding: "10px",
        }}
      >
        <div>
          <img
            src={theme === "dark" ? logodark : logolight}
            className="Navbarlogo"
            alt="hh"
          />
        </div>
        <div>
          <span
            style={{
              fontFamily: "Oswald",
              fontSize: "1.2em",
            }}
          >
            Follow Us
          </span>
          <ul
            style={{
              color: "white",
              fontFamily: "Oswald",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              marginLeft: "-30px",
              position: "absolute",
            }}
            className="navbar"
          >
            <li style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <img
                src={instagram}
                style={{ width: "16px", height: "16px", cursor: "pointer" }}
              />
              <img
                src={facebook}
                style={{ width: "16px", height: "16px", cursor: "pointer" }}
              />
              <img
                src={twitter}
                style={{ width: "16px", height: "16px", cursor: "pointer" }}
              />
            </li>
          </ul>
        </div>
        <div>
          <span
            style={{
              fontFamily: "Oswald",
              fontSize: "1.2em",
            }}
          >
            About
          </span>
          <span>
            <p style={{ fontSize: "0.7em", width: "200px", height: "100px" }}>
              WGO offers you comprehensive and real-time coverage of national
              and international news. Discover in-depth analyses, exclusive
              reports, and diverse content on politics, economy, culture,
              sports, and much more. With a smooth and intuitive interface, stay
              informed wherever you are!
            </p>
          </span>
        </div>
        <div>
          <span
            style={{
              fontFamily: "Oswald",
              fontSize: "1.2em",
            }}
          >
            Contact
          </span>
          <span>
            <p style={{ fontFamily: "Oswald", fontSize: "0.9em" }}>
              Email:
              <a
                href="mailto:Whatisgoingonsyn@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                Whatisgoingonsyn@gmail.com
              </a>
            </p>
            <p style={{ fontSize: "0.9em" }}>+2126XXXXXXXX</p>
          </span>
        </div>
      </div>
    </>
  );
}
