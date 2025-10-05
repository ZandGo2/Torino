"use client";
import { useState, Suspense } from "react";
import Search from "../module/dashboard/Search";
import CardTour from "../module/dashboard/CardTour";
import { getTourList } from "@/services/tourListService";

const TourList = ({ tours }) => {
  return (
    <div className="w-[1180] m-auto flex flex-wrap flex-row justify-between">
      {tours.map((tour, i) => (
        <CardTour key={i} {...tour} />
      ))}
    </div>
  );
};

const SearchListTour = ({ data }) => {
  const [tours, setTours] = useState(data);
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState([]);
  const [searchState, setSearchState] = useState({
    origin: null, // مبدا
    destination: null,
    originOpen: false,
    destinationOpen: false,
  });

  const origins = [...new Set(data.map((tour) => tour.origin.name))];
  const destinations = [...new Set(data.map((tour) => tour.destination.name))];

  const searchHandler = async (filters) => {
    // try {
    //   setLoading(true);
    //   const res = await getTourList(filters);
    // } finally {
    //   setLoading(false);
    // }
    console.log(filters);
  };

  return (
    <>
      <Search
        data={{
          dates,
          setDates,
          searchState,
          setSearchState,
          origins,
          destinations,
          searchHandler,
        }}
      />
      <div className="w-[1180] m-auto flex flex-row-reverse mt-10">
        <h2 className="text-4xl font-normal mb-3.5">همه تور ها</h2>
      </div>

      <Suspense fallback={<p className="text-center">در حال بارگذاری...</p>}>
        {loading ? (
          <p className="text-center">در حال جستجو...</p>
        ) : (
          <TourList tours={tours} />
        )}
      </Suspense>
    </>
  );
};

export default SearchListTour;
