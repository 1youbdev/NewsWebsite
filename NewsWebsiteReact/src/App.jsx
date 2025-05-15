import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth, AuthProvider } from "./AuthContext.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Section from "./Section.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import Media from "./Media.jsx";
import Culture from "./Culture.jsx";
import International from "./International.jsx";
import Economy from "./Economy.jsx";
import Article from "./Article.jsx";
import Politics from "./Politics.jsx";
import Sports from "./Sports.jsx";
import Society from "./Society.jsx";
import Mena from "./Mena.jsx";
import Add_article from "./Add_article.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import NotificationComponent from "./Notification.jsx";
import CookieConsent from "./CookieConsent.jsx";

function ProtectedRoute({ children, roles }) {
  const { isAuthenticated, user, setRedirectPath, loadingAuth } = useAuth();

  if (loadingAuth) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth state
  }

  if (!isAuthenticated) {
    setRedirectPath(window.location.pathname); // Store the current path
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user?.role)) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NotificationComponent />
        <Header />
        <Routes>
          {/* Public Routes */}
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

          <Route path="/Home" element={<Section />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/Profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Add_article"
            element={
              <ProtectedRoute roles={["auteur", "admin"]}>
                <Add_article />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
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
          expires={365}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
