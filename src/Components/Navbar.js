import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [Scroll, setScroll] = useState(false);
  const [Clicked, setClicked] = useState(false);
  const changeColor = () => {
    const value = window.scrollY;
    if (value > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleClick = () => {
    setClicked(!Clicked);
  }
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  let navbarClasses = ["navbartrans"];
  if (Scroll) {
    navbarClasses.push("navbarsoild");
  }

  return (
    <div>
      <nav className="navbar">
        <div className={navbarClasses.join(" ")}>
          <div className="nav-logo"><p>Sweth<span>aa.</span></p>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={Clicked ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <ul className={Clicked ? "navList active" : "navList"}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#expe">Experiences</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work">Works</a>
            </li>
            <li>
              <a href="#edu">Education</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;