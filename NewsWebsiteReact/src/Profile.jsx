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
    phoneNumber: "",
    selectedCategories: [],
  });
  const [categories, setCategories] = useState([]);
  const [theme, setTheme] = useState("dark");
  const handlePasswordReset = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const response = await axios.post(
        "http://localhost:8000/api/password/reset-link",
        {},
        { withCredentials: true }
      );

      alert("Password reset email sent successfully!");
    } catch (error) {
      console.error("Password reset error:", error.response?.data || error);
      alert("Failed to send password reset link.");
    }
  };

  const [editingField, setEditingField] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
          withCredentials: true,
        });
        const { user: u } = (
          await axios.get("http://localhost:8000/api/profile", {
            withCredentials: true,
          })
        ).data;
        setUser({
          name: u.name || "",
          email: u.email || "",
          username: u.username || "",
          phoneNumber: u.phoneNumber || "",
          subscribed: u.subscribed ?? false,
          selectedCategories: u.categories || [],
        });
        const stored = localStorage.getItem("theme") || "dark";
        setTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
      } catch (error) {
        console.error("Fetch profile error:", error);
      }
    })();

    (async () => {
      try {
        const resp = await axios.get("http://localhost:8000/api/categories", {
          withCredentials: true,
        });
        setCategories(resp.data.data);
      } catch (error) {
        console.error("Fetch categories error:", error);
      }
    })();
  }, []);

  const handleSubscriptionToggle = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const response = await axios.post(
        "http://localhost:8000/api/subscribe",
        { subscribed: !user.subscribed, email: user.email },
        { withCredentials: true }
      );
      setUser((u) => ({ ...u, subscribed: response.data.subscribed }));
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  const handleSave = async () => {
    const payload = {
      name: user.name,
      email: user.email,
      username: user.username,
      phoneNumber: user.phoneNumber,
      categories: user.selectedCategories.map((c) => c.id),
    };
    console.log("Saving profile with payload:", payload);

    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const resp = await axios.patch(
        "http://localhost:8000/api/profile",
        payload,
        {
          withCredentials: true,
        }
      );
      console.log("Save response:", resp.data);
      setEditingField(null);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Save error:", error.response?.data || error);
      alert("Failed to update profile. Check console for details.");
    }
  };

  const renderEditable = (fieldKey, label, value) => (
    <div style={{ position: "relative", marginBottom: "10px" }}>
      <strong>{label}: </strong>
      {editingField === fieldKey ? (
        <input
          type="text"
          value={value}
          onChange={(e) =>
            setUser((u) => ({ ...u, [fieldKey]: e.target.value }))
          }
          style={{
            marginLeft: "8px",
            padding: "4px 8px",
            fontSize: "1em",
          }}
        />
      ) : (
        <span style={{ marginLeft: "8px", fontSize: "1em" }}>{value}</span>
      )}
      <FontAwesomeIcon
        icon={faPen}
        onClick={() =>
          setEditingField(editingField === fieldKey ? null : fieldKey)
        }
        style={{
          marginLeft: "10px",
          cursor: "pointer",
          color: "white",
          fontSize: "0.7em",
        }}
      />
    </div>
  );

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
          {user.name || "Your"} Profile
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
          <p className="textColor">
            {renderEditable("email", "Email", user.email)}
          </p>
          <p className="textColor">
            {renderEditable("username", "Username", user.username)}
          </p>
          <p className="textColor">
            {renderEditable("phoneNumber", "Phone Number", user.phoneNumber)}
          </p>

          <div style={{ marginBottom: "20px" }}>
            <strong className="textColor">Forgotten Password? </strong>
            <button
              className="SubscribeButton"
              style={{ width: "100px", height: "30px", fontSize: "1em" }}
              onClick={handlePasswordReset}
            >
              Reset it
            </button>
          </div>
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
                    const updated = e.target.checked
                      ? [...user.selectedCategories, category]
                      : user.selectedCategories.filter(
                          (c) => c.id !== category.id
                        );
                    setUser((u) => ({ ...u, selectedCategories: updated }));
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
            onClick={handleSave}
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
