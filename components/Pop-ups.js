import { useState } from 'react'

const Pop_ups = () => {
  const [isActive, setActive] = useState(true)
  const toggleClass = () => {
    setActive(!isActive)
  }
  const closeMenu = () => {
    setActive(false)
  }

  return (
    <>
      {/* Download Brochures */}
      <a href="/documents/brochure.pdf" download>
        <button style={isActive ? { display: 'none' } : { position: 'fixed' }} className="top-1/2 -left-16 rotate-90 z-40 bg-yellow-500 px-3 py-1 rounded text-white cursor-pointer" download="">
          Download Brochure
        </button>
      </a>
      {/* Admission Open Button */}
      <button onClick={toggleClass} style={isActive ? { display: 'none' } : { position: 'fixed' }} className="top-1/2 right-[-72px] -rotate-90 z-40 bg-green-500 px-3 py-1 rounded text-white  cursor-pointer">
        Admission Open 2021
      </button>
      {/* Pop Up */}
      <div className="w-5/6 md:w-[500px] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 rounded-3xl text-white border-2 border-gray-500 cursor-pointer" style={isActive ? { position: 'fixed' } : { display: 'none' }}>
        <div className="prose mt-4 mb-12 px-5 flex flex-col text-center">
          <div onClick={closeMenu} className="flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-center pb-5">Admission Open 2021-22</h3>
          <Input_mandtory name="Full Name" type="text" />
          <Input_mandtory name="Mobile Number" type="number" />
          <Input_mandtory name="Email Address" type="email" />
          <Input_mandtory name="City" type="text" />
          <button className="mt-12 bg-gray-500 border-0 py-3 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">SUMBIT</button>
        </div>
      </div>
    </>
  )
}

const Input_mandtory = (prop) => {
  return (
    <>
      <label className="m-1 mt-4">
        {prop.name} <span className="text-red-500">*</span>
      </label>
      <input type={prop.type} />
    </>
  )
}

export default Pop_ups
