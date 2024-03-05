import React from "react";
import styles from "./SkillsSection.module.scss";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
function SkillsSection() {
  return (
    <div className={styles.skillsSection} id="skills">
      <div className={styles.skillsTitle}>Tools & Technologies I use</div>

      <div className={styles.toolsDescription}>
        These are the technologies and stack I use including: programming language, frameworks, libraries, database management system and any other tools. 
      </div>
      <div className={styles.toolsAndTech}>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <FaHtml5 className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>HTML</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <IoLogoCss3 className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>CSS</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <IoLogoJavascript className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>JavaScript(Es6)</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <FaNodeJs className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Node.js</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <FaReact className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>React</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <SiTailwindcss className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Tailwind CSS</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <FaSass className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Sass</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <SiNextdotjs className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Next.js</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <SiExpress className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Express.js</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <BiLogoPostgresql className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>PorsgreSQL</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <FaGitAlt className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Git</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <FaGithub className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Github</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <FaFigma className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Figma</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <SiPostman className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Postman</div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsIcon}>
            <SiAdobephotoshop className={styles.toolsIcon} />
          </div>
          <div className={styles.toolsName}>Adobe Photoshop</div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
