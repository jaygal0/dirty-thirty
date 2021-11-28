import React from 'react'
import styles from './Heading.module.css'
import Image from 'next/image'

const Heading = () => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>
        <span className={styles.pink}>
          goodbye <span className={styles.letterSpacing}>20&apos;s</span>
        </span>{' '}
        hello <span className={styles.letterSpacing}>30&apos;s</span>
      </h1>
      <div className={styles.triangle}>
        <Image width={380.67} height={375.01} src="/purple-triangle.svg" />
      </div>
    </div>
  )
}

export default Heading
