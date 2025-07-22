"use client";
import Image from "next/image";
import { Why_Torino } from "@/constants/DataWhyTorino";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./WhyTorinoSlider.module.css";

const WhyTorinoSlider = () => {
  return (
    <div className={styles.Contain}>
      <div className={styles.TextDiv}>
        <p className={styles.TitleP}>
          <span>?</span>
          {Why_Torino.Text.title}
        </p>
        <span>{Why_Torino.Text.header}</span>
        <p>{Why_Torino.Text.description}</p>
      </div>
      <div className={styles.SwiperDiv}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {Why_Torino.swiper.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.src} alt={item.alt} width={389} height={479} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhyTorinoSlider;
