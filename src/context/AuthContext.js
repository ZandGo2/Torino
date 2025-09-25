"use client";
import { useReducer, createContext } from "react";

export const AuthContext = createContext();

const initialState = {
  step: "none", // login, verify, done
  mobile: "",
  code: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    // modal
    case "OPEN_LOGIN":
      return { ...state, step: "login", error: null };
    case "OPEN_VERIFY":
      return { ...state, step: "verify", error: null };
    case "ClOSE":
      return { ...state, step: "done", error: null };
    // input
    case "SET_PHONE":
      return { ...state, mobile: action.payload };
    case "SET_CODE":
      return { ...state, code: action.payload };
    case "CLOSE":
      return initialState;
    // error and default
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [statusLogin, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ statusLogin, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
