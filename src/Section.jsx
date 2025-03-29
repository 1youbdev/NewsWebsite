import React, { useState, useEffect } from "react";
import "./website.css";
import ArrowBlack from "./right-arrow.png";
import ArrowWhite from "./right-arroww.png";
import Article from "./Article";
import { Link } from "react-router-dom";
import Politics from "./Politics";
export default function Section() {
  const [theme, setTheme] = useState("dark");
  // const [showFullContent, setShowFullContent] = useState(false);

  // const toggleContent = () =>{
  //   setShowFullContent(!showFullContent);
  // }
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
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          width: "100%",
          maxWidth: "100vw",
          marginTop: "20px",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              color: "white",
              padding: "3px",
              margin: "0px",
              width: "100%",
              height: "fit-content",
            }}
          >
            <div className="Laune">
              <img src="https://picsum.photos/id/1/500/300" />
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
                Main title
              </p>
              <p
                className="textColor"
                style={{
                  fontFamily: "Oswald",
                  fontSize: "1em",
                  margin: "0",
                  width: "500px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
                ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
                veniam quidem voluptatibus recusandae eum est fugit totam
                numquam? Debitis tempore nisi officia, illum expedita, earum
                itaque eum inventore quo nostrum eligendi omnis. Corrupti
                voluptatem sequi eligendi nulla earum minima velit quod esse
                placeat. Possimus eum minima voluptatibus magni? Beatae, natus
                nam accusamus velit fuga quae molestias architecto fugiat
                dolores unde, culpa optio incidunt totam aspernatur excepturi
                ipsum provident alias eius fugit officia modi a rem! Quidem,
                maiores voluptates!eligendi nulla earum minima velit quod esse
                placeat. Possimus eum minima voluptatibus magni? Beatae, natus
                nam accusamus velit fuga quae molestias architecto fugiat
                dolores unde, culpa optio incidunt totam aspernatur excepturi
                ipsum provident alias eius fugit officia modi a rem! Quidem,
                maiores voluptates! aspernatur excepturi ipsum provident alias
                eius fugit officia modi a rem! Quidem, maiores
                voluptates!excepturi ipsum provident alias eius fugit officia
                modi a rem! Quidem
              </p>
              <span className="readmore">
                <Link to="/Article" className="textColor">
                  Read more
                </Link>
                <img
                  src={theme === "dark" ? ArrowWhite : ArrowBlack}
                  className="readmorearrow"
                />
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flexWrap: "wrap",
              width: "100%",
              maxWidth: "100vw",
            }}
          >
            <div className="multiplearticles">
              <img src="https://picsum.photos/id/121/250/150" />
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
                Main title
              </p>
              <p
                className="textColor"
                style={{
                  fontFamily: "Oswald",
                  fontSize: "0.8em",
                  margin: "0",
                  width: "250px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
                ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
                veniam quidem voluptatibus recusandae eum est fugit totam
                numquam? Debitis tempore nisi officia, illum expedita, earum
                itaque eum
              </p>
              <span className="readmore">
                <Link to="/Article" className="textColor">
                  Read more
                </Link>
                <img
                  src={theme === "dark" ? ArrowWhite : ArrowBlack}
                  className="readmorearrow"
                />
              </span>
            </div>
            <div className="multiplearticles">
              <img src="https://picsum.photos/id/41/250/150" />
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
                Main title
              </p>
              <p
                className="textColor"
                style={{
                  fontFamily: "Oswald",
                  fontSize: "0.8em",
                  margin: "0",
                  width: "250px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
                ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
                veniam quidem voluptatibus recusandae eum est fugit totam
                numquam? Debitis tempore nisi officia, illum expedita, earum
                itaque eum
              </p>
              <span className="readmore">
                <Link to="/Article" className="textColor">
                  Read more
                </Link>
                <img
                  src={theme === "dark" ? ArrowWhite : ArrowBlack}
                  className="readmorearrow"
                />
              </span>
            </div>
          </div>
          <div
            style={{
              margin: "0",
              padding: "0",
              width: "100%",
              height: "fit-content",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="TrendingArticles">
                <p
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "1.8em",
                    fontWeight: "100",
                    margin: "0",
                    letterSpacing: "1px",
                    color: "white",
                  }}
                >
                  Trending Articles
                </p>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <span>
                    <img
                      style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
                      src="https://picsum.photos/id/51/140/70"
                    />
                  </span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Oswald",
                        fontSize: "1.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "300",
                      }}
                    >
                      Title
                    </p>
                    <p
                      style={{
                        color: "gray",
                        fontFamily: "Oswald",
                        fontSize: "0.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "100",
                      }}
                    >
                      21minutes ago
                    </p>
                  </span>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <span>
                    <img
                      style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
                      src="https://picsum.photos/id/61/140/70"
                    />
                  </span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Oswald",
                        fontSize: "1.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "300",
                      }}
                    >
                      Title
                    </p>
                    <p
                      style={{
                        color: "gray",
                        fontFamily: "Oswald",
                        fontSize: "0.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "100",
                      }}
                    >
                      5minutes ago
                    </p>
                  </span>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <span>
                    <img
                      style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
                      src="https://picsum.photos/id/13/140/70"
                    />
                  </span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Oswald",
                        fontSize: "1.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "300",
                      }}
                    >
                      Title
                    </p>
                    <p
                      style={{
                        color: "gray",
                        fontFamily: "Oswald",
                        fontSize: "0.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "100",
                      }}
                    >
                      2 hours ago
                    </p>
                  </span>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <span>
                    <img
                      style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
                      src="https://picsum.photos/id/81/140/70"
                    />
                  </span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Oswald",
                        fontSize: "1.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "300",
                      }}
                    >
                      Title
                    </p>
                    <p
                      style={{
                        color: "gray",
                        fontFamily: "Oswald",
                        fontSize: "0.5em",
                        letterSpacing: "2px",
                        margin: "0",
                        fontWeight: "100",
                      }}
                    >
                      3 hours ago
                    </p>
                  </span>
                </div>
              </div>
              <div className="Register">
                <p
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "2.6em",
                    fontWeight: "200",
                    margin: "0",
                    letterSpacing: "1px",
                    color: "white",
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
                <input
                  type="email"
                  placeholder="Put your Email here..."
                  className="RegisterInput"
                />
                <button className="RegisterButton">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/Politics" className="textColor">
            <h1 className="categories">Politics</h1>
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flexWrap: "wrap",
              width: "100%",
              maxWidth: "100vw",
              marginTop: "0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "50px",
                flexDirection: "row",
              }}
            >
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/28/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/84/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/99/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/100/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
            </div>
            <div>
              <Link to="/Society" className="textColor">
                <h1 className="categories">Society</h1>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "50px",
                flexDirection: "row",
              }}
            >
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/281/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/328/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/982/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
            </div>
            {/* <button onClick={toggleContent} style={{ marginTop: "10px" }}>
        {showFullContent ? "Show Less" : "See More"}
      </button> */}
            <div>
              <Link to="/Sports" className="textColor">
                <h1 className="categories">Sports</h1>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "50px",
                flexDirection: "row",
              }}
            >
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/927/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/721/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/615/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/413/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
            </div>
            <div>
              <Link to="/Media" className="textColor">
                <h1 className="categories">Media</h1>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "50px",
                flexDirection: "row",
              }}
            >
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/500/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/231/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/661/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
              <div className="multiplearticles">
                <img src="https://picsum.photos/id/702/250/150" />
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
                  Main title
                </p>
                <p
                  className="textColor"
                  style={{
                    fontFamily: "Oswald",
                    fontSize: "0.8em",
                    margin: "0",
                    width: "250px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
                  possimus, veniam quidem voluptatibus recusandae eum est fugit
                  totam numquam? Debitis tempore nisi officia, illum expedita,
                  earum itaque eum
                </p>
                <span className="readmore">
                  <Link to="/Article" className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
