import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import Dashboard from "./Admin.jsx";
import Politics from "./Politics.jsx";
import Sports from "./Sports.jsx";
import Society from "./Society.jsx";
import Mena from "./Mena.jsx";
import VerifyEmailPrompt from "./VerifyEmailPrompt.jsx";
import Media from "./Media.jsx";
import Culture from "./Culture.jsx";
import International from "./International.jsx";
import Economy from "./Economy.jsx";
import Login from "./Login.jsx";
import Test from "./Test.jsx";
import axios from "axios";
import Article from "./Article.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import ReactDOM from "react-dom";
import Register from "./Register.jsx";
import CookieConsent from "./CookieConsent.jsx";
import NotificationComponent from "./Notification.jsx";
import Registre_author from "./Registre_author.jsx";
import Add_article from "./Add_article.jsx";
import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import SingupBack from "./SingupBack.jsx";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000";
// Add these imports at the top
import { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard.jsx";
import AuthorDashboard from "./AuthorDashboard.jsx";
import Logout from "./Logout.jsx";
import { AuthProvider } from "./AuthContext.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));

      // Set the default authorization header
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <NotificationComponent />
        <Header />

        <Routes>
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/" element={<Section />} />
          <Route path="/Home" element={<Section />} />
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
          <Route path="/logout" element={<Logout />} />
          <Route path="/verify-prompt" element={<VerifyEmailPrompt />} />

          {/* Protected Routes */}
          <Route
            path="/admin-dashboard"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
          <Route
            path="/author-dashboard"
            element={
              isAuthenticated &&
              (user?.role === "auteur" || user?.role === "admin") ? (
                <AuthorDashboard />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
          <Route
            path="/Registre_author"
            element={
              isAuthenticated && user?.role === "admin" ? (
                <Registre_author />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
          <Route
            path="/Add_article"
            element={
              isAuthenticated &&
              (user?.role === "auteur" || user?.role === "admin") ? (
                <Add_article />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
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
    </AuthProvider>
  );
}

export default App;
