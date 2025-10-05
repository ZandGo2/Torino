import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useLoginMutation } from "@/services/authServices";
import { notify } from "@/utils/tostify";
import { validate } from "@/utils/validate";

export const useLoginHandler = () => {
  const { statusLogin, dispatch } = useContext(AuthContext);
  const { mutate, data, error, isLoading, isSuccess } = useLoginMutation();

  const clickHandler = () => {
    const errors = validate("login", statusLogin.mobile);
    if (Object.keys(errors).length > 0) {
      notify("error", errors.mobile);
      return;
    }

    try {
      mutate(statusLogin.mobile, {
        onSuccess: (data) => {
          notify("info", data.message);
          notify("info", data.code);
          setTimeout(() => {
            dispatch({ type: "OPEN_VERIFY" });
          }, 2000);
        },
        onError: (error) => {
          notify("error", error.message);
        },
      });
    } catch (error) {
      notify("error", error.message);
    }
  };

  return { clickHandler, data, error, isLoading, isSuccess };
};
