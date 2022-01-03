import { useState } from 'react'
import Link from 'next/link'

const MobBar = () => {
  const [isMenu, setMenu] = useState(false)

  const toggleClass = () => {
    setMenu(!isMenu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  const Dropdown = (props) => {
    const [isDrop, setDrop] = useState(false)

    const toggleDrop = () => {
      setDrop(!isDrop)
    }

    const closeDrop = () => {
      setDrop(false)
    }

    return (
      <>
        <button onClick={toggleDrop} className="text-left mt-6 w-[300px]">
          <div className="bg-gray-900 p-4 py-2 flex justify-between items-center rounded-2xl border-[1px] border-gray-500">
            <h3 className="w-11/12 font-semibold">{props.title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div
            style={isDrop ? { display: 'flex' } : { display: 'none' }}
            className="flex-col items-center mt-2"
          >
            {props.children}
          </div>
        </button>
      </>
    )
  }

  const Sublink = (props) => {
    return (
      <>
        <Link href={props.href}>
          <a onClick={closeMenu} className={`mt-4 ${props.className}`}>
            {props.title}
          </a>
        </Link>
      </>
    )
  }

  return (
    <>
      {/* <div className="container mx-auto"> */}
      <div className="sticky top-0 flex lg:hidden p-5 justify-between border-t-2 border-b-2 border-gray-300 bg-white z-[55]">
        <Link href="/">
          <a>
            <img
              className="min-h-12 h-14 md:h-16"
              src="/images/logoSsim.png"
              alt=""
            />
          </a>
        </Link>
        <button onClick={toggleClass} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>
      {/* </div> */}
      {/* Dropdown */}
      <div
        className="flex lg:hidden top-0 z-[60] w-screen h-screen bg-gray-900 text-white flex-col items-center pt-8 pb-12 overflow-y-auto"
        style={isMenu ? { position: 'fixed' } : { display: 'none' }}
      >
        <svg
          onClick={closeMenu}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-10 h-10 top-5 right-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <Sublink title="Home" href="/" />

        <Dropdown title="About Us">
          <Sublink title="The Group" href="/about/the-group" />
          <Sublink title="The Institute" href="/about/the-institute" />
          <Sublink title="Vision Mission" href="/about/vision-mission" />
          <Sublink title="Chairman's Message" href="/about/chairmans-message" />
          <Sublink title="Dean's Message" href="/about/deans-message" />
          <Sublink
            title="Director&#39;s Message"
            href="/about/directors-message"
          />
          <Sublink title="Advisory Council" href="/about/board-of-governors" />
        </Dropdown>

        <Dropdown title="PGDM">
          <Sublink title="Programme" href="/pgdm/programme" />
          <Sublink title="Specializations" href="/pgdm/specializations" />
          <Sublink
            title="Corporate Edge Certifications"
            href="/pgdm/value-added-courses"
          />
          <Sublink title="Why SSIM" href="/pgdm/why-ssim" />
        </Dropdown>

        <Dropdown title="Admission">
          <Sublink
            title="Admission Criteria"
            href="/admission/admission-process"
          />
          <Sublink title="Fee Structure" href="/admission/fee-structure" />
          <Sublink title="Education Loan" href="/admission/education-loan" />
          <Sublink title="Application Form" href="/admission/online-form" />
          <Sublink title="Download Brochure" href="/documents/brochure.pdf" />
          <Sublink title="FAQs" href="/admission/faqs" />
        </Dropdown>

        <Dropdown title="Faculty">
          <Sublink title="Core Faculty" href="/faculty/profiles/" />
          <Sublink title="Visiting Faculty" href="/faculty/visiting-faculty/" />
        </Dropdown>

        <Dropdown title="Placements">
          <Sublink
            title="Placement Overview"
            href="/placement/placement-overview"
          />
          <Sublink
            title="Summer Internships"
            href="/placement/summer-internships"
          />
          <Sublink title="Live Projects" href="/placement/live-projects" />
          <Sublink title="Our Recruiters" href="/placement/our-recruiters" />
        </Dropdown>

        <Dropdown title="Testmonials">
          <Sublink
            title="Alumni Tesimonials"
            href="/testimonials/alumni-testimonials"
          />
          <Sublink
            title="Corporate Testimonials"
            href="/testimonials/corporate-testimonials"
          />
        </Dropdown>

        <span className="w-[24px] border-b-[1px] border-gray-500 mt-6 mb-2" />
        <Sublink title="Life @ SSIM" href="/life-at-ssim" />
        <Sublink title="Contact Us" href="/contact-us" className="mb-12" />
      </div>
    </>
  )
}

export default MobBar
