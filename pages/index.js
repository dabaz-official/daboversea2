import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>DabOversea</title>
        <meta name="description" content="Designed & created by DabAZ" />
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Hero />
      <Footer />
    </div>
  )
}
