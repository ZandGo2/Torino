"use client";

import { useRouter } from "next/navigation";

const BtnOrder = (id) => {
  const router = useRouter();
  const buyHandler = () => {
    router.push("/order");
    console.log(id);
  };

  return (
    <button
      onClick={buyHandler}
      className="w-[204px] h-[56px] rounded-xl text-white bg-[#28A745] text-2xl font-normal"
    >
      رزرو و خرید
    </button>
  );
};

export default BtnOrder;
