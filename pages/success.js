import Head from 'next/head'
import TextBox from '../components/TextBox'
import Background from '../components/Background'
import Message from '../components/Message'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahar Turns 30: Thanks!!!</title>
      </Head>
      <main className="flex-success">
        <TextBox
          text="Thanks for filling out the form!
                I’ll be in touch soon."
          success
        />
        <Message text="Stay awesome!" />
        <Background />
      </main>
    </div>
  )
}
