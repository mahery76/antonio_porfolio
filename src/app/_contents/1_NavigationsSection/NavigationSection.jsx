"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./NavigationSection.module.scss";
import useWindowWidth from "../../_hooks/useWindowWidth";
import Image from "next/image";
import logo from "../../../../public/images/MALOGO.png";

function NavigationSection() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const width = useWindowWidth();
  const upToMd = width >= 1024;

  if (upToMd || menuIsOpen) {
    return (
      <div className={styles.NavigationSection} suppressHydrationWarning>
        <div className={styles.mahery_logo} title="Mahery Antonio">
          <Image src={logo} alt="Mahery Antonio" className={styles.logoImg} />
        </div>
        <div className={styles.navigation_open}>
          <div
            className={styles.closeButton}
            onClick={() => setMenuIsOpen(() => !menuIsOpen)}
          >
            <IoClose />
          </div>

            <a
              href="#about_me"
              onClick={() => setMenuIsOpen(() => !menuIsOpen)}
            >
              About me
            </a>
            <a href="#skills" onClick={() => setMenuIsOpen(() => !menuIsOpen)}>
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMenuIsOpen(() => !menuIsOpen)}
            >
              Projects
            </a>
            <a
              href="#experiences"
              onClick={() => setMenuIsOpen(() => !menuIsOpen)}
            >
              Experiences
            </a>
            <a
              href="#contact_me"
              onClick={() => setMenuIsOpen(() => !menuIsOpen)}
            >
              Contact me
            </a>

          <div className={styles.navigation_links}>
            <a href="https://github.com/mahery76" target="_blanc">
              <FaGithub size="1.3em" />
            </a>
            <a
              href="https://www.linkedin.com/in/randrianjafy-mahery-701121210"
              target="_blanc"
            >
              <FaLinkedin size="1.3em" />
            </a>
            <a
              href="https://www.facebook.com/antonio.randrianjafy.10/"
              target="_blanc"
            >
              <FaFacebook size="1.3em" />
            </a>
            <a href="https://www.instagram.com/mahery_antonio/" target="_blanc">
              <FaInstagram size="1.3em" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.NavigationSection}>
      <div className={styles.mahery_logo} title="Mahery Antonio">
        <Image src={logo} alt="Mahery Antonio" className={styles.logoImg} />
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

export default NavigationSection;
