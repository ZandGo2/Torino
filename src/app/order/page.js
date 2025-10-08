"use client";
import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const page = () => {
  const [dates, setDates] = useState();

  return (
    <div className="w-[1188px] m-auto my-[10%] flex flex-row-reverse">
      <div className="w-[865px] h-[228px] flex flex-col items-end bg-white p-3.5 rounded-xl ml-5 border border-black/20">
        <div className="flex items-center">
          <p className="text-2xl font-normal mr-3.5">مشخصات مسافر</p>
          <BsPersonFill className="text-2xl" />
        </div>
        <div className="flex flex-row-reverse flex-wrap items-center justify-between w-[100%] h-[80%] mt-3.5">
          <input
            className="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <input
            className="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3"
            type="number"
            placeholder="کدملی"
          />

          <DatePicker
            value={dates}
            onChange={setDates}
            calendar={persian}
            locale={persian_fa}
            className="custom-calendar"
            inputClass="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3"
            placeholder="تاریخ تولد"
          />
          <select className="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3">
            <option value="" selected disabled>
              جنسیت
            </option>
            <option value="men">مرد</option>
            <option value="women">زن</option>
          </select>
        </div>
      </div>
      <div className="w-[307px] h-[228px] rounded-xl flex flex-col justify-around items-center p-3.5 bg-white border border-black/20">
        <div className="w-[100%] flex flex-row justify-between border-b-2 border-black/50 border-dashed pb-5">
          <span className="text-[#282828] text-base font-normal">
            5 روز و 4 شب
          </span>
          <h2 className="font-semibold text-2xl">تور هولیر</h2>
        </div>
        <div className="w-[100%] flex items-center justify-between mt-3">
          <p className="text-[#282828] text-base font-normal flex items-center">
            تومان{" "}
            <span className="text-[#009ECA] font-medium text-2xl ml-3">
              17500000
            </span>
          </p>
          <span className="text-[#282828] text-base font-normal">
            قیمت نهایی
          </span>
        </div>
        <button className="text-white bg-[#28A745] w-[283px] h-[56px] rounded-xl mt-3 text-2xl">
          ثبت و خرید نهایی
        </button>
      </div>
    </div>
  );
};

export default page;
