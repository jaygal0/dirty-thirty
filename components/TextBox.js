import React from 'react'
import styles from './TextBox.module.css'

const TextBox = ({ text, form, success, subText, subText2 }) => {
  return (
    <div
      className={
        form ? styles.form : success ? styles.success : styles.container
      }
    >
      {text} <br />
      {subText && <span className={styles.subText}>{subText}</span>}
      <br />
      {subText2 && <span className={styles.subText}>{subText2}</span>}
    </div>
  )
}

export default TextBox
