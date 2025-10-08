"use client";
import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const page = () => {
  const [dates, setDates] = useState([]);

  return (
    <div className="w-[1188px] m-auto my-[100px] bg-amber-400 p-11 flex flex-row-reverse">
      <div>
        <div>
          <BsPersonFill />
          <p>مشخصات مسافر</p>
        </div>
        <div>
          <input type="text" placeholder="نام و نام خانوادگی" />
          <input type="number" placeholder="کدملی" />
          <DatePicker
            range
            value={dates}
            onChange={setDates}
            calendar={persian}
            locale={persian_fa}
            className="custom-calendar"
            inputClass="w-[100%] text-right "
            placeholder="تاریخ تولد"
          />
          <select>
            <option>جنسیت</option>
            <option>مرد</option>
            <option>زن</option>
          </select>
        </div>
      </div>
      <div className="w-[307px] h-[228px] rounded-xl flex flex-col justify-around items-center p-3.5 bg-white">
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
