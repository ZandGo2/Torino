"use client";
import { AuthContext } from "@/context/AuthContext";
import { useLoginMutation } from "@/services/authServices";
import { notify } from "@/utils/tostify";
import { useContext } from "react";

const Login = () => {
  const { statusLogin, dispatch } = useContext(AuthContext);

  const { mutate, data, error, isLoading, isSuccess } = useLoginMutation();

  const changeHandler = (e) => {
    dispatch({ type: "SET_PHONE", payload: e.target.value });
  };

  const closeHandler = () => {
    dispatch({ type: "ClOSE" });
  };

  const clickHandler = () => {
    try {
      mutate(statusLogin.mobile);
      dispatch({ type: "SET_CODE", payload: data.code });
      notify("info", data.message);
      setTimeout(() => {
        dispatch({ type: "OPEN_VERIFY" });
      }, 2000);
    } catch (error) {
      notify("error", error.message);
    }
  };

  if (statusLogin.step !== "login") return null;
  return (
    <div className="flex items-center justify-center fixed inset-0 z-[100]">
      <div>
        <button onClick={closeHandler}>X</button>
      </div>
      <div>
        <h3>ورود به تورینو</h3>
        <div>
          <label>شماره موبایل خود را وارد کنید</label>
          <input
            type="text"
            name="mobile"
            placeholder="0912***4253"
            value={statusLogin.mobile}
            onChange={changeHandler}
          />
        </div>
        <button onClick={clickHandler}>ارسال کد تایید</button>
      </div>
    </div>
  );
};

export default Login;
