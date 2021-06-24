import '../styles/globals.css'

// Global Imports
import Header from '../components/Header'
import Admission from '../components/Admission'
import Admission_form from '../components/Admission-form'
import Download from '../components/Download'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Admission />
      <Admission_form />
      <Download />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
