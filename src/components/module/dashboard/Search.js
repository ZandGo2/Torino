"use client";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Search = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [dates, setDates] = useState([]);
  const cities = ["تهران", "سنندج", "تبریز", "شیراز"];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-md w-full max-w-4xl font-sans">
      {/* مبدا */}
      <div className="relative w-full md:w-1/4 text-right">
        <button className="w-full flex items-center justify-between rounded-xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 bg-white">
          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-gray-500" />
            <select
              className="bg-transparent outline-none"
              value={from || ""}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">مبدا</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </button>
      </div>

      {/* مقصد */}
      <div className="relative w-full md:w-1/4 text-right">
        <button className="w-full flex items-center justify-between rounded-xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 bg-white">
          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-gray-500" />
            <select
              className="bg-transparent outline-none"
              value={to || ""}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">مقصد</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </button>
      </div>

      {/* انتخاب تاریخ شمسی (رفت و برگشت) */}
      <div className="relative w-full md:w-1/3 text-right">
        <DatePicker
          range
          value={dates}
          onChange={setDates}
          calendar={persian}
          locale={persian_fa}
          className="custom-calendar"
          inputClass="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-green-500"
          placeholder="تاریخ رفت و برگشت"
        />
      </div>

      {/* دکمه جستجو */}
      <button className="w-full md:w-1/6 bg-green-500 text-white py-3 rounded-xl shadow hover:bg-green-600 transition">
        جستجو
      </button>
    </div>
  );
};

export default Search;
{
  /* <p> <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</p> */
}
