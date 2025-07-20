import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.errorImage}>
        <Image
          src="/Images/Error TV.png"
          alt="error404"
          height={555}
          width={555}
        />
      </div>
      <div className={styles.errorText}>
        <h3>صفحه مورد نظر یافت نشد!</h3>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
