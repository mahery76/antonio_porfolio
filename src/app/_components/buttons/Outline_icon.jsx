import React from 'react'
import styles from './Outline_icon.module.scss'
function Outline_icon({button_label, icon_element}) {

  return (
    <div className={styles.Outline_icon}>
          {icon_element}
          {button_label}    
    </div>
  )
}

export default Outline_icon