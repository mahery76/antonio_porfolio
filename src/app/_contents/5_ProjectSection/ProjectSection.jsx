import React from 'react'
import styles from "./ProjectSection.module.scss";
import ProjectContents from "./ProjectContents";
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import Fill_icon from '@/app/_components/buttons/Fill_icon';
import Outline_icon from '@/app/_components/buttons/Outline_icon';

function ProjectSection() {
  return (
    <div className={styles.projectSection}>
    <div className={styles.projectTitle}>Featured Personal Project</div>
    <div className={styles.projectDescription}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, harum amet.
      Omnis tempora perferendis, dolor voluptatibus non nulla rerum ad?
    </div>
    <ProjectContents/>
    <div className={styles.projectButtons}>
      <Fill_icon
        button_label="View my projects"
        icon_element={<FaGithub />}
      />
      <Outline_icon
        button_label="Get my resume"
        icon_element={<IoIosMail />}
      />
    </div>
  </div>
  )
}

export default ProjectSection

