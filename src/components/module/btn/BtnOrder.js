"use client";

const BtnOrder = (id) => {
  const buyHandler = () => {
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
