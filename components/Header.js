import Link from 'next/link'

const Header = () => {
  return (
    <>
      {/* Mini Header */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between pr-6 py-3">
          <div className="flex items-center">
            <p className="hidden pl-6 font-medium sm:block mt-0.5">TOLL FREE :</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-6 mr-1 sm:ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p className="mt-0.5">9876543210</p>
          </div>
          <div className="flex items-center">
            <a className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="text-gray-600 body-font bg-white border-b-2 border-gray-200">
        <div className="container mx-auto flex p-5 items-center justify-between">
          <Link href="/">
            <a className="font-medium text-gray-900 md:mb-0">
              <img className="h-12 md:h-14 lg:h-16" src="https://ssimdwarka.org/wp-content/uploads/2019/12/logo-ssim.png" alt="" />
            </a>
          </Link>
          <Link href="/">
            <a className="hidden lg:block font-medium text-gray-900 md:mb-0">
              <img className="h-12 md:h-14 lg:h-16" src="https://jsb.jaipuria.edu.in/wordpress/wp-content/uploads/2021/01/jsb_strip_banner.jpg" alt="" />
            </a>
          </Link>
        </div>
      </header>

      {/* Desktop Navbar */}
      <navbar className="hidden lg:block text-gray-600 body-font bg-white border-b-2 border-gray-200">
        <div className="container mx-auto flex p-5 items-center justify-between">
          <nav className="hidden lg:ml-auto lg:mr-auto lg:flex flex-wrap items-center text-sm lg:text-base xl:text-lg justify-center">
            {/* Nav Item 01 */}
            <div className="group relative mr-5 xl:mr-10">
              <a className=" group-hover:text-blue-500 flex items-center">
                About
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="hidden group-hover:block absolute z-20 w-[320px] top-5 left-1/2 -translate-x-1/2 py-5">
                <div className="w-full bg-white rounded-xl flex flex-col items-center p-5 border-2 border-gray-100">
                  <Link href="/about/the-group">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">The Group</a>
                  </Link>
                  <Link href="/about/the-institute">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">The Institute</a>
                  </Link>
                  <Link href="/about/vision-mission">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">Vision Mission</a>
                  </Link>
                  <Link href="/about/chairmans-message">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">Chairman&apos;s Message</a>
                  </Link>
                  <Link href="/about/deans-message">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">Dean&apos;s Message</a>
                  </Link>
                  <Link href="/about/board-of-Governors">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">Board of Governors</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Nav Item 02 */}
            <div className="group relative mr-5 xl:mr-10">
              <a className=" group-hover:text-blue-500 flex items-center">
                PGDM
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="hidden group-hover:block absolute z-20 w-[320px] top-5 left-1/2 -translate-x-1/2 py-5">
                <div className="w-full bg-white rounded-xl flex flex-col items-center p-5 border-2 border-gray-100">
                  <Link href="/pgdm/programme">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">Programme</a>
                  </Link>
                  <Link href="/pgdm/specializations">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">Specializations</a>
                  </Link>
                  <Link href="/pgdm/value-added-courses">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">Value Added Courses</a>
                  </Link>
                  <Link href="/pgdm/faqs">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">FAQs</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Nav Item 03 */}
            <div className="group relative mr-5 xl:mr-10">
              <a className=" group-hover:text-blue-500 flex items-center">
                Admission
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="hidden group-hover:block absolute z-20 w-[320px] top-5 left-1/2 -translate-x-1/2 py-5">
                <div className="w-full bg-white rounded-xl flex flex-col items-center p-5 border-2 border-gray-100">
                  <Link href="/admission/">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer"></a>
                  </Link>
                  <Link href="/admission/">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer"></a>
                  </Link>
                  <Link href="/admission/">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer"></a>
                  </Link>
                  <Link href="/admission/">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer"></a>
                  </Link>
                  <Link href="/admission/">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer"></a>
                  </Link>
                  <Link href="/admission/">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer"></a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Nav Item 04 */}
            <div className="group relative mr-5 xl:mr-10">
              <a className=" group-hover:text-blue-500 flex items-center">
                Faculty
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="hidden group-hover:block absolute z-20 w-[320px] top-5 left-1/2 -translate-x-1/2 py-5">
                <div className="w-full bg-white rounded-xl flex flex-col items-center p-5 border-2 border-gray-100">
                  <Link href="/faculty/profiles">
                    <a className="my-3 hover:text-yellow-500 cursor-pointer">profiles</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Nav Item 05 */}
            <div className="group relative mr-5 xl:mr-10">
              <a className=" group-hover:text-blue-500 flex items-center">
                Placement
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="hidden group-hover:block absolute z-20 w-[320px] top-5 left-1/2 -translate-x-1/2 py-5">
                <div className="w-full bg-white rounded-xl flex flex-col items-center p-5 border-2 border-gray-100">
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">One</a>
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">Two</a>
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">Three</a>
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">Four</a>
                </div>
              </div>
            </div>
            {/* Nav Item 06 */}
            <div className="group relative mr-5 xl:mr-10">
              <a className=" group-hover:text-blue-500 flex items-center">
                Testimonials
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="hidden group-hover:block absolute z-20 w-[320px] top-5 left-1/2 -translate-x-1/2 py-5">
                <div className="w-full bg-white rounded-xl flex flex-col items-center p-5 border-2 border-gray-100">
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">One</a>
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">Two</a>
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">Three</a>
                  <a className="my-3 hover:text-yellow-500 cursor-pointer">Four</a>
                </div>
              </div>
            </div>
            {/* Nav Item 05 */}
            <a className="hover:text-gray-900 mr-5 xl:mr-10">Contact Us</a>
            <div className="flex">
              <button className="hidden sm:block bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">APPLY NOW</button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-blue-800 rounded text-white p-1 ml-3 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </nav>
        </div>
      </navbar>
    </>
  )
}

export default Header
