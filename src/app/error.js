"use client";
import Image from "next/image";

const Error = () => {
  return (
    <div className="w-[1440px] m-auto mt-[75px] flex flex-row justify-around items-center">
      <Image src="/Images/Error.png" alt="error500" height={555} width={555} />
      <div className="text-right">
        <h3 className="text-4xl font-semibold">! اتصال با سرور برقرار نیست</h3>
        <p className="text-2xl font-semibold mt-8">
          لطفا بعدا دوباره امتحان کنید.
        </p>
      </div>
    </div>
  );
};

export default Error;
