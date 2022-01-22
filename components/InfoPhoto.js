import React from 'react'
import styles from './InfoPhoto.module.css'
import Image from 'next/image'

const InfoPhoto = ({ img, position }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={`/${img}.jpg`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
    </div>
  )
}

export default InfoPhoto
