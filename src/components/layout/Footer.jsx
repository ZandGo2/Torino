import Image from "next/image";
import styles from "./layout.module.css";

import {
  FOOTER_SECTIONS,
  FOOTER_CONTACT,
  FOOTER_COPYRIGHT,
  FOOTER_TRUST_ICONS,
} from "@/constants/DataFooter.js";

const Footer = () => {
  return (
    <div className={styles.FooterDiv}>
      <div className={styles.MainFooter}>
        <div className={styles.DivFirstListFooter}>
          <div className={styles.FirstListFooter}>
            <p>{FOOTER_SECTIONS.First_Section.title}</p>
            <ul>
              {FOOTER_SECTIONS.First_Section.links.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className={styles.FirstListFooter}>
            <p>{FOOTER_SECTIONS.Second_Section.title}</p>
            <ul>
              {FOOTER_SECTIONS.Second_Section.links.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.SecondSectionFooter}>
          <div className={styles.DivLogoFooter}>
            <Image
              src={FOOTER_CONTACT.logoSrc}
              alt={FOOTER_CONTACT.altText}
              width={FOOTER_CONTACT.logoWidth}
              height={FOOTER_CONTACT.logoHeight}
            />
            <p>تلفن پشتیبانی : {FOOTER_CONTACT.phone}</p>
          </div>
          <div className={styles.DivImg}>
            {FOOTER_TRUST_ICONS.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.DivP}>
        <p>{FOOTER_COPYRIGHT}</p>
      </div>
    </div>
  );
};

export default Footer;
