import React, { useState } from "react";
import "./website.css"; 
function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "accepted");
  };

  const handleDecline = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "declined");
  };

  if (!isVisible || localStorage.getItem("cookieConsent")) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <p>
        We use cookies to improve your experience. By continuing, you agree to
        our use of cookies.
      </p>
      <div className="cookie-consent-buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
}

export default CookieConsent;
