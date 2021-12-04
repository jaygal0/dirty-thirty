import React from 'react'
import styles from './TextBox.module.css'

const TextBox = ({ text, form, success, subText }) => {
  return (
    <div
      className={
        form ? styles.form : success ? styles.success : styles.container
      }
    >
      {text}
      {subText && <span className={styles.subText}>{subText}</span>}
    </div>
  )
}

export default TextBox
