import Header from '@/components/Header'
import Intro from '@/components/Intro'
import VideoList from '@/components/VideoList'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leadster Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Intro />
        <VideoList />
      </main>
    </>
  )
}
