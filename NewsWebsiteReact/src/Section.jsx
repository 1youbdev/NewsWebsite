


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "./axios";
import ArrowBlack from "./right-arrow.png";
import ArrowWhite from "./right-arroww.png";

export default function Section() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sectionData, setSectionData] = useState({
    latestArticle: null,
    featuredArticles: [],
    categorizedArticles: []
  });
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  // Add this image URL handler function - similar to Article.jsx
  const getImageUrl = (path) => {
    if (!path) return `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/300`;
    if (path.startsWith('http')) return path;
    return `${instance.defaults.baseURL}${path}`;
  };

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

    const fetchSectionData = async () => {
      try {
        setLoading(true);
        const response = await instance.get("/api/sections");
        if (response.data.success) {
          setSectionData(response.data);
        } else {
          setError("Failed to load section data");
        }
      } catch (err) {
        console.error("Error fetching section data:", err);
        setError("Failed to connect to the server");
      } finally {
        setLoading(false);
      }
    };

    fetchSectionData();
  }, []);

  if (loading) {
    return (
      <div className="section-loading">
        <p>Loading content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-error">
        <p>Error: {error}</p>
      </div>
    );
  }

  const goToArticle = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          width: "100%",
          maxWidth: "100vw",
          marginTop: "20px",
          padding: "0 15px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            width: "100%",
            maxWidth: "100vw",
          }}
        >
          {/* Latest Article Section - Left Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              color: "white",
              padding: "3px",
              margin: "0px",
              width: "100%",
              height: "100%", // Ensuring full height
            }}
          >
            {sectionData.latestArticle && (
              <div 
                className="Laune"
                style={{
                  height: "100%", // Make it full height
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <img 
                  src={getImageUrl(sectionData.latestArticle.image)} 
                  style={{ 
                    width: "100%", 
                    height: "400px", // Taller image to fill space
                    objectFit: "cover" 
                  }}
                  alt={sectionData.latestArticle.title}
                />
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "2.6em",
                    fontWeight: "bold",
                    margin: "0",
                    letterSpacing: "1px",
                  }}
                >
                  {sectionData.latestArticle.title}
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "1em",
                    margin: "0",
                    width: "100%",
                    flex: "1", // Takes remaining space
                  }}
                >
                  {sectionData.latestArticle.content.length > 500 
                    ? `${sectionData.latestArticle.content.substring(0, 500)}...`
                    : sectionData.latestArticle.content}
                </p>
                <span 
                  className="readmore"
                  onClick={() => goToArticle(sectionData.latestArticle.id)}
                  style={{ cursor: "pointer", display: "flex", alignItems: "center", marginTop: "auto" }}
                >
                  <p className="textColor" style={{ marginRight: "5px" }}>Read more</p>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                    alt="Arrow"
                  />
                </span>
              </div>
            )}
          </div>

          {/* Right Column with Featured Articles and Latest Articles List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px", // Reduced gap between the two right columns
              width: "100%",
            }}
          >
            {/* Featured Articles Section - Top Right */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {sectionData.featuredArticles &&
                sectionData.featuredArticles.slice(0, 1).map((article) => (
                  <div 
                    key={article.id} 
                    className="multiplearticles"
                    style={{
                      height: "300px", // Fixed height for the top right article
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <img 
                      src={getImageUrl(article.image)} 
                      style={{ width: "100%", height: "150px", objectFit: "cover" }}
                      alt={article.title}
                    />
                    <p
                      className="textColor"
                      style={{
                        fontFamily: "Oswald",
                        fontSize: "1.6em",
                        fontWeight: "bold",
                        margin: "0",
                        letterSpacing: "1px",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      className="textColor"
                      style={{
                        fontFamily: "Oswald",
                        fontSize: "0.8em",
                        margin: "0",
                        width: "100%",
                        flex: "1", // Takes remaining space
                      }}
                    >
                      {article.content.length > 150 
                        ? `${article.content.substring(0, 150)}...`
                        : article.content}
                    </p>
                    <span 
                      className="readmore"
                      onClick={() => goToArticle(article.id)}
                      style={{ cursor: "pointer", display: "flex", alignItems: "center", marginTop: "auto" }}
                    >
                      <p className="textColor" style={{ marginRight: "5px" }}>Read more</p>
                      <img
                        src={theme === "dark" ? ArrowWhite : ArrowBlack}
                        className="readmorearrow"
                        alt="Arrow"
                      />
                    </span>
                  </div>
                ))}
            </div>

            {/* Second Featured Article - Bottom Right */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {sectionData.featuredArticles &&
                sectionData.featuredArticles.slice(1, 2).map((article) => (
                  <div 
                    key={article.id} 
                    className="multiplearticles"
                    style={{
                      height: "300px", // Fixed height for the bottom right article
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <img 
                      src={getImageUrl(article.image)} 
                      style={{ width: "100%", height: "150px", objectFit: "cover" }}
                      alt={article.title}
                    />
                    <p
                      className="textColor"
                      style={{
                        fontFamily: "Oswald",
                        fontSize: "1.6em",
                        fontWeight: "bold",
                        margin: "0",
                        letterSpacing: "1px",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      className="textColor"
                      style={{
                        fontFamily: "Oswald",
                        fontSize: "0.8em",
                        margin: "0",
                        width: "100%",
                        flex: "1", // Takes remaining space
                      }}
                    >
                      {article.content.length > 150 
                        ? `${article.content.substring(0, 150)}...`
                        : article.content}
                    </p>
                    <span 
                      className="readmore"
                      onClick={() => goToArticle(article.id)}
                      style={{ cursor: "pointer", display: "flex", alignItems: "center", marginTop: "auto" }}
                    >
                      <p className="textColor" style={{ marginRight: "5px" }}>Read more</p>
                      <img
                        src={theme === "dark" ? ArrowWhite : ArrowBlack}
                        className="readmorearrow"
                        alt="Arrow"
                      />
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Latest Articles List and Newsletter */}
          <div
            style={{
              margin: "0",
              padding: "0",
              width: "100%",
              height: "fit-content",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
              <div className="multiplearticles">
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "1.8em",
                    fontWeight: "400",
                    margin: "0",
                    letterSpacing: "1px",
                    marginBottom: "20px",
                  }}
                >
                  Latest Articles
                </p>
                {sectionData.featuredArticles &&
                  sectionData.featuredArticles.slice(0, 8).map((article) => (
                    <div
                      key={article.id}
                      style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "10px" }}
                    >
                      <span
                        className="textColor"
                        style={{
                          cursor: "pointer",
                          fontSize: "0.85em",
                          fontWeight: "400",
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                        onClick={() => goToArticle(article.id)}
                      >
                        <p className="colorofnavbar" style={{ margin: "0" }}>{article.formattedDate}</p>
                        <span>{article.title}</span>
                      </span>
                    </div>
                  ))}
              </div>

              <div
                className="newsletterDiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "2.6em",
                    fontWeight: "200",
                    margin: "0",
                    letterSpacing: "1px",
                    color: "white",
                    height: "fit-content",
                  }}
                >
                  Newsletter
                </p>
                <p
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "1.1em",
                    fontWeight: "100",
                    margin: "0",
                    letterSpacing: "1px",
                    color: "white",
                  }}
                >
                  Stay informed
                </p>
                <Link to="/login">
                  <button
                    className="RegisterButton"
                    style={{ width: "250px", height: "40px" }}
                  >
                    Subscribe
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Articles Sections */}
        <div>
          {sectionData.categorizedArticles &&
            sectionData.categorizedArticles.map((categoryGroup) => (
              <div key={categoryGroup.categoryId} style={{ marginBottom: "40px" }}>
                <Link to={`/categories/${categoryGroup.categoryId}`} className="textColor" style={{ textDecoration: "none" }}>
                  <h1 
                    className="categories"
                    style={{
                      fontFamily: "Oswald",
                      fontSize: "2em",
                      marginBottom: "20px",
                      color: "inherit"
                    }}
                  >
                    {categoryGroup.category}
                  </h1>
                </Link>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "50px",
                    flexDirection: "row",
                  }}
                >
                  {categoryGroup.articles.map((article) => (
                    <div 
                      key={article.id} 
                      className="multiplearticles"
                      style={{
                        width: "250px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                      }}
                    >
                      <img 
                        src={getImageUrl(article.image)} 
                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
                        alt={article.title}
                      />
                      <p
                        className="textColor"
                        style={{
                          fontFamily: "Oswald",
                          fontSize: "1.6em",
                          fontWeight: "bold",
                          margin: "0",
                          letterSpacing: "1px",
                          height: "60px",
                          overflow: "hidden"
                        }}
                      >
                        {article.title}
                      </p>
                      <p
                        className="textColor"
                        style={{
                          fontFamily: "Oswald",
                          fontSize: "0.8em",
                          margin: "0",
                          width: "100%",
                          height: "60px",
                          overflow: "hidden"
                        }}
                      >
                        {article.content.length > 150 
                          ? `${article.content.substring(0, 150)}...`
                          : article.content}
                      </p>
                      <span 
                        className="readmore"
                        onClick={() => goToArticle(article.id)}
                        style={{ 
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px"
                        }}
                      >
                        <p className="textColor" style={{ marginRight: "10px" }}>Read more</p>
                        <img
                          src={theme === "dark" ? ArrowWhite : ArrowBlack}
                          className="readmorearrow"
                          alt="Arrow"
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}