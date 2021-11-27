import React from 'react'
import styles from './TextBox.module.css'

const TextBox = ({ text }) => {
  return <div className={styles.container}>{text}</div>
}

export default TextBox
