import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

const Button = ({ text, link }) => {
  return (
    <Link href={`/${link}`}>
      <button className={styles.button}>{text}</button>
    </Link>
  )
}

export default Button
