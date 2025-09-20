import Image from "next/image";
import { Trust_Section } from "@/constants/DataTrustIcons";

const TrustIcons = () => {
  return (
    <div className="m-auto w-[1440px] flex flex-row-reverse items-center justify-around">
      {Trust_Section.map((item, index) => (
        <div key={index} className="flex flex-row-reverse items-center text-right ">
          <Image
            src={item.src}
            alt={item.alt}
            width={item.with}
            height={item.height}
            className="ml-2.5"
          />
          <div className="flex flex-col items-end">
            <h3 className="text-[26px] font-medium">{item.title}</h3>
            <p className="text-base font-light mt-2 w-[70%]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustIcons;
