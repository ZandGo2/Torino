"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useCheckOtpMutation, useLoginMutation } from "@/services/authService";
import { notify } from "@/utils/tostify";
import OtpInput from "react-otp-input";

const VerifyModal = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(10);
  const { statusLogin, dispatch } = useContext(AuthContext);
  const { mutate, data, error, isLoading, isSuccess } = useCheckOtpMutation();
  const loginApiMutation = useLoginMutation();

  const backStepHandler = () => {
    dispatch({ type: "OPEN_LOGIN" });
  };

  const timerHandler = () => {
    try {
      loginApiMutation.mutate(statusLogin.mobile);
      dispatch({ type: "SET_CODE", payload: loginApiMutation.data.code });
      notify("info", loginApiMutation.data.code);
    } catch (error) {
      notify("error", loginApiMutation.error.message);
    }
    setTimer(10);
  };

  useEffect(() => {
    if (timer === 0) return;
    // problems
    if (statusLogin.code && timer === 10) {
      setTimeout(() => {
        notify("info", statusLogin.code);
      }, 5000);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const loginHandler = () => {
    try {
      mutate({ mobile: statusLogin.mobile, code: statusLogin.code });
      notify("success", data.message);
      setTimeout(() => {
        dispatch({ type: "CLOSE" });
      }, 2000);
    } catch (error) {
      notify("error", error.message);
    }
  };

  if (statusLogin.step !== "verify") return null;
  return (
    <div>
      <div>
        <button onClick={backStepHandler}>--</button>
      </div>
      <div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <p>{timer === 0 ? "ارسال مجدد کد" : timer}</p>
        <button onClick={timerHandler}>send again</button>
      </div>
      <button onClick={loginHandler}>ورود به تورینو</button>
    </div>
  );
};

export default VerifyModal;
