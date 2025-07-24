"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const { statusLogin, dispatch } = useContext(AuthContext);

  if (statusLogin.step !== "login") return null;
  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <h3>ورود به تورینو</h3>
        <div>
          <label>شماره موبایل خود را وارد کنید</label>
          <input type="text" name="phone" placeholder="0912***4253" />
        </div>
        <button>ارسال کد تایید</button>
      </div>
    </div>
  );
};

export default Login;
