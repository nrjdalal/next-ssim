import Head from 'next/head'

import Hero from '../components/home/Hero'
import Overlaps from '../components/home/Overlaps'
import Statistics from '../components/home/Statistics'
import Cards from '../components/home/Cards'
import Partners from '../components/home/Partners'
import Recruiters from '../components/home/Recruiters'
import Features from '../components/home/Features'
import Logos from '../components/home/Logos'


const index = () => {
  return (
    <>
      <Head>
        <title>SSIM Dwarka - Home</title>
      </Head>

      <Hero />
      <Overlaps />
      <Statistics />
      <Cards />
      <Partners />
      <Recruiters />
      <Features />
      <Logos />
    </>
  )
}

export default index
