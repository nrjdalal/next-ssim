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
                    src="/images/testimonials/alumni/Mausam.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pl-5">
                <div className="font-medium">Mausam Singh</div>
                <div>PGDM Batch 2015-17</div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="prose mt-8">
              <blockquote className="">
                Here, campus life is excellent. The main aim is to provide students with this form of education that can support not only educational growth, but also social and economic growth. All students here are equal and important. Teachers are information cooperatives. The atmosphere is conducive to learning. Well designed labs and appropriate classroom for learning and teaching. Placement quality is wonderful.
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
                    src="/images/testimonials/corporate/Shweta Upadhyay.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pl-5">
                <div className="font-medium">Shweta Upadhyay</div>
                <div>Amazon</div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="prose mt-8">
              <blockquote className="">
              This institute is excellent in imparting knowledge through industry relevant infrastructure, information and approaches. What sets apart the faculty here is the ambience they provide where every opportunity is given to grow, learn and share knowledge
              It is remarkable to see the budding talents brimming with curiosity and the fire to go beyond.
              Good luck and keep scaling.
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
