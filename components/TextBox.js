import React from 'react'
import styles from './TextBox.module.css'

const TextBox = ({ text, form, success }) => {
  return (
    <div
      className={
        form ? styles.form : success ? styles.success : styles.container
      }
    >
      {text}
    </div>
  )
}

export default TextBox
