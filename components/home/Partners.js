import Link from 'next/link'

const Partners = () => {
  return (
    <div className="bg-[#096b97] py-16">
      <div className="container mx-auto flex flex-col lg:flex-row p-6">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-3xl font-semibold italic text-white">
            Alumni Tesimonials
          </h1>
          {/* Part 1 */}
          <div className="bg-gray-100 my-12 rounded-3xl overflow-hidden p-8 lg:mr-5">
            <div className="flex items-center">
              <div className="w-1/3 max-w-[192px]">
                <div className="aspect-h-1 aspect-w-1">
                  <img
                    className="rounded-3xl object-cover"
                    src="/images/testimonials/alumni/Abhinav Singh.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pl-5">
                <div className="font-medium">Abhinav Singh</div>
                <div>PGDM Batch 2017-19</div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="prose mt-8">
              <blockquote className="">
                This college is one of the best college in delhi , this college provides an excellent learning environment, with amazing infrastructure. This college provides wonderful 100 % placement .
              </blockquote>
            </div>
          </div>
          <Link href="/testimonials/alumni-testimonials">
            <a>
              <button className="bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white font-medium tracking-wider">
                READ MORE
              </button>
            </a>
          </Link>
        </div>

        <div className="flex flex-col items-center w-full pt-12 lg:p-0">
          <h1 className="text-3xl font-semibold italic text-white">
            Corporate Tesimonials
          </h1>
          {/* Part 1 */}
          <div className="bg-gray-100 my-12 rounded-3xl overflow-hidden p-8 lg:ml-5">
            <div className="flex items-center">
              <div className="w-1/3 max-w-[192px]">
                <div className="aspect-h-1 aspect-w-1">
                  <img
                    className="rounded-3xl object-cover"
                    src="/images/testimonials/corporate/Muni Raman.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pl-5">
                <div className="font-medium">Muni Raman</div>
                <div>Singer, Actor</div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="prose mt-8">
              <blockquote className="">
                I really enjoyed interacting with the high energy students of SSIM. I believe the institute has been creating capable leaders of tomorrow who have entrepreneurial skills and competencies.
              </blockquote>
            </div>
          </div>
          <Link href="/testimonials/corporate-testimonials">
            <a>
              <button className="bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white font-medium tracking-wider">
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
