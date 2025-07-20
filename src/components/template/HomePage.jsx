import Image from "next/image";
import Search from "../module/Search";
import SmallBanner from "../module/SmallBanner";
import ListCardTour from "./ListCardTour"

const HomePage = () => {
    return (
        <div>
            <Image src="/Images/Untitled_design__1_.png" alt="Banner" width={1440} height={350}/>
            <Search />
            <ListCardTour />
            <SmallBanner />
            
        </div>
    );
};

export default HomePage;