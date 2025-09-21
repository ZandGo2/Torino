"use client";
import { useState } from "react";
import Image from "next/image";
import { Why_Torino } from "@/constants/DataTorinoWhy";

const WhyTorino = () => {
  const [step, setStep] = useState(0);
  let total = Why_Torino.swiper.length;

  const prevSlide = () =>
    setStep((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () =>
    setStep((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="w-[1182px] h-[676px] m-auto flex flex-row-reverse justify-between">
      <div className="w-[50%]">
        <p>
          <span>?</span>
          {Why_Torino.Text.title}
        </p>
        <span>{Why_Torino.Text.header}</span>
        <p>{Why_Torino.Text.description}</p>
      </div>
      {/* slidebar */}
      <div className="w-[50%] flex flex-col justify-center">
        <div className="w-[50%] flex flex-col items-center justify-center relative">
          <div className="relative w-[400px] h-[500px] flex items-center justify-start overflow-hidden">
            {Why_Torino.swiper.map((item, i) => {
              const offset = i - step; // فاصله نسبت به عکس فعال
              if (offset < 0 || offset > 2) return null; // فقط سه عکس جلو دیده شوند

              const scale = 1 - 0.15 * offset; // عکس عقب کوچک‌تر
              const translateX = offset * 120; // فاصله افقی بین عکس‌ها
              const zIndex = 10 - offset; // جلوترها روی عکس‌های عقب‌تر

              return (
                <div
                  key={i}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={scale === 1 ? 389 : 250}
                    height={scale === 1 ? 479 : 300}
                    className="rounded-xl shadow-lg object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-4xl mr-5" onClick={prevSlide}>
            ←
          </button>
          <p className="text-2xl">
            {step + 1} / {Why_Torino.swiper.length}
          </p>
          <button className="text-4xl ml-6" onClick={nextSlide}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyTorino;
