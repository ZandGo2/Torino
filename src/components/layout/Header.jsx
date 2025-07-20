import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

const Header = () => {
  return (
    <div className={styles.HeaderDiv}>
      <div className={styles.NavFirstDiv}>
        <div className={styles.LogoDiv}>
            <Image src="/Images/Torino.png" alt="logo" width={146} height={44}/>
        </div>
        <div className={styles.LinkDiv}>
            <Link className={styles.activeLink} href="/">صفحه اصلی</Link>
            <Link className={styles.DisAbleLink} href="/">خدمات گردشگری</Link>
            <Link className={styles.DisAbleLink} href="/">درباره ی ما</Link>
            <Link className={styles.DisAbleLink} href="/">تماس با ما</Link>
        </div>
      </div>
      <div>
        <button className={styles.BtnLogin}>
          <Image src="/Images/profile.png" alt="profile" width={24} height={24}/>
          ورود | ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Header;
