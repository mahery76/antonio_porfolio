import React from "react";
import styles from "./AboutMeSection.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaEye, FaSkype } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import ProfilePic from "../../../../public/images/mahery.JPG";
import quote from "../../../../public/images/quotation.png";
import Image from "next/image";
import Outline_icon from "@/app/_components/buttons/Outline_icon";
import Fill_icon from "@/app/_components/buttons/Fill_icon";

function AboutMeSection() {
  return (
    <div className={styles.AboutMeSection} id="about_me">
      <div className={styles.AboutMeTitle}>About Me</div>

      <div className={styles.AboutMe_Content_and_Photo}>
        <div className={styles.AboutMeContent}>
          <div className={styles.AboutMeDescription}>
            <div className={styles.AboutMeQuote}>
              {/* <Image src={quote} className={styles.quotation} alt="quote" /> */}
              <svg className={styles.quotation} stroke="currentColor" fill="none" viewBox="0 0 144 144">
                <path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"></path>
              </svg>
            </div>
            Hi! I am Antonio, I'm a motivated junior frontend developer from Madagascar who loves learning and
            building great web experiences. I'm looking for a new position where
            I can grow my skills and work with talented teammates. I believe
            teamwork is key to creating amazing websites, and I'm a good person to
            collaborate with!
          </div>
          <div className={styles.AboutMeContacts}>
            <div className={styles.contactItem}>
              <BsFillTelephoneFill />
              <div className={styles.contactValues}>034 77 778 26</div>
            </div>
            <div className={styles.contactItem}>
              <IoLogoWhatsapp />
              <div className={styles.contactValues}>
                034 77 778 26
              </div>
            </div>
            <div className={styles.contactItem}>
              <IoIosMail />
              <div className={styles.contactValues}>
                randrianjafymahery@gmail.com
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaLocationDot />
              <div className={styles.contactValues}>
                ANTANANARIVO, Madagascar
              </div>
            </div>
          </div>
        </div>
        <div className={styles.AboutMeProfilePhoto}>
          <div className={styles.AboutMeProfilePhotoDots}></div>
          <Image
            src={ProfilePic}
            alt="Mahery Antonio"
            className={styles.ProfilePic}
          />
        </div>
      </div>

      <div className={styles.AboutMe_buttons}>
        <Fill_icon
          button_label="View my projects"
          icon_element={<FaEye />}
          href="#projects"
        />
        <Outline_icon
          button_label="Get in touch"
          icon_element={<IoIosMail />}
          href="#contact_me"
        />
      </div>
    </div>
  );
}
export default AboutMeSection;
