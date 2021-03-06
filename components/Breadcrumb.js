import Head from 'next/head'
import Link from 'next/link'

const Breadcrumb = (props) => {
  const capitalize = (text) => {
    return text.toUpperCase()
  }
  return (
    <>
      <Head>
        <title className="capitalize">SSIM - {capitalize(props.title)}</title>
      </Head>
      <div className="relative h-[100px] sm:h-[150px] md:h-[200px] w-full bg-gray-800 flex items-center">
        <img
          className="h-full opacity-30"
          src={props.src || 'https://source.unsplash.com/1920x200/?education'}
          alt=""
        />
        <div className="absolute px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]">
          <p className="text-xl sm:text-2xl text-green-500 tracking-widest">
            <Link href="/">
              <a className="">HOME</a>
            </Link>
            &nbsp;&nbsp;
            {' > '}
            &nbsp;&nbsp;
            <a className="uppercase">{props.title}</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
