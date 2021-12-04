import Head from 'next/head'
import Background from '../components/Background'
import FormExample from '../components/FormExample'
import TextBox from '../components/TextBox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahar Turns 30: Form</title>
      </Head>
      <main>
        <TextBox text="29th Jan 2022, You comin'?" form />
        <FormExample />
        <Background />
      </main>
    </div>
  )
}
