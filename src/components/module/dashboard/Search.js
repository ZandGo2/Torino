"use client";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Search = () => {
  const [dates, setDates] = useState([]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selected1, setSelected1] = useState(null);

  const options = [
    "تهران",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
    "سنندج",
    "تبریز",
    "شیراز",
  ];

  return (
    <div className="m-auto my-12 w-[1180] flex flex-col items-center">
      <p className="text-3xl font-semibold text-[#595959] my-5">
        <span className="text-[#28A745]">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </p>

      <div className="w-[874px] h-[71px] relative flex flex-row-reverse items-center border border-black/15 rounded-3xl p-5 my-5">
        {/* مبدا */}
        <button
          onClick={() => setOpen(!open)}
          className="w-[218px] flex flex-row-reverse"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <span>{selected ? selected : "مبدا"}</span>
            <FaMapMarkerAlt className="text-gray-500" />
          </div>
        </button>

        {/* لیست گزینه‌ها */}
        {open && (
          <div className="w-[218px] h-[251px] border border-black/20 rounded-lg bg-white scroll-hide overflow-auto absolute top-[80px]">
            {options.map((city, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelected(city);
                  setOpen(false);
                }}
                className="w-[100%] flex flex-row-reverse items-center py-2 my-3 border-b-1 border-black/12 hover:bg-gray-100"
              >
                <FaMapMarkerAlt className="text-gray-500 mx-1.5" />
                {city}
              </button>
            ))}
          </div>
        )}

        {/* مقصد */}
        <button
          onClick={() => setOpen1(!open1)}
          className="w-[218px] flex flex-row-reverse border-x-1 border-black/15 px-1.5"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <span>{selected1 ? selected1 : "مقصد"}</span>
            <FaMapMarkerAlt className="text-gray-500" />
          </div>
        </button>

        {/* لیست گزینه‌ها */}
        {open && (
          <div className="w-[218px] h-[251px] border border-black/20 rounded-lg bg-white scroll-hide overflow-auto absolute top-[80px] right-[250px]">
            {options.map((city, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelected1(city);
                  setOpen1(false);
                }}
                className="w-[100%] flex flex-row-reverse items-center py-2 my-3 border-b-1 border-black/12 hover:bg-gray-100"
              >
                <FaMapMarkerAlt className="text-gray-500 mx-1.5" />
                {city}
              </button>
            ))}
          </div>
        )}

        {/* انتخاب تاریخ شمسی (رفت و برگشت) */}
        <div className="w-[218px] relative text-right p-3">
          <DatePicker
            range
            value={dates}
            onChange={setDates}
            calendar={persian}
            locale={persian_fa}
            className="custom-calendar"
            inputClass="w-[100%] text-right "
            placeholder="تاریخ"
          />
        </div>
        <button className="w-[190px] h-[51px] bg-[#28A745] text-white rounded-2xl">
          جستجو
        </button>
      </div>
    </div>
  );
};

export default Search;
