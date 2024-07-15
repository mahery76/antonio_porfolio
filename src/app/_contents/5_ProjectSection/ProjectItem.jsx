import React from "react";
import styles from "./ProjectItem.module.scss";
import Fill from "@/app/_components/buttons/Fill";
import Outline from "@/app/_components/buttons/Outline";
import Image from "next/image";

function ProjectItem({
  projectImage,
  projectName,
  projectDescription,
  projectTechnologies,
  projectCodeSource,
  projectLink,
}) {
  return (
    <div className={styles.projectItem}>
      <Image
        src={projectImage}
        className={styles.projectImage}
      />
      <div className={styles.itemInfo}>
        <div className={styles.itemName}>{projectName}</div>
        <div className={styles.itemDescription}>{projectDescription}</div>
        <div className={styles.itemTools}>{projectTechnologies}</div>
      </div>
      <div className={styles.itemButtons}>
        <Fill
          button_label="Code"
          icon_element=""
          href={projectCodeSource}
        />
        <Outline
          button_label="Live link"
          icon_element=""
          href={projectLink}
        />
      </div>
    </div>
  );
}

export default ProjectItem;
