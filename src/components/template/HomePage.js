import Image from "next/image";
import Phone from "../module/dashboard/Phone";
import WhyTorino from "../module/dashboard/WhyTorino";
import TrustIcons from "../module/dashboard/TrustIcons";
import SearchListTour from "./SearchListTour";
import { getTourList } from "@/services/tourListService";

const HomePage = async () => {
  const data = await getTourList();
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
      <SearchListTour data={data} />
      <Phone />
      <WhyTorino />
      <TrustIcons />
    </div>
  );
};

export default HomePage;
