import React from "react";
import styles from "./ProjectContents.module.scss";
import portfolioImage from "../../../../public/images/portfolio.png";
import cybertimerImage from "../../../../public/images/cybertimer.png";
import ProjectItem from "./ProjectItem";

function ProjectContents() {
  return (
    <div className={styles.projectContent}>

      <ProjectItem
        projectImage={portfolioImage}
        projectName="Portfolio"
        projectDescription="description of the portfolio"
        projectTechnologies="Next.js, React.js, Sass, Nodemailer"
        projectCodeSource="https://github.com/mahery76/antonio_porfolio.git"
        projectLink="https://mahery-antonio.vercel.app/"
      />
      
      <ProjectItem
        projectImage={cybertimerImage}
        projectName="Cybercafe Timer"
        projectDescription="description of the portfolio"
        projectTechnologies="Next.js, React.js, Tailwind, Indexed "
        projectCodeSource="https://github.com/mahery76/CybercafeTimer.git"
        projectLink="https://cybercafetimer.vercel.app/"
      />

    </div>
  );
}
export default ProjectContents;