import Breadcrumb from '../../components/Breadcrumb'
import { ProseWide } from '../../components/Universal'

const rename_later = () => {
  return (
    <>
      {/* Must be included on every page */}
      {/* <Head>
        <title>SSIM Dwarka - Board of Governors</title>
      </Head> */}
      <Breadcrumb title="board of governors" />
      {/* Must be included on every page */}

      <ProseWide className="pb-12">
        <h2 className="pt-12 text-center">ADVISORY COUNCIL</h2>
        <br />
        <h3>Prof. Avtar Singh</h3>
        <p className="">
          Founder and Chairman, Sri Sukhmani Group of Institutes
        </p>
      </ProseWide>
    </>
  )
}

export default rename_later

// import { Head } from 'next/head'
// import Breadcrumb from '../../components/Breadcrumb'
// <Head>
//   <title>SSIM Dwarka - Board of Governors</title>
// </Head>
// <Breadcrumb title="board of governors" />
