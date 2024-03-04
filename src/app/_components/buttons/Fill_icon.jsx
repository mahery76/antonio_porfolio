import React from 'react'
import styles from './Fill_icon.module.scss'
import Link from 'next/link'
function Fill_icon({button_label, icon_element, href}) {
  return (
    <a className={styles.Fill_icon} href={href}>
        {icon_element}
        {button_label}
    </a>
  )
}

export default Fill_icon
