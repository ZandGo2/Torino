"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import OtpInput from "react-otp-input";

const VerifyModal = () => {
  const [otp, setOtp] = useState("");
  const { statusLogin, dispatch } = useContext(AuthContext);

  if (statusLogin.step !== "verify") return null;
  return (
    <div>
      <div>
        <button>--</button>
      </div>
      <div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <p>60000</p>
        <button>send again</button>
      </div>
      <button>ورود به تورینو</button>
    </div>
  );
};

export default VerifyModal;
