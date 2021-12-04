import Head from 'next/head'
import Background from '../components/Background'
import FormExample from '../components/FormExample'
import TextBox from '../components/TextBox'

export default function Home() {
  return (
    <div>
      <main>
        <TextBox text="29th Jan 2022, You comin'?" form />
        <FormExample />
        <Background />
      </main>
    </div>
  )
}
