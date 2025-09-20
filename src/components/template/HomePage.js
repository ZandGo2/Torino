import Image from "next/image";
import Search from "../module/dashboard/Search";
import CardTour from "../module/dashboard/CardTour";
import Phone from "../module/dashboard/Phone";
import WhyTorino from "../module/dashboard/WhyTorino";
import TrustIcons from "../module/dashboard/TrustIcons";

const HomePage = () => {
  return (
    <>
      <Image src='/images/banner.png' alt='Banner' width={1440} height={350} className="m-auto"/>
      <Search />
      <CardTour />
      <Phone />
      <WhyTorino />
      <TrustIcons />
    </>
  );
};

export default HomePage;
