import Link from 'next/link'

const Partners = () => {
  return (
    <div className="bg-[#096b97]">
      <div className="container mx-auto flex flex-col md:flex-row py-12">
        <div className="flex flex-col items-center w-full mx-5">
          <h1 className="text-3xl font-semibold italic text-white">
            Alumni Tesimonials
          </h1>
          {/* Part 1 */}
          <div className="bg-gray-100 my-12 rounded-3xl overflow-hidden p-8">
            <div className="flex items-center">
              <div className="w-1/3 max-w-[192px]">
                <div className="aspect-h-1 aspect-w-1">
                  <img
                    className="rounded-3xl object-cover"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className="pl-5">
                <div className="font-medium">Abhishek Garg</div>
                <div>VeroXyle</div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="prose mt-8">
              <blockquote className="">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90&apos;s microdosing.
                Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard
                pabst authentic iceland.
              </blockquote>
            </div>
          </div>
          <Link href="/admission/online-form">
            <a>
              <button className="hidden sm:block bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">
                READ MORE
              </button>
            </a>
          </Link>
        </div>

        <div className="flex flex-col items-center w-full mx-5">
          <h1 className="text-3xl font-semibold italic text-white">
            Corporate Tesimonials
          </h1>
          {/* Part 1 */}
          <div className="bg-gray-100 my-12 rounded-3xl overflow-hidden p-8">
            <div className="flex items-center">
              <div className="w-1/3 max-w-[192px]">
                <div className="aspect-h-1 aspect-w-1">
                  <img
                    className="rounded-3xl object-cover"
                    src="https://images.unsplash.com/photo-1616084403156-9ae114afa6a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
              </div>
              <div className="pl-5">
                <div className="font-medium">Aditya Dubey</div>
                <div>Tata Consultant</div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="prose mt-8">
              <blockquote className="">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90&apos;s microdosing.
                Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard
                pabst authentic iceland.
              </blockquote>
            </div>
          </div>
          <Link href="/admission/online-form">
            <a>
              <button className="hidden sm:block bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">
                READ MORE
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Partners
