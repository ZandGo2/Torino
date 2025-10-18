"use client";
import { ImAirplane } from "react-icons/im";
import { LuShip } from "react-icons/lu";
import { FaBusSimple } from "react-icons/fa6";

const icons = {
  ImAirplane: <ImAirplane className="w-5 h-5 text-gray-600" />,
  LuShip: <LuShip className="w-5 h-5 text-gray-600" />,
  FaBusSimple: <FaBusSimple className="w-5 h-5 text-gray-600" />,
};

export default function MyTour({
  title,
  status,
  type,
  from,
  to,
  startDate,
  endDate,
  price,
  id,
}) {
  const statusColor =
    status === "تمام شده"
      ? "bg-green-100 text-green-700"
      : status === "در حال برگزاری"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="border rounded-2xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <span className={`text-xs px-3 py-1 rounded-full ${statusColor}`}>
          {status === "تمام شده" ? "به اتمام رسیده" : "در حال برگزاری"}
        </span>
        <div className="flex items-center gap-1 text-sm font-medium">
          <span>{title}</span>
          {icons[type]}
        </div>
      </div>

      <div className="flex justify-between text-gray-700 text-sm">
        <div>
          <span className="font-medium">{from}</span>
          <span className="mx-1">به</span>
          <span className="font-medium">{to}</span>
        </div>
        <span>تاریخ برگشت: {endDate}</span>
      </div>

      <div className="flex justify-between text-gray-500 text-sm">
        <span>تاریخ رفت: {startDate}</span>
        <span>مبلغ پرداخت شده: {price.toLocaleString()} تومان</span>
      </div>

      <div className="text-gray-400 text-xs text-left">شماره تور: {id}</div>
    </div>
  );
}
