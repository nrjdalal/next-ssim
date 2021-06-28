import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-blue-900">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-left -mb-10 justify-between">
            <div className="lg:w-1/6 md:w-1/2 w-full text-left">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">
                ABOUT
              </h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link name="The Group" to="/about/the-group" />
                <Footer_link name="The Institute" to="/about/the-institute" />
                <Footer_link name="Vision Mission" to="/about/vision-mission" />
                <Footer_link
                  name="Chairman's Message"
                  to="/about/chairmans-message"
                />
                <Footer_link name="Dean's Message" to="/about/deans-message" />
                {/* <Footer_link
                  name="Board of Governors"
                  to="/about/board-of-governors"
                /> */}
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full text-left">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">
                PROGRAM
              </h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link name="Programme" to="/pgdm/programme" />
                <Footer_link
                  name="Specializations"
                  to="/pgdm/specializations"
                />
                <Footer_link
                  name="Value Added Courses"
                  to="/pgdm/value-added-courses"
                />
                {/* <Footer_link name="FAQs" to="/pgdm/faqs" /> */}
                <Footer_link
                  name="Placement Overview"
                  to="/placement/placement-overview"
                />
                <Footer_link
                  name="Our Recruiters"
                  to="/placement/our-recruiters"
                />
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full text-left">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">
                ADMISSIONS
              </h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link
                  name="Admission Process"
                  to="/admission/admission-process"
                />
                <Footer_link
                  name="Fee Structure"
                  to="/admission/fee-structure"
                />
                <Footer_link
                  name="Education Loan"
                  to="/admission/education-loan"
                />
                <Footer_link name="Online Form" to="/admission/online-form" />
                {/* <a
                  href="/documents/brochure.pdf"
                  download
                  className="text-white hover:text-yellow-300 pb-1"
                >
                  Download Brochure
                </a> */}
                <Footer_link name="FAQs" to="/admission/faqs" />
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full text-left">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">
                OTHER
              </h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link name="Faculty Profiles" to="/faculty/profiles" />
                <Footer_link
                  name="Summer Internships"
                  to="/placement/summer-internships"
                />
                <Footer_link
                  name="Live Projects"
                  to="/placement/live-projects"
                />
                {/* <Footer_link name="Testimonials" to="/" /> */}
                <Footer_link name="Privacy Policy" to="/privacy-policy" />
                <Footer_link name="Contact Us" to="/contact-us" />
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-gray-900">
          <div className="container mx-auto py-4 px-5 flex justify-between">
            <span className="w-full text-center sm:text-left text-white text-base tracking-wider italic pb-[48px] sm:p-0">
              <p>
                Designed by{' '}
                <Link href="https://veroxyle.com">
                  <a className="cursor-pointer text-yellow-400 hover:text-yellow-500">
                    VeroXyle
                  </a>
                </Link>
              </p>
            </span>
            <span className="w-full hidden sm:block text-right text-white text-sm">
              <p>&copy; ssimdwarka.org</p>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

const Footer_link = (prop) => {
  // Usage: <Footer_link name="" to="/" />
  return (
    <>
      <Link href={prop.to}>
        <a className="text-white hover:text-yellow-300 pb-1 text-left cursor-pointer">
          {prop.name}
        </a>
      </Link>
    </>
  )
}

export default Footer
