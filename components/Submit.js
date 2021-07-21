import { useState } from 'react'

const AfterSubmit = ({ isSubmit, setIsSubmit }) => {
  const openSubmit = () => {
    setIsSubmit(true)
  }

  const closeSubmit = () => {
    setIsSubmit(false)
  }

  return (
    <>
      <div
        className="top-0 z-[70] w-screen h-screen bg-gray-900 p-5"
        style={isSubmit ? { position: 'fixed' } : { display: 'none' }}
      >
        <svg
          onClick={closeSubmit}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-10 w-10 top-5 right-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="flex items-center justify-center h-full w-full">
          <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
            <div className="aspect-h-1 aspect-w-1">
              <img
                className="object-contain object-center"
                src="/images/submit-popups/500x500_06.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AfterSubmit
