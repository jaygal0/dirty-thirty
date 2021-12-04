import Head from 'next/head'
import TextBox from '../components/TextBox'
import Button from '../components/Button'
import Background from '../components/Background'

export default function Home() {
  return (
    <div>
      <main className="flex-success">
        <TextBox
          text="Thanks for filling out the form!
                I’ll be in touch soon"
          success
        />
        <Button link="form" text="RSVP Again" />
        <Background />
      </main>
    </div>
  )
}
