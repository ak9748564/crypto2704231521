import React, { useRef, useState } from "react";
// import yearn_finance from "./images/yearn_finance.png";
import yearn_finance1 from "../images/yearn_finance.png"
// import terra_luna_logo from "./images/terra-luna-logo.png";
// import THORChain from "./images/THORChain.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import {} from "swiper"

// import required modules
import Swipercore, { Pagination,Autoplay } from "swiper";

import Binance_Logo from "./../images/Binance_Logo.png";
import ethereum from "./../images/ethereum.png";
import pancakeswap from "./../images/pancakeswap.png";
import yearn_finance from "./../images/yearn_finance.png";
import terra_luna_logo from "./../images/terra-luna-logo.png";
import THORChain from "./../images/THORChain.png";

export default function Swiper_slider() {
  Swipercore.use([Autoplay])
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
            <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={Binance_Logo} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Binance USD</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={pancakeswap} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">PancakeSwap</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={terra_luna_logo} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Terra Classic</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={yearn_finance} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Yearn.Finance</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={THORChain} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">THORChain</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={ethereum} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Ethereum</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
