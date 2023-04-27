import React, { Component } from "react";
import Slider from "react-slick";

import Binance_Logo from "./images/Binance_Logo.png";
import ethereum from "./images/ethereum.png";
import pancakeswap from "./images/pancakeswap.png";
import yearn_finance from "./images/yearn_finance.png";
import terra_luna_logo from "./images/terra-luna-logo.png";
import THORChain from "./images/THORChain.png";
 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="bg-white">
        <Slider {...settings} className="">
          <div>
            <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={Binance_Logo} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Binance USD</p>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={pancakeswap} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">PancakeSwap</p>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={terra_luna_logo} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Terra Classic</p>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={yearn_finance} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Yearn.Finance</p>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={THORChain} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">THORChain</p>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow-md w-[200px] h-[60px] flex items-center">
              <div className="h-[30px] w-[30px] rounded-full mr-4 ml-3">
                <img src={ethereum} alt="" className="h-[30px] w-[30px] rounded-full"/>
              </div>
              <p className="">Ethereum</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
