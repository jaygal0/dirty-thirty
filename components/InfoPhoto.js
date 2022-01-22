import React from 'react'
import styles from './InfoPhoto.module.css'
import Image from 'next/image'

const InfoPhoto = ({ img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={`/${img}.jpg`} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default InfoPhoto
