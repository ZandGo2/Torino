import Image from "next/image";
import Link from "next/link";
import { HEADER_LINKS } from "@/constants/DataHeader.js";

const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="w-[100%] h-[74px] rounded-b-lg shadow-xl fixed bg-white">
        <div className="w-[1440px] flex flex-row-reverse m-auto items-center justify-between p-2">
          <div className="w-[70%] flex flex-row-reverse items-center justify-between">
            <div>
              <Image
                src="/images/Logo.png"
                alt="logo"
                width={146}
                height={44}
              />
            </div>
            <div className="w-[70%] flex flex-row-reverse items-center justify-between">
              {HEADER_LINKS.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <button className="p-2 flex flex-row-reverse items-center text-[#28A745] border border-solid border-[#28A745] rounded-lg">
              <Image
                src="/images/Login.png"
                alt="profile"
                width={24}
                height={24}
              />
              ورود | ثبت نام
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
