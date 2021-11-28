import React from 'react'
import styles from './TextBox.module.css'

const TextBox = ({ text, form }) => {
  return <div className={form ? styles.form : styles.container}>{text}</div>
}

export default TextBox
