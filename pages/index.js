import Head from 'next/head'

import Hero from '../components/home/Hero'
import Statistics from '../components/home/Statistics'
import Cards from '../components/home/Cards'

const index = () => {
  return (
    <>
      <Head>
        <title>SSIM Dwarka - Home</title>
      </Head>

      <Hero />
      <Statistics />
      <Cards />
    </>
  )
}

export default index
