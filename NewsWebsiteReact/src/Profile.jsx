import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    subscribed: false,
    email: "",
    username: "",
    PhoneNumber: "",
  });

  const categories = [
    "Politics",
    "Sports",
    "Society",
    "Mena",
    "Media",
    "Culture",
    "International",
    "Economy",
  ];
  const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };
  const handleSubscriptionToggle = async () => {
    try {
      // Ensure CSRF cookie is set
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const response = await axios.post(
        "http://localhost:8000/api/subscribe",
        {
          subscribed: !user.subscribed,
          email: user.email,
        },
        { withCredentials: true }
      );

      const data = response.data;
      setUser((prevUser) => ({
        ...prevUser,
        subscribed: data.subscribed,
      }));
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
          withCredentials: true,
        });

        // Étape 2 : Faire la requête pour obtenir le profil
        const response = await axios.get("http://localhost:8000/api/profile", {
          withCredentials: true, // Essentiel pour inclure le cookie d'authentification
        });
        const data = response.data;

        setUser({
          name: data.user.name || "",
          email: data.user.email || "",
          username: data.user.username || "",
          PhoneNumber: data.user.phone || "", // Assurez-vous que c'est bien le bon nom
          subscribed: data.user.subscribed ?? false,
        });

        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const getCsrfToken = async () => {
    await fetch("http://localhost:8000/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        className="Profile"
        style={{ padding: "20px", width: "100%", maxWidth: "600px" }}
      >
        <h1
          className="textColor"
          style={{ fontSize: "2.5em", textAlign: "center" }}
        >
          {user.name}'s Profile
        </h1>

        <p
          className="textColor"
          style={{ textAlign: "left", fontSize: "1.4em" }}
        >
          Welcome to your profile page!
        </p>
        <p
          className="textColor"
          style={{ textAlign: "left", fontSize: "1.4em" }}
        >
          Here you can manage your account settings and preferences.
        </p>
        <div>
          <p className="textColor" style={{ textAlign: "left" }}>
            <strong>Email:</strong> {user.email}{" "}
            <FontAwesomeIcon
              icon={faPen}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                color: "white",
                fontSize: "0.7em",
              }}
            />
          </p>
          <p className="textColor" style={{ textAlign: "left" }}>
            <strong>Username:</strong> {user.username}{" "}
            <FontAwesomeIcon
              icon={faPen}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                color: "white",
                fontSize: "0.7em",
              }}
            />
          </p>
          <p className="textColor" style={{ textAlign: "left" }}>
            <strong>Phone Number:</strong> {user.PhoneNumber}{" "}
            <FontAwesomeIcon
              icon={faPen}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                color: "white",
                fontSize: "0.7em",
              }}
            />
          </p>
          <p className="textColor" style={{ textAlign: "left" }}>
            <strong>Forgotten Password? </strong>{" "}
            <button
              className="SubscribeButton"
              style={{ width: "100px", height: "30px", fontSize: "1em" }}
            >
              Reset it
            </button>
          </p>
        </div>
        {/* Checkboxes with hover effect */}
        <div style={{ marginTop: "30px" }}>
          <p
            className="textColor"
            style={{ textAlign: "left", marginBottom: "10px" }}
          >
            Select your favorite categories:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
            }}
          >
            {categories.map((category) => (
              <label
                key={category}
                className="textColor"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                  borderRadius: "5px",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f1f1f1"; // Light gray background on hover
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <input type="checkbox" style={{ marginRight: "8px" }} />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div style={{ marginTop: "30px" }}>
          <p className="textColor">
            {user.subscribed
              ? "You are already subscribed to our newsletter!"
              : "Want to receive notifications about new articles?"}
            <button
              className="SubscribeButton"
              style={{ width: "fit-content", height: "30px" }}
              onClick={handleSubscriptionToggle}
            >
              {user.subscribed
                ? "Unsubscribe"
                : "Subscribe to our newsletter !"}
            </button>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          {/* <button
            className="SaveButton"
            onClick={async () => {
              try {
                const response = await fetch(
                  "http://localhost:8000/api/profile",
                  {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include", // important for Sanctum
                    body: JSON.stringify(user),
                  }
                );

                if (!response.ok) throw new Error("Failed to save changes");
                alert("Changes saved successfully!");
              } catch (error) {
                console.error(error);
                alert("Failed to save changes.");
              }
            }}
            style={{
              fontSize: "0.8em",
              cursor: "pointer",
              justifyContent: "right",
            }}
          >
            {" "}
            Save Changes?
          </button> */}
          <button
            className="SaveButton"
            onClick={async () => {
              try {
                // Ensure the CSRF cookie is set (required for Sanctum)
                await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
                  withCredentials: true,
                });

                // Send the PATCH request
                const response = await axios.patch(
                  "http://localhost:8000/api/profile",
                  user,
                  { withCredentials: true }
                );

                console.log("Profile updated successfully:", response.data);
                alert("Profile updated successfully!");
              } catch (error) {
                console.error(
                  "Update failed:",
                  error.response?.data || error.message
                );
                alert("Failed to update profile.");
              }
            }}
            style={{
              fontSize: "0.8em",
              cursor: "pointer",
              justifyContent: "right",
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
