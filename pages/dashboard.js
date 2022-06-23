import Head from 'next/head'
import Description from '../components/Description'
import Header from '../components/Header'

export default function Dashboard() {
  return (
    <div className=''>
      <Head>
        <title>DabOversea</title>
        <meta name="description" content="Designed & created by DabAZ" />
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Header />

      <Description />
    </div>
  )
}
