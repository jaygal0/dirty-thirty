import React from 'react'
import Image from 'next/image'
import styles from './Polaroid.module.css'

const Polaroid = () => {
  return (
    <div className={styles.middle}>
      <Image height={319} width={261} src="/polaroid.png" alt="polaroid" />
    </div>
  )
}

export default Polaroid
