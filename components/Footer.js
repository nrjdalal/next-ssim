const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-blue-900">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 justify-between">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">ABOUT</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300">The Group</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">The Institution</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Newsletter</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Dean Message</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">PROGRAM</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300">Jr. Management</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Sr. Management</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Upcoming Events</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Aluminies</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">ADMISSIONS</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300">Online Form</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Fee Structure</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Payment Options</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Brochure</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">OTHERS</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-yellow-300">Sitemap</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Disclaimer</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Privacy</a>
                </li>
                <li>
                  <a className="text-white hover:text-yellow-300">Terms</a>
                </li>
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

export default Footer
