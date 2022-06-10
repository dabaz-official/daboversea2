import Head from "next/head"
import ApplicationForm from "../components/ApplicationForm"
import Header from "../components/Header"

export default function Application() {
  return (
    <div className="">
      <Head>
        <title>DabOversea</title>
        <meta name="description" content="Designed & created by DabAZ" />
        <link rel="icon" href="/dabaz.ico" />
      </Head>

      <Header />
      
      <div className="mx-5 my-6">
        <ApplicationForm />
      </div>
    </div>
  )
}