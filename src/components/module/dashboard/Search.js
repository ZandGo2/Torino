"use client";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Search = ({ data }) => {
  const [dates, setDates] = useState([]);
  const [searchState, setSearchState] = useState({
    origin: null, // مبدا
    destination: null,
    originOpen: false,
    destinationOpen: false,
  });

  const origins = [...new Set(data.map((tour) => tour.origin.name))];
  const destinations = [...new Set(data.map((tour) => tour.destination.name))];
  return (
    <div className="m-auto my-12 w-[1180] flex flex-col items-center">
      <p className="text-3xl font-semibold text-[#595959] my-5">
        <span className="text-[#28A745]">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </p>

      <div className="w-[874px] h-[71px] relative flex flex-row-reverse items-center border border-black/15 rounded-3xl p-5 my-5">
        {/* مبدا */}
        <button
          onClick={() =>
            setSearchState((prev) => ({
              ...prev,
              originOpen: !prev.originOpen,
            }))
          }
          className="w-[218px] flex flex-row-reverse"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <span> {searchState.origin ? searchState.origin : "مبدا"}</span>
            <FaMapMarkerAlt className="text-gray-500" />
          </div>
        </button>

        {/* لیست گزینه‌ها */}
        {searchState.originOpen && (
          <div className="w-[218px] h-[251px] border border-black/20 rounded-lg bg-white scroll-hide overflow-auto absolute top-[80px]">
            {origins.map((city, i) => (
              <button
                key={i}
                onClick={() =>
                  setSearchState((prev) => ({
                    ...prev,
                    origin: city,
                    originOpen: false,
                  }))
                }
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
          onClick={() =>
            setSearchState((prev) => ({
              ...prev,
              destinationOpen: !prev.destinationOpen,
            }))
          }
          className="w-[218px] flex flex-row-reverse border-x-1 border-black/15 px-1.5"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <span>
              {" "}
              {searchState.destination ? searchState.destination : "مقصد"}
            </span>
            <FaMapMarkerAlt className="text-gray-500" />
          </div>
        </button>

        {/* لیست گزینه‌ها */}
        {searchState.destinationOpen && (
          <div className="w-[218px] h-[251px] border border-black/20 rounded-lg bg-white scroll-hide overflow-auto absolute top-[80px] right-[250px]">
            {destinations.map((city, i) => (
              <button
                key={i}
                onClick={() =>
                  setSearchState((prev) => ({
                    ...prev,
                    destination: city,
                    destinationOpen: false,
                  }))
                }
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
