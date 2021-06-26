import '../styles/globals.css'

// Global Imports
import Header from '../components/Header'
import Pop_ups from '../components/Pop-ups'
import Footer from '../components/Footer'
import MobBar from '../components/MobBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <MobBar />
      <Pop_ups />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
