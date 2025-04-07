import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./right-arrow.png";
export default function Sports() {
  return (
    <>
      <div style={{ marginLeft: "25px" }}>
        <h1 className="categories">Sports</h1>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              width: "100%",
              maxWidth: "100vw",
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
              ></div>
              <div
                style={{
                  margin: "0",
                  padding: "0",
                  width: "100%",
                  height: "fit-content",
                }}
              ></div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  flexWrap: "wrap",
                  width: "100%",
                  maxWidth: "100vw",
                  marginTop: "0",
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non ab ipsa quia. Non iusto eaque fuga atque quis dolores
                    et, possimus, veniam quidem voluptatibus recusandae eum est
                    fugit totam numquam? Debitis tempore nisi officia, illum
                    expedita, earum itaque eum
                  </p>
                  <span className="readmore">
                    <Link to="/Article" className="readmore">
                      Read more
                    </Link>
                    <img src={Arrow} className="readmorearrow" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
