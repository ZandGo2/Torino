import Image from "next/image";
import {
  FOOTER_SECTIONS,
  FOOTER_CONTACT,
  FOOTER_COPYRIGHT,
  FOOTER_TRUST_ICONS,
} from "@/constants/DataFooter.js";

const Footer = () => {
  return (
    <footer>
      <section className="w-[1180px] h-[290px] m-auto p-2 flex flex-row-reverse items-center justify-between border-t border-solid border-black/20">
        <div className="w-[25%] flex flex-row-reverse justify-between">
          <div className="flex flex-col text-right">
            <p className="text-2xl font-semibold mb-6 cursor-pointer">
              {FOOTER_SECTIONS.First_Section.title}
            </p>
            <ul>
              {FOOTER_SECTIONS.First_Section.links.map((item, index) => (
                <li
                  key={index}
                  className="font-normal text-lg text-[#282828] mt-1 cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-2xl font-semibold mb-6 cursor-pointer">
              {FOOTER_SECTIONS.Second_Section.title}
            </p>
            <ul>
              {FOOTER_SECTIONS.Second_Section.links.map((item, index) => (
                <li
                  key={index}
                  className="font-normal text-lg text-[#282828] mt-1 cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-[100%] w-[50%] flex flex-col items-start justify-around">
          <div>
            <Image
              src={FOOTER_CONTACT.logoSrc}
              alt={FOOTER_CONTACT.altText}
              width={FOOTER_CONTACT.logoWidth}
              height={FOOTER_CONTACT.logoHeight}
              className="cursor-pointer"
            />
            <p className="mt-6 cursor-pointer">
              تلفن پشتیبانی : {FOOTER_CONTACT.phone}
            </p>
          </div>
          <div className="w-[70%] flex flex-row-reverse justify-between">
            {FOOTER_TRUST_ICONS.map((icon, index) => (
              <Image
                className="cursor-pointer"
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-solid border-black/20 w-full">
        <p className="text-base text-center p-4">{FOOTER_COPYRIGHT}</p>
      </section>
    </footer>
  );
};

export default Footer;
