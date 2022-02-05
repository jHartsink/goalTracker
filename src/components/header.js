import React from "react";
import { useAuth } from "../context/AuthContext";
import './Styles/header.css'

export default function Header() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="header">
        {" "}
        <h1>Embrace your Dutch Habits</h1>
        <div className="welcome-message">
          <strong>Welcome: </strong> {currentUser.email}
        </div>
      </div>
    </>
  );
}
