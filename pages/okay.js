import { useState } from 'react'

const AfterSubmit = () => {
  const [isSubmit, setSubmit] = useState(false)

  const openSubmit = () => {
    setSubmit(true)
  }

  const closeSubmit = () => {
    setSubmit(false)
  }

  return (
    <>
      <div className="sticky top-0 flex p-5 justify-between border-t-2 border-b-2 border-gray-300 bg-white z-[55]">
        <button onClick={openSubmit} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>

      <div
        className="top-0 z-[70] w-screen h-screen bg-gray-900 flex items-center justify-center p-5"
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
        <div>
          <img
            className="max-w-[500px] max-h-[500px] object-cover object-center"
            src="https://source.unsplash.com/1000x1000"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default AfterSubmit
