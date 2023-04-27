import logo from "./images/logo.png";
import logo_dark from "./images/logo_dark.png";
import buy_sell from "./images/buy_sell.png";
import sigma_prime from "./images/sigma_prime.png";
import open_zeppelin from "./images/open_zeppelin.png";

import cryptocurrency from "./images/cryptocurrency.png";
import your_crypto from "./images/your_crypto.png";
import your_crypto2 from "./images/your_crypto2.png";
import your_crypto3 from "./images/your_crypto3.png";

import world_map from "./images/world_map.png";
import metamask from "./images/metamask.png";

import google_play from "./images/google_play.png";
import app_store from "./images/app_store.png";

import Carousel from "./Slider";

import React, { Component } from "react";
import Slider from "react-slick";

import Swiper_slider from "./swiper/Swiper_slider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

function Home(){
    const [isMenu, setIsMenu] = useState(false);

    const setMenu = () => {
        if(isMenu == false){
            setIsMenu(true);
        }
        else{setIsMenu(false);}
    }
    return(
        <>
        <div className="bg-[#f4f8f2]">
            <div className="px-6">
                <div className="flex justify-between items-center max-w-[1000px] m-auto h-[60px] sm:h-[100px]">
                    <div className="h-[30px]">
                        <img src={logo} alt="" className=""/>
                    </div>
                    <div className="md:flex hidden">
                        <ul className="flex">
                            <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Home</li>
                            <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Feature</li>
                            <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Abouts</li>
                            <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                    <div className="md:flex hidden">
                        <button className="text-[#f9f9f9] bg-[#000] rounded-md h-[45px] px-4 font-normal">
                            Connect Wallet
                        </button>
                    </div>
                    <div className="md:hidden flex cursor-pointer" onClick={setMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                </div>
                <div className={isMenu ? "block" : "hidden"}>
                    <ul className="text-[20px]">
                        <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Home</li>
                        <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Feature</li>
                        <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Abouts</li>
                        <li className="mx-5 text-[#737572] hover:text-[#191919] hover:font-medium cursor-pointer">Contact Us</li>
                    </ul>
                </div>
                <div className="flex h-full items-center min-h-[100vh] md:pb-0 pb-10">
                    <div className="md:flex max-w-[1100px] m-auto items-center">
                    <div className="md:w-[55%] order-2">
                        <img src={buy_sell} alt="" className="h-full w-full" />
                    </div>
                    <div className="md:w-[45%] order-1 mt-10 md:mt-0">
                        <p className="text-left">EVERYTHING YOU NEED</p>
                        <p className="text-left xl:text-[100px] lg:text-[80px] md:text-[60px] text-[40px] font-black">Buy, Sell & Accept</p>
                        <p className="text-left text-[#60625f] text-[14px]">Now its time to come up with a great slogan to tie all the pieces together.And not just a slogan, but a catchy and timeless sloagan but people across the world will remember you for.</p>
                        <div className="flex items-center mt-8">
                            <button className="text-[#f9f9f9] bg-[#000] rounded-md h-[45px] px-4 mr-8">Create Account</button>
                            <button className="text-[#191919] bg-[#f9f9f9] border-black border rounded-md h-[45px] px-4">Connect Wallet</button>
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className="bg-black py-10">
            <p className="text-center text-white text-[50px]">Our Trusted Partner</p>
            <p className="text-center text-[#9a9b98] text-[14px] mt-2">Your trusted cryptocurrency partner its time to come up with a great slogan</p>
            <div className="flex flex-wrap items-center justify-evenly max-w-[1100px] mx-auto my-3">
                <div><img src={sigma_prime} alt="" /></div>
                <div><img src={open_zeppelin} alt="" /></div>
                <div><img src={sigma_prime} alt="" /></div>
                <div><img src={open_zeppelin} alt="" /></div>
                <div><img src={sigma_prime} alt="" /></div>
            </div>
        </div>
        <div className="bg-[#f4f8f2] py-[60px] px-4">
            <p className="text-center max-w-[550px] m-auto text-[#191919] text-[40px] md:text-[60px] font-black">New Decade, New Assets</p>
            <p className="text-[#60625f] text-[14px] max-w-[528px] m-auto text-center">Now its time to come up with a great slogan to tie all the pieces together. And not just a slogan</p>
            <div className="flex flex-wrap items-center justify-evenly max-w-[1100px] m-auto">
                <div className="w-[250px] p-4">
                    <img src={cryptocurrency} alt="" className="w-[150px] h-[150px]"/>
                    <p className="text-left text-[20px] font-semibold mt-2">Cryptocurrency</p>
                    <p className="text-left mt-3 text-[13px]">Blockchain is a bit complicated concept but i will put it down in the understand it more easily</p>
                </div>
                <div className="w-[250px] p-4">
                    <img src={your_crypto} alt="" className="w-[150px] h-[150px]"/>
                    <p className="text-left text-[20px] font-semibold mt-2">Your Crypto</p>
                    <p className="text-left mt-3 text-[13px]">Blockchain is a bit complicated concept but i will put it down in the understand it more easily</p>
                </div>
                <div className="w-[250px] p-4">
                    <img src={your_crypto2} alt="" className="w-[150px] h-[150px]"/>
                    <p className="text-left text-[20px] font-semibold mt-2">Your Crypto</p>
                    <p className="text-left mt-3 text-[13px]">Blockchain is a bit complicated concept but i will put it down in the understand it more easily</p>
                </div>
                <div className="w-[250px] p-4">
                    <img src={your_crypto3} alt="" className="w-[150px] h-[150px]"/>
                    <p className="text-left text-[20px] font-semibold mt-2">Your Crypto</p>
                    <p className="text-left mt-3 text-[13px]">Blockchain is a bit complicated concept but i will put it down in the understand it more easily</p>
                </div>
            </div>
        </div>
        <div className="bg-[#f4f8f2] py-[60px] md:flex px-4">
            <div className="md:w-1/2">
                <img src={world_map} alt="" className="w-full"/>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex items-center">
                <div className="w-[550px]">
                    <p className="text-[#1f201e] text-[20px] font-medium text-left">THERE ONLINE TRADING</p>
                    <p className="text-black text-[60px] font-black text-left">Cryptocurrency For People.</p>
                    <p className="text-left">There are a lot of online forex trading accounts and people who are encouraging as according to them it has a lot of benefits. In the near future.</p>
                    <button className="text-[#f9f9f9] bg-[#000] rounded-md h-[45px] px-4 mr-8 float-left">Join Our Wallet</button>
                </div>
            </div>
        </div>
        <div className="bg-[#f4f8f2] py-10 px-4">
            <div className="px-6">
                <div className="flex h-full items-center min-h-[100vh]">
                    <div className="md:flex max-w-[1100px] m-auto items-center">
                    <div className="md:w-[55%] order-2">
                        <img src={metamask} alt="" className="h-full w-full" />
                    </div>
                    <div className="md:w-[45%] order-1 mt-10 md:mt-0">
                        <p className="text-left">THERE ONLINE TRADING</p>
                        <p className="text-left text-[30px] md:text-[40px] lg:text-[60px] font-black">Stay Cool With Crypto.</p>
                        <p className="text-left text-[#60625f] text-[14px]">There are a lot of online forex trading accounts and people who are encouraging as according to them it has a lot of benefits In the near future. Bitcoin happens to be an outstanding cryptographic achievement. The proper incentives and balance.</p>
                        <div className="flex items-center mt-8">
                            <button className="text-[#f9f9f9] bg-[#000] rounded-md h-[45px] px-4 mr-8">Connect Wallet</button>
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className="h-[130px] flex items-center justify-center px-4">
            <Swiper_slider />
        </div>
        <div className="bg-[#f4f8f2] px-4">
            <div className="max-w-[800px] py-[60px] m-auto">
                <p className="sm:text-[60px] text-[30px] font-black">Join Our Cryptocurrency To Make.</p>
                <p className="text-[#23211f] text-[13px] mt-2 max-w-[600px] m-auto">There are a lot of online forex trading accounts and people who are encouraging as according to them it has lot of benefits In the future.</p>
                <div className="flex justify-center mt-5">
                    <div className="h-[50px] mr-5">
                        <img src={google_play} alt="" className="h-full"/>
                    </div>
                    <div className="h-[50px]">
                        <img src={app_store} alt="" className="h-full"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-black py-[40px]">
            <div className="flex items-center max-w-[1100px] m-auto justify-center sm:justify-between px-[40px]">
                <ul className="lg:flex hidden">
                    <li className="mx-5 text-[#737572] hover:text-[#fff] hover:font-medium cursor-pointer">Home</li>
                    <li className="mx-5 text-[#737572] hover:text-[#fff] hover:font-medium cursor-pointer">Feature</li>
                    <li className="mx-5 text-[#737572] hover:text-[#fff] hover:font-medium cursor-pointer">Abouts</li>
                    <li className="mx-5 text-[#737572] hover:text-[#fff] hover:font-medium cursor-pointer">Contact Us</li>
                </ul>
                <div className="h-[50px]">
                    <img src={logo_dark} alt="" className="h-full"/>
                </div>
                <ul className="sm:flex hidden">
                    <li className="mx-5 text-[#737572] hover:text-[#fff] hover:font-medium cursor-pointer">Telegram</li>
                    <li className="mx-5 text-[#737572] hover:text-[#fff] hover:font-medium cursor-pointer">Whatsapp</li>
                    <li className="mx-5 text-[#737572] hover:text-[#fff] hover:font-medium cursor-pointer">Discord</li>
                </ul>
            </div>
            <div className="h-[1px] bg-white/50 max-w-[1100px] mx-auto mt-10"></div>
        </div>
        </>
    )
}
export default Home;
