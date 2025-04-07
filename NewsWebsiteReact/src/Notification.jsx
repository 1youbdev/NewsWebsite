import { useEffect, useState } from "react";

const NotificationComponent = () => {
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    if (permission === "default") {
      Notification.requestPermission().then(setPermission);
    }
  }, [permission]);

  const showNotification = () => {
    if (permission === "granted") {
      new Notification("WhatIsGoingOn", {
        body: "New articles have been added!",
        icon: "./logodark.png",
      });
    } else {
      alert(
        "Notifications are blocked. Please enable them in browser settings."
      );
    }
  };

  return (
    <div
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}
    >
      <button
        onClick={showNotification}
        disabled={permission !== "granted"}
        className="notificationButton"
        style={{
          padding: "8px 15px",
          fontSize: "12px",
          cursor: permission === "granted" ? "pointer" : "not-allowed",
          color:"black",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <span><i><img src="./logodark.png" alt="" /></i>
        Notify</span>
      </button>
    </div>
  );
};

export default NotificationComponent;
