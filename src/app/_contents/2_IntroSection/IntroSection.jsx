import React from 'react'
import styles from './IntroSection.module.scss'
import Fill_icon from '@/app/_components/buttons/Fill_icon'
import Outline_icon from '@/app/_components/buttons/Outline_icon'
import { FaEye } from 'react-icons/fa'

function IntroSection() {
  return (
    <div className={styles.Intro_section}>
    <div className={styles.Intro_content}> 
      <div className={styles.Big_title}>
        Crafting <span className={styles.Font_vert}>
          innovative web applications
        </span> with speed and creativity
      </div>
      <div className={styles.Brief_presentation}>
        Junior frontend developer from ANTANANARIVO Madagascar
      </div>
      <div className={styles.Intro_buttons}>
          <Fill_icon 
          button_label='View my skills' 
          icon_element={<FaEye />}
          href="#skills"
          />
          <Outline_icon 
          button_label='View my projects' 
          icon_element={<FaEye />}
          href="#projects"
          />
      </div>
    </div>

    <div className={styles.Cover_photo}>
    </div>
  </div>
  )
}

export default IntroSection