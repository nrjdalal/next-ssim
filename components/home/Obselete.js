import React from 'react'

const Recruiters = () => {
  return (
    <>
      <section className="relative h-[320px] overflow-hidden my-3">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl tracking-wider font-bold text-blue-500">
            OUR RECRUITERS
          </h1>
        </div>
        {/* <div className="absolute z-10 h-[320px] w-full flex">
          <div className="h-[320px] w-full md:w-1/2">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-yellow-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-lg font-bold">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90&apos;s cronut +1 kinfolk.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-4 mb-4"></span>
                  <h2 className="text-gray-900 font-semibold title-font tracking-wider text-base">
                    NEERAJ DALAL
                  </h2>
                  <p className="text-gray-500">Recruiter</p>
                </div>
              </div>
            </section>
          </div>
          <div className="hidden md:block h-[320px] w-1/2">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-yellow-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-lg font-bold">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90&apos;s cronut +1 kinfolk.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-4 mb-4"></span>
                  <h2 className="text-gray-900 font-semibold title-font tracking-wider text-base">
                    ABHISHEK GARG
                  </h2>
                  <p className="text-gray-500">Alumni</p>
                </div>
              </div>
            </section>
          </div>
        </div> */}
        <div className="flex animate-x opacity-20">
          <img
            className="h-[320px] object-cover "
            src="/images/brandlogos.webp"
            alt=""
          />
          <img
            className="h-[320px] object-cover"
            src="/images/brandlogos.webp"
            alt=""
          />
        </div>
      </section>
      <style jsx>{`
        .animate-x {
          animation: marquee 20s linear infinite alternate;
        }
        @keyframes marquee {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
      `}</style>
    </>
  )
}

export default Recruiters
