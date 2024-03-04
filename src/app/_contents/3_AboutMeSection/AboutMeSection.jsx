import React from 'react'
import styles from "./AboutMeSection.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaEye, FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import ProfilePic from "../../../../public/images/mahery.JPG";
import quote from "../../../../public/images/quotation.png";
import Image from "next/image";
import Outline_icon from '@/app/_components/buttons/Outline_icon';
import Fill_icon from '@/app/_components/buttons/Fill_icon';

function AboutMeSection() {
  return (
    <div className={styles.AboutMeSection}>
    <div className={styles.AboutMeTitle}>About Me</div>
    
    <div  className={styles.AboutMe_Content_and_Photo}>
      <div className={styles.AboutMeContent}>
        <div className={styles.AboutMeDescription}>
          <div className={styles.AboutMeQuote}>
            <Image src={quote} className={styles.quotation} />
          </div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          sapiente tempore! Ut magni quae nemo. Eum, distinctio laudantium?
          Assumenda aliquam tenetur sunt aperiam architecto voluptatem nihil,
          aspernatur, illo dolorum quod esse, quo inventore vero adipisci sequi
          dolorem error.
        </div>
        <div className={styles.AboutMeContacts}>
          <div className={styles.contactItem}>
            <BsFillTelephoneFill />
            <div className={styles.contactValues}>034 77 778 26</div>
          </div>
          <div className={styles.contactItem}>
            <IoIosMail />
            <div className={styles.contactValues}>
              randrianjafymahery@gmail.com
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaSkype />
            <div className={styles.contactValues}>
              randrianjafymahery@gmail.com
            </div>
          </div>
          <div className={styles.contactItem}>
            <IoLogoWhatsapp />
            <div className={styles.contactValues}>
              randrianjafymahery@gmail.com
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
      <Fill_icon button_label="View my projects" icon_element={<FaEye />} />
      <Outline_icon
        button_label="Get in touch"
        icon_element={<IoIosMail />}
      />
    </div>
  </div>
  )
}
export default AboutMeSection