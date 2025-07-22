import Image from "next/image";
import { Trust_Section } from "@/constants/DataTrustIcons";
import styles from "./TrustIcons.module.css";

const TrustIcons = () => {
  return (
    <div className={styles.DivImageDiv}>
      {Trust_Section.map((item, index) => (
        <div key={index} className={styles.ImageDiv}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.with}
            height={item.height}
          />
          <div className={styles.DivDescription}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustIcons;
