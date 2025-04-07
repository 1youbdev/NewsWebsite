import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import Dashboard from "./Admin.jsx";
import Politics from "./Politics.jsx";
import Sports from "./Sports.jsx";
import Society from "./Society.jsx";
import Mena from "./Mena.jsx";
import Media from "./Media.jsx";
import Culture from "./Culture.jsx";
import International from "./International.jsx";
import Economy from "./Economy.jsx";
import Login from "./Login.jsx";
import Test from "./Test.jsx";
import Article from "./Article.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import ReactDOM from "react-dom";
import Register from "./Register.jsx";
import CookieConsent from "./CookieConsent.jsx";
import NotificationComponent from "./Notification.jsx";
import Registre_author from "./Registre_author.jsx";
import Add_article from "./Add_article.jsx";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SingupBack from "./SingupBack.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationComponent />
        <Header />

        <Routes>
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/" element={<Section />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Politics" element={<Politics />} />
          <Route path="/Society" element={<Society />} />
          <Route path="/Mena" element={<Mena />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/International" element={<International />} />
          <Route path="/Culture" element={<Culture />} />
          <Route path="/Economy" element={<Economy />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Registre_author" element={<Registre_author />} />
          <Route path="/Add_article" element={<Add_article />} />
          <Route path="/SingupBack" element={<SingupBack />} />

        </Routes>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="myCookieConsent"
          style={{ background: "#333", textAlign: "center" }}
          buttonStyle={{
            background: "#4caf50",
            color: "#fff",
            fontSize: "13px",
          }}
          declineButtonStyle={{
            background: "#f44336",
            color: "#fff",
            fontSize: "13px",
          }}
          expires={365} // Cookie expires after 365 days
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
