import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Dashboard.css";

export default function Footer() {

    const { logout } = useAuth();
    const navigate = useNavigate();
    
    function submit() {
      navigate("/result");
    }
  
    async function handleLogout() {
      try {
        await logout();
        navigate("/");
      } catch {}
    }
  
  return <>
        
      <div className="footer">
        <button
          type="button"
          className="submit-button"
          variant="link"
          onClick={handleLogout}
        >
          Log Out
        </button>
        <button
          type="button"
          className="submit-button"
          variant="link"
          onClick={submit}
        >
          Submit
        </button>
        <button
          type="button"
          className="submit-button"
          variant="link"
          onClick={handleLogout}
        >
          Reset
        </button>
      </div>
  
  </>;
}
