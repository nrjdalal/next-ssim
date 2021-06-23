import React from 'react'

const Recruiters = () => {
  return (
    <>
      <section className="relative h-[300px] overflow-hidden mt-12">
        <div className="absolute z-10 h-[300px] w-screen flex">
          <div className="h-[300px] w-full md:w-1/2 bg-blue-500 opacity-20"></div>
          <div className="hidden md:block h-[300px] w-1/2 bg-red-500 opacity-20"></div>
        </div>
        <div className="flex animate-x">
          <img className="h-[300px] object-cover " src="https://raw.githubusercontent.com/nrjdalal/ns-ssim/master/brands.webp" alt="" />
          <img className="h-[300px] object-cover" src="https://raw.githubusercontent.com/nrjdalal/ns-ssim/master/brands.webp" alt="" />
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
