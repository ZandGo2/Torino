import Image from "next/image";
import { Trust_Section } from "@/constants/DataTrustIcons";

const TrustIcons = () => {
  return (
    <div className="my-5 border-t-1 border-black/20 w-[100%]">
      <div className="m-auto w-[1180px] flex flex-row-reverse items-center justify-around">
        {Trust_Section.map((item, index) => (
          <div
            key={index}
            className="flex flex-row-reverse items-center text-right mt-3.5"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.with}
              height={item.height}
              className="ml-2.5"
            />
            <div className="flex flex-col items-end">
              <h3 className="text-[26px] font-medium">{item.title}</h3>
              <p className="text-base font-light mt-2 w-[80%]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIcons;
