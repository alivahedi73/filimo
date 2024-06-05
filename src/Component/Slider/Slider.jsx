import one from "../../../public/image/slider/1.webp";
import two from "../../../public/image/slider/2.webp";
import three from "../../../public/image/slider/3.webp";
import four from "../../../public/image/slider/4.webp";
import five from "../../../public/image/slider/5.webp";
import six from "../../../public/image/slider/6.webp";
import green from "../../../public/image/footer/green.svg";
import buy from "../../../public/image/menu/buy.svg";
import gift from "../../../public/image/slider/gift.svg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import "swiper/css";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <div className="w-[100%] h-[auto] bg-[black] flex justify-center ">
      <div className="w-[100%] h-[auto] max-w-[1400px] relative ">
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={100}
        >
          <SwiperSlide>
            <img src={one} alt="" className="w-[100%] h-[100%] ]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={two} alt="" className="w-[100%] h-[100%] " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={three} alt="" className="w-[100%] h-[100%]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={four} alt="" className="w-[100%] h-[100%]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={five} alt="" className="w-[100%] h-[100%]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={six} alt="" className="w-[100%] h-[100%]" />
          </SwiperSlide>
        </Swiper>

        <div className="w-[100%] h-[290px]  absolute bottom-[25px] px-[20px]  z-[12] flex items-center flex-col  ">
          <div className="w-fit text-[14px] font-[700] leading-[20px] bg-clip-text bg-gradient-to-r from-[#fdc13b] from-10% via-[#f89f3e] via-30% to-[#f4843f] to-90% text-transparent mb-[16px] font-['IRANSans-M' !importa]  ">
            با فیلیمو بی وقفه فیلم ببین
          </div>
          <div className="w-fit text-[35px] font-[700] leading-[40px] pb-[8px] mb-[32px] text-[white]">
            کنترل همیشه دست توست!
          </div>

          <div className="option flex justify-center gap-[30px] mb-[64px]">
            <div className="first flex gap-[8px]">
              <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center self-center">
                <img src={green} alt="" className="w-[13px] h-[13px]" />
              </div>
              <div className="text-[white]/[0.75] text-[14px] font-[100] leading-[25px]">
                90 هزار اپیزود فیلم و سریال برای تماشا داری{" "}
              </div>
            </div>
            <div className="second flex gap-[8px]">
              <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center self-center">
                <img src={green} alt="" className="w-[13px] h-[13px]" />
              </div>
              <div className="text-[white]/[0.75] text-[14px] font-[100] leading-[25px]">
                می تونی دانلود کنی بعد بدون اینترنت تماشا کنی{" "}
              </div>
            </div>
            <div className="third flex gap-[8px]">
              <div className="green w-[19px] h-[19px] rounded-[50%] bg-[#a9efc93d] flex justify-center items-center self-center">
                <img src={green} alt="" className="w-[13px] h-[13px]" />
              </div>
              <div className="text-[white]/[0.75] text-[14px] font-[100] leading-[25px]">
                می تونی یک عضو، مخصوص تماشای کودک بسازی{" "}
              </div>
            </div>
          </div>

          <a
            href=""
            className=" flex justify-center items-center gap-[4px] w-[285px] h-[58px] py-[17px] px-[10px] box-border   bg-[#1cb561] rounded-[8px] hover:bg-[#17924e] transition-all duration-300 ease-in-out"
          >
            <img src={buy} alt="" className="w-[24px] h-[24px]" />

            <span className="text-[white] text-[15px] font-[500]">
              خرید اشتراک و تماشا{" "}
            </span>
          </a>

          <div className="text-[#959ba2] font-[400] text-[10px] mt-[8px] flex ">
            <img src={gift} alt="" className="w-[18px] h-[18px] ml-[4px] " />
            <div className="self-center "> تخفیف ویژه برای کاربران جدید</div>
          </div>
        </div>

        <div className="w-[100%] h-[100%] absolute top-0 right-0 bg-gradient-to-t from-[black] from-10% via-[black]/[0.7] via-30% to-[black]/[0.5] z-[11]"></div>
      </div>
    </div>
  );
};

export default Slider;
