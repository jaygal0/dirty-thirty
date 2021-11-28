import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Form from '../components/Form'
import Heading from '../components/Heading'
import Polaroid from '../components/Polaroid'
import TextBox from '../components/TextBox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Sora:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Lazer84.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main>
        <TextBox text="29th Jan 2022, You comin'?" form />
        <Form />
        <div className="shapes-absolute circle-pink">
          <Image height={116} width={116} src="/circle-pink.svg" />
        </div>
        <div className="shapes-absolute circle-purple">
          <Image height={112} width={112} src="/circle-purple.svg" />
        </div>
        <div className="shapes-absolute circle-yellow">
          <Image height={192} width={192} src="/circle-yellow.svg" />
        </div>
        <div className="shapes-absolute crown-turquoise">
          <Image height={51} width={60} src="/crown-turquoise.svg" />
        </div>
        <div className="shapes-absolute crown-yellow">
          <Image height={26} width={30} src="/crown-yellow.svg" />
        </div>
        <div className="shapes-absolute ring-orange">
          <Image height={24} width={24} src="/ring-orange.svg" />
        </div>
        <div className="shapes-absolute ring-pink">
          <Image height={24} width={24} src="/ring-pink.svg" />
        </div>
        <div className="shapes-absolute ring-yellow">
          <Image height={24} width={24} src="/ring-yellow.svg" />
        </div>
        <div className="shapes-absolute wiggle">
          <Image height={163} width={170} src="/wiggle.svg" />
        </div>
      </main>
    </div>
  )
}
