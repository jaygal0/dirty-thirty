import React from 'react'
import styles from './InfoHeading.module.css'

const InfoHeading = ({ heading, subheading }) => {
  return (
    <>
      {heading && <div className={styles.heading}>{heading}</div>}
      {subheading && <div className={styles.subheading}>{subheading}</div>}
    </>
  )
}

export default InfoHeading
