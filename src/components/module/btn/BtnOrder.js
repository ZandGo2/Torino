"use client";
import { useRouter } from "next/navigation";
import { putTourID } from "@/services/putTour";
import { notify } from "@/utils/tostify";

const BtnOrder = (id) => {
  const router = useRouter();

  const buyHandler = async () => {
    console.log(id);
    const data = await putTourID(id.id);
    console.log(data);
    setTimeout(() => {
      notify("success", data.message);
    }, 2000);
    router.push("/order");
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
