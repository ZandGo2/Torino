import Image from "next/image";

const NotFound = () => {
  return (
    <div className="w-[1440px] m-auto flex flex-row justify-around items-center">
      <Image
        src="/Images/Error TV.png"
        alt="error500"
        height={555}
        width={555}
      />
      <div className="text-right">
        <h3 className="text-4xl font-semibold">! صفحه مورد نظر یافت نشد</h3>
        <button className="w-[361px] h-[75px] rounded-2xl bg-[#D8FFE1] text-[#28A745] text-2xl font-semibold mt-8">
          بازگشت به صفحه اصلی{" "}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
