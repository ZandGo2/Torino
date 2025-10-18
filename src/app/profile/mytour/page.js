import MyTour from "@/components/template/MyTour.js";

const page = () => {
  
  const tours = [
    {
      title: "سفر با هواپیما",
      status: "تمام شده",
      type: "plane",
      from: "تهران",
      to: "سلیمانیه",
      startDate: "دوشنبه ۱۵ شهریور ۱۴۰۲",
      endDate: "جمعه ۱۹ شهریور ۱۴۰۲",
      price: 18000000,
      id: "101985404",
    },
    {
      title: "سفر با کشتی",
      status: "تمام شده",
      type: "ship",
      from: "تهران",
      to: "سلیمانیه",
      startDate: "دوشنبه ۱۵ شهریور ۱۴۰۲",
      endDate: "جمعه ۱۹ شهریور ۱۴۰۲",
      price: 18000000,
      id: "101985404",
    },
    {
      title: "سفر با اتوبوس",
      status: "در حال برگزاری",
      type: "bus",
      from: "تهران",
      to: "سلیمانیه",
      startDate: "دوشنبه ۱۵ شهریور ۱۴۰۲",
      endDate: "جمعه ۱۹ شهریور ۱۴۰۲",
      price: 18000000,
      id: "101985404",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 py-8">
        {tours.map((tour, i) => (
          <MyTour key={i} {...tour} />
        ))}
    </main>
  );
};

export default page;
