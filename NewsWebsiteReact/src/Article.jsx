// import React, { useState, useEffect } from "react";
// import user from "./user.png";
// import { Link } from "react-router-dom";
// import "./website.css";
// import Arrow from "./right-arrow.png";
// export default function Article() {
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(true);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);
//   }, []);
//   setTimeout(() => {
//     setIsLoading(false);
//   }, 2000);

//   if (isLoading) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
//           <div
//             style={{
//               margin: "20px",
//               borderRadius: "30px",
//               boxShadow: "4px 4px 20px black",
//               width: "fit-content",
//               height: "fit-content",
//             }}
//           >
//             <img
//               src="https://picsum.photos/id/1/800/400"
//               style={{ margin: "10px" }}
//             />
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "bold",
//                 margin: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               The Usage of Laptops: Enhancing Productivity and Connectivity
//             </p>
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1em",
//                 width: "800px",
//                 margin: "10px",
//               }}
//             >
//               Laptops have become an essential tool in modern society, catering
//               to both personal and professional needs. Their portability,
//               versatility, and powerful computing capabilities make them
//               indispensable for individuals across various fields. This article
//               explores the diverse ways laptops are used and their impact on
//               different aspects of life. Laptops have transformed education by
//               providing students and teachers with a platform for research,
//               online learning, and collaboration. With access to educational
//               resources, e-books, and digital libraries, students can enhance
//               their knowledge beyond traditional textbooks. Online courses,
//               virtual classrooms, and e-learning platforms have made education
//               more accessible and flexible. Businesses rely heavily on laptops
//               for communication, project management, data analysis, and
//               presentations. Employees can work remotely, attend virtual
//               meetings, and manage files efficiently. Advanced software
//               applications allow professionals to perform complex tasks, such as
//               programming, graphic design, and video editing, making laptops
//               indispensable tools in the workplace. Laptops serve as a hub for
//               entertainment, allowing users to stream movies, play video games,
//               and listen to music. With high-definition screens and powerful
//               processors, they provide an immersive experience for gaming and
//               video playback. Additionally, content creators use laptops for
//               video editing, music production, and graphic design. The internet
//               has made laptops a crucial device for staying connected with
//               friends, family, and colleagues. Social media platforms, email
//               services, and video conferencing tools enable users to communicate
//               across the globe. Applications like Zoom, Skype, and Microsoft
//               Teams facilitate remote work and long-distance collaboration.
//               Laptops are extensively used in research fields, including
//               science, engineering, and medicine. Researchers analyze data,
//               create simulations, and develop new technologies using advanced
//               computing tools. Scientific studies, coding, and artificial
//               intelligence (AI) applications rely on laptops for accurate and
//               efficient work. Laptops help users manage their daily tasks
//               through calendars, to-do lists, and productivity apps. Writing
//               reports, preparing presentations, and handling spreadsheets are
//               common tasks performed on laptops. With cloud storage services,
//               users can access important documents from anywhere, ensuring
//               efficiency and organization. While laptops offer numerous
//               benefits, users must prioritize security. Cyber threats, including
//               malware and hacking attempts, pose risks to personal and business
//               data. Using antivirus software, strong passwords, and encrypted
//               storage helps safeguard information. Regular updates and backups
//               ensure data protection. The usage of laptops spans multiple areas,
//               making them one of the most versatile technological devices
//               available. From education and business to entertainment and
//               research, laptops continue to shape the way people work and
//               interact. As technology evolves, laptops will likely become even
//               more powerful, further enhancing productivity and connectivity
//               worldwide.
//             </p>
//           </div>
//           <div
//             style={{
//               width: "600px",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "25px",
//             }}
//             className="commentdiv"
//           >
//             <form action="" className="textColor">
//               <label
//                 htmlFor=""
//                 style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
//               >
//                 Comments
//               </label>
//               <span
//                 style={{ display: "flex", flexDirection: "row", gap: "5px" }}
//               >
//                 <p style={{ color: "black", fontWeight: "300" }}>Ayoub</p>
//                 <img
//                   src={user}
//                   style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                 />
//               </span>
//               <p>
//                 Laptops have truly revolutionized the way we work and learn! The
//                 ability to work remotely and access global resources is a
//                 game-changer. However, I think cloud computing and AI
//                 advancements will take this even further in the coming years.
//               </p>

//               <span
//                 style={{ display: "flex", flexDirection: "row", gap: "5px" }}
//               >
//                 <p style={{ color: "black", fontWeight: "300" }}>Mohamed</p>
//                 <img
//                   src={user}
//                   style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                 />
//               </span>
//               <p>
//                 {" "}
//                 As a student, I can’t imagine studying without my laptop! Online
//                 classes, research, and even note-taking have become so much
//                 easier. That being said, I wish there were more affordable
//                 options for students on a budget.
//               </p>
//               <span
//                 style={{ display: "flex", flexDirection: "row", gap: "5px" }}
//               >
//                 <p style={{ color: "black", fontWeight: "300" }}>Younes</p>
//                 <img
//                   src={user}
//                   style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                 />
//               </span>
//               <p>
//                 {" "}
//                 Great article! But security risks are a serious issue,
//                 especially with so many people relying on laptops for work and
//                 personal tasks. More emphasis should be placed on cybersecurity
//                 awareness to prevent data breaches and hacks.
//               </p>
//               <br />
//               <span
//                 style={{ display: "flex", flexDirection: "row", gap: "5px" }}
//               >
//                 <p style={{ color: "black", fontWeight: "300" }}>Ibrahim</p>
//                 <img
//                   src={user}
//                   style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                 />
//               </span>
//               <p>
//                 {" "}
//                 Great article! But security risks are a serious issue,
//                 especially with so many people relying on laptops for work and
//                 personal tasks. More emphasis should be placed on cybersecurity
//                 awareness to prevent data breaches and hacks.
//               </p>
//               <br />
//               <textarea
//                 name="comment"
//                 id="comment"
//                 style={{
//                   resize: "none",
//                   borderRadius: "10px",
//                   width: "600px",
//                   height: "200px",
//                 }}
//               ></textarea>
//               <br />

//               <Link
//                 style={{
//                   textDecoration: "none",
//                   color: "black",
//                   fontSize: "1.1em",
//                   marginLeft: "510px",
//                 }}
//                 to="/login"
//               >
//                 Add a comment
//               </Link>
//             </form>
//           </div>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <div className="TrendingArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Trending Articles
//             </p>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/51/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   21minutes ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/61/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   5minutes ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/13/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   2 hours ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/81/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   3 hours ago
//                 </p>
//               </span>
//             </div>
//           </div>
//           <div className="Register">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "200",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Newsletter
//             </p>
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.1em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Stay informed
//             </p>
//             <input
//               type="email"
//               placeholder="Put your Email here..."
//               className="RegisterInput"
//             />
//             <button className="RegisterButton">Subscribe</button>
//           </div>
//           <div className="SimilarArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Similar Articles
//             </p>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/51/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   21minutes ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/61/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   5minutes ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/13/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   2 hours ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/81/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   3 hours ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/61/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   5minutes ago
//                 </p>
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
//               <span>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                   src="https://picsum.photos/id/61/140/70"
//                 />
//               </span>
//               <span style={{ display: "flex", flexDirection: "column" }}>
//                 <p
//                   style={{
//                     color: "white",
//                     fontFamily: "Oswald",
//                     fontSize: "1.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "300",
//                   }}
//                 >
//                   Title
//                 </p>
//                 <p
//                   style={{
//                     color: "gray",
//                     fontFamily: "Oswald",
//                     fontSize: "0.5em",
//                     letterSpacing: "2px",
//                     margin: "0",
//                     fontWeight: "100",
//                   }}
//                 >
//                   5minutes ago
//                 </p>
//               </span>
//             </div>
//           </div>
//           <div
//             className="discoverArticles"
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <center>
//               <h1 className="textColor">Discover more</h1>
//             </center>
//             <div className="multiplearticles">
//               <img src="https://picsum.photos/id/28/250/150" />
//               <p
//                 className="textColor"
//                 style={{
//                   fontFamily: "Oswald",
//                   fontSize: "1.6em",
//                   fontWeight: "bold",
//                   margin: "0",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 Main title
//               </p>
//               <p
//                 className="textColor"
//                 style={{
//                   fontFamily: "Oswald",
//                   fontSize: "0.8em",
//                   margin: "0",
//                   width: "250px",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
//                 ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
//                 veniam quidem voluptatibus recusandae eum est fugit totam
//                 numquam? Debitis tempore nisi officia, illum expedita, earum
//                 itaque eum
//               </p>
//               <span className="readmore">
//                 <p>Read more</p>
//                 <img src={Arrow} className="readmorearrow" />
//               </span>
//             </div>
//             <div className="multiplearticles">
//               <img src="https://picsum.photos/id/28/250/150" />
//               <p
//                 className="textColor"
//                 style={{
//                   fontFamily: "Oswald",
//                   fontSize: "1.6em",
//                   fontWeight: "bold",
//                   margin: "0",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 Main title
//               </p>
//               <p
//                 className="textColor"
//                 style={{
//                   fontFamily: "Oswald",
//                   fontSize: "0.8em",
//                   margin: "0",
//                   width: "250px",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
//                 ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
//                 veniam quidem voluptatibus recusandae eum est fugit totam
//                 numquam? Debitis tempore nisi officia, illum expedita, earum
//                 itaque eum
//               </p>
//               <span className="readmore">
//                 <p>Read more</p>
//                 <img src={Arrow} className="readmorearrow" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import user from "./user.png";
// import "./website.css";
// import Arrow from "./right-arrow.png";
// import instance from "./axios";

// export default function Article() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(true);
//   const [article, setArticle] = useState(null);
//   const [similarArticles, setSimilarArticles] = useState([]);
//   const [trendingArticles, setTrendingArticles] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);

//     const fetchArticleData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await instance.get(`/api/articles/${id}`);

//         if (response.data.success) {
//           setArticle(response.data.article);
//           setSimilarArticles(response.data.similarArticles || []);
//           setTrendingArticles(response.data.trendingArticles || []);
//           setComments(response.data.comments || []);
//           setError(null);
//         } else {
//           setError("Article not found");
//           navigate("/", { replace: true }); // Redirect to home if article not found
//         }
//       } catch (err) {
//         console.error("Error fetching article data:", err);
//         setError("Failed to load article");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchArticleData();
//   }, [id, navigate]);

//   if (isLoading) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <p>Article not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
//         {/* Main Article Content */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
//           <div style={{
//             margin: "20px",
//             borderRadius: "30px",
//             boxShadow: "4px 4px 20px black",
//             width: "fit-content",
//             height: "fit-content",
//           }}>
//             <img
//               src={article.image || "https://picsum.photos/id/1/800/400"}
//               style={{
//                 margin: "10px",
//                 width: "800px",
//                 height: "400px",
//                 objectFit: "cover"
//               }}
//               alt={article.title}
//             />
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "bold",
//                 margin: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               {article.title}
//             </p>
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1em",
//                 width: "800px",
//                 margin: "10px",
//                 whiteSpace: "pre-line"
//               }}
//             >
//               {article.content}
//             </p>
//           </div>

//           {/* Comments Section */}
//           <div
//             style={{
//               width: "600px",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "25px",
//             }}
//             className="commentdiv"
//           >
//             <form action="" className="textColor">
//               <label
//                 htmlFor=""
//                 style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
//               >
//                 Comments
//               </label>

//               {comments.map((comment, index) => (
//                 <div key={index}>
//                   <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//                     <p style={{ color: "black", fontWeight: "300" }}>{comment.user || 'Anonymous'}</p>
//                     <img
//                       src={user}
//                       style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                       alt="User"
//                     />
//                   </span>
//                   <p>{comment.content}</p>
//                 </div>
//               ))}

//               <br />
//               <textarea
//                 name="comment"
//                 id="comment"
//                 style={{
//                   resize: "none",
//                   borderRadius: "10px",
//                   width: "600px",
//                   height: "200px",
//                 }}
//                 placeholder="Add your comment..."
//               ></textarea>
//               <br />

//               <Link
//                 style={{
//                   textDecoration: "none",
//                   color: "black",
//                   fontSize: "1.1em",
//                   marginLeft: "510px",
//                 }}
//                 to="/login"
//               >
//                 Add a comment
//               </Link>
//             </form>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           {/* Trending Articles */}
//           <div className="TrendingArticles">
//             <p style={{
//               fontFamily: "Oswald",
//               fontSize: "1.8em",
//               fontWeight: "100",
//               margin: "0",
//               letterSpacing: "1px",
//               color: "white",
//             }}>
//               Trending Articles
//             </p>
//             {trendingArticles.slice(0, 4).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: 'none' }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: '15px' }}>
//                   <span>
//                     <img
//                       style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                       src={article.image || `https://picsum.photos/id/${article.id || 51}/140/70`}
//                       alt={article.title}
//                     />
//                   </span>
//                   <span style={{ display: "flex", flexDirection: "column" }}>
//                     <p style={{
//                       color: "white",
//                       fontFamily: "Oswald",
//                       fontSize: "1.5em",
//                       letterSpacing: "2px",
//                       margin: "0",
//                       fontWeight: "300",
//                     }}>
//                       {article.title}
//                     </p>
//                     <p style={{
//                       color: "gray",
//                       fontFamily: "Oswald",
//                       fontSize: "0.5em",
//                       letterSpacing: "2px",
//                       margin: "0",
//                       fontWeight: "100",
//                     }}>
//                       {article.formattedDate || 'Just now'}
//                     </p>
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Newsletter */}
//           <div className="Register">
//             <p style={{
//               fontFamily: "Oswald",
//               fontSize: "2.6em",
//               fontWeight: "200",
//               margin: "0",
//               letterSpacing: "1px",
//               color: "white",
//             }}>
//               Newsletter
//             </p>
//             <p style={{
//               fontFamily: "Oswald",
//               fontSize: "1.1em",
//               fontWeight: "100",
//               margin: "0",
//               letterSpacing: "1px",
//               color: "white",
//             }}>
//               Stay informed
//             </p>
//             <input
//               type="email"
//               placeholder="Put your Email here..."
//               className="RegisterInput"
//             />
//             <button className="RegisterButton">Subscribe</button>
//           </div>

//           {/* Similar Articles */}
//           <div className="SimilarArticles">
//             <p style={{
//               fontFamily: "Oswald",
//               fontSize: "1.8em",
//               fontWeight: "100",
//               margin: "0",
//               letterSpacing: "1px",
//               color: "white",
//             }}>
//               Similar Articles
//             </p>
//             {similarArticles.slice(0, 6).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: 'none' }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: '15px' }}>
//                   <span>
//                     <img
//                       style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                       src={article.image || `https://picsum.photos/id/${article.id || 51}/140/70`}
//                       alt={article.title}
//                     />
//                   </span>
//                   <span style={{ display: "flex", flexDirection: "column" }}>
//                     <p style={{
//                       color: "white",
//                       fontFamily: "Oswald",
//                       fontSize: "1.5em",
//                       letterSpacing: "2px",
//                       margin: "0",
//                       fontWeight: "300",
//                     }}>
//                       {article.title}
//                     </p>
//                     <p style={{
//                       color: "gray",
//                       fontFamily: "Oswald",
//                       fontSize: "0.5em",
//                       letterSpacing: "2px",
//                       margin: "0",
//                       fontWeight: "100",
//                     }}>
//                       {article.formattedDate || 'Just now'}
//                     </p>
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Discover More Articles */}
//           <div className="discoverArticles" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//             <center>
//               <h1 className="textColor">Discover more</h1>
//             </center>
//             {similarArticles.slice(0, 2).map((article) => (
//               <div key={article.id} className="multiplearticles">
//                 <img
//                   src={article.image || `https://picsum.photos/id/${article.id || 28}/250/150`}
//                   alt={article.title}
//                 />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {article.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "0.8em",
//                     margin: "0",
//                     width: "250px",
//                   }}
//                 >
//                   {article.content.length > 150
//                     ? `${article.content.substring(0, 150)}...`
//                     : article.content}
//                 </p>
//                 <Link
//                   to={`/article/${article.id}`}
//                   className="readmore"
//                   style={{ textDecoration: 'none' }}
//                 >
//                   <p>Read more</p>
//                   <img src={Arrow} className="readmorearrow" alt="Read more" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import user from "./user.png";
// import "./website.css";
// import Arrow from "./right-arrow.png";
// import instance from "./axios";

// export default function Article() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(true);
//   const [article, setArticle] = useState(null);
//   const [similarArticles, setSimilarArticles] = useState([]);
//   const [trendingArticles, setTrendingArticles] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [error, setError] = useState(null);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);

//     const fetchArticleData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await instance.get(`/api/articles/${id}`);

//         if (response.data.success) {
//           setArticle(response.data.article);
//           setSimilarArticles(response.data.similarArticles || []);
//           setTrendingArticles(response.data.trendingArticles || []);
//           setComments(response.data.comments || []);
//           setError(null);
//         } else {
//           setError("Article not found");
//           navigate("/", { replace: true });
//         }
//       } catch (err) {
//         console.error("Error fetching article data:", err);
//         setError("Failed to load article");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchArticleData();
//   }, [id, navigate]);

//   if (isLoading) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <p>Article not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
//           <div
//             style={{
//               margin: "20px",
//               borderRadius: "30px",
//               boxShadow: "4px 4px 20px black",
//               width: "fit-content",
//               height: "fit-content",
//             }}
//           >
//             <img
//               src={article.image || "https://picsum.photos/id/1/800/400"}
//               style={{
//                 margin: "10px",
//                 width: "800px",
//                 height: "400px",
//                 objectFit: "cover"
//               }}
//               alt={article.title}
//             />
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "bold",
//                 margin: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               {article.title}
//             </p>
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1em",
//                 width: "800px",
//                 margin: "10px",
//                 whiteSpace: "pre-line"
//               }}
//             >
//               {article.content}
//             </p>
//           </div>
//           <div
//             style={{
//               width: "600px",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "25px",
//             }}
//             className="commentdiv"
//           >
//             <form action="" className="textColor">
//               <label
//                 htmlFor=""
//                 style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
//               >
//                 Comments
//               </label>

//               {comments.length > 0 ? (
//                 comments.map((comment, index) => (
//                   <div key={index}>
//                     <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//                       <p style={{ color: "black", fontWeight: "300" }}>{comment.user || 'Anonymous'}</p>
//                       <img
//                         src={user}
//                         style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                         alt="User"
//                       />
//                     </span>
//                     <p style={{ color: "black" }}>{comment.content}</p>
//                     <br />
//                   </div>
//                 ))
//               ) : (
//                 <p style={{ color: "black" }}>No comments yet. Be the first to comment!</p>
//               )}

//               <textarea
//                 name="comment"
//                 id="comment"
//                 style={{
//                   resize: "none",
//                   borderRadius: "10px",
//                   width: "600px",
//                   height: "200px",
//                   marginTop: "20px"
//                 }}
//                 placeholder="Write your comment here..."
//               ></textarea>
//               <br />

//               <Link
//                 style={{
//                   textDecoration: "none",
//                   color: "black",
//                   fontSize: "1.1em",
//                   marginLeft: "510px",
//                 }}
//                 to="/login"
//               >
//                 Add a comment
//               </Link>
//             </form>
//           </div>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <div className="TrendingArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Trending Articles
//             </p>
//             {trendingArticles.slice(0, 4).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: 'none' }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <span>
//                     <img
//                       style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                       src={article.image || `https://picsum.photos/id/${article.id || 51}/140/70`}
//                       alt={article.title}
//                     />
//                   </span>
//                   <span style={{ display: "flex", flexDirection: "column" }}>
//                     <p
//                       style={{
//                         color: "white",
//                         fontFamily: "Oswald",
//                         fontSize: "1.5em",
//                         letterSpacing: "2px",
//                         margin: "0",
//                         fontWeight: "300",
//                       }}
//                     >
//                       {article.title.length > 20 ? `${article.title.substring(0, 20)}...` : article.title}
//                     </p>
//                     <p
//                       style={{
//                         color: "gray",
//                         fontFamily: "Oswald",
//                         fontSize: "0.5em",
//                         letterSpacing: "2px",
//                         margin: "0",
//                         fontWeight: "100",
//                       }}
//                     >
//                       {article.formattedDate || 'Just now'}
//                     </p>
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className="Register">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "200",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Newsletter
//             </p>
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.1em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Stay informed
//             </p>
//             <input
//               type="email"
//               placeholder="Put your Email here..."
//               className="RegisterInput"
//             />
//             <button className="RegisterButton">Subscribe</button>
//           </div>
//           <div className="SimilarArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Similar Articles
//             </p>
//             {similarArticles.slice(0, 6).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: 'none' }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <span>
//                     <img
//                       style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
//                       src={article.image || `https://picsum.photos/id/${article.id || 61}/140/70`}
//                       alt={article.title}
//                     />
//                   </span>
//                   <span style={{ display: "flex", flexDirection: "column" }}>
//                     <p
//                       style={{
//                         color: "white",
//                         fontFamily: "Oswald",
//                         fontSize: "1.5em",
//                         letterSpacing: "2px",
//                         margin: "0",
//                         fontWeight: "300",
//                       }}
//                     >
//                       {article.title.length > 20 ? `${article.title.substring(0, 20)}...` : article.title}
//                     </p>
//                     <p
//                       style={{
//                         color: "gray",
//                         fontFamily: "Oswald",
//                         fontSize: "0.5em",
//                         letterSpacing: "2px",
//                         margin: "0",
//                         fontWeight: "100",
//                       }}
//                     >
//                       {article.formattedDate || 'Just now'}
//                     </p>
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div
//             className="discoverArticles"
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <center>
//               <h1 className="textColor">Discover more</h1>
//             </center>
//             {similarArticles.slice(0, 2).map((article) => (
//               <div key={article.id} className="multiplearticles">
//                 <img
//                   src={article.image || `https://picsum.photos/id/${article.id || 28}/250/150`}
//                   alt={article.title}
//                 />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {article.title.length > 30 ? `${article.title.substring(0, 30)}...` : article.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "0.8em",
//                     margin: "0",
//                     width: "250px",
//                   }}
//                 >
//                   {article.content.length > 150
//                     ? `${article.content.substring(0, 150)}...`
//                     : article.content}
//                 </p>
//                 <Link
//                   to={`/article/${article.id}`}
//                   className="readmore"
//                   style={{ textDecoration: 'none' }}
//                 >
//                   <p>Read more</p>
//                   <img src={Arrow} className="readmorearrow" alt="Read more" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import instance from "./axios";
// import user from "./user.png";
// import Arrow from "./right-arrow.png";

// export default function Article() {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [similarArticles, setSimilarArticles] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [theme] = useState(localStorage.getItem("theme") || "dark");

//   const getImageUrl = (path) => {
//     if (!path) return "https://picsum.photos/id/1/800/400";
//     return path.startsWith('http') ? path : `${instance.defaults.baseURL}${path}`;
//   };

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await instance.get(`/api/articles/${id}`);
//         if (response.data.success) {
//           setArticle(response.data.article);
//           setSimilarArticles(response.data.similarArticles || []);
//           setComments(response.data.comments || []);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArticle();
//   }, [id]);

//   if (loading) return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh"
//     }}>
//       <div style={{
//         width: "50px",
//         height: "50px",
//         border: "5px solid #f3f3f3",
//         borderTop: "5px solid #3498db",
//         borderRadius: "50%",
//         animation: "spin 1s linear infinite"
//       }}></div>
//     </div>
//   );

//   if (!article) return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       flexDirection: "column",
//       gap: "20px"
//     }}>
//       <p style={{ color: theme === "dark" ? "white" : "black", fontSize: "1.5rem" }}>
//         Article not found
//       </p>
//       <Link
//         to="/"
//         style={{
//           padding: "10px 20px",
//           background: "#4CAF50",
//           color: "white",
//           borderRadius: "5px",
//           textDecoration: "none"
//         }}
//       >
//         Go to Homepage
//       </Link>
//     </div>
//   );

//   return (
//     <div style={{
//       display: "flex",
//       maxWidth: "1200px",
//       margin: "0 auto",
//       padding: "20px",
//       gap: "40px"
//     }}>
//       {/* Main Article Content */}
//       <div style={{ flex: "2" }}>
//         <div style={{
//           backgroundColor: theme === "dark" ? "#2a2a2a" : "#f5f5f5",
//           borderRadius: "10px",
//           padding: "20px",
//           marginBottom: "30px"
//         }}>
//           <img
//             src={getImageUrl(article.image)}
//             alt={article.title}
//             style={{
//               width: "100%",
//               height: "400px",
//               objectFit: "cover",
//               borderRadius: "8px",
//               marginBottom: "20px"
//             }}
//           />
//           <h1 style={{
//             color: theme === "dark" ? "white" : "black",
//             fontFamily: "Oswald",
//             fontSize: "2.5rem",
//             margin: "0 0 10px 0"
//           }}>
//             {article.title}
//           </h1>
//           <div style={{
//             display: "flex",
//             gap: "20px",
//             marginBottom: "20px",
//             color: theme === "dark" ? "#aaa" : "#777"
//           }}>
//             <span>By {article.author || 'Unknown'}</span>
//             <span>
//               {new Date(article.created_at).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//               })}
//             </span>
//           </div>
//           <div style={{
//             color: theme === "dark" ? "#ddd" : "#333",
//             lineHeight: "1.8",
//             fontSize: "1.1rem"
//           }}>
//             {article.content.split('\n').map((para, i) => (
//               <p key={i} style={{ marginBottom: "15px" }}>{para}</p>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div style={{ flex: "1" }}>
//         {/* Trending Articles */}
//         <div style={{
//           backgroundColor: theme === "dark" ? "#2a2a2a" : "#f5f5f5",
//           borderRadius: "10px",
//           padding: "20px",
//           marginBottom: "30px"
//         }}>
//           <h2 style={{
//             color: theme === "dark" ? "white" : "black",
//             fontFamily: "Oswald",
//             fontSize: "1.5rem",
//             margin: "0 0 20px 0",
//             borderBottom: `1px solid ${theme === "dark" ? "#444" : "#ddd"}`,
//             paddingBottom: "10px"
//           }}>
//             Trending Articles
//           </h2>
//           <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//             {similarArticles.slice(0, 4).map(item => (
//               <Link
//                 to={`/article/${item.id}`}
//                 key={item.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div style={{ display: "flex", gap: "15px" }}>
//                   <img
//                     src={getImageUrl(item.image)}
//                     alt={item.title}
//                     style={{
//                       width: "80px",
//                       height: "60px",
//                       objectFit: "cover",
//                       borderRadius: "4px"
//                     }}
//                   />
//                   <div>
//                     <h3 style={{
//                       color: theme === "dark" ? "white" : "black",
//                       fontSize: "0.9rem",
//                       margin: "0 0 5px 0"
//                     }}>
//                       {item.title}
//                     </h3>
//                     <p style={{
//                       color: theme === "dark" ? "#aaa" : "#777",
//                       fontSize: "0.8rem",
//                       margin: 0
//                     }}>
//                       {new Date(item.created_at).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Comments Section */}
//         <div style={{
//           backgroundColor: theme === "dark" ? "#2a2a2a" : "#f5f5f5",
//           borderRadius: "10px",
//           padding: "20px"
//         }}>
//           <h2 style={{
//             color: theme === "dark" ? "white" : "black",
//             fontFamily: "Oswald",
//             fontSize: "1.5rem",
//             margin: "0 0 20px 0",
//             borderBottom: `1px solid ${theme === "dark" ? "#444" : "#ddd"}`,
//             paddingBottom: "10px"
//           }}>
//             Comments ({comments.length})
//           </h2>
//           <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//             {comments.map(comment => (
//               <div key={comment.id} style={{
//                 borderBottom: `1px solid ${theme === "dark" ? "#444" : "#ddd"}`,
//                 paddingBottom: "15px"
//               }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
//                   <img
//                     src={user}
//                     alt="User"
//                     style={{ width: "30px", height: "30px" }}
//                   />
//                   <span style={{ color: theme === "dark" ? "white" : "black" }}>
//                     {comment.user || 'Anonymous'}
//                   </span>
//                 </div>
//                 <p style={{
//                   color: theme === "dark" ? "#ddd" : "#333",
//                   margin: 0,
//                   fontSize: "0.9rem"
//                 }}>
//                   {comment.text}
//                 </p>
//               </div>
//             ))}
//             <Link
//               to="/login"
//               style={{
//                 display: "inline-block",
//                 marginTop: "15px",
//                 color: theme === "dark" ? "#4CAF50" : "#2E7D32",
//                 textDecoration: "none",
//                 fontWeight: "bold"
//               }}
//             >
//               Add a comment →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import user from "./user.png";
// import { Link } from "react-router-dom";
// import "./website.css";
// import Arrow from "./right-arrow.png";
// import instance from "./axios";

// export default function Article() {
//   const { id } = useParams();
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(true);
//   const [article, setArticle] = useState(null);
//   const [similarArticles, setSimilarArticles] = useState([]);
//   const [comments, setComments] = useState([]);

//   // Fixed image URL handler
//   const getImageUrl = (path) => {
//     if (!path) return `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/800/400`;
//     if (path.startsWith('http')) return path;
//     return `${instance.defaults.baseURL}/storage/${path}`;
//   };

//   useEffect(() => {
//     const fetchArticleData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await instance.get(`/api/articles/${id}`);
//         if (response.data.success) {
//           setArticle(response.data.article);
//           setSimilarArticles(response.data.similarArticles || []);
//           setComments(response.data.comments || []);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchArticleData();
//   }, [id]);

//   if (isLoading) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <p>Article not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
//           <div
//             style={{
//               margin: "20px",
//               borderRadius: "30px",
//               boxShadow: "4px 4px 20px black",
//               width: "fit-content",
//               height: "fit-content",
//             }}
//           >
//             <img
//               src={getImageUrl(article.image)}
//               style={{ margin: "10px", width: "800px", height: "400px", objectFit: "cover" }}
//               alt={article.title}
//             />
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "bold",
//                 margin: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               {article.title}
//             </p>
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1em",
//                 width: "800px",
//                 margin: "10px",
//               }}
//             >
//               {article.content}
//             </p>
//           </div>

//           <div
//             style={{
//               width: "600px",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "25px",
//             }}
//             className="commentdiv"
//           >
//             <form action="" className="textColor">
//               <label
//                 htmlFor=""
//                 style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
//               >
//                 Comments
//               </label>
//               {comments.map((comment, index) => (
//                 <div key={index}>
//                   <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//                     <p style={{ color: "black", fontWeight: "300" }}>{comment.user || 'Anonymous'}</p>
//                     <img
//                       src={user}
//                       style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                       alt="User"
//                     />
//                   </span>
//                   <p>{comment.text}</p>
//                 </div>
//               ))}
//               <br />
//               <textarea
//                 name="comment"
//                 id="comment"
//                 style={{
//                   resize: "none",
//                   borderRadius: "10px",
//                   width: "600px",
//                   height: "200px",
//                 }}
//               ></textarea>
//               <br />
//               <Link
//                 style={{
//                   textDecoration: "none",
//                   color: "black",
//                   fontSize: "1.1em",
//                   marginLeft: "510px",
//                 }}
//                 to="/login"
//               >
//                 Add a comment
//               </Link>
//             </form>
//           </div>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <div className="TrendingArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Trending Articles
//             </p>
//             {similarArticles.slice(0, 4).map((article) => (
//               <div key={article.id} style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                   src={getImageUrl(article.image)}
//                   alt={article.title}
//                 />
//                 <div>
//                   <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                     {article.title}
//                   </p>
//                   <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                     {article.formattedDate || 'Recently'}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="Register">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "200",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Newsletter
//             </p>
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.1em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Stay informed
//             </p>
//             <input
//               type="email"
//               placeholder="Put your Email here..."
//               className="RegisterInput"
//             />
//             <button className="RegisterButton">Subscribe</button>
//           </div>

//           <div className="SimilarArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Similar Articles
//             </p>
//             {similarArticles.slice(0, 6).map((article) => (
//               <div key={article.id} style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                 <img
//                   style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                   src={getImageUrl(article.image)}
//                   alt={article.title}
//                 />
//                 <div>
//                   <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                     {article.title}
//                   </p>
//                   <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                     {article.formattedDate || 'Recently'}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className="discoverArticles"
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <center>
//               <h1 className="textColor">Discover more</h1>
//             </center>
//             {similarArticles.slice(0, 2).map((article) => (
//               <div className="multiplearticles" key={article.id}>
//                 <img
//                   src={getImageUrl(article.image)}
//                   style={{ width: "250px", height: "150px" }}
//                   alt={article.title}
//                 />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {article.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "0.8em",
//                     margin: "0",
//                     width: "250px",
//                   }}
//                 >
//                   {article.content.length > 150
//                     ? `${article.content.substring(0, 150)}...`
//                     : article.content}
//                 </p>
//                 <span className="readmore">
//                   <p>Read more</p>
//                   <img src={Arrow} className="readmorearrow" alt="Read more" />
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import user from "./user.png";
// import "./website.css";
// import Arrow from "./right-arrow.png";
// import instance from "./axios";

// export default function Article() {
//   const { id } = useParams();
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(true);
//   const [article, setArticle] = useState(null);
//   const [similarArticles, setSimilarArticles] = useState([]);
//   const [comments, setComments] = useState([]);

//   // Improved image URL handler with random placeholder fallback
//   const getImageUrl = (path) => {
//     if (!path) return `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/800/400`;
//     if (path.startsWith('http')) return path;
//     return `${instance.defaults.baseURL}${path}`;
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);

//     const fetchArticleData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await instance.get(`/api/articles/${id}`);
//         if (response.data.success) {
//           setArticle(response.data.article);
//           setSimilarArticles(response.data.similarArticles || []);
//           setComments(response.data.comments || []);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchArticleData();
//   }, [id]);

//   if (isLoading) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <p>Article not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
//           <div
//             style={{
//               margin: "20px",
//               borderRadius: "30px",
//               boxShadow: "4px 4px 20px black",
//               width: "fit-content",
//               height: "fit-content",
//             }}
//           >
//             <img
//               src={getImageUrl(article.image)}
//               style={{ margin: "10px", width: "800px", height: "400px", objectFit: "cover" }}
//               alt={article.title}
//             />
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "bold",
//                 margin: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               {article.title}
//             </p>
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1em",
//                 width: "800px",
//                 margin: "10px",
//               }}
//             >
//               {article.content}
//             </p>
//           </div>

//           <div
//             style={{
//               width: "600px",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "25px",
//             }}
//             className="commentdiv"
//           >
//             <form action="" className="textColor">
//               <label
//                 htmlFor=""
//                 style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
//               >
//                 Comments
//               </label>
//               {comments.map((comment, index) => (
//                 <div key={index}>
//                   <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//                     <p style={{ color: "black", fontWeight: "300" }}>{comment.user || 'Anonymous'}</p>
//                     <img
//                       src={user}
//                       style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                       alt="User"
//                     />
//                   </span>
//                   <p>{comment.text}</p>
//                 </div>
//               ))}
//               <br />
//               <textarea
//                 name="comment"
//                 id="comment"
//                 style={{
//                   resize: "none",
//                   borderRadius: "10px",
//                   width: "600px",
//                   height: "200px",
//                 }}
//               ></textarea>
//               <br />
//               <Link
//                 style={{
//                   textDecoration: "none",
//                   color: "black",
//                   fontSize: "1.1em",
//                   marginLeft: "510px",
//                 }}
//                 to="/login"
//               >
//                 Add a comment
//               </Link>
//             </form>
//           </div>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <div className="TrendingArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Trending Articles
//             </p>
//             {similarArticles.slice(0, 4).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <img
//                     style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                     src={getImageUrl(article.image)}
//                     alt={article.title}
//                   />
//                   <div>
//                     <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                       {article.title}
//                     </p>
//                     <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                       {article.formattedDate || 'Recently'}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="Register">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "200",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Newsletter
//             </p>
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.1em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Stay informed
//             </p>
//             <input
//               type="email"
//               placeholder="Put your Email here..."
//               className="RegisterInput"
//             />
//             <button className="RegisterButton">Subscribe</button>
//           </div>

//           <div className="SimilarArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Similar Articles
//             </p>
//             {similarArticles.slice(0, 6).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <img
//                     style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                     src={getImageUrl(article.image)}
//                     alt={article.title}
//                   />
//                   <div>
//                     <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                       {article.title}
//                     </p>
//                     <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                       {article.formattedDate || 'Recently'}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div
//             className="discoverArticles"
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <center>
//               <h1 className="textColor">Discover more</h1>
//             </center>
//             {similarArticles.slice(0, 2).map((article) => (
//               <div className="multiplearticles" key={article.id}>
//                 <img
//                   src={getImageUrl(article.image)}
//                   style={{ width: "250px", height: "150px" }}
//                   alt={article.title}
//                 />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {article.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "0.8em",
//                     margin: "0",
//                     width: "250px",
//                   }}
//                 >
//                   {article.content.length > 150
//                     ? `${article.content.substring(0, 150)}...`
//                     : article.content}
//                 </p>
//                 <Link
//                   to={`/article/${article.id}`}
//                   className="readmore"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <p>Read more</p>
//                   <img src={Arrow} className="readmorearrow" alt="Read more" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import user from "./user.png";
// import "./website.css";
// import Arrow from "./right-arrow.png";
// import instance from "./axios";

// export default function Article() {
//   const { id } = useParams();
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(true);
//   const [article, setArticle] = useState(null);
//   const [similarArticles, setSimilarArticles] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Improved image URL handler with random placeholder fallback
//   const getImageUrl = (path) => {
//     if (!path) return `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/800/400`;
//     if (path.startsWith('http')) return path;
//     return `${instance.defaults.baseURL}${path}`;
//   };

//   // Check if user is logged in
//   const checkAuthStatus = () => {
//     const token = localStorage.getItem("authToken");
//     setIsLoggedIn(!!token);
//   };

//   useEffect(() => {
//     checkAuthStatus();

//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);

//     const fetchArticleData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await instance.get(`/api/articles/${id}`);
//         if (response.data.success) {
//           setArticle(response.data.article);
//           setSimilarArticles(response.data.similarArticles || []);
//           setComments(response.data.comments || []);
//         }
//       } catch (error) {
//         console.error("Error fetching article:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchArticleData();
//   }, [id]);

//   // Handle comment submission
//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!commentText.trim()) return;

//     setIsSubmitting(true);
//     setError("");

//     try {
//       const response = await instance.post('/api/comments', {
//         articleId: id,
//         text: commentText
//       });

//       if (response.data.success) {
//         // Add the new comment to the comments array
//         setComments([response.data.comment, ...comments]);
//         setCommentText(""); // Clear the comment field
//       }
//     } catch (error) {
//       console.error("Error submitting comment:", error);
//       if (error.response?.status === 401) {
//         setError("You must be logged in to comment");
//       } else if (error.response?.data?.errors) {
//         setError(Object.values(error.response.data.errors)[0][0] || "Failed to submit comment");
//       } else {
//         setError("Failed to submit comment. Please try again.");
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <p>Article not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
//           <div
//             style={{
//               margin: "20px",
//               borderRadius: "30px",
//               boxShadow: "4px 4px 20px black",
//               width: "fit-content",
//               height: "fit-content",
//             }}
//           >
//             <img
//               src={getImageUrl(article.image)}
//               style={{ margin: "10px", width: "800px", height: "400px", objectFit: "cover" }}
//               alt={article.title}
//             />
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "bold",
//                 margin: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               {article.title}
//             </p>
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1em",
//                 width: "800px",
//                 margin: "10px",
//               }}
//             >
//               {article.content}
//             </p>
//           </div>

//           <div
//             style={{
//               width: "600px",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "25px",
//             }}
//             className="commentdiv"
//           >
//             <div className="textColor">
//               <label
//                 htmlFor=""
//                 style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
//               >
//                 Comments
//               </label>
//               {comments.length > 0 ? (
//                 comments.map((comment, index) => (
//                   <div key={index} style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
//                     <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//                       <p style={{ color: "black", fontWeight: "500" }}>{comment.user || 'Anonymous'}</p>
//                       <img
//                         src={user}
//                         style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                         alt="User"
//                       />
//                     </span>
//                     <p style={{ marginTop: "5px" }}>{comment.text}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p style={{ color: "gray", marginTop: "10px" }}>No comments yet. Be the first to comment!</p>
//               )}
//               <br />

//               {error && <div style={{ color: "red", margin: "10px 0" }}>{error}</div>}

//               {isLoggedIn ? (
//                 <form onSubmit={handleCommentSubmit}>
//                   <textarea
//                     name="comment"
//                     id="comment"
//                     value={commentText}
//                     onChange={(e) => setCommentText(e.target.value)}
//                     placeholder="Write your comment here..."
//                     style={{
//                       resize: "none",
//                       borderRadius: "10px",
//                       width: "600px",
//                       height: "200px",
//                       padding: "10px",
//                       fontFamily: "inherit"
//                     }}
//                   ></textarea>
//                   <br />
//                   <button
//                     type="submit"
//                     disabled={isSubmitting || !commentText.trim()}
//                     style={{
//                       backgroundColor: "#4CAF50",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "5px",
//                       padding: "10px 20px",
//                       float: "right",
//                       cursor: "pointer",
//                       opacity: (isSubmitting || !commentText.trim()) ? "0.7" : "1"
//                     }}
//                   >
//                     {isSubmitting ? "Posting..." : "Add Comment"}
//                   </button>
//                 </form>
//               ) : (
//                 <div style={{ textAlign: "center", marginTop: "10px" }}>
//                   <p style={{ color: "gray", marginBottom: "10px" }}>You need to log in to comment</p>
//                   <Link
//                     style={{
//                       textDecoration: "none",
//                       backgroundColor: "#4285F4",
//                       color: "white",
//                       padding: "10px 20px",
//                       borderRadius: "5px",
//                       fontWeight: "bold",
//                     }}
//                     to="/login"
//                   >
//                     Log In to Comment
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <div className="TrendingArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Trending Articles
//             </p>
//             {similarArticles.slice(0, 4).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <img
//                     style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                     src={getImageUrl(article.image)}
//                     alt={article.title}
//                   />
//                   <div>
//                     <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                       {article.title}
//                     </p>
//                     <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                       {article.formattedDate || 'Recently'}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="Register">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "200",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Newsletter
//             </p>
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.1em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Stay informed
//             </p>
//             <input
//               type="email"
//               placeholder="Put your Email here..."
//               className="RegisterInput"
//             />
//             <button className="RegisterButton">Subscribe</button>
//           </div>

//           <div className="SimilarArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Similar Articles
//             </p>
//             {similarArticles.slice(0, 6).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <img
//                     style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                     src={getImageUrl(article.image)}
//                     alt={article.title}
//                   />
//                   <div>
//                     <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                       {article.title}
//                     </p>
//                     <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                       {article.formattedDate || 'Recently'}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div
//             className="discoverArticles"
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <center>
//               <h1 className="textColor">Discover more</h1>
//             </center>
//             {similarArticles.slice(0, 2).map((article) => (
//               <div className="multiplearticles" key={article.id}>
//                 <img
//                   src={getImageUrl(article.image)}
//                   style={{ width: "250px", height: "150px" }}
//                   alt={article.title}
//                 />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {article.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "0.8em",
//                     margin: "0",
//                     width: "250px",
//                   }}
//                 >
//                   {article.content.length > 150
//                     ? `${article.content.substring(0, 150)}...`
//                     : article.content}
//                 </p>
//                 <Link
//                   to={`/article/${article.id}`}
//                   className="readmore"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <p>Read more</p>
//                   <img src={Arrow} className="readmorearrow" alt="Read more" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import user from "./user.png";
// import "./website.css";
// import Arrow from "./right-arrow.png";
// import instance from "./axios";

// export default function Article() {
//   const { id } = useParams();
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(true);
//   const [article, setArticle] = useState(null);
//   const [similarArticles, setSimilarArticles] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Improved image URL handler with random placeholder fallback
//   const getImageUrl = (path) => {
//     if (!path) return `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/800/400`;
//     if (path.startsWith('http')) return path;
//     return `${instance.defaults.baseURL}${path}`;
//   };

//   // Check if user is logged in
//   const checkAuthStatus = () => {
//     const token = localStorage.getItem("authToken");
//     setIsLoggedIn(!!token);
//   };

//   useEffect(() => {
//     checkAuthStatus();

//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);

//     const fetchArticleData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await instance.get(`/api/articles/${id}`);
//         if (response.data.success) {
//           setArticle(response.data.article);
//           setSimilarArticles(response.data.similarArticles || []);
//           setComments(response.data.comments || []);
//         }
//       } catch (error) {
//         console.error("Error fetching article:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchArticleData();
//   }, [id]);

//   // Handle comment submission
//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!commentText.trim()) return;

//     setIsSubmitting(true);
//     setError("");

//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await instance.post('/api/comments', {
//         articleId: id,
//         text: commentText
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       if (response.data.success) {
//         // Add the new comment to the comments array
//         setComments([response.data.comment, ...comments]);
//         setCommentText(""); // Clear the comment field
//       }
//     } catch (error) {
//       console.error("Error submitting comment:", error);
//       if (error.response?.status === 401) {
//         setError("You must be logged in to comment");
//         setIsLoggedIn(false);
//       } else if (error.response?.data?.errors) {
//         setError(Object.values(error.response.data.errors)[0][0] || "Failed to submit comment");
//       } else {
//         setError("Failed to submit comment. Please try again.");
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}>
//         <p>Article not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
//           <div
//             style={{
//               margin: "20px",
//               borderRadius: "30px",
//               boxShadow: "4px 4px 20px black",
//               width: "fit-content",
//               height: "fit-content",
//             }}
//           >
//             <img
//               src={getImageUrl(article.image)}
//               style={{ margin: "10px", width: "800px", height: "400px", objectFit: "cover" }}
//               alt={article.title}
//             />
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "bold",
//                 margin: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               {article.title}
//             </p>
//             <p
//               className="textColor"
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1em",
//                 width: "800px",
//                 margin: "10px",
//               }}
//             >
//               {article.content}
//             </p>
//           </div>

//           <div
//             style={{
//               width: "600px",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "25px",
//             }}
//             className="commentdiv"
//           >
//             <div className="textColor">
//               <label
//                 htmlFor=""
//                 style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
//               >
//                 Comments
//               </label>
//               {comments.length > 0 ? (
//                 comments.map((comment, index) => (
//                   <div key={index} style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
//                     <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
//                       <p style={{ color: "black", fontWeight: "500" }}>{comment.user || 'Anonymous'}</p>
//                       <img
//                         src={user}
//                         style={{ width: "25px", height: "25px", marginTop: "15px" }}
//                         alt="User"
//                       />
//                     </span>
//                     <p style={{ marginTop: "5px" }}>{comment.text}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p style={{ color: "gray", marginTop: "10px" }}>No comments yet. Be the first to comment!</p>
//               )}
//               <br />

//               {error && <div style={{ color: "red", margin: "10px 0" }}>{error}</div>}

//               {isLoggedIn ? (
//                 <form onSubmit={handleCommentSubmit}>
//                   <textarea
//                     name="comment"
//                     id="comment"
//                     value={commentText}
//                     onChange={(e) => setCommentText(e.target.value)}
//                     placeholder="Write your comment here..."
//                     style={{
//                       resize: "none",
//                       borderRadius: "10px",
//                       width: "600px",
//                       height: "200px",
//                       padding: "10px",
//                       fontFamily: "inherit"
//                     }}
//                   ></textarea>
//                   <br />
//                   <button
//                     type="submit"
//                     disabled={isSubmitting || !commentText.trim()}
//                     style={{
//                       backgroundColor: "#4CAF50",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "5px",
//                       padding: "10px 20px",
//                       float: "right",
//                       cursor: "pointer",
//                       opacity: (isSubmitting || !commentText.trim()) ? "0.7" : "1"
//                     }}
//                   >
//                     {isSubmitting ? "Posting..." : "Add Comment"}
//                   </button>
//                 </form>
//               ) : (
//                 <div style={{ textAlign: "center", marginTop: "10px" }}>
//                   <p style={{ color: "gray", marginBottom: "10px" }}>You need to log in to comment</p>
//                   <Link
//                     style={{
//                       textDecoration: "none",
//                       backgroundColor: "#4285F4",
//                       color: "white",
//                       padding: "10px 20px",
//                       borderRadius: "5px",
//                       fontWeight: "bold",
//                     }}
//                     to="/login"
//                   >
//                     Log In to Comment
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <div className="TrendingArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Trending Articles
//             </p>
//             {similarArticles.slice(0, 4).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <img
//                     style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                     src={getImageUrl(article.image)}
//                     alt={article.title}
//                   />
//                   <div>
//                     <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                       {article.title}
//                     </p>
//                     <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                       {article.formattedDate || 'Recently'}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="Register">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "2.6em",
//                 fontWeight: "200",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Newsletter
//             </p>
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.1em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Stay informed
//             </p>
//             <input
//               type="email"
//               placeholder="Put your Email here..."
//               className="RegisterInput"
//             />
//             <button className="RegisterButton">Subscribe</button>
//           </div>

//           <div className="SimilarArticles">
//             <p
//               style={{
//                 fontFamily: "Oswald",
//                 fontSize: "1.8em",
//                 fontWeight: "100",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "white",
//               }}
//             >
//               Similar Articles
//             </p>
//             {similarArticles.slice(0, 6).map((article) => (
//               <Link
//                 to={`/article/${article.id}`}
//                 key={article.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginBottom: "15px" }}>
//                   <img
//                     style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)", width: "140px", height: "70px" }}
//                     src={getImageUrl(article.image)}
//                     alt={article.title}
//                   />
//                   <div>
//                     <p style={{ color: "white", fontFamily: "Oswald", fontSize: "1.5em", margin: "0" }}>
//                       {article.title}
//                     </p>
//                     <p style={{ color: "gray", fontSize: "0.8em", margin: "0" }}>
//                       {article.formattedDate || 'Recently'}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div
//             className="discoverArticles"
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <center>
//               <h1 className="textColor">Discover more</h1>
//             </center>
//             {similarArticles.slice(0, 2).map((article) => (
//               <div className="multiplearticles" key={article.id}>
//                 <img
//                   src={getImageUrl(article.image)}
//                   style={{ width: "250px", height: "150px" }}
//                   alt={article.title}
//                 />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {article.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "0.8em",
//                     margin: "0",
//                     width: "250px",
//                   }}
//                 >
//                   {article.content.length > 150
//                     ? `${article.content.substring(0, 150)}...`
//                     : article.content}
//                 </p>
//                 <Link
//                   to={`/article/${article.id}`}
//                   className="readmore"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <p>Read more</p>
//                   <img src={Arrow} className="readmorearrow" alt="Read more" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import user from "./user.png";
import "./website.css";
import Arrow from "./right-arrow.png";
import instance from "./axios";

export default function Article() {
  const { id } = useParams();
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [similarArticles, setSimilarArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dictionary related state
  const [selectedWord, setSelectedWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [loadingSynonyms, setLoadingSynonyms] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);
  const [dictionaryPosition, setDictionaryPosition] = useState({ x: 0, y: 0 });
  const dictionaryRef = useRef(null);

  // Improved image URL handler with random placeholder fallback
  const getImageUrl = (path) => {
    if (!path)
      return `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/800/400`;
    if (path.startsWith("http")) return path;
    return `${instance.defaults.baseURL}${path}`;
  };

  // Check if user is logged in
  const checkAuthStatus = () => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  };

  // Handle text selection for dictionary
  const handleTextSelect = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText && selectedText.length > 0 && selectedText.length < 30) {
      // Get selection position
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelectedWord(selectedText);
      setShowDictionary(true);
      setDictionaryPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + window.scrollY,
      });
    } else {
      setShowDictionary(false);
    }
  };

  // Fetch synonyms from API
  const fetchSynonyms = async () => {
    if (!selectedWord) return;

    setLoadingSynonyms(true);
    setSynonyms([]);

    try {
      const response = await instance.get("/api/dictionary/synonyms", {
        params: { word: selectedWord },
      });

      if (response.data.success) {
        setSynonyms(response.data.synonyms);
      } else {
        setSynonyms([]);
      }
    } catch (error) {
      console.error("Error fetching synonyms:", error);
      setSynonyms([]);
    } finally {
      setLoadingSynonyms(false);
    }
  };

  // Click outside handler to close dictionary
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dictionaryRef.current &&
        !dictionaryRef.current.contains(event.target)
      ) {
        setShowDictionary(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch synonyms when word is selected
  useEffect(() => {
    if (selectedWord) {
      fetchSynonyms();
    }
  }, [selectedWord]);

  useEffect(() => {
    checkAuthStatus();

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const fetchArticleData = async () => {
      try {
        setIsLoading(true);
        const response = await instance.get(`/api/articles/${id}`);
        if (response.data.success) {
          setArticle(response.data.article);
          setSimilarArticles(response.data.similarArticles || []);
          setComments(response.data.comments || []);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleData();
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setIsSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem("authToken");
      const response = await instance.post(
        "/api/comments",
        {
          articleId: id,
          text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Add the new comment to the comments array
        setComments([response.data.comment, ...comments]);
        setCommentText(""); // Clear the comment field
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      if (error.response?.status === 401) {
        setError("You must be logged in to comment");
        setIsLoggedIn(false);
      } else if (error.response?.data?.errors) {
        setError(
          Object.values(error.response.data.errors)[0][0] ||
            "Failed to submit comment"
        );
      } else {
        setError("Failed to submit comment. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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

  if (!article) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Article not found</p>
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
              src={getImageUrl(article.image)}
              style={{
                margin: "10px",
                width: "800px",
                height: "400px",
                objectFit: "cover",
              }}
              alt={article.title}
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
              {article.title}
            </p>
            <div
              className="textColor article-content"
              style={{
                fontFamily: "Oswald",
                fontSize: "1em",
                width: "800px",
                margin: "10px",
              }}
              onMouseUp={handleTextSelect}
            >
              {article.content}
            </div>
          </div>

          {/* Dictionary popup */}
          {showDictionary && (
            <div
              ref={dictionaryRef}
              className="dictionary-popup"
              style={{
                position: "absolute",
                left: `${dictionaryPosition.x}px`,
                top: `${dictionaryPosition.y}px`,
                transform: "translateX(-50%)",
                backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
                color: theme === "dark" ? "#fff" : "#333",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                zIndex: 1000,
                maxWidth: "300px",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h3 style={{ margin: 0 }}>"{selectedWord}"</h3>
                <button
                  onClick={() => setShowDictionary(false)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    color: theme === "dark" ? "#fff" : "#333",
                  }}
                >
                  ×
                </button>
              </div>

              <div>
                <button
                  onClick={fetchSynonyms}
                  style={{
                    backgroundColor: "#4285F4",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  Get Synonyms
                </button>

                <div style={{ marginTop: "10px" }}>
                  {loadingSynonyms ? (
                    <p>Loading synonyms...</p>
                  ) : synonyms.length > 0 ? (
                    <div>
                      <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                        Synonyms:
                      </p>
                      <ul style={{ paddingLeft: "20px", margin: "5px 0" }}>
                        {synonyms.map((synonym, index) => (
                          <li key={index}>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p>No synonyms found</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              width: "600px",
              margin: "20px",
              padding: "20px",
              borderRadius: "25px",
            }}
            className="commentdiv"
          >
            <div className="textColor">
              <label
                htmlFor=""
                style={{ fontSize: "1.5em", fontWeight: "300", color: "black" }}
              >
                Comments
              </label>
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "15px",
                      borderBottom: "1px solid #eee",
                      paddingBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5px",
                      }}
                    >
                      <p style={{ color: "black", fontWeight: "500" }}>
                        {comment.user || "Anonymous"}
                      </p>
                      <img
                        src={user}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginTop: "15px",
                        }}
                        alt="User"
                      />
                    </span>
                    <p style={{ marginTop: "5px" }}>{comment.text}</p>
                  </div>
                ))
              ) : (
                <p style={{ color: "gray", marginTop: "10px" }}>
                  No comments yet. Be the first to comment!
                </p>
              )}
              <br />

              {error && (
                <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
              )}

              {isLoggedIn ? (
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    name="comment"
                    id="comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment here..."
                    style={{
                      resize: "none",
                      borderRadius: "10px",
                      width: "600px",
                      height: "200px",
                      padding: "10px",
                      fontFamily: "inherit",
                    }}
                  ></textarea>
                  <br />
                  <button
                    type="submit"
                    disabled={isSubmitting || !commentText.trim()}
                    className="SubscribeButton"
                    style={{width:"fit-content", float:"right",opacity:isSubmitting ? "0.7" : "1"}}
       
                  >
                    {isSubmitting ? (
                      <p >Posting...</p>
                    ) : (
                      <p>Add Comment</p>
                    )}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <p style={{ color: "gray", marginBottom: "10px" }}>
                    You need to log in to comment
                  </p>
                  <Link
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#4285F4",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                    to="/login"
                  >
                    Log In to Comment
                  </Link>
                </div>
              )}
            </div>
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
            {similarArticles.slice(0, 4).map((article) => (
              <Link
                to={`/article/${article.id}`}
                key={article.id}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    style={{
                      boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)",
                      width: "140px",
                      height: "70px",
                    }}
                    src={getImageUrl(article.image)}
                    alt={article.title}
                  />
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Oswald",
                        fontSize: "1.5em",
                        margin: "0",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      style={{ color: "gray", fontSize: "0.8em", margin: "0" }}
                    >
                      {article.formattedDate || "Recently"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
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
            {similarArticles.slice(0, 6).map((article) => (
              <Link
                to={`/article/${article.id}`}
                key={article.id}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    style={{
                      boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)",
                      width: "140px",
                      height: "70px",
                    }}
                    src={getImageUrl(article.image)}
                    alt={article.title}
                  />
                  <div>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Oswald",
                        fontSize: "1.5em",
                        margin: "0",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      style={{ color: "gray", fontSize: "0.8em", margin: "0" }}
                    >
                      {article.formattedDate || "Recently"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="discoverArticles"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <center>
              <h1 className="textColor">Discover more</h1>
            </center>
            {similarArticles.slice(0, 2).map((article) => (
              <div className="multiplearticles" key={article.id}>
                <img
                  src={getImageUrl(article.image)}
                  style={{ width: "250px", height: "150px" }}
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
                    width: "250px",
                  }}
                >
                  {article.content.length > 150
                    ? `${article.content.substring(0, 150)}...`
                    : article.content}
                </p>
                <Link
                  to={`/article/${article.id}`}
                  className="readmore"
                  style={{ textDecoration: "none" }}
                >
                  <p>Read more</p>
                  <img src={Arrow} className="readmorearrow" alt="Read more" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
