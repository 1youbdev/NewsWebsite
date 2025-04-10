import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./website.css";
import logodark from "./logodark.png";
import logolight from "./logolight.png";
import darkmode from "./night-mode.png";
import lightmode from "./contrast.png";
import darksearch from "./searchlight.png";
import lightsearch from "./searchdark.png";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  const [theme, setTheme] = useState("dark");

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
      <header>
        <div className="navbar">
          <div>
            <img
              src={theme === "dark" ? logodark : logolight}
              className="Navbarlogo"
              alt="Logo"
            />
          </div>
          <div>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
                marginTop: "30px",
                marginBottom: "-10px",
              }}
              className="navbar"
            >
              <li>
                <NavLink to="/" className="flex items-center gap-2 text-white">
                  <AiFillHome size={20} style={{marginTop:"2px"}} color="white" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/Politics" className="linkStyle">
                  Politics
                </NavLink>
              </li>
              <li>
                <NavLink to="/Economy" className="linkStyle">
                  Economy
                </NavLink>
              </li>
              <li>
                <NavLink to="/Society" className="linkStyle">
                  Society
                </NavLink>
              </li>
              <li>
                <NavLink to="/Culture" className="linkStyle">
                  Culture
                </NavLink>
              </li>
              <li>
                <NavLink to="/Sports" className="linkStyle">
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink to="/Mena" className="linkStyle">
                  Mena
                </NavLink>
              </li>
              <li>
                <NavLink to="/International" className="linkStyle">
                  International
                </NavLink>
              </li>
              <li>
                <NavLink to="/Media" className="linkStyle">
                  Media
                </NavLink>
              </li>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <li>
                  <img
                    src={theme === "dark" ? lightsearch : darksearch}
                    style={{ marginTop: "3px", cursor: "pointer" }}
                    alt="Search"
                  />
                </li>
                <li>
                  <input type="text" className="searchInput" />
                </li>
                <li>
                  <img
                    className="searchicon"
                    src={theme === "dark" ? lightmode : darkmode}
                    alt="Toggle Theme"
                    style={{
                      width: "24px",
                      height: "24px",
                      position: "relative",
                      marginTop: "3px",
                      cursor: "pointer",
                    }}
                    onClick={toggleTheme}
                  />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </header>
      <div className="underNav"></div>
    </>
  );
}
