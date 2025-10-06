"use client";
import { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { HEADER_LINKS } from "@/constants/DataHeader.js";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { GetProfile } from "@/services/getProfileService";
// import { notify } from "@/utils/tostify";

const Header = () => {
  // const { accessToken } = useContext(AuthContext);

  const { statusLogin, dispatch } = useContext(AuthContext);

  const [profileData, setProfileData] = useState(null);
  const [show, setShow] = useState(false);

  const { data, isLoading, error, refetch } = GetProfile();

  const ClickHandler = () => {
    dispatch({ type: "OPEN_LOGIN" });
  };

  const showHandler = () => {
    setShow((show) => !show);
  };

  useEffect(() => {
    if (data) {
      console.log("پروفایل بارگذاری شد:", data);
    }
  }, [data]);

  // useEffect(() => {
  //   if (accessToken) {
  //     GetProfile();
  //   } else {
  // notify("error", "لطفا وارد شوید");
  //   }
  // }, [accessToken]);

  return (
    <header className="flex justify-center">
      <div className="w-[100%] h-[74px] rounded-b-lg shadow-xl fixed bg-white opacity-100 z-50">
        <div className="w-[1440px] flex flex-row-reverse m-auto items-center justify-between p-2">
          <div className="w-[70%] flex flex-row-reverse items-center justify-between">
            <div>
              <Image
                src="/images/Logo.png"
                alt="logo"
                width={146}
                height={44}
                className="cursor-pointer"
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
            {data ? (
              <div>
                <button
                  onClick={showHandler}
                  className="text-[#28A745] flex flex-row-reverse items-center text-lg"
                >
                  <Image
                    src="/images/Login.png"
                    alt="profile"
                    width={24}
                    height={24}
                    className="ml-1.5"
                  />
                  {data.mobile}
                  <FaChevronDown className="text-[#28A745] mr-1.5" />
                </button>
                {show && (
                  <div className="w-[246px] h-[151px] rounded-xl bg-white flex flex-col items-end absolute top-[75px]">
                    <div className="w-[100%] flex items-center justify-end text-sm bg-[#F4F4F4] p-2.5 rounded-t-xl">
                      <span>{data.mobile}</span>
                      <IoPerson className="ml-2.5" />
                    </div>
                    <div className=" w-[100%] flex items-center justify-end border-b-1 border-black/12 text-sm p-2.5 mt-2">
                      <span>اطلاعات حساب کاربری</span>
                      <GoPerson className="ml-2.5" />
                    </div>
                    <div>
                      <button className="flex flex-row-reverse items-center text-sm text-[#D40000] p-2.5  mt-2">
                        <Image
                          src="/images/logout.png"
                          alt="logOut"
                          width={20}
                          height={20}
                          className="ml-2.5"
                        />
                        خروج از حساب کاربری
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={ClickHandler}
                className="p-2 flex flex-row-reverse items-center text-[#28A745] border border-solid border-[#28A745] rounded-lg cursor-pointer"
              >
                <Image
                  src="/images/Login.png"
                  alt="profile"
                  width={24}
                  height={24}
                />
                ورود | ثبت نام
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
