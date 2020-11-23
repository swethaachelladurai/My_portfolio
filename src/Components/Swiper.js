import React, { useState } from "react";
import Poster from "./Swiper/Poster";
import Logo from "./Swiper/Logo";
import Uxdesign from "./Swiper/Uxdesign";
import "./Swiper.css";
function Swiper() {
  const [poster, setPoster] = useState(false);
  const [logo, setLogo] = useState(false);
  const [uxdesign, setUxdesign] = useState(false);
  const [Click1, setClick1] = useState(false);
  const [Click2, setClick2] = useState(false);
  const [Click3, setClick3] = useState(false);
  const handelClick = () => {
    setPoster(true);
    setLogo(false);
    setUxdesign(false);
    setClick1(true);
    setClick2(false);
    setClick3(false);
  };
  const handelClick1 = () => {
    setPoster(false);
    setLogo(true);
    setUxdesign(false);
    setClick1(false);
    setClick2(true);
    setClick3(false);
  };
  const handelClick2 = () => {
    setPoster(false);
    setLogo(false);
    setUxdesign(true);
    setClick1(false);
    setClick2(false);
    setClick3(true);
  };
  
  return (
    <div className="works">
      <button className={Click1 ? "btn11" : "btn1"} onClick={handelClick}>
        Posters
      </button>
      <button className={Click2 ? "btn22" : "btn2"} onClick={handelClick1}>
        Logos
      </button>
      <button className={Click3 ? "btn33" : "btn3"} onClick={handelClick2}>
        UI Designs
      </button>
      {poster ? (
        <Poster />
      ) : logo ? (
        <Logo />
      ) : uxdesign ? (
        <Uxdesign />
      ) : (
        <Poster />
      )}
    </div>
  );
}
export default Swiper;
