import React from "react";
import styles from "./ProjectSection.module.scss";
import ProjectContents from "./ProjectContents";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Fill_icon from "@/app/_components/buttons/Fill_icon";

function ProjectSection() {
  return (
    <div className={styles.projectSection} id="projects">
     
      <div className={styles.projectTitle}>Featured Personal Project</div>
      <div className={styles.projectDescription}>
        Below you can find a selection of personal projects I've been working on
        recently. For these you can check out both the code and a live version
        of the project. If you're interested in my work you're welcome to check
        out the other public repositories on my GitHub profile.
      </div> 
      <ProjectContents />
      <div className={styles.projectButtons}>
        <Fill_icon button_label="More projects" icon_element={<FaGithub />} href="https://github.com/mahery76" />
        <a
          href="/Documents/Resume.pdf"
          download="Resume.pdf"
          className={styles.getResume}
        >
          <IoIosMail />
          Get my resume
        </a>
      </div>
    </div>
  );
}

export default ProjectSection;
