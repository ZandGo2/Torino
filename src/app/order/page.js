"use client";
import { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import axiosInstance from "@/lib/axios";

const page = () => {
  const [data, setData] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "2022-10-10",
  });
  const [tourDetail, setTourDetail] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const dateChangeHandler = (date) => {
    setData((prev) => ({ ...prev, birthDate: date.format("YYYY-MM-DD") }));
  };

  const buyHandler = async () => {
    try {
      const res = await axiosInstance.post("/order");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getDetailTour = async () => {
      const res = await axiosInstance.get("/basket");
      const { id, price, title, endDate, startDate } = await res.data;
      setTourDetail({ id, price, title, endDate, startDate });
    };
    getDetailTour();
  }, []);

  return (
    <div className="w-[1188px] m-auto my-[10%] flex flex-row-reverse">
      <div className="w-[865px] h-[228px] flex flex-col items-end bg-white p-3.5 rounded-xl ml-5 border border-black/20">
        <div className="flex items-center">
          <p className="text-2xl font-normal mr-3.5">مشخصات مسافر</p>
          <BsPersonFill className="text-2xl" />
        </div>
        <div className="flex flex-row-reverse flex-wrap items-center justify-between w-[100%] h-[80%] mt-3.5">
          <input
            onChange={changeHandler}
            name="fullName"
            value={data.fullName}
            className="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <input
            name="nationalCode"
            value={data.nationalCode}
            onChange={changeHandler}
            className="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3"
            type="number"
            placeholder="کدملی"
          />

          <DatePicker
            value={data.birthDate}
            onChange={dateChangeHandler}
            calendar={persian}
            locale={persian_fa}
            className="custom-calendar"
            inputClass="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3"
            placeholder="تاریخ تولد"
          />
          <select
            value={data.gender}
            onChange={changeHandler}
            name="gender"
            className="w-[262px] h-[50px] rounded-md text-right border border-black/50 pr-3"
          >
            <option value="" disabled>
              جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>
      </div>
      <div className="w-[307px] h-[228px] rounded-xl flex flex-col justify-around items-center p-3.5 bg-white border border-black/20">
        <div className="w-[100%] flex flex-row justify-between border-b-2 border-black/50 border-dashed pb-5">
          <span className="text-[#282828] text-base font-normal">
            5 روز و 4 شب
          </span>
          <h2 className="font-semibold text-2xl">{tourDetail.title}</h2>
        </div>
        <div className="w-[100%] flex items-center justify-between mt-3">
          <p className="text-[#282828] text-base font-normal flex items-center">
            تومان{" "}
            <span className="text-[#009ECA] font-medium text-2xl ml-3">
              {tourDetail.price}
            </span>
          </p>
          <span className="text-[#282828] text-base font-normal">
            قیمت نهایی
          </span>
        </div>
        <button
          onClick={buyHandler}
          className="text-white bg-[#28A745] w-[283px] h-[56px] rounded-xl mt-3 text-2xl"
        >
          ثبت و خرید نهایی
        </button>
      </div>
    </div>
  );
};

export default page;
