const Overlaps = () => {
  return (
    <>
      <section className="relative text-gray-400 body-font">
        <div className="h-[512px] sm:h-[224px] xl:h-[96px]"></div>
        <div className="absolute top-2 sm:top-[-72px] left-0 px-5 z-10 w-screen">
          <div className="flex flex-wrap sm:mx-auto">
            <div className="p-2 sm:w-1/2 xl:w-1/4 w-full">
              <div className="bg-[#096b97] rounded-3xl flex p-4 h-[128px] items-center justify-center border-4 border-yellow-500">
                <span className="text-xl font-semibold text-white text-center tracking-wider">
                  Year of Establishment <br />
                  <span className="text-yellow-400">2009</span>
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 xl:w-1/4 w-full">
              <div className="bg-[#096b97] rounded-3xl flex p-4 h-[128px] items-center justify-center border-4 border-yellow-500">
                <span className="text-xl font-semibold text-white text-center tracking-wider">
                  Approved by AICTE <br />
                  <span className="text-yellow-400">Ministry of HRD, GOI</span>
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 xl:w-1/4 w-full">
              <div className="bg-[#096b97] rounded-3xl flex p-4 h-[128px] items-center justify-center border-4 border-yellow-500">
                <span className="text-xl font-semibold text-white text-center tracking-wider">
                  Highest Package <br />
                  <span className="text-yellow-400">11.8 LPA</span>
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 xl:w-1/4 w-full">
              <div className="bg-[#096b97] rounded-3xl flex p-4 h-[128px] items-center justify-center border-4 border-yellow-500">
                <span className="text-xl font-semibold text-white text-center tracking-wider">
                  Average Package <br />
                  <span className="text-yellow-400">6.4 LPA</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Overlaps
