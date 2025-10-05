import Image from "next/image";
import Link from "next/link";

const CardTour = ({ title, id, image, options, price }) => {
  return (
    <div className="w-[278] border border-black/15 rounded-xl flex flex-col items-end m-2  transition-transform hover:scale-105">
      <Link href={`/tour/${id}`}>
        <Image
          src={image}
          alt={title}
          width={278}
          height={159}
          className="rounded-t-xl"
        />
        <div className="flex flex-col items-end px-2">
          <h2 className="text-2xl font-normal mt-1.5">{title}</h2>
          <p className="text-base font-normal mt-1.5 text-[#282828B2]">
            {options.map((opt, i) => (
              <span className={i == 1 ? "mr-2" : ""} key={i}>
                {opt}
              </span>
            ))}
          </p>
        </div>
        <div className="w-[100%] my-2 p-2 flex flex-row-reverse justify-between border-t-1 border-black/12">
          <button className="w-[64px] h-[25] bg-[#28A745] text-white flex flex-col items-center rounded-sm">
            رزرو
          </button>
          <p className="flex flex-row-reverse items-center">
            <span className="text-base text-[#009ECA]">{price}</span>
            <span className="text-xs text-[#282828CC] mr-2">تومان</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardTour;
