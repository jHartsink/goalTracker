import React, { useRef, useEffect } from "react";
import "./Styles/Welcome.css";
import gsap from "gsap";
import { Link } from "react-router-dom";

function Welcome() {
  const loader1 = useRef();
  const loader2 = useRef();
  const loader3 = useRef();
  const button = useRef();

  useEffect(() => {
    gsap.from(loader1.current, {
      delay: 1,
      duration: 3,
      x: "-200%",
      yoyo: true,
      opacity: 0,
    });
    gsap.from(loader2.current, {
      delay: 1,
      duration: 3,
      x: "200%",
      yoyo: true,
      opacity: 0,
    });
    gsap.from(loader3.current, {
      delay: 1,
      duration: 3,
      x: "-200%",
      yoyo: true,
      opacity: 0,
    });
    gsap.to(button.current, {
      delay: 3.7,
      opacity: 1,
      duration: 1.5,
      scale: 5,
      ease: "Power4.easeOut",
    });
  });

  return (
    <>
      <div className="content-wrapper">
        <div className="bar1" ref={loader1}>
          {" "}
        </div>
        <div className="bar2 " ref={loader2}></div>
        <div className="bar3 " ref={loader3}></div>
        <Link to="/login" className="button" ref={button}>
          <button className="innerButton" type="button">
            {" "}
            Dutch habit tracker
          </button>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
