import React from "react";

const Login = () => {
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
