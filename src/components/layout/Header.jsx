"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { HEADER_LINKS } from "@/constants/DataHeader.js";
import { AuthContext } from "@/context/AuthContext";
import styles from "./layout.module.css";

const Header = () => {
  const { statusLogin, dispatch } = useContext(AuthContext);

  const ClickHandler = () => {
    dispatch({ type: "OPEN_LOGIN" });
  };

  return (
    <div className={styles.HeaderDiv}>
      <div className={styles.NavFirstDiv}>
        <div className={styles.LogoDiv}>
          <Image src="/Images/Torino.png" alt="logo" width={146} height={44} />
        </div>
        <div className={styles.LinkDiv}>
          {HEADER_LINKS.map((item, index) => (
            <Link
              key={index}
              className={item.active ? styles.activeLink : styles.DisAbleLink}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button className={styles.BtnLogin} onClick={ClickHandler}>
          <Image
            src="/Images/profile.png"
            alt="profile"
            width={24}
            height={24}
          />
          ورود | ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Header;
