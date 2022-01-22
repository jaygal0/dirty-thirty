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
          covid="The party may be affected due to covid, I&#39;ll keep you up-to-date if anything changes."
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
          address="https://goo.gl/maps/18yyBwbeYsHnAv598"
          heading="address"
          text="Anna-stinas lid 7, 433 75 Jonsered"
          bus="518, 519, 529"
          train="Jonsered Station, Partille"
          car="venue parking"
        />
        <InfoText
          pink
          heading="theme/Dress code"
          text="Late 80&#39;s/Early 90&#39;s"
        />
        <InfoHeading subheading="a few ideas" />
        <InfoPhoto img="fresh" />
        <InfoPhoto img="clueless2" />
        <InfoPhoto position img="brooke" />
        <Background />
      </main>
    </div>
  )
}
