import React from 'react'
import styles from "./ExperiencesSection.module.scss";

function ExperiencesSection() {
  return (
    <div className={styles.experienceEducationSection} id='experiences'>
      <div className={styles.experienceEducationTitle} >
        Experiences & Educations
      </div>
      <div className={styles.experienceEducationContent}>

        {/* Experiences */}
        <div className={styles.experienceContent}>
          <div className={styles.experienceTitle}>Experiences</div>


          <div className={styles.experienceItem}>
            <div className={styles.itemTitle}>
              Development of a web application "Ejeryemploi" for schedule management at ASJA University
            </div>
            <div className={styles.itemPeriod}>
              July 2023 – in progress
            </div>
            <div className={styles.itemLocation}>
              ASJA (Athénée Saint Joseph Antsirabe ) in Antsirabe
            </div>
            <div className={styles.itemContent}>
              <ul>
                <li>
                  Frontend development using React.js, Backend with Express.js and PosgreSQL as the RDMS
                </li>
                <li>
                  Conception of the project using UML (Unified Modeling Language) and Visual Paradigm
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemTitle}>
              Interuniversity Hackathon 4th Edition | Techzara - P4H
            </div>
            <div className={styles.itemPeriod}>
              March 25th-25th 2023
            </div>
            <div className={styles.itemLocation}>
              Techzara - P4H in ANTANANARIVO
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemContentIntro}>
                It is a competition located in ANTANANARIVO, among all Universities from each region of Madagascar. And we are the
                Integration of a mobile application developed in React Native with Airtel Money API
              </div>
              <ul>
                <li>
                  I was the conceptor of the project, defining the database schema that fit to the application.
                </li>
                <li>
                  I contribute to the mobile interface design using Figma.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemTitle}>
              Hackathon organised by Hairun Technology | GE-IT
            </div>
            <div className={styles.itemPeriod}>
              December 16th-17th 2023
            </div>
            <div className={styles.itemLocation}>
              GE-IT University at Andranomena in ANTANANARIVO
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemContentIntro}>
                Development of a web application integrating APIs connected to smart sockets, utilizing HTML, CSS, and vanilla JS
              </div>
              <ul>
                <li>
                  I did some part of the Frontend development and some part in testing the functionnalies of our application
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.itemTitle}>
              Exploratory Internship | Akany Risika Antsirabe
            </div>
            <div className={styles.itemPeriod}>
              July – August 2022
            </div>
            <div className={styles.itemLocation}>
              Akany Risika Antsirabe
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemContentIntro}>
                Akany risika is ...
              </div>
              <ul>
                <li>
                  Assistance with network and system maintenance within the Akany Risika center, management of multiservices and internet connection within the Cyber
                </li>
              </ul>
            </div>
          </div>


        </div>

        {/* Educations */}
        <div className={styles.experienceContent}>
          <div className={styles.experienceTitle}>Educations</div>

          <div className={styles.experienceItem}>
            <div className={styles.itemTitle}>Master's degree in Computer Science - Software Engineering </div>
            <div className={styles.itemPeriod}>
              2022 - 2023
            </div>
            <div className={styles.itemLocation}>Athénée Saint Joseph Antsirabe University</div>
            <div className={styles.itemContent}>
              <div className={styles.itemContentIntro}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores consequuntur repellendus provident?
              </div>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemTitle}>Bachelor's degree in Computer Science - Software development</div>
            <div className={styles.itemPeriod}>
              2018 - 2021
            </div>
            <div className={styles.itemLocation}>Athénée Saint Joseph Antsirabe University</div>
            <div className={styles.itemContent}>
              <div className={styles.itemContentIntro}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores consequuntur repellendus provident?
              </div>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <div className={styles.itemTitle}>High scholl degree</div>
            <div className={styles.itemPeriod}>
              2017
            </div>
            <div className={styles.itemLocation}>Private High School Saint Joseph Antsirabe</div>
            <div className={styles.itemContent}>
              <div className={styles.itemContentIntro}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores consequuntur repellendus provident?
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ExperiencesSection