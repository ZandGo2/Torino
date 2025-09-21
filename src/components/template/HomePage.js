import Image from "next/image";
import Search from "../module/dashboard/Search";
import CardTour from "../module/dashboard/CardTour";
import Phone from "../module/dashboard/Phone";
import WhyTorino from "../module/dashboard/WhyTorino";
import TrustIcons from "../module/dashboard/TrustIcons";

const data = [
  {
    image: "/images/Error.png",
    title: "هولر",
    price: 105000,
    options: ["نهار و صبحانه", "هفل پنج ستاره"],
  },
  {
    image: "/images/Error.png",
    title: "هولر",
    price: 105000,
    options: ["نهار و صبحانه", "هفل پنج ستاره"],
  },
  {
    image: "/images/Error.png",
    title: "هولر",
    price: 105000,
    options: ["نهار و صبحانه", "هفل پنج ستاره"],
  },
  {
    image: "/images/Error.png",
    title: "هولر",
    price: 105000,
    options: ["نهار و صبحانه", "هفل پنج ستاره"],
  },
  {
    image: "/images/Error.png",
    title: "هولر",
    price: 105000,
    options: ["نهار و صبحانه", "هفل پنج ستاره"],
  },
  {
    image: "/images/Error.png",
    title: "هولر",
    price: 105000,
    options: ["نهار و صبحانه", "هفل پنج ستاره"],
  },
  {
    image: "/images/Error.png",
    title: "هولر",
    price: 105000,
    options: ["نهار و صبحانه", "هفل پنج ستاره"],
  },
];

const HomePage = () => {
  return (
    <div className="mt-[75]">
      <Image
        src="/images/banner.png"
        alt="Banner"
        width={1440}
        height={350}
        className="m-auto"
      />
      {/* <Search /> */}
      {data.map((tour, i) => (
        <CardTour key={i} {...tour} />
      ))}
      <Phone />
      <WhyTorino />
      <TrustIcons />
    </div>
  );
};

export default HomePage;
