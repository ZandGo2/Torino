import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-[1440px] m-auto mt-[75px] flex flex-row justify-around items-center">
      <Image
        src="/Images/Error TV.png"
        alt="error500"
        height={555}
        width={555}
      />
      <div className="text-right flex flex-col items-center">
        <h3 className="text-4xl font-semibold">! صفحه مورد نظر یافت نشد</h3>
        <Link
          href="/"
          className="flex flex-col items-center w-[361px] h-[75px] rounded-2xl bg-[#D8FFE1] text-[#28A745] text-2xl font-semibold mt-15 p-7"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
