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
              <Image src={quote} className={styles.quotation} />
            </div>
<<<<<<< HEAD
            Hi! I am Antonio, I'm a motivated junior frontend developer from Madagascar who loves learning and
=======
            Hi! I am Antonio, I'm a motivated junior frontend developer who loves learning and
>>>>>>> 0db966718cb2cc9e6c587f50533310c8b89dbf24
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
              Antananarivo, Madagascar
              </div>
            </div>
          </div>
        </div>
        <div className={styles.AboutMeProfilePhoto}>
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
