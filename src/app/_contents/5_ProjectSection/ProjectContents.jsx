import React from 'react'
import styles from "./ProjectContents.module.scss";
import Fill_icon from '@/app/_components/buttons/Fill_icon';
import Outline_icon from '@/app/_components/buttons/Outline_icon';
import Image from "next/image";
import ProjectImage from "../../../../public/images/project.png";


function ProjectContents() {
  return (
    <div className={styles.projectContent}>
    <div className={styles.projectItem}>
      <Image src={ProjectImage} className={styles.projectImage} />
      <div className={styles.itemInfo}>
        <div className={styles.itemName}>Timetable management</div>
        <div className={styles.itemDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
          neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
          neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
          neque.
        </div>
        <div className={styles.itemTools}>
          React, Express.js, Tailwind CSS, PostgresSql
        </div>
      </div>
      <div className={styles.itemButtons}>
        <Fill_icon button_label="Code" icon_element="" />
        <Outline_icon button_label="Live link" icon_element="" />
      </div>
    </div>

    <div className={styles.projectItem}>
      <Image src={ProjectImage} className={styles.projectImage} />
      <div className={styles.itemInfo}>
        <div className={styles.itemName}>Timetable management</div>
        <div className={styles.itemDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
          neque.
          <details>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
              neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
              neque.
          </details>
        </div>
        <div className={styles.itemTools}>
          React, Express.js, Tailwind CSS, PostgresSql
        </div>
      </div>
      <div className={styles.itemButtons}>
        <Fill_icon button_label="Code" icon_element="" />
        <Outline_icon button_label="Live link" icon_element="" />
      </div>
    </div>

    <div className={styles.projectItem}>
      <Image src={ProjectImage} className={styles.projectImage} />
      <div className={styles.itemInfo}>
        <div className={styles.itemName}>Timetable management</div>
        <div className={styles.itemDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
          neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
          neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          ratione culpa, quod dicta consectetur corporis porro! Esse ea eos
          neque.
        </div>
        <div className={styles.itemTools}>
          React, Express.js, Tailwind CSS, PostgresSql
        </div>
      </div>
      <div className={styles.itemButtons}>
        <Fill_icon button_label="Code" icon_element="" />
        <Outline_icon button_label="Live link" icon_element="" />
      </div>
    </div>

  </div>
  )
}

export default ProjectContents