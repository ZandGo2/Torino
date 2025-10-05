"use client";
import { AuthContext } from "@/context/AuthContext";
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import { useLoginHandler } from "@/hooks/useLoginHandler";

const Login = () => {
  const { statusLogin, dispatch } = useContext(AuthContext);
  const { clickHandler, isLoading } = useLoginHandler();

  const changeHandler = (e) => {
    dispatch({ type: "SET_PHONE", payload: e.target.value });
  };

  const closeHandler = () => {
    dispatch({ type: "ClOSE" });
  };

  if (statusLogin.step !== "login") return null;
  return (
    <div className="flex items-center justify-center fixed inset-0 z-[100] w-[100%] h-[100%] bg-black/50">
      <div className="w-[561px] h-[362px] bg-white rounded-3xl flex flex-col justify-between p-5">
        <div>
          <button className="cursor-pointer" onClick={closeHandler}>
            <IoCloseSharp />
          </button>
        </div>
        <div className="flex flex-col items-center h-[80%]">
          <h3 className="text-3xl font-semibold mb-7">ورود به تورینو</h3>
          <div className="flex flex-col items-end">
            <label className="text-base font-light text-black/25 mb-5">
              شماره موبایل خود را وارد کنید
            </label>
            <input
              type="text"
              name="mobile"
              placeholder="0912***4253"
              value={statusLogin.mobile}
              className="border border-black/25 w-[491px] h-[54px] rounded-md p-1.5"
              onChange={changeHandler}
            />
          </div>
          <button
            className="bg-[#28A745] text-white w-[491px] h-[54px] mt-7 rounded-lg text-lg font-medium"
            onClick={clickHandler}
            disabled={isLoading}
          >
            ارسال کد تایید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
