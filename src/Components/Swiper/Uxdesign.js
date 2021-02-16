import React, { useEffect, useRef,useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./swipe.css";
import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
import data from "../json/content.json";
function Uxdesign() {
  Swiper.use([Pagination, EffectCoverflow, Navigation, Mousewheel, Keyboard]);
  const swiper = useRef(null);
  useEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 50,
      mousewheel: false,
      keyboard: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    });
  }, []);
  const [Open, setOpen] = useState(false);

  const showPopup = (event) => {
    setOpen(!Open);
    console.log(event);
  }
  return (
    <div className="project">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {data[2].map((data) => {
            return (
              <div className="swiper-slide" key={data.id} onClick={showPopup}>
                <img src={data.image} alt="Designs" ></img>
                <div>
                  <h3>{data.name}</h3>
                  <h4>{data.desc}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  );
}
export default Uxdesign;
