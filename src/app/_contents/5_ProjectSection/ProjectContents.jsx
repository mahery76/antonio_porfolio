import React from "react";
import styles from "./ProjectContents.module.scss";
import Fill_icon from "@/app/_components/buttons/Fill_icon";
import Outline_icon from "@/app/_components/buttons/Outline_icon";
import Image from "next/image";
import ProjectImage from "../../../../public/images/project.png";

function ProjectContents() {
  return (
    <div className={styles.projectContent}>
      <div className={styles.projectItem}>
        <Image src={ProjectImage} className={styles.projectImage} alt="Project Image" />
        <div className={styles.itemInfo}>
          <div className={styles.itemName}>Timetable management</div>
          <div className={styles.itemDescription}>
          This web application is designed to simplify the process of planning your college timetable. With a focus on providing a better user experience and flexible interface. While still in its prototype phase, your input and contributions are highly valued. You're encouraged to participate in the project's development via the provided GitHub link. 
          </div>
          <div className={styles.itemTools}>
           NextJS, ReactJS, Tailwind CSS, IndexedDB.
          </div>
        </div>
        <div className={styles.itemButtons}>
          <Fill_icon 
            button_label="Code" 
            icon_element=""
            href="https://github.com/mahery76/coolplannerlite.git" 
          />
          <Outline_icon 
            button_label="Live link" 
            icon_element="" 
            href="https://timetableplanner.vercel.app/timetable_elements/teachers"
          />
        </div>
      </div>

    </div>
  );
}
export default ProjectContents;