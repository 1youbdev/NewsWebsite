import React, { useState, useEffect } from "react";
import user from "./user.png";
import { Link } from "react-router-dom";
import "./website.css";
import Arrow from "./right-arrow.png";
export default function Article() {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

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
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <div
            style={{
              margin: "20px",
              borderRadius: "30px",
              boxShadow: "4px 4px 20px black",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <img
              src="https://picsum.photos/id/1/800/400"
              style={{ margin: "10px" }}
            />
            <p
              className="textColor"
              style={{
                fontFamily: "Oswald",
                fontSize: "2.6em",
                fontWeight: "bold",
                margin: "10px",
                letterSpacing: "1px",
              }}
            >
              The Usage of Laptops: Enhancing Productivity and Connectivity
            </p>
            <p
              className="textColor"
              style={{
                fontFamily: "Oswald",
                fontSize: "1em",
                margin: "0",
                width: "800px",
                margin: "10px",
              }}
            >
              Laptops have become an essential tool in modern society, catering
              to both personal and professional needs. Their portability,
              versatility, and powerful computing capabilities make them
              indispensable for individuals across various fields. This article
              explores the diverse ways laptops are used and their impact on
              different aspects of life. Laptops have transformed education by
              providing students and teachers with a platform for research,
              online learning, and collaboration. With access to educational
              resources, e-books, and digital libraries, students can enhance
              their knowledge beyond traditional textbooks. Online courses,
              virtual classrooms, and e-learning platforms have made education
              more accessible and flexible. Businesses rely heavily on laptops
              for communication, project management, data analysis, and
              presentations. Employees can work remotely, attend virtual
              meetings, and manage files efficiently. Advanced software
              applications allow professionals to perform complex tasks, such as
              programming, graphic design, and video editing, making laptops
              indispensable tools in the workplace. Laptops serve as a hub for
              entertainment, allowing users to stream movies, play video games,
              and listen to music. With high-definition screens and powerful
              processors, they provide an immersive experience for gaming and
              video playback. Additionally, content creators use laptops for
              video editing, music production, and graphic design. The internet
              has made laptops a crucial device for staying connected with
              friends, family, and colleagues. Social media platforms, email
              services, and video conferencing tools enable users to communicate
              across the globe. Applications like Zoom, Skype, and Microsoft
              Teams facilitate remote work and long-distance collaboration.
              Laptops are extensively used in research fields, including
              science, engineering, and medicine. Researchers analyze data,
              create simulations, and develop new technologies using advanced
              computing tools. Scientific studies, coding, and artificial
              intelligence (AI) applications rely on laptops for accurate and
              efficient work. Laptops help users manage their daily tasks
              through calendars, to-do lists, and productivity apps. Writing
              reports, preparing presentations, and handling spreadsheets are
              common tasks performed on laptops. With cloud storage services,
              users can access important documents from anywhere, ensuring
              efficiency and organization. While laptops offer numerous
              benefits, users must prioritize security. Cyber threats, including
              malware and hacking attempts, pose risks to personal and business
              data. Using antivirus software, strong passwords, and encrypted
              storage helps safeguard information. Regular updates and backups
              ensure data protection. The usage of laptops spans multiple areas,
              making them one of the most versatile technological devices
              available. From education and business to entertainment and
              research, laptops continue to shape the way people work and
              interact. As technology evolves, laptops will likely become even
              more powerful, further enhancing productivity and connectivity
              worldwide.
            </p>
          </div>
          <div
            style={{
              width: "600px",
              margin: "20px",
              padding: "20px",
              borderRadius: "25px",
            }}
            className="commentdiv"
          >
            <form action="" className="textColor">
              <label
                htmlFor=""
                style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
              >
                Comments
              </label>
              <span
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <p style={{ color: "black", fontWeight: "300" }}>Ayoub</p>
                <img
                  src={user}
                  style={{ width: "25px", height: "25px", marginTop: "15px" }}
                />
              </span>
              <p>
                Laptops have truly revolutionized the way we work and learn! The
                ability to work remotely and access global resources is a
                game-changer. However, I think cloud computing and AI
                advancements will take this even further in the coming years.
              </p>
              <span
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <p style={{ color: "black", fontWeight: "300" }}>Mohamed</p>
                <img
                  src={user}
                  style={{ width: "25px", height: "25px", marginTop: "15px" }}
                />
              </span>
              <p>
                {" "}
                As a student, I can’t imagine studying without my laptop! Online
                classes, research, and even note-taking have become so much
                easier. That being said, I wish there were more affordable
                options for students on a budget.
              </p>
              <span
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <p style={{ color: "black", fontWeight: "300" }}>Younes</p>
                <img
                  src={user}
                  style={{ width: "25px", height: "25px", marginTop: "15px" }}
                />
              </span>
              <p>
                {" "}
                Great article! But security risks are a serious issue,
                especially with so many people relying on laptops for work and
                personal tasks. More emphasis should be placed on cybersecurity
                awareness to prevent data breaches and hacks.
              </p>
              <br />
              <span
                style={{ display: "flex", flexDirection: "row", gap: "5px" }}
              >
                <p style={{ color: "black", fontWeight: "300" }}>Ibrahim</p>
                <img
                  src={user}
                  style={{ width: "25px", height: "25px", marginTop: "15px" }}
                />
              </span>
              <p>
                {" "}
                Great article! But security risks are a serious issue,
                especially with so many people relying on laptops for work and
                personal tasks. More emphasis should be placed on cybersecurity
                awareness to prevent data breaches and hacks.
              </p>
              <br />
              <textarea
                name="comment"
                id="comment"
                style={{
                  resize: "none",
                  borderRadius: "10px",
                  width: "600px",
                  height: "200px",
                }}
              ></textarea>
              <br />
              
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.1em",
                  marginLeft: "510px",
                }}
                to="/CommentForm"
              >
                Add a comment
              </Link>
            </form>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
          <div className="SimilarArticles">
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
              Similar Articles
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
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
          </div>
          <div
            className="discoverArticles"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <center>
              <h1 className="textColor">Discover more</h1>
            </center>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
                ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
                veniam quidem voluptatibus recusandae eum est fugit totam
                numquam? Debitis tempore nisi officia, illum expedita, earum
                itaque eum
              </p>
              <span className="readmore">
                <p>Read more</p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
                ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
                veniam quidem voluptatibus recusandae eum est fugit totam
                numquam? Debitis tempore nisi officia, illum expedita, earum
                itaque eum
              </p>
              <span className="readmore">
                <p>Read more</p>
                <img src={Arrow} className="readmorearrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
