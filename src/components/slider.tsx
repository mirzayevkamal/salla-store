"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

const imageList = [
  "/images/slider/01.png",
  "/images/slider/02.png",
  "/images/slider/03.png",
];

export default function Slider() {
  return (
    <div className="mb-6">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              priority={true}
              src={image}
              width={450}
              height={100}
              alt="logo"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
