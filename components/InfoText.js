import React from 'react'
import styles from './InfoText.module.css'

const InfoText = ({
  address,
  heading,
  text,
  yellow,
  pink,
  purple,
  turquoise,
  moreText,
  covid,
  bus,
  parking,
  calendar,
}) => {
  return (
    <>
      {yellow && (
        <div className={styles.containerYellow}>
          <div className={styles.heading}>{heading}</div>
          {address ? (
            <a className={styles.link} href={address} target="_blank">
              <div className={styles.text}>{text}</div>
            </a>
          ) : (
            <div className={styles.text}>{text}</div>
          )}
          {moreText && <div className={styles.moreText}>{moreText}</div>}
          {bus && (
            <div className={styles.transport}>
              <span>bus: </span>
              {bus}
            </div>
          )}
          {parking && (
            <div className={styles.transport}>
              <span>parking: </span>
              {parking}
            </div>
          )}
        </div>
      )}
      {pink && (
        <div className={styles.containerPink}>
          <div className={styles.heading}>{heading}</div>
          {address ? (
            <a className={styles.link} href={address} target="_blank">
              <div className={styles.text}>{text}</div>
            </a>
          ) : (
            <div className={styles.text}>{text}</div>
          )}
          {moreText && <div className={styles.moreText}>{moreText}</div>}
          {covid && <div className={styles.covid}>{covid}</div>}
          {bus && (
            <div className={styles.transport}>
              <span>bus: </span>
              {bus}
            </div>
          )}
          {parking && (
            <div className={styles.transport}>
              <span>parking: </span>
              {parking}
            </div>
          )}
        </div>
      )}{' '}
      {turquoise && (
        <div className={styles.containerTurquoise}>
          <div className={styles.heading}>{heading}</div>
          {address ? (
            <a className={styles.link} href={address} target="_blank">
              <div className={styles.text}>{text}</div>
            </a>
          ) : (
            <div className={styles.text}>{text}</div>
          )}
          {moreText && <div className={styles.moreText}>{moreText}</div>}
          {bus && (
            <div className={styles.transport}>
              <span>bus: </span>
              {bus}
            </div>
          )}
          {parking && (
            <div className={styles.transport}>
              <span>parking: </span>
              {parking}
            </div>
          )}
        </div>
      )}{' '}
      {purple && (
        <div className={styles.containerPurple}>
          <div className={styles.heading}>{heading}</div>
          {address ? (
            <a className={styles.link} href={address} target="_blank">
              <div className={styles.text}>{text}</div>
            </a>
          ) : (
            <div className={styles.text}>{text}</div>
          )}
          {moreText && <div className={styles.moreText}>{moreText}</div>}
          {covid && <div className={styles.covid}>{covid}</div>}
          {bus && (
            <div className={styles.transport}>
              <span>bus: </span>
              {bus}
            </div>
          )}
          {parking && (
            <div className={styles.transport}>
              <span>parking: </span>
              {parking}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default InfoText
