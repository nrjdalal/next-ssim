import { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const Statistics = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false)
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-12 mt-10 mx-auto">
          <div className="flex flex-col lg:flex-row text-center items-center justify-center">
            <div className="px-12">
              <div className="px-4 py-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900 font-mono">
                  <CountUp start={viewPortEntered ? 10991 : null} end={11000} duration={3} redraw={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                        >
                          <a>+</a>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Alumni</p>
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
                <h2 className="title-font font-medium text-3xl text-gray-900 font-mono">
                  <CountUp start={viewPortEntered ? 291 : null} end={300} duration={3} redraw={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                        >
                          <a>+</a>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Recruiters</p>
              </div>
            </div>

            <div className="px-12">
              <div className="px-4 py-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900 font-mono">
                  <CountUp start={viewPortEntered ? 41 : null} end={50} duration={3} redraw={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            } else {
                              setViewPortEntered(false)
                            }
                          }}
                        >
                          <a>+</a>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Years of Legacy</p>
              </div>
            </div>
            <div className="px-12">
              <div className="px-4 py-4">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900 font-mono">
                  <CountUp start={viewPortEntered ? 0 : null} end={9} duration={3} redraw={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true)
                            }
                          }}
                        >
                          <a>+</a>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Campuses & Schools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistics
