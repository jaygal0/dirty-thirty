import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <>
      <div className="shapes-absolute circle-pink">
        <Image height={116} width={116} src="/circle-pink.svg" alt="shape" />
      </div>
      <div className="shapes-absolute circle-purple">
        <Image height={112} width={112} src="/circle-purple.svg" alt="shape" />
      </div>
      <div className="shapes-absolute circle-yellow">
        <Image height={192} width={192} src="/circle-yellow.svg" alt="shape" />
      </div>
      <div className="shapes-absolute crown-turquoise">
        <Image height={51} width={60} src="/crown-turquoise.svg" alt="shape" />
      </div>
      <div className="shapes-absolute crown-yellow">
        <Image height={26} width={30} src="/crown-yellow.svg" alt="shape" />
      </div>
      <div className="shapes-absolute ring-orange">
        <Image height={24} width={24} src="/ring-orange.svg" alt="shape" />
      </div>
      <div className="shapes-absolute ring-pink">
        <Image height={24} width={24} src="/ring-pink.svg" alt="shape" />
      </div>
      <div className="shapes-absolute ring-yellow">
        <Image height={24} width={24} src="/ring-yellow.svg" alt="shape" />
      </div>
      <div className="shapes-absolute wiggle">
        <Image height={163} width={170} src="/wiggle.svg" alt="shape" />
      </div>
    </>
  )
}

export default Background
