"use client";
import Image from "next/image";
import styles from "@/styles/PageNotFound.module.css";

const Error = () => {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.errorImage}>
        <Image
          src="/Images/Error Lamp Robot.png"
          alt="error404"
          height={555}
          width={555}
        />
      </div>
      <div className={styles.errorText}>
        <h3>اتصال با سرور برقرار نیست!</h3>
        <p>لطفا بعدا دوباره امتحان کنید.</p>
      </div>
    </div>
  );
};

export default Error;
