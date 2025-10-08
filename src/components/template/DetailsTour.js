import Image from "next/image";
import { FaMap, FaUserNinja } from "react-icons/fa";
import { GiStarMedal } from "react-icons/gi";
import { CiRoute } from "react-icons/ci";
import { IoCalendar } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { SiSecurityscorecard } from "react-icons/si";
import BtnOrder from "../module/btn/BtnOrder";

const DetailsTour = ({ data }) => {
  const {
    price,
    title,
    startDate,
    origin,
    image,
    fleetVehicle,
    endDate,
    availableSeats,
    id,
  } = data;

  //   console.log(data);
  return (
    <div className="w-[100%] bg-gray-50 m-[20px]">
      <div className="w-[1188px] h-[427px] p-7 bg-white m-auto my-[100px] flex flex-col border border-black/20 rounded-xl">
        <div className="flex flex-row-reverse ">
          <div>
            <Image
              src={image}
              alt={title}
              width={397}
              height={265}
              className="rounded-xl"
            />
          </div>
          <div className="w-[60%] flex flex-col items-end mr-7">
            <h1 className="text-3xl font-bold mb-5">{title}</h1>
            <p className="text-xl text-[#282828] mb-7">5 روز و 4 شب</p>
            <div className="mb-7 flex flex-row-reverse items-center">
              <FaUserNinja className="text-[#7D7D7D] ml-3" />
              <p className="text-xl text-[#7D7D7D] ml-7">تورلیدر از مبدا</p>
              <FaMap className=" text-[#7D7D7D] ml-3" />
              <p className="text-xl text-[#7D7D7D] ml-7">برنامه سفر</p>
              <GiStarMedal className=" text-[#7D7D7D] ml-3" />
              <p className="text-xl text-[#7D7D7D] ml-7">تضمین کیفیت</p>
            </div>
            <div className="w-[100%] flex flex-row-reverse justify-between">
              <p className="text-sm font-normal text-[#282828CC] flex items-center">
                تومان
                <span className="text-[#009ECA] text-2xl font-medium ml-3.5">
                  {price}
                </span>
              </p>
              <BtnOrder id={id} />
            </div>
          </div>
        </div>
        <div className="mt-15 w-[100%] flex flex-row-reverse justify-around">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3.5">
              <p>مبدا</p>
              <CiRoute className="text-xl ml-3" />
            </div>
            <p>{origin.name}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3.5">
              <p>تاریخ رفت</p>
              <IoCalendar className="text-xl ml-3" />
            </div>
            <p>{startDate}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3.5">
              <p>تاریخ برگشت</p>
              <IoCalendar className="text-xl ml-3" />
            </div>
            <p>{endDate}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3.5">
              <p>حمل و نقل</p>
              <FaBus className="text-xl ml-3" />
            </div>
            <p>{fleetVehicle}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3.5">
              <p>ظرفیت</p>
              <FaUsersBetweenLines className="text-xl ml-3" />
            </div>
            <p>{availableSeats}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3.5">
              <p>بیمه</p>
              <SiSecurityscorecard className="text-xl ml-3" />
            </div>
            <p>بیمه 50 هزار دیناری</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTour;
