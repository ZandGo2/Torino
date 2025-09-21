import Image from "next/image";

const Phone = () => {
  return (
    <div className="w-[1180px] h-[251px] rounded-xl border border-black/20 m-auto my-8 flex flex-row-reverse">
      <div className="w-[70%] bg-[#28A745] rounded-xl flex">
        <Image
          src="/images/Taking.png"
          alt=""
          width={308}
          height={225}
          className="ml-15 mt-6"
        />
        <div className="w-[50%] flex flex-col justify-center items-center">
          <p className="text-5xl font-extrabold text-white text-right">
            خرید تلفی از
            <span className="text-[#10411B] mr-4">تورینو</span>
          </p>
          <p className=" font-normal text-3xl mt-5 text-right">
            !به هرکجا که میخواهید
          </p>
        </div>
      </div>
      <div className="w-[30%] h-[100%] flex flex-col justify-center items-center">
        <p className="flex items-center mb-6">
          <Image
            src="/images/call1.png"
            alt="phone icons"
            width={24}
            height={24}
          />
          <span className="text-3xl font-bold text-black ml-3">021-1840</span>
        </p>
        <button className="w-[175px] h-[41px] flex justify-center items-center text-base font-medium rounded-lg bg-[#10411B] text-white p-4 cursor-pointer">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
};

export default Phone;
