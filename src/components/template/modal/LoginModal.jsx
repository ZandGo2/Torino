"use client";
import { AuthContext } from "@/context/AuthContext";
import { useLoginMutation } from "@/services/authService";
import { useContext } from "react";

const Login = () => {
  const { statusLogin, dispatch } = useContext(AuthContext);

  const { mutate, data, error, isLoading, isSuccess } = useLoginMutation();

  const changeHandler = (e) =>{
    dispatch({ type: "SET_PHONE", payload: e.target.value });
    console.log(statusLogin.phone)
  }

  const clickHandler = () =>{
    try {
      mutate(statusLogin.phone)
    } catch (error) {
      
    }
  }

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
          <input type="text" name="phone" placeholder="0912***4253" value={statusLogin.phone} onChange={changeHandler}/>
        </div>
        <button onClick={clickHandler}>ارسال کد تایید</button>
      </div>
    </div>
  );
};

export default Login;
