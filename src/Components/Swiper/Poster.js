import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./swipe.css";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
import data from "../json/Poster.json";
function Poster() {
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
        depth:300,
        modifier: 1,
        slideShadows: true,
      },
    });
  }, []);
  return (
    <div className="project">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {data.map((data) => {
            return (
              <div className="swiper-slide" key={data.id}>
                {
                  data.image ? <img src={data.image} alt="poster"></img> : <Spinner size={SpinnerSize.medium} />
                }
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
export default Poster;
