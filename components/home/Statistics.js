const Statistics = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-12 mx-auto">
          <div className="flex flex-col md:flex-row text-center items-center justify-center">
            <div className="px-12">
              <div className="px-4 py-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Students</p>
              </div>
            </div>
            <div className="px-12">
              <div className="px-4 py-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">900</h2>
                <p className="leading-relaxed">Placements</p>
              </div>
            </div>
            <div className="px-12">
              <div className="px-4 py-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                <p className="leading-relaxed">classNamerooms</p>
              </div>
            </div>
            <div className="px-12">
              <div className="px-4 py-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                <p className="leading-relaxed">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistics
