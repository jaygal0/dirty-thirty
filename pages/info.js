import Head from 'next/head'
import Background from '../components/Background'
import InfoHeading from '../components/InfoHeading'
import InfoPhoto from '../components/InfoPhoto'
import InfoText from '../components/InfoText'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahar Turns 30: info</title>
      </Head>
      <main>
        <InfoHeading heading="important info" />
        <InfoText
          purple
          heading="covid update"
          covid="this is an update message"
        />
        <InfoText
          yellow
          heading="date &amp; time"
          text={
            <>
              26th Feb <br /> 17:00 - 02:00
            </>
          }
        />
        <InfoText
          yellow
          address="https://google.com"
          heading="address"
          text="add address here"
          bus="svart express"
          parking="3 spots first come first serve"
        />

        <InfoText
          pink
          heading="theme/Dress code"
          text="Late 80&#39;s/Early 90&#39;s*"
          moreText="*not compulsory, but you&#39;re boring if you don&#39;t dress up"
        />
        <InfoHeading subheading="a few ideas" />
        <InfoPhoto img="fresh" />
        <InfoPhoto img="clueless" />
        <Background />
      </main>
    </div>
  )
}
