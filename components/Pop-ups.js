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
    _subject: 'Admission Enquiry',
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

    axios.post('https://formsubmit.co/ajax/ea008567375f98fb0ece50498539a9ec', {
      ...formState,
    })
  }

  return (
    <>
      {/* Download Brochures top-1/2 right-[-72px] -rotate-90 */}
      <div
        style={isActive ? { display: 'none' } : { position: 'fixed' }}
        className="sm:hidden z-[57] bottom-0 flex flex-row w-full left-1/2 -translate-x-1/2 border-t-[1px] border-gray-300"
      >
        <button
          onClick={toggleClass}
          className="z-30 bg-red-500 p-2 text-white cursor-pointer flex flex-col items-center w-1/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
            />
          </svg>
          <p className="text-xs font-semibold tracking-tighter">
            Admission
            <br />
            Open 2021
          </p>
        </button>

        <button className="bg-blue-500 p-2 text-white cursor-pointer flex flex-col items-center w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <a
            className="text-xs font-semibold tracking-tighter"
            href="/documents/brochure.pdf"
            download
          >
            Download
            <br />
            Brochure
          </a>
        </button>

        <button className="bg-green-500 p-2 text-white cursor-pointer flex flex-col items-center w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <a
            className="text-xs font-semibold tracking-tighter"
            href="/documents/AdmissionForm.pdf"
            download
          >
            Application
            <br />
            Form
          </a>
        </button>

        <button
          className="bg-yellow-500 p-2 text-white cursor-pointer flex flex-col items-center w-1/4"
          download=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <Link href="http://ssat.ssimdwarka.org">
            <a className="text-xs font-semibold tracking-tighter">
              Online
              <br />
              S-SAT
            </a>
          </Link>
        </button>
      </div>

      <div
        style={isActive ? { display: 'none' } : { position: 'fixed' }}
        className="hidden sm:flex z-[57] right-0 top-2/3 -translate-y-2/3 flex-col border-t-2 border-l-2 border-b-2 border-gray-300 rounded-tl-xl rounded-bl-xl overflow-hidden"
      >
        <button
          onClick={toggleClass}
          className="z-30 bg-red-500 p-2 text-white cursor-pointer flex flex-col items-center w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
            />
          </svg>
          <p className="text-xs font-semibold tracking-tighter">
            Admission
            <br />
            Open 2021
          </p>
        </button>

        <button className="bg-blue-500 p-2 text-white cursor-pointer flex flex-col items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <a
            className="text-xs font-semibold tracking-tighter"
            href="/documents/brochure.pdf"
            download
          >
            Download
            <br />
            Brochure
          </a>
        </button>

        <button className="bg-green-500 p-2 text-white cursor-pointer flex flex-col items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <a
            className="text-xs font-semibold tracking-tighter"
            href="/documents/AdmissionForm.pdf"
            download
          >
            Application
            <br />
            Form
          </a>
        </button>

        <button
          className="bg-yellow-500 p-2 text-white cursor-pointer flex flex-col items-center w-full"
          download=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <Link href="http://ssat.ssimdwarka.org">
            <a className="text-xs font-semibold tracking-tighter">
              Online
              <br />
              S-SAT
            </a>
          </Link>
        </button>
      </div>

      {/* Pop Up */}
      {/* <div
        style={isActive ? { position: 'fixed' } : { display: 'none' }}
        className="h-full w-full top-0 z-40"
      ></div> */}
      <div
        className="w-11/12 max-w-[500px] z-[57] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900-3xl border-2 border-gray-500 cursor-pointer rounded-3xl overflow-hidden"
        style={isActive ? { position: 'fixed' } : { display: 'none' }}
      >
        <div className="px-5 py-12 flex flex-col text-center bg-gray-700">
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
              className="mt-10 w-full bg-red-400 border-0 py-3 px-3 focus:outline-none hover:bg-red-500-xl text-sm text-white rounded"
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
