import React from 'react'
import styles from './Fill_icon.module.scss'
function Fill_icon({button_label, icon_element}) {
  return (
    <div className={styles.Fill_icon}>
        {icon_element}
        {button_label}
    </div>
  )
}

export default Fill_icon
