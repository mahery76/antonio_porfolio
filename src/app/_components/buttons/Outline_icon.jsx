import React from 'react'
import styles from './Outline_icon.module.scss'
function Outline_icon({button_label, icon_element, href}) {

  return (
    <a className={styles.Outline_icon} href={href} rel="noopener noreferrer">
          {icon_element}
          {button_label}    
    </a>
  )
}

export default Outline_icon