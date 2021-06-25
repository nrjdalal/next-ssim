import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-blue-900">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 justify-between">
            <div className="lg:w-1/6 md:w-1/2 w-full text-center">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">ABOUT</h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link name="The Group" to="/about/the-group" />
                <Footer_link name="The Institute" to="/about/the-institute" />
                <Footer_link name="Vision Mission" to="/about/vision-mission" />
                <Footer_link name="Chairman's Message" to="/about/chairmans-message" />
                <Footer_link name="Dean's Message" to="/about/deans-message" />
                <Footer_link name="Board of Governors" to="/about/board-of-governors" />
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full text-center">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">PROGRAM</h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link name="Programme" to="/pgdm/programme" />
                <Footer_link name="Specializations" to="/pgdm/specializations" />
                <Footer_link name="Value Added Courses" to="/pgdm/value-added-courses" />
                <Footer_link name="FAQs" to="/pgdm/faqs" />
                <Footer_link name="Placement Overview" to="/placement/placement-overview" />
                <Footer_link name="Our Recruiters" to="/placement/our-recruiters" />
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full text-center">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">ADMISSIONS</h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link name="Admission Process" to="/admission/admission-process" />
                <Footer_link name="Fee Structure" to="/admission/fee-structure" />
                <Footer_link name="Education Loan" to="/admission/education-loan" />
                <Footer_link name="Online Form" to="/admission/online-form" />
                <Footer_link name="Download Brochure" to="/admission/download-brochure" />
                <Footer_link name="FAQs" to="/admission/faqs" />
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full text-center">
              <h2 className="font-medium text-yellow-300 tracking-widest text-sm mb-3">OTHERS</h2>
              <nav className="mb-10 flex flex-col">
                <Footer_link name="Summer Internships" to="/placement/summer-internships" />
                <Footer_link name="Live Projects" to="/placement/live-projects" />
                <Footer_link name="Testimonials" to="/" />
                <Footer_link name="" to="/" />
                <Footer_link name="" to="/" />
                <Footer_link name="" to="/" />
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-gray-900">
          <div className="container mx-auto py-4 px-5  flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© 2020 SSIMDWARKA.ORG</p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Designed by VeroXyle</span>
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
        <a className="text-white hover:text-yellow-300 pb-1">{prop.name}</a>
      </Link>
    </>
  )
}

export default Footer
