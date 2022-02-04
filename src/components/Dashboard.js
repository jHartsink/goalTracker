import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Dashboard.css";
import { dataBase } from "./Data/Database";
import Footer from "./footer";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [count, setCount] = useState(dataBase.all.count);

  const increaseQuantity = (index) => {
    const currentItems = [...count];
    currentItems[index].count += 1;
    setCount(currentItems);
  };

  return (
    <>
      {" "}
      <h1>Embrace your Dutch Habits</h1>
      <div className="welcome-message">
        <strong>Welcome: </strong> {currentUser.email}
      </div>
      <div className="dashboard-wrapper">
        {dataBase.row1.map((row1) => (
          <div className="title">
            {dataBase[row1].title}
            <div className=".fill-boxes">
              <img src={dataBase[row1].img} alt="img"></img>
            </div>
            <button className="submit-button">I have done this.</button>
            <div className="handler">{dataBase[row1].button}</div>
          </div>
        ))}
      </div>
      <div className="dashboard-wrapper2">
        {dataBase.row2.map((row2, i) => (
          <div className="title">
            {dataBase[row2].title}
            <div>
              <img src={dataBase[row2].img} alt="img"></img>
            </div>
            <button
              className="submit-button"
              onClick={() => increaseQuantity(i)}
            >
              I have done this.
            </button>
            <div className="handler">{dataBase[row2].count}</div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
