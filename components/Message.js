import React from 'react'
import styles from './Message.module.css'

const Message = ({ text }) => {
  return <div className={styles.button}>{text}</div>
}

export default Message
