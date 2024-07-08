import React from 'react'
import styles from './Fill_icon.module.scss'
function Fill_icon({button_label, href}) {
  return (
    <a className={styles.Fill_icon} href={href} target='blank'>
        {button_label}
    </a>
  )
}

export default Fill_icon
