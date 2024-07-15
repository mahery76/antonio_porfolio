import React from "react";
import styles from "./ProjectContents.module.scss";
import portfolioImage from "../../../../public/images/portfolio.png";
import cybertimerImage from "../../../../public/images/cybertimer.png";
import ejeryemploiImage from "../../../../public/images/ejeryemploi.png";
import ProjectItem from "./ProjectItem";

function ProjectContents() {
  return (
    <div className={styles.projectContent}>
      <ProjectItem
        projectImage={portfolioImage}
        projectName="Portfolio"
        projectDescription="
        The project is a personal portfolio website that showcases my skills, technologies, programming languages, and personal projects, highlighting my hands-on experience. Designed with responsive web design (RWD) principles, it ensures an optimal viewing experience across all devices, presenting my work in a visually appealing and accessible manner.
        "
        projectTechnologies="Next.js, React.js, Sass, Nodemailer"
        projectCodeSource="https://github.com/mahery76/antonio_porfolio.git"
        projectLink="https://mahery-antonio.vercel.app/"
      />
      <ProjectItem
        projectImage={ejeryemploiImage}
        projectName="Ejeryemploi"
        projectDescription="
        Ejeryemploi stands for 'ckeck timetable' in english, and dedicated to university. A comprehensive timetable web app manager that streamlines scheduling and time management for users. Implemented features such as calendar synchronization, real-time updates, and a constraint programming algorithm for generating timetables efficiently..
        "
        projectTechnologies="ReactJS, TailwindCSS, ExpressJS, PosgreSQL"
        projectCodeSource="https://github.com/mahery76/eJeryEmploi.git"
        // projectLink="https://mahery-antonio.vercel.app/"
      />
      <ProjectItem
        projectImage={cybertimerImage}
        projectName="Cybercafe Timer"
        projectDescription="
         Cybercafe timer is a web application  with an intuitive interface for efficient computer usage management, featuring straightforward controls for easy manipulation by staff and customers. Key functionalities include time tracking, billing management, and user session monitoring, all designed to streamline operations and enhance the user experience.
        "
        projectTechnologies="Next.js, React.js, Tailwind, Indexed "
        projectCodeSource="https://github.com/mahery76/CybercafeTimer.git"
        projectLink="https://cybercafetimer.vercel.app/"
      />
    </div>
  );
}
export default ProjectContents;
