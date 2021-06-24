import Link from 'next/link'

const one = () => {
  return (
    <>
      <div className="h-[720px]">
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto p-5">
            <Link href="/">
              <a>Home</a>
            </Link>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;
            <Link href="/one">
              <a>One</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default one
