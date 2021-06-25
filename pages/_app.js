import '../styles/globals.css'

// Global Imports
import Header from '../components/Header'
import Pop_ups from '../components/Pop-ups'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Pop_ups />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
