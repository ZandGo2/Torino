import Image from "next/image";
import Search from "../module/dashboard/Search";
import CardTour from "../module/dashboard/CardTour";
import Phone from "../module/dashboard/Phone";
import WhyTorino from "../module/dashboard/WhyTorino";
import TrustIcons from "../module/dashboard/TrustIcons";

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-[75]">
      <Image
        src="/images/banner.png"
        alt="Banner"
        width={1440}
        height={350}
        className="m-auto"
        priority
      />
      <Search />
      <div className="w-[1180] m-auto flex flex-row-reverse mt-10">
        <h2 className="text-4xl font-normal mb-3.5">همه تور ها</h2>
      </div>
      <div className="w-[1180] m-auto flex flex-wrap flex-row justify-between">
        {data.map((tour, i) => (
          <CardTour key={i} {...tour} />
        ))}
      </div>
      <Phone />
      <WhyTorino />
      <TrustIcons />
    </div>
  );
};

export default HomePage;
