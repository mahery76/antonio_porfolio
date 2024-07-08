import React from 'react'
import styles from './Outline_icon.module.scss'
function Outline_icon({button_label, href}) {

  return (
    <a className={styles.Outline_icon} href={href} target='blank'>
          {button_label}    
    </a>
  )
}

export default Outline_icon