"use client";
import { useCheckOtpMutation, useLoginMutation } from "@/services/authServices";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useLoginHandler } from "@/hooks/useLoginHandler";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { notify } from "@/utils/tostify";
import OtpInput from "react-otp-input";

const VerifyModal = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(10);
  const { statusLogin, dispatch } = useContext(AuthContext);
  const { accessToken, setAccessToken } = useContext(AuthContext);
  const { mutate, data, error, isLoading1, isSuccess } = useCheckOtpMutation();
  const { clickHandler, isLoading } = useLoginHandler();

  const backStepHandler = () => {
    dispatch({ type: "OPEN_LOGIN" });
  };

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const resendHandler = () => {
    clickHandler();
    setTimer(10);
  };

  const loginHandler = () => {
    try {
      mutate(
        { mobile: statusLogin.mobile, code: otp },
        {
          onSuccess: (data) => {
            notify("info", data.message);
            // کوکی
            setAccessToken(data.accessToken);
            setTimeout(() => {
              dispatch({ type: "CLOSE" });
            }, 2000);
          },
          onError: (error) => {
            notify("error", error.message);
          },
        }
      );
    } catch (error) {
      notify("error", error.message);
    }
  };

  if (statusLogin.step !== "verify") return null;
  return (
    <div className="flex items-center justify-center fixed inset-0 z-[100] w-[100%] h-[100%] bg-black/50">
      <div className="w-[561px] h-[362px] bg-white rounded-3xl flex flex-col justify-between p-5">
        <div>
          <button className="cursor-pointer" onClick={backStepHandler}>
            <MdOutlineKeyboardBackspace />
          </button>
        </div>
        <div className="flex flex-col items-center h-[80%]">
          <p className="text-3xl font-semibold mb-3.5">
            .کد تایید را وارد کنید
          </p>
          <p className="text-[#282828] font-normal text-base mb-2.5">
            کد تایید به شماره {statusLogin.mobile} ارسال شد
          </p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-[58px] !h-[53px] mx-2 rounded-md border border-black/25 text-center focus:outline-none focus:border-blue-500"
              />
            )}
          />
          <p className="mt-3">{timer !== 0 && timer}</p>
          {timer === 0 && (
            <button
              onClick={resendHandler}
              disabled={isLoading}
              className="cursor-pointer mt-3"
            >
              ارسال مجدد کد
            </button>
          )}
          <button
            className="bg-[#28A745] text-white w-[491px] h-[54px] mt-4 rounded-lg text-lg font-medium"
            onClick={loginHandler}
          >
            ورود به تورینو
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyModal;
