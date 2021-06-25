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
    name:"",
    email:"",
    mobile:"",
    city:"",
    _captcha:false
  }

  const [formState, setFormState] = useState(initialState);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://formsubmit.co/ajax/d06b62be7b28e72ef3ef1519cbcfaa17", {...formState}).then(res=>{
      if(res.status === 200){
        setActive(false)
        setFormState(initialState)
      }
    }).catch(e => {
      alert("form not submitted")
    });
  }

  return (
    <>
      {/* Download Brochures */}
      <a href="/documents/brochure.pdf" download>
        <button
          style={isActive ? { display: 'none' } : { position: 'fixed' }}
          className="top-1/2 -left-16 rotate-90 z-30 bg-yellow-500 px-3 py-1 rounded text-white cursor-pointer"
          download=""
        >
          Download Brochure
        </button>
      </a>
      {/* Admission Open Button */}
      <button
        onClick={toggleClass}
        style={isActive ? { display: 'none' } : { position: 'fixed' }}
        className="top-1/2 right-[-72px] -rotate-90 z-30 bg-green-500 px-3 py-1 rounded text-white  cursor-pointer"
      >
        Admission Open 2021
      </button>
      {/* Pop Up */}
      <div
        style={isActive ? { position: 'fixed' } : { display: 'none' }}
        className="h-full w-full bg-black top-0 z-40 bg-opacity-50"
      ></div>
      <div
        className="w-11/12 max-w-[500px] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 rounded-3xl text-white border-2 border-gray-500 cursor-pointer"
        style={isActive ? { position: 'fixed' } : { display: 'none' }}
      >
        <div className="prose mt-4 mb-12 px-5 flex flex-col text-center">
          <div onClick={closeMenu} className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-yellow-500"
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
          <form
            onSubmit={(e) => handleSubmit(e)}
          >
            <h3 className="text-center pb-5">Admission Open 2021-22</h3>
            <Input_mandtory name="Full Name" type="text" value={formState.name} onChange={(e) => setFormState({...formState, name:e.target.value})} />
            <Input_mandtory name="Mobile Number" type="text" value={formState.mobile} onChange={(e) => setFormState({...formState, mobile:e.target.value})} />
            <Input_mandtory name="Email Address" type="email" value={formState.email} onChange={(e) => setFormState({...formState, email:e.target.value})} />
            <Input_mandtory name="City" type="text" value={formState.city} onChange={(e) => setFormState({...formState, city:e.target.value})} />
            <input type="hidden" name="_captcha" value="false" />
            <button
              type="submit"
              className="mt-10 w-full bg-gray-500 border-0 py-3 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white"
            >
              SUMBIT
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
        <input name={prop.name} type={prop.type} placeholder={prop.name} value={prop.value} onChange={prop.onChange} />
      </div>
    </>
  )
}

export default Pop_ups
