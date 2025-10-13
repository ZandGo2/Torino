import React from "react";

const page = () => {
  const orders = [
    {
      id: "12054902",
      type: "ثبت نام در تور گردشگری",
      amount: "۱۲,۰۰۰,۰۰۰",
      date: "۱۴۰۲/۱۰/۱۲ - ۱۴:۲۴",
    },
    {
      id: "12054902",
      type: "ثبت نام در تور گردشگری",
      amount: "۱۲,۰۰۰,۰۰۰",
      date: "۱۴۰۲/۱۰/۱۲ - ۱۴:۲۴",
    },
    {
      id: "12054902",
      type: "ثبت نام در تور گردشگری",
      amount: "۱۲,۰۰۰,۰۰۰",
      date: "۱۴۰۲/۱۰/۱۲ - ۱۴:۲۴",
    },
    {
      id: "12054902",
      type: "ثبت نام در تور گردشگری",
      amount: "۱۲,۰۰۰,۰۰۰",
      date: "۱۴۰۲/۱۰/۱۲ - ۱۴:۲۴",
    },
  ];
  return (
    <div className="w-[872px] border border-black/20 rounded-xl">
      <table className="w-full text-sm text-gray-800">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          <tr className="text-center">
            <th className="py-3 px-4">شماره سفارش</th>
            <th className="py-3 px-4">نوع تراکنش</th>
            <th className="py-3 px-4">مبلغ (تومان)</th>
            <th className="py-3 px-4">تاریخ و ساعت</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, i) => (
            <tr
              key={i}
              className="text-center hover:bg-gray-50 border-t border-gray-100"
            >
              <td className="py-3 px-4">سفارش {order.id}</td>
              <td className="py-3 px-4">{order.type}</td>
              <td className="py-3 px-4">{order.amount}</td>
              <td className="py-3 px-4">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
