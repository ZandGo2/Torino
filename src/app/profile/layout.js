import { FaUser } from "react-icons/fa";
import { RiSunFoggyFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="w-[1188px] my-[100px] m-auto flex flex-row-reverse items-start">
      <div className="w-[284px] h-[170px] rounded-xl ml-7 py-1 px-3 flex flex-col justify-between items-end border border-black/20">
        <Link
          className="w-[100%] h-[100%] flex flex-row items-center justify-end"
          href=""
        >
          <p className="mr-3.5">پروفایل</p>
          <FaUser />
        </Link>

        <Link
          className="w-[100%] h-[100%] flex flex-row items-center justify-end border-y-1 border-black/20 "
          href=""
        >
          <p className="mr-3.5">تور های من</p>
          <RiSunFoggyFill />
        </Link>
        <Link
          className="w-[100%] h-[100%] flex flex-row items-center justify-end"
          href=""
        >
          <p className="mr-3.5">تراکنش ها</p>
          <FaCcMastercard />
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
