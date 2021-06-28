import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'

const Pop_ups = () => {
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const closeMenu = () => {
    setActive(false)
  }

  const initialState = {
    Type: 'Admission Enquiry',
    name: '',
    email: '',
    mobile: '',
    city: '',
    _template: 'box',
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://formsubmit.co/ajax/application.ssimdwarka@gmail.com', {
        ...formState,
      })
      .then((res) => {
        if (res.status === 200) {
          setActive(false)
          setFormState(initialState)
          alert('Form Submitted')
        }
      })
      .catch((e) => {
        alert('Form Not Submitted')
      })

      axios.post('https://formsubmit.co/ajax/30a1228bde81099ab03cfa0414c41772', { ...formState })
  }

  return (
    <>
      {/* Download Brochures */}
      <a href="/documents/brochure.pdf" download>
        <button
          style={isActive ? { display: 'none' } : { position: 'fixed' }}
          className="top-1/3 -left-16 rotate-90 z-30 bg-yellow-500 px-3 py-1 rounded text-white cursor-pointer"
          download=""
        >
          Download Brochure
        </button>
      </a>
      {/* Download Form */}
      <a href="/documents/AdmissionForm.pdf" download>
        <button
          style={isActive ? { display: 'none' } : { position: 'fixed' }}
          className="top-2/3 left-[-53px] rotate-90 z-30 bg-yellow-500 px-3 py-1 rounded text-white cursor-pointer"
          download=""
        >
          Application Form
        </button>
      </a>

      <button
        style={isActive ? { display: 'none' } : { position: 'fixed' }}
        className="top-1/3 right-[-14px] -rotate-90 z-30 bg-yellow-500 px-3 py-1 rounded text-white cursor-pointer"
        download=""
      >
        <Link href="http://ssat.ssimdwarka.org">
          <a>S - SAT</a>
        </Link>
      </button>

      {/* Admission Open Button */}
      <button
        onClick={toggleClass}
        style={isActive ? { display: 'none' } : { position: 'fixed' }}
        className="top-2/3 right-[-72px] -rotate-90 z-30 bg-green-500 px-3 py-1 rounded text-white cursor-pointer"
      >
        Admission Open 2021
      </button>

      {/* Pop Up */}
      <div
        style={isActive ? { position: 'fixed' } : { display: 'none' }}
        className="h-full w-full bg-black top-0 z-40 bg-opacity-50"
      ></div>
      <div
        className="w-11/12 max-w-[500px] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-3xl border-2 border-gray-500 cursor-pointer"
        style={isActive ? { position: 'fixed' } : { display: 'none' }}
      >
        <div className="mt-4 mb-12 px-5 flex flex-col text-center">
          <div onClick={closeMenu} className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-500"
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
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="text-center pb-5 text-2xl text-yellow-400 font-medium tracking-wide">
              Admission Open 2021-22
            </h3>
            <Input_mandtory
              name="Full Name"
              type="text"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
            <Input_mandtory
              name="Mobile Number"
              type="text"
              value={formState.mobile}
              onChange={(e) =>
                setFormState({ ...formState, mobile: e.target.value })
              }
            />
            <Input_mandtory
              name="Email Address"
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
            <Input_mandtory
              name="City"
              type="text"
              value={formState.city}
              onChange={(e) =>
                setFormState({ ...formState, city: e.target.value })
              }
            />
            <input type="hidden" name="_captcha" value="false" />
            <button
              type="submit"
              className="mt-10 w-full bg-red-400 border-0 py-3 px-3 focus:outline-none hover:bg-red-500 rounded text-sm text-white"
            >
              REQUEST CALLBACK
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

const Input_mandtory = (prop) => {
  return (
    <>
      <div className="mt-5">
        <input
          name={prop.name}
          type={prop.type}
          placeholder={prop.name}
          value={prop.value}
          onChange={prop.onChange}
        />
      </div>
    </>
  )
}

export default Pop_ups
