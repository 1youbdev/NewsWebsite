import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await axios.post("/api/logout");
      } finally {
        logout();
        navigate("/Login");
      }
    };
    performLogout();
  }, [logout, navigate]);

  return <div>Logging out...</div>;
}

export default Logout;
