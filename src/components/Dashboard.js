/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Dashboard.css";
import Footer from "./footer";
import dataBase from "./Data/Database";

import Header from "./header";

export default function Dashboard() {
  const [db, setDb] = useState(dataBase);
  const [isActive, setActive] = useState("false");
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    setShowCertificate(keepCount() === 9);
  }, [db]);

  const keepCount = () => {
    const clickedHabits = db.filter((habit) => habit.count > 0);
    return clickedHabits.length;
  };
  const increaseQuantity = (index) => {
    const newDb = [...db];
    newDb[index].count += 1;
    setDb(newDb);
    setActive(!isActive);
  };

  return (
    <>
      <Header />
      <div className="dashboard-wrapper">
        {db.map((habit, index) => (
          <div key={habit.name} className="title">
            {habit.title}
            <div>
              <div className={habit.count > 0 ? "images-done" : "images"}>
                <img src={habit.img} alt="img"></img>
              </div>
            </div>
            <button
              className="submit-button"
              onClick={() => increaseQuantity(index)}
            >
              {habit.count > 0 ? "done" : "not done"}
            </button>
          </div>
        ))}
      </div>

      <Footer db={db} keepCount={keepCount} />
      {showCertificate && (
        <button className="showCertificate">
          <a href="https://easyupload.io/tm9ew2" download>
            Click to download
          </a>
        </button>
      )}
    </>
  );
}
