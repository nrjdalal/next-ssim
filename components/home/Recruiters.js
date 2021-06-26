import React from 'react'

const Recruiters = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center overflow-hidden">
        <section className="relative h-[150px] w-full sm:w-4/5 md:w-3/4 lg:2/3 xl:wd-1/2">
          <div className="animate-x">
            <img
              className="object-cover"
              src="https://ssimdwarka.org/wp-content/uploads/2019/12/LOGOG-homepage.png"
              alt=""
            />
            <img
              className="object-cover"
              src="https://ssimdwarka.org/wp-content/uploads/2019/12/LOGOG-homepage.png"
              alt=""
            />
          </div>
        </section>
      </div>

      <style jsx>{`
        .animate-x {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translate3d(0%, 0%, 0);
          }
          100% {
            transform: translate3d(0%, -50%, 0);
          }
        }
      `}</style>
    </>
  )
}

export default Recruiters
