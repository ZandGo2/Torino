import Image from "next/image";
import Search from "@/components/module/Search";
import CallSection from "@/components/module/CallSection";
import WhyTorinoSlider from "@/components/module/WhyTorinoSlider";
import ListCardTour from "./ListCardTour";
import TrustIcons from "@/components/module/TrustIcons";



const HomePage = () => {
  return (
    <div>
      <Image
        src="/Images/Untitled_design__1_.png"
        alt="Banner"
        width={1440}
        height={350}
      />
      <Search />
      <ListCardTour />
      <CallSection />
      <WhyTorinoSlider />
      <TrustIcons />
    </div>
  );
};

export default HomePage;
