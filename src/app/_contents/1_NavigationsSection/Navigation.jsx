"use client"
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./Navigation.module.scss";
import useWindowWidth from "../../_hooks/useWindowWidth";
import Image from "next/image";
import logo from "../../../../public/images/MALOGO.png";

function Navigation() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const width = useWindowWidth();
    const upToMd = width >= 1024;
  
    if (upToMd || menuIsOpen) {
      return (
        <div className={styles.NavigationSection} suppressHydrationWarning>
          <div className={styles.mahery_logo} title="Mahery Antonio">
            <Image
              src={logo}
              width={60}
              height={60}
              alt="Mahery Antonio"
              className={styles.logoImg}
            />
          </div>
          <div className={styles.navigation_open}>
            <div
              className={styles.closeButton}
              onClick={() => setMenuIsOpen(() => !menuIsOpen)}
            >
              <IoClose />
            </div>
            <div className={styles.about_me}>About me</div>
            <div>Skills</div>
            <div>Projects</div>
            <div>Experiences</div>
            <div>Contact Me</div>
            <div className={styles.navigation_links}>
              <FaGithub size="1.3em" />
              <FaLinkedin size="1.3em" />
              <FaFacebook size="1.3em" />
              <FaInstagram size="1.3em" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.NavigationSection}>
        <div className={styles.mahery_logo} title="Mahery Antonio">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="Mahery Antonio"
            className={styles.logoImg}
          />
        </div>
        <div className={styles.navigation_closed}>
          <div
            className={styles.openButton}
            onClick={() => setMenuIsOpen(() => !menuIsOpen)}
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    );
}

export default Navigation