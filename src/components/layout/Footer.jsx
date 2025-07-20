import Image from "next/image";
import styles from "./layout.module.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <p>تورینو</p>
          <ul>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>چرا تورینو</li>
            <li>بیمه مسافرتی</li>
          </ul>
        </div>
        <div>
          <p>خدمات مشتریان</p>
          <ul>
            <li>پشتیبانی آنلاین</li>
            <li>راهنمای خرید</li>
            <li>راهنمای استرداد</li>
            <li>پرسش و پاسخ</li>
          </ul>
        </div>
        <div>
          <div>
            <Image
              src="/Images/Torino.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p>تلفن پشتیبانی : 021-8574</p>
          </div>
          <div>
            <Image
              src="/Images/aira-682b7c43.png"
              alt="aira"
              width={100}
              height={100}
            />
            <Image
              src="/Images/samandehi-6e2b448a.png"
              alt="samandehi"
              width={100}
              height={100}
            />
            <Image
              src="/Images/ecunion-35c3c933.png"
              alt="ecunion"
              width={100}
              height={100}
            />
            <Image
              src="/Images/passenger-rights-48368f81 1.png"
              alt="passenger-rights"
              width={100}
              height={100}
            />
            <Image
              src="/Images/home-desktop.png"
              alt="home-desktop"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div>
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </div>
  );
};

export default Footer;
