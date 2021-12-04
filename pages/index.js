import Head from 'next/head'
import Background from '../components/Background'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Polaroid from '../components/Polaroid'
import TextBox from '../components/TextBox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahar Turns 30</title>
      </Head>
      <main>
        <Heading />
        <div className="flex">
          <Polaroid />
          <TextBox text="Let's celebrate being old together" />
          <Button text="RSVP now!" link="form" />
        </div>
        <Background />
      </main>
    </div>
  )
}
