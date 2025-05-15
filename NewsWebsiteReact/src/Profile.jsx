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
    selectedCategories: [],
  });

  const [categories, setCategories] = useState([]);
  const [theme, setTheme] = useState("dark");

  const handleSubscriptionToggle = async () => {
    try {
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

        const response = await axios.get("http://localhost:8000/api/profile", {
          withCredentials: true,
        });

        const data = response.data;

        setUser({
          name: data.user.name || "",
          email: data.user.email || "",
          username: data.user.username || "",
          PhoneNumber: data.user.phone || "",
          subscribed: data.user.subscribed ?? false,
          selectedCategories: data.user.categories || [],
        });

        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/categories",
          {
            withCredentials: true,
          }
        );

        const categoryArray = response.data.data;
        setCategories(categoryArray);
        console.log("Fetched categories:", response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProfile();
    fetchCategories();
  }, []);

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

        {/* Favorite categories */}
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
                key={category.id}
                className="textColor"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                  borderRadius: "5px",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  style={{ marginRight: "8px" }}
                  checked={user.selectedCategories.some(
                    (c) => c.id === category.id
                  )}
                  onChange={(e) => {
                    const updatedCategories = e.target.checked
                      ? [...user.selectedCategories, category]
                      : user.selectedCategories.filter(
                          (c) => c.id !== category.id
                        );

                    setUser((prevUser) => ({
                      ...prevUser,
                      selectedCategories: updatedCategories,
                    }));
                  }}
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>

        {/* Subscribe toggle */}
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

        {/* Save button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <button
            className="SaveButton"
            onClick={async () => {
              try {
                await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
                  withCredentials: true,
                });

                // Send only the selected category IDs
                const categoryIds = user.selectedCategories.map(
                  (cat) => cat.id
                );

                const response = await axios.patch(
                  "http://localhost:8000/api/profile",
                  {
                    ...user,
                    categories: categoryIds,
                  },
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
