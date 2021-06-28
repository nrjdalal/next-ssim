import Link from 'next/link'

const Header = () => {
  return (
    <>
      <EasyHeaders />
      {/* Desktop Navbar */}
      <navbar className="hidden lg:block text-gray-600 body-font bg-white border-b-2 border-gray-200">
        <div className="container mx-auto flex p-5 items-center justify-between">
          <nav className="hidden lg:ml-auto lg:mr-auto lg:flex flex-wrap items-center lg:text-sm xl:text-base justify-center lg:w-[1080px] xl:w-[1280px]">
            {/* Nav Item 01 */}
            <DropNav title="About Us">
              <NavLink title="The Group" href="/about/the-group" />
              <NavLink title="The Institute" href="/about/the-institute" />
              <NavLink title="Vision Mission" href="/about/vision-mission" />
              <NavLink
                title="Chairman&#39;s Message"
                href="/about/chairmans-message"
              />
              <NavLink title="Dean&#39;s Message" href="/about/deans-message" />
              <NavLink
                title="Advisory Council"
                href="/about/board-of-governors"
              />
            </DropNav>
            <DropNav title="PGDM">
              <NavLink title="Programme" href="/pgdm/programme" />
              <NavLink title="Specializations" href="/pgdm/specializations" />
              <NavLink
                title="Corporate Edge Certifications"
                href="/pgdm/value-added-courses"
              />
            </DropNav>

            <DropNav title="Admission">
              <NavLink
                title="Admission Criteria"
                href="/admission/admission-process"
              />
              <NavLink title="Fee Structure" href="/admission/fee-structure" />
              <NavLink
                title="Education Loan"
                href="/admission/education-loan"
              />
              <NavLink title="Application Form" href="/admission/online-form" />
              <NavLink
                title="Download Brochure"
                href="/documents/brochure.pdf"
              />
              <NavLink title="FAQs" href="/admission/faqs" />
            </DropNav>

            <DropNav title="Faculty">
              <NavLink title="Profiles" href="/faculty/profiles/" />
            </DropNav>

            <DropNav title="Placement">
              <NavLink
                title="Placement Overview"
                href="/placement/placement-overview"
              />
              <NavLink
                title="Summer Internships"
                href="/placement/summer-internships"
              />
              <NavLink title="Live Projects" href="/placement/live-projects" />
              <NavLink
                title="Our Recruiters"
                href="/placement/our-recruiters"
              />
            </DropNav>

            <DropNav title="Testimonials">
              <NavLink
                title="Alumni Tesimonials"
                href="/testimonials/alumni-testimonials"
              />
              <NavLink
                title="Corporate Testimonials"
                href="/testimonials/corporate-testimonials"
              />
            </DropNav>

            <Link href="/life-at-ssim">
              <a className="hover:text-yellow-500 mr-5 xl:mr-10 cursor-pointer font-medium">
                Life @ SSIM
              </a>
            </Link>

            <Link href="/contact-us">
              <a className="hover:text-yellow-500 mr-5 xl:mr-10 cursor-pointer font-medium">
                Contact Us
              </a>
            </Link>

            <div className="flex">
              <Link href="/admission/online-form">
                <a>
                  <button className="hidden sm:block bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">
                    APPLY NOW
                  </button>
                </a>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 bg-blue-800 rounded text-white p-1 ml-3 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </nav>
        </div>
      </navbar>
    </>
  )
}

const EasyHeaders = () => {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between pr-6 py-3">
          <div className="flex items-center">
            <p className="hidden pl-6 font-medium sm:block mt-0.5">
              ADMISSION HELPLINE :
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-6 mr-1 sm:ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-0.5">
              <a href="tel:+91-8929399191">+918929399191</a>
            </p>
            <p className="hidden sm:block mt-0.5 ml-2">
              <a href="tel:+91-8588890906">+918588890906</a>
            </p>
          </div>
          <div className="flex items-center">
            <a
              className="invisible text-white"
              href="https://www.facebook.com/dwarkassim/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a> */}
            <a
              className="invisible ml-3 text-white"
              href="https://www.instagram.com/ssimdelhi_org/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            {/* <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="hidden lg:block text-gray-600 body-font bg-white border-b-2 border-gray-200">
        <div className="container mx-auto flex p-4 items-center justify-between">
          <Link href="/">
            <a className="font-medium text-gray-900 md:mb-0 flex flex-col items-end tracking-wider">
              <img
                className="md:h-14 lg:h-16"
                src="/images/logo-ssim.png"
                alt=""
              />
              <p className="text-[11px] font-semibold">Dwarka, New Delhi</p>
            </a>
          </Link>
          <Link href="/admission/online-form">
            <a className="hidden lg:block rounded-xl overflow-hidden">
              <img className="h-20" src="/images/bannerao.jpeg" alt="" />
            </a>
          </Link>
        </div>
      </header>
    </>
  )
}

const DropNav = (props) => {
  return (
    <>
      <div className="group mr-5 xl:mr-10">
        <div className="flex items-center">
          <p className="group-hover:text-blue-500 font-medium">{props.title}</p>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-4 w-4 ml-1 group-hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="hidden group-hover:block absolute z-20 w-[300px] top-4 left-1/2 -translate-x-1/2 py-5">
              <div className="w-full bg-white rounded-xl flex flex-col items-center p-5 border-2 border-gray-100">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const NavLink = (props) => {
  return (
    <>
      <Link href={props.href}>
        <a className="my-1 hover:text-white hover:bg-yellow-500 p-1.5 px-3 rounded cursor-pointer">
          {props.title}
        </a>
      </Link>
    </>
  )
}

export default Header
