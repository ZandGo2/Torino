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

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const options = ["تهران", "سنندج", "تبریز", "شیراز"];

  return (
    <div className="m-auto my-12 w-[1180] flex flex-col items-center">
      <p className="text-3xl font-semibold text-[#595959] my-5">
        <span className="text-[#28A745]">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </p>

      <div className="w-[874px] h-[71px] flex flex-row-reverse items-center border border-black/15 rounded-3xl p-5 my-5">
        {/* مبدا */}

        <button
          onClick={() => setOpen(!open)}
          className="w-[218px] flex flex-row-reverse "
        >
          <div className="flex items-center gap-2 text-gray-700">
            <span>{selected ? selected : "مبدا"}</span>
            <FaMapMarkerAlt className="text-gray-500" />
          </div>
        </button>

        {/* لیست گزینه‌ها */}
        {open && (
          <div className="absolute top-full right-0 mt-2 w-[218px] rounded-xl border bg-white shadow-lg z-10">
            {options.map((city) => (
              <button
                key={city}
                onClick={() => {
                  setSelected(city);
                  setOpen(false);
                }}
                className="w-full text-right px-4 py-2 hover:bg-gray-100"
              >
                {city}
              </button>
            ))}
          </div>
        )}

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

        <button className="w-full md:w-1/6 bg-green-500 text-white py-3 rounded-xl shadow hover:bg-green-600 transition">
          جستجو
        </button>
      </div>
    </div>
  );
};

export default Search;
