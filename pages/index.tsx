import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../layouts/default'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div>
        <Head>
          <title>Index page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center py-2">
          <h2 className="text-blue-600 font-bold">Index page</h2>
        </main>
      </div>
    </DefaultLayout>
  )
}

export default Home
