import React from 'react'
import styles from "./InboxSection.module.scss";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function InboxSection() {
  return (
    <div className={styles.inboxSection}>
      <div className={styles.inboxTitle}>Get in touch</div>
      <div className={styles.inboxDescription}>
        Please feel welcome to reach out to me at your convenience, whether it's
        for potential collaboration, project involvement, or any other inquiry.
        I eagerly await your message!
      </div>
      <div className={styles.inboxForm}>
        <form action="">
          <div className={styles.formName}>
            <div className={styles.inboxInput}>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firsname" />
            </div>
            <div className={styles.inboxInput}>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" />
            </div>
          </div>

          <div className={styles.inboxInput}>
            <label htmlFor="email">Email</label>
            <input type="mail" id="email" name="email" />
          </div>
          <div className={styles.inboxInput}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className={styles.inboxInput}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className={styles.inboxSubmit}>
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
      <div className={styles.inboxFooter}>
        <div className={styles.logosFooter}>
          <FaGithub size="1.3em" />
          <FaLinkedin size="1.3em" />
          <FaFacebook size="1.3em" />
          <FaInstagram size="1.3em" />
        </div>
        <div className={styles.copyright}>
          ©2024 Mahery RANDRIANJAFY. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default InboxSection