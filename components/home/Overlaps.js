const Overlaps = () => {
  return (
    <>
      <section className="relative text-gray-400 body-font">
        <div className="h-[300px] sm:h-[150px] lg:h-[75px]"></div>
        <div className="absolute -top-9 left-0 px-5 z-10 w-screen">
          <div className="flex flex-wrap sm:mx-auto  ">
            <div className="p-2 sm:w-1/2 lg:w-1/4 w-full">
              <div className="bg-yellow-500 rounded flex p-4 h-full items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Approved by AICTE</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 lg:w-1/4 w-full">
              <div className="bg-blue-500 rounded flex p-4 h-full items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Top Recruiters</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 lg:w-1/4 w-full">
              <div className="bg-green-500 rounded flex p-4 h-full items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Highest Packages</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 lg:w-1/4 w-full">
              <div className="bg-red-500 rounded flex p-4 h-full items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Established 2011</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Overlaps
