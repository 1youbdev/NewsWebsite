// import React, { useState, useEffect } from "react";
// import "./website.css";
// import ArrowBlack from "./right-arrow.png";
// import ArrowWhite from "./right-arroww.png";
// import Article from "./Article";
// import { Link } from "react-router-dom";
// import Politics from "./Politics";
// export default function Section() {
//   const [theme, setTheme] = useState("dark");
//   // const [showFullContent, setShowFullContent] = useState(false);

//   // const toggleContent = () =>{
//   //   setShowFullContent(!showFullContent);
//   // }
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
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "50px",
//           width: "100%",
//           maxWidth: "100vw",
//           marginTop: "20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: "50px",
//             width: "100%",
//             maxWidth: "100vw",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "0px",
//               color: "white",
//               padding: "3px",
//               margin: "0px",
//               width: "100%",
//               height: "fit-content",
//             }}
//           >
//             <div className="Laune">
//               <img src="https://picsum.photos/id/1/500/300" />
//               <p
//                 className="textColor"
//                 style={{
//                   fontFamily: "Oswald",
//                   fontSize: "2.6em",
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
//                   fontSize: "1em",
//                   margin: "0",
//                   width: "500px",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab
//                 ipsa quia. Non iusto eaque fuga atque quis dolores et, possimus,
//                 veniam quidem voluptatibus recusandae eum est fugit totam
//                 numquam? Debitis tempore nisi officia, illum expedita, earum
//                 itaque eum inventore quo nostrum eligendi omnis. Corrupti
//                 voluptatem sequi eligendi nulla earum minima velit quod esse
//                 placeat. Possimus eum minima voluptatibus magni? Beatae, natus
//                 nam accusamus velit fuga quae molestias architecto fugiat
//                 dolores unde, culpa optio incidunt totam aspernatur excepturi
//                 ipsum provident alias eius fugit officia modi a rem! Quidem,
//                 maiores voluptates!eligendi nulla earum minima velit quod esse
//                 placeat. Possimus eum minima voluptatibus magni? Beatae, natus
//                 nam accusamus velit fuga quae molestias architecto fugiat
//                 dolores unde, culpa optio incidunt totam aspernatur excepturi
//                 ipsum provident alias eius fugit officia modi a rem! Quidem,
//                 maiores voluptates! aspernatur excepturi ipsum provident alias
//                 eius fugit officia modi a rem! Quidem, maiores
//                 voluptates!excepturi ipsum provident alias eius fugit officia
//                 modi a rem! Quidem
//               </p>
//               <span className="readmore">
//                 <Link to="/Article" className="textColor">
//                   Read more
//                 </Link>
//                 <img
//                   src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                   className="readmorearrow"
//                 />
//               </span>
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "20px",
//               flexWrap: "wrap",
//               width: "100%",
//               maxWidth: "100vw",
//             }}
//           >
//             <div className="multiplearticles">
//               <img src="https://picsum.photos/id/121/250/150" />
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
//                 <Link to="/Article" className="textColor">
//                   Read more
//                 </Link>
//                 <img
//                   src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                   className="readmorearrow"
//                 />
//               </span>
//             </div>
//             <div className="multiplearticles">
//               <img src="https://picsum.photos/id/41/250/150" />
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
//                 <Link to="/Article" className="textColor">
//                   Read more
//                 </Link>
//                 <img
//                   src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                   className="readmorearrow"
//                 />
//               </span>
//             </div>
//           </div>
//           <div
//             style={{
//               margin: "0",
//               padding: "0",
//               width: "100%",
//               height: "fit-content",
//             }}
//           >
//             <div
//               style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//             >
//               <div className="multiplearticles">
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.8em",
//                     fontWeight: "400",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   Latest Articles
//                 </p>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p className="colorofnavbar">05:47</p>Réformes
//                     gouvernementales : quel impact sur les prochaines élections
//                     ?
//                   </span>
//                 </div>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     {" "}
//                     <p className="colorofnavbar">06:01</p>
//                     Inflation et pouvoir d'achat : les défis de l'année à venir.
//                   </span>
//                 </div>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p className="colorofnavbar">07:31</p>
//                     Télétravail et bien-être : une révolution durable ?
//                   </span>
//                 </div>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p className="colorofnavbar">08:31</p>
//                     Les Jeux Olympiques 2024 : tout ce qu’il faut savoir.
//                   </span>
//                 </div>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p className="colorofnavbar">09:13</p>
//                     Les nouvelles dynamiques économiques au Moyen-Orient.
//                   </span>
//                 </div>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p className="colorofnavbar">17:43</p>
//                     Crises géopolitiques : quels enjeux pour l’Europe ?.
//                   </span>
//                 </div>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p className="colorofnavbar">18:32</p>
//                     L’essor des plateformes de streaming : menace ou opportunité
//                     pour le cinéma ?
//                   </span>
//                 </div>
//                 <div
//                   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                 >
//                   <span
//                     className="textColor"
//                     style={{
//                       cursor: "pointer",
//                       fontSize: "0.85em",
//                       fontWeight: "400",
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p className="colorofnavbar">23:11</p>
//                     Cryptomonnaies et régulation : quel avenir pour le Bitcoin ?
//                   </span>
//                 </div>
//               </div>

//               <div
//                 className="newsletterDiv"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "20px",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "2.6em",
//                     fontWeight: "200",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     color: "white",
//                     height: "fit-content",
//                   }}
//                 >
//                   Newsletter
//                 </p>
//                 <p
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.1em",
//                     fontWeight: "100",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     color: "white",
//                   }}
//                 >
//                   Stay informed
//                 </p>
//                 <Link to="/login">
//                   <button
//                     className="RegisterButton"
//                     style={{ width: "250px", height: "40px" }}
//                   >
//                     Subscribe
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <Link to="/Politics" className="textColor">
//             <h1 className="categories">Politics</h1>
//           </Link>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "20px",
//               flexWrap: "wrap",
//               width: "100%",
//               maxWidth: "100vw",
//               marginTop: "0",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "50px",
//                 flexDirection: "row",
//               }}
//             >
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/28/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/84/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/99/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/100/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//             </div>
//             <div>
//               <Link to="/Society" className="textColor">
//                 <h1 className="categories">Society</h1>
//               </Link>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "50px",
//                 flexDirection: "row",
//               }}
//             >
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/281/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/328/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/982/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//             </div>
//             {/* <button onClick={toggleContent} style={{ marginTop: "10px" }}>
//         {showFullContent ? "Show Less" : "See More"}
//       </button> */}
//             <div>
//               <Link to="/Sports" className="textColor">
//                 <h1 className="categories">Sports</h1>
//               </Link>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "50px",
//                 flexDirection: "row",
//               }}
//             >
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/927/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/721/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/615/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/413/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//             </div>
//             <div>
//               <Link to="/Media" className="textColor">
//                 <h1 className="categories">Media</h1>
//               </Link>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "50px",
//                 flexDirection: "row",
//               }}
//             >
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/500/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/231/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/661/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//               <div className="multiplearticles">
//                 <img src="https://picsum.photos/id/702/250/150" />
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
//                   Main title
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
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
//                   ab ipsa quia. Non iusto eaque fuga atque quis dolores et,
//                   possimus, veniam quidem voluptatibus recusandae eum est fugit
//                   totam numquam? Debitis tempore nisi officia, illum expedita,
//                   earum itaque eum
//                 </p>
//                 <span className="readmore">
//                   <Link to="/Article" className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? ArrowWhite : ArrowBlack}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import instance from "./axios";

// export default function Section() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sectionData, setSectionData] = useState({
//     latestArticle: null,
//     featuredArticles: [],
//     categorizedArticles: []
//   });

//   useEffect(() => {
//     const fetchSectionData = async () => {
//       try {
//         setLoading(true);
//         const response = await instance.get("/api/sections");
//         if (response.data.success) {
//           setSectionData(response.data);
//         } else {
//           setError("Failed to load section data");
//         }
//       } catch (err) {
//         console.error("Error fetching section data:", err);
//         setError("Failed to connect to the server");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSectionData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="section-loading">
//         <p>Loading content...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="section-error">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="section-container">
//       {/* Latest Article Header Section */}
//       {sectionData.latestArticle && (
//         <div className="latest-article-header">
//           <div className="latest-article-tag">Latest News</div>
//           <div className="latest-article-timestamp">
//             {sectionData.latestArticle.formattedDate}
//           </div>
//           <h2 className="latest-article-title">
//             <Link to={`/articles/${sectionData.latestArticle.id}`}>
//               {sectionData.latestArticle.title}
//             </Link>
//           </h2>
//         </div>
//       )}

//       {/* Featured Articles Section */}
//       <div className="featured-articles-section">
//         <h2 className="section-title">Featured Articles</h2>
//         <div className="featured-articles-grid">
//           {sectionData.featuredArticles &&
//             sectionData.featuredArticles.map((article) => (
//               <div key={article.id} className="featured-article-card">
//                 {article.image && (
//                   <div className="article-image">
//                     <img
//                       src={article.image}
//                       alt={article.title}
//                       style={{ width: "100%", height: "200px", objectFit: "cover" }}
//                     />
//                   </div>
//                 )}
//                 <div className="article-category">{article.categoryName}</div>
//                 <div className="article-timestamp">{article.formattedDate}</div>
//                 <h3 className="article-title">
//                   <Link to={`/articles/${article.id}`}>{article.title}</Link>
//                 </h3>
//                 <div className="article-preview">{article.content}</div>
//                 <div className="article-author">By {article.author}</div>
//               </div>
//             ))}
//         </div>
//       </div>

//       {/* Categorized Articles Sections */}
//       {sectionData.categorizedArticles &&
//         sectionData.categorizedArticles.map((categoryGroup) => (
//           <div
//             key={categoryGroup.categoryId}
//             className="category-articles-section"
//           >
//             <div className="category-header">
//               <h2 className="category-title">{categoryGroup.category}</h2>
//               <Link to={`/categories/${categoryGroup.categoryId}`} className="view-all-link">
//                 View All
//               </Link>
//             </div>
//             <div className="category-articles-grid">
//               {categoryGroup.articles.map((article) => (
//                 <div key={article.id} className="category-article-card">
//                   {article.image && (
//                     <div className="article-image">
//                       <img
//                         src={article.image}
//                         alt={article.title}
//                         style={{ width: "100%", height: "150px", objectFit: "cover" }}
//                       />
//                     </div>
//                   )}
//                   <div className="article-timestamp">{article.formattedDate}</div>
//                   <h3 className="article-title">
//                     <Link to={`/articles/${article.id}`}>{article.title}</Link>
//                   </h3>
//                   <div className="article-preview">{article.content}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import instance from "./axios";

// export default function Section() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sectionData, setSectionData] = useState({
//     latestArticle: null,
//     featuredArticles: [],
//     categorizedArticles: []
//   });
//   const [theme, setTheme] = useState("dark");

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

//     const fetchSectionData = async () => {
//       try {
//         setLoading(true);
//         const response = await instance.get("/api/sections");
//         if (response.data.success) {
//           setSectionData(response.data);
//         } else {
//           setError("Failed to load section data");
//         }
//       } catch (err) {
//         console.error("Error fetching section data:", err);
//         setError("Failed to connect to the server");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSectionData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="section-loading">
//         <p>Loading content...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="section-error">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "50px",
//           width: "100%",
//           maxWidth: "100vw",
//           marginTop: "20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: "50px",
//             width: "100%",
//             maxWidth: "100vw",
//           }}
//         >
//           {/* Latest Article Section */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "0px",
//               color: "white",
//               padding: "3px",
//               margin: "0px",
//               width: "100%",
//               height: "fit-content",
//             }}
//           >
//             {sectionData.latestArticle && (
//               <div className="Laune">
//                 <img src={sectionData.latestArticle.image || "https://picsum.photos/id/1/500/300"} />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "2.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {sectionData.latestArticle.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1em",
//                     margin: "0",
//                     width: "500px",
//                   }}
//                 >
//                   {sectionData.latestArticle.content}
//                 </p>
//                 <span className="readmore">
//                   <Link to={`/articles/${sectionData.latestArticle.id}`} className="textColor">
//                     Read more
//                   </Link>
//                   <img
//                     src={theme === "dark" ? "/right-arroww.png" : "/right-arrow.png"}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Featured Articles Section */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "20px",
//               flexWrap: "wrap",
//               width: "100%",
//               maxWidth: "100vw",
//             }}
//           >
//             {sectionData.featuredArticles &&
//               sectionData.featuredArticles.slice(0, 2).map((article) => (
//                 <div key={article.id} className="multiplearticles">
//                   <img src={article.image || `https://picsum.photos/id/${article.id || 121}/250/150`} />
//                   <p
//                     className="textColor"
//                     style={{
//                       fontFamily: "Oswald",
//                       fontSize: "1.6em",
//                       fontWeight: "bold",
//                       margin: "0",
//                       letterSpacing: "1px",
//                     }}
//                   >
//                     {article.title}
//                   </p>
//                   <p
//                     className="textColor"
//                     style={{
//                       fontFamily: "Oswald",
//                       fontSize: "0.8em",
//                       margin: "0",
//                       width: "250px",
//                     }}
//                   >
//                     {article.content}
//                   </p>
//                   <span className="readmore">
//                     <Link to={`/articles/${article.id}`} className="textColor">
//                       Read more
//                     </Link>
//                     <img
//                       src={theme === "dark" ? "/right-arroww.png" : "/right-arrow.png"}
//                       className="readmorearrow"
//                     />
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* Latest Articles Section */}
//           <div
//             style={{
//               margin: "0",
//               padding: "0",
//               width: "100%",
//               height: "fit-content",
//             }}
//           >
//             <div
//               style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//             >
//               <div className="multiplearticles">
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.8em",
//                     fontWeight: "400",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   Latest Articles
//                 </p>
//                 {sectionData.featuredArticles &&
//                   sectionData.featuredArticles.slice(0, 8).map((article) => (
//                     <div
//                       key={article.id}
//                       style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                     >
//                       <span
//                         className="textColor"
//                         style={{
//                           cursor: "pointer",
//                           fontSize: "0.85em",
//                           fontWeight: "400",
//                           display: "flex",
//                           gap: "10px",
//                           alignItems: "center",
//                         }}
//                       >
//                         <p className="colorofnavbar">{article.formattedDate}</p>
//                         {article.title}
//                       </span>
//                     </div>
//                   ))}
//               </div>

//               {/* Newsletter Section */}
//               <div
//                 className="newsletterDiv"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "20px",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "2.6em",
//                     fontWeight: "200",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     color: "white",
//                     height: "fit-content",
//                   }}
//                 >
//                   Newsletter
//                 </p>
//                 <p
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.1em",
//                     fontWeight: "100",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     color: "white",
//                   }}
//                 >
//                   Stay informed
//                 </p>
//                 <Link to="/login">
//                   <button
//                     className="RegisterButton"
//                     style={{ width: "250px", height: "40px" }}
//                   >
//                     Subscribe
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Categorized Articles Sections */}
//         <div>
//           {sectionData.categorizedArticles &&
//             sectionData.categorizedArticles.map((categoryGroup) => (
//               <div key={categoryGroup.categoryId}>
//                 <Link to={`/categories/${categoryGroup.categoryId}`} className="textColor">
//                   <h1 className="categories">{categoryGroup.category}</h1>
//                 </Link>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "50px",
//                     flexDirection: "row",
//                   }}
//                 >
//                   {categoryGroup.articles.map((article) => (
//                     <div key={article.id} className="multiplearticles">
//                       <img src={article.image || `https://picsum.photos/id/${article.id || 28}/250/150`} />
//                       <p
//                         className="textColor"
//                         style={{
//                           fontFamily: "Oswald",
//                           fontSize: "1.6em",
//                           fontWeight: "bold",
//                           margin: "0",
//                           letterSpacing: "1px",
//                         }}
//                       >
//                         {article.title}
//                       </p>
//                       <p
//                         className="textColor"
//                         style={{
//                           fontFamily: "Oswald",
//                           fontSize: "0.8em",
//                           margin: "0",
//                           width: "250px",
//                         }}
//                       >
//                         {article.content}
//                       </p>
//                       <span className="readmore">
//                         <Link to={`/articles/${article.id}`} className="textColor">
//                           Read more
//                         </Link>
//                         <img
//                           src={theme === "dark" ? "/right-arroww.png" : "/right-arrow.png"}
//                           className="readmorearrow"
//                         />
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import instance from "./axios";

// export default function Section() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sectionData, setSectionData] = useState({
//     latestArticle: null,
//     featuredArticles: [],
//     categorizedArticles: []
//   });
//   const [theme, setTheme] = useState("dark");
//   const navigate = useNavigate();

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

//     const fetchSectionData = async () => {
//       try {
//         setLoading(true);
//         const response = await instance.get("/api/sections");
//         if (response.data.success) {
//           setSectionData(response.data);
//         } else {
//           setError("Failed to load section data");
//         }
//       } catch (err) {
//         console.error("Error fetching section data:", err);
//         setError("Failed to connect to the server");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSectionData();
//   }, []);

//   // Handle the "Read more" click to navigate to article view
//   const handleReadMoreClick = (articleId) => {
//     navigate(`/articles/${articleId}`);
//   };

//   if (loading) {
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
//       <div className="section-error">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "50px",
//           width: "100%",
//           maxWidth: "100vw",
//           marginTop: "20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: "50px",
//             width: "100%",
//             maxWidth: "100vw",
//           }}
//         >
//           {/* Latest Article Section */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "0px",
//               color: "white",
//               padding: "3px",
//               margin: "0px",
//               width: "100%",
//               height: "fit-content",
//             }}
//           >
//             {sectionData.latestArticle && (
//               <div className="Laune">
//                 <img src={sectionData.latestArticle.image || "https://picsum.photos/id/1/500/300"} />
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "2.6em",
//                     fontWeight: "bold",
//                     margin: "0",
//                     letterSpacing: "1px",
//                   }}
//                 >
//                   {sectionData.latestArticle.title}
//                 </p>
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1em",
//                     margin: "0",
//                     width: "500px",
//                   }}
//                 >
//                   {sectionData.latestArticle.content}
//                 </p>
//                 <span 
//                   className="readmore" 
//                   onClick={() => handleReadMoreClick(sectionData.latestArticle.id)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <p className="textColor">Read more</p>
//                   <img
//                     src={theme === "dark" ? "/right-arroww.png" : "/right-arrow.png"}
//                     className="readmorearrow"
//                   />
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Featured Articles Section */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "20px",
//               flexWrap: "wrap",
//               width: "100%",
//               maxWidth: "100vw",
//             }}
//           >
//             {sectionData.featuredArticles &&
//               sectionData.featuredArticles.slice(0, 2).map((article) => (
//                 <div key={article.id} className="multiplearticles">
//                   <img src={article.image || `https://picsum.photos/id/${article.id || 121}/250/150`} />
//                   <p
//                     className="textColor"
//                     style={{
//                       fontFamily: "Oswald",
//                       fontSize: "1.6em",
//                       fontWeight: "bold",
//                       margin: "0",
//                       letterSpacing: "1px",
//                     }}
//                   >
//                     {article.title}
//                   </p>
//                   <p
//                     className="textColor"
//                     style={{
//                       fontFamily: "Oswald",
//                       fontSize: "0.8em",
//                       margin: "0",
//                       width: "250px",
//                     }}
//                   >
//                     {article.content}
//                   </p>
//                   <span 
//                     className="readmore"
//                     onClick={() => handleReadMoreClick(article.id)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <p className="textColor">Read more</p>
//                     <img
//                       src={theme === "dark" ? "/right-arroww.png" : "/right-arrow.png"}
//                       className="readmorearrow"
//                     />
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* Latest Articles Section */}
//           <div
//             style={{
//               margin: "0",
//               padding: "0",
//               width: "100%",
//               height: "fit-content",
//             }}
//           >
//             <div
//               style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//             >
//               <div className="multiplearticles">
//                 <p
//                   className="textColor"
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.8em",
//                     fontWeight: "400",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   Latest Articles
//                 </p>
//                 {sectionData.featuredArticles &&
//                   sectionData.featuredArticles.slice(0, 8).map((article) => (
//                     <div
//                       key={article.id}
//                       style={{ display: "flex", flexDirection: "row", gap: "10px" }}
//                       onClick={() => handleReadMoreClick(article.id)}
//                       className="textColor"
//                     >
//                       <span
//                         style={{
//                           cursor: "pointer",
//                           fontSize: "0.85em",
//                           fontWeight: "400",
//                           display: "flex",
//                           gap: "10px",
//                           alignItems: "center",
//                         }}
//                       >
//                         <p className="colorofnavbar">{article.formattedDate}</p>
//                         {article.title}
//                       </span>
//                     </div>
//                   ))}
//               </div>

//               {/* Newsletter Section */}
//               <div
//                 className="newsletterDiv"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "20px",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "2.6em",
//                     fontWeight: "200",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     color: "white",
//                     height: "fit-content",
//                   }}
//                 >
//                   Newsletter
//                 </p>
//                 <p
//                   style={{
//                     fontFamily: "Oswald",
//                     fontSize: "1.1em",
//                     fontWeight: "100",
//                     margin: "0",
//                     letterSpacing: "1px",
//                     color: "white",
//                   }}
//                 >
//                   Stay informed
//                 </p>
//                 <Link to="/login">
//                   <button
//                     className="RegisterButton"
//                     style={{ width: "250px", height: "40px" }}
//                   >
//                     Subscribe
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Categorized Articles Sections */}
//         <div>
//           {sectionData.categorizedArticles &&
//             sectionData.categorizedArticles.map((categoryGroup) => (
//               <div key={categoryGroup.categoryId}>
//                 <Link to={`/categories/${categoryGroup.categoryId}`} className="textColor">
//                   <h1 className="categories">{categoryGroup.category}</h1>
//                 </Link>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "50px",
//                     flexDirection: "row",
//                   }}
//                 >
//                   {categoryGroup.articles.map((article) => (
//                     <div key={article.id} className="multiplearticles">
//                       <img src={article.image || `https://picsum.photos/id/${article.id || 28}/250/150`} />
//                       <p
//                         className="textColor"
//                         style={{
//                           fontFamily: "Oswald",
//                           fontSize: "1.6em",
//                           fontWeight: "bold",
//                           margin: "0",
//                           letterSpacing: "1px",
//                         }}
//                       >
//                         {article.title}
//                       </p>
//                       <p
//                         className="textColor"
//                         style={{
//                           fontFamily: "Oswald",
//                           fontSize: "0.8em",
//                           margin: "0",
//                           width: "250px",
//                         }}
//                       >
//                         {article.content}
//                       </p>
//                       <span 
//                         className="readmore"
//                         onClick={() => handleReadMoreClick(article.id)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         <p className="textColor">Read more</p>
//                         <img
//                           src={theme === "dark" ? "/right-arroww.png" : "/right-arrow.png"}
//                           className="readmorearrow"
//                         />
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }




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
          {/* Latest Article Section - matches the first component's main article */}
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
            {sectionData.latestArticle && (
              <div className="Laune">
                <img 
                  src={sectionData.latestArticle.image || "https://picsum.photos/id/1/500/300"} 
                  style={{ width: "100%", height: "auto" }}
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
                    width: "500px",
                  }}
                >
                  {sectionData.latestArticle.content.length > 500 
                    ? `${sectionData.latestArticle.content.substring(0, 500)}...`
                    : sectionData.latestArticle.content}
                </p>
                <span className="readmore">
                  <Link to={`/articles/${sectionData.latestArticle.id}`} className="textColor">
                    Read more
                  </Link>
                  <img
                    src={theme === "dark" ? ArrowWhite : ArrowBlack}
                    className="readmorearrow"
                  />
                </span>
              </div>
            )}
          </div>

          {/* Featured Articles Section - matches the first component's side articles */}
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
            {sectionData.featuredArticles &&
              sectionData.featuredArticles.slice(0, 2).map((article) => (
                <div key={article.id} className="multiplearticles">
                  <img 
                    src={article.image || `https://picsum.photos/id/${article.id || 121}/250/150`} 
                    style={{ width: "250px", height: "150px" }}
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
                  <span className="readmore">
                    <Link to={`/articles/${article.id}`} className="textColor">
                      Read more
                    </Link>
                    <img
                      src={theme === "dark" ? ArrowWhite : ArrowBlack}
                      className="readmorearrow"
                    />
                  </span>
                </div>
              ))}
          </div>

          {/* Latest Articles List and Newsletter - matches the first component's right sidebar */}
          <div
            style={{
              margin: "0",
              padding: "0",
              width: "100%",
              height: "fit-content",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                      style={{ display: "flex", flexDirection: "row", gap: "10px" }}
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
                        onClick={() => navigate(`/articles/${article.id}`)}
                      >
                        <p className="colorofnavbar">{article.formattedDate}</p>
                        {article.title}
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

        {/* Categorized Articles Sections - matches the first component's category sections */}
        <div>
          {sectionData.categorizedArticles &&
            sectionData.categorizedArticles.map((categoryGroup) => (
              <div key={categoryGroup.categoryId}>
                <Link to={`/categories/${categoryGroup.categoryId}`} className="textColor">
                  <h1 className="categories">{categoryGroup.category}</h1>
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
                        src={article.image || `https://picsum.photos/id/${article.id || 28}/250/150`} 
                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
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
                      <span className="readmore">
                        <Link to={`/articles/${article.id}`} className="textColor">
                          Read more
                        </Link>
                        <img
                          src={theme === "dark" ? ArrowWhite : ArrowBlack}
                          className="readmorearrow"
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