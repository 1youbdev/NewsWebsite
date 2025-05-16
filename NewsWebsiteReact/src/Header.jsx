import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./website.css";
import logodark from "./logodark.png";
import logolight from "./logolight.png";
import darkmode from "./night-modeTest.png";
import lightmode from "./contrast.png";
import darksearch from "./magnifying-glassLight.png";
import DarkUser from "./profile-userWhite.png";
import LightUser from "./profile-userBlack.png";
import lightsearch from "./magnifying-glassDark.png";
import { AiFillHome } from "react-icons/ai";
import { useAuth } from "./AuthContext";
import instance from "./axios";

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

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
    
    // Close search results when clicking outside
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search handler with debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        performSearch(searchQuery);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const performSearch = async (query) => {
    if (!query.trim()) return;
    
    try {
      setIsSearching(true);
      const response = await instance.get(`/api/search?query=${encodeURIComponent(query.trim())}`);
      
      if (response.data.success) {
        setSearchResults(response.data.data);
        setShowResults(true);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error("Error searching articles:", err);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      performSearch(searchQuery);
    }
  };

  const goToArticle = (articleId) => {
    setShowResults(false);
    navigate(`/article/${articleId}`);
  };

  // Function to get image URL from article
  const getImageUrl = (path) => {
    if (!path) return `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/300`;
    if (path.startsWith('http')) return path;
    return `${instance.defaults.baseURL}${path}`;
  };

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
                gap: "40px",
                marginTop: "30px",
                marginBottom: "-10px",
              }}
              className="navbar"
            >
              <li>
                <NavLink
                  to="/Home"
                  className="flex items-center gap-2 text-white"
                >
                  <AiFillHome
                    size={30}
                    style={{ marginTop: "0.6px" }}
                    color="white"
                  />
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
                ref={searchContainerRef}
                style={{ 
                  display: "flex", 
                  flexDirection: "row", 
                  gap: "10px",
                  position: "relative"
                }}
              >
                <li>
                  <img
                    src={theme === "dark" ? lightsearch : darksearch}
                    style={{
                      marginTop: "3px",
                      cursor: "pointer",
                      width: "24px",
                      height: "24px",
                    }}
                    alt="Search"
                    onClick={handleSearch}
                  />
                </li>
                <li>
                  <input 
                    type="text" 
                    className="searchInput" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearch}
                    placeholder="Search articles..."
                  />
                  
                  {/* Search Results Dropdown */}
                  {showResults && searchResults.length > 0 && (
                    <div className="search-results-dropdown" style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      backgroundColor: theme === "dark" ? "#1a1a1a" : "#f5f5f5",
                      border: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`,
                      borderRadius: "5px",
                      maxHeight: "400px",
                      overflowY: "auto",
                      zIndex: 1000,
                      marginTop: "5px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      width: "350px"
                    }}>
                      <div style={{ padding: "10px" }}>
                        <h3 className="textColor" style={{ 
                          marginBottom: "10px", 
                          fontFamily: "Oswald", 
                          fontSize: "1.2em" 
                        }}>
                          Search Results
                        </h3>
                        {searchResults.map((article) => (
                          <div 
                            key={article.id}
                            onClick={() => goToArticle(article.id)}
                            style={{
                              padding: "10px",
                              borderBottom: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`,
                              cursor: "pointer",
                              display: "flex",
                              gap: "10px",
                              transition: "background-color 0.2s ease",
                              backgroundColor: "transparent",
                              "&:hover": {
                                backgroundColor: theme === "dark" ? "#333" : "#eee",
                              }
                            }}
                            className="search-result-item"
                          >
                            <img 
                              src={getImageUrl(article.image)} 
                              alt={article.title}
                              style={{ 
                                width: "60px", 
                                height: "60px", 
                                objectFit: "cover",
                                borderRadius: "3px"
                              }}
                            />
                            <div>
                              <p className="textColor" style={{ 
                                fontFamily: "Oswald", 
                                fontSize: "1em", 
                                fontWeight: "bold",
                                margin: "0 0 5px 0"
                              }}>
                                {article.title}
                              </p>
                              <p className="colorofnavbar" style={{ 
                                fontSize: "0.8em",
                                margin: 0
                              }}>
                                {article.categoryName} • {article.formattedDate}
                              </p>
                            </div>
                          </div>
                        ))}
                        <div style={{
                          textAlign: "center",
                          padding: "10px",
                          borderTop: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`
                        }}>
                          <p className="textColor" style={{
                            fontSize: "0.9em",
                            margin: 0
                          }}>
                            Found {searchResults.length} results for "{searchQuery}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* No Results Message */}
                  {showResults && searchQuery.trim() && searchResults.length === 0 && !isSearching && (
                    <div className="no-results-dropdown" style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: theme === "dark" ? "#1a1a1a" : "#f5f5f5",
                      border: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`,
                      borderRadius: "5px",
                      padding: "10px 15px",
                      zIndex: 1000,
                      marginTop: "5px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      width: "250px"
                    }}>
                      <p className="textColor" style={{ margin: 0 }}>
                        No results found for "{searchQuery}"
                      </p>
                    </div>
                  )}
                  
                  {/* Loading Indicator */}
                  {isSearching && (
                    <div className="search-loading-dropdown" style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: theme === "dark" ? "#1a1a1a" : "#f5f5f5",
                      border: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`,
                      borderRadius: "5px",
                      padding: "10px 15px",
                      zIndex: 1000,
                      marginTop: "5px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      width: "150px"
                    }}>
                      <p className="textColor" style={{ margin: 0 }}>
                        Searching...
                      </p>
                    </div>
                  )}
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
                <Link to="/Profile">
                  <li>
                    <img
                      src={theme === "dark" ? DarkUser : LightUser}
                      alt="UserIcon"
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        marginTop: "3px",
                        cursor: "pointer",
                      }}
                    />
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="auth-actions">
          {isAuthenticated ? (
            <>
              <span
                style={{
                  fontFamily: "Oswald",
                  fontSize: "2em",
                  fontWeight: "200",
                  marginTop: "10px",
                  letterSpacing: "1px",
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
                className="WelcomeMessage"
              >
                Welcome, {user.name}
                <button
                  onClick={logout}
                  className="RegisterButton"
                  style={{ width: "70px", height: "40px", marginTop: "7px" }}
                >
                  Logout
                </button>
              </span>

              {user.role === "auteur" && <Link to="/Home"></Link>}
              {user.role === "utilisateur" && <Link to="/Add_article"></Link>}
              {user.role === "admin" && (
                <Link to="/admin-dashboard">Admin Panel</Link>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </header>
      <div className="underNav"></div>
    </>
  );
}