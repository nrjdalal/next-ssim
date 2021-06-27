import Breadcrumb from '../components/Breadcrumb'
import { useState } from 'react'
import axios from 'axios'

const Contact_us = () => {
  const initialState = {
    name:"",
    email:"",
    message:"",
  }

  const [FormState, setFormState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://formsubmit.co/ajax/admin@nrjdalal.com", {...FormState}).then(res=>{
      if(res.status === 200){
        setFormState(initialState)
        alert("Form submitted")
      }
    }).catch(e => {
      alert("Form not submitted")
    });
  }


  return (
    <>
      <Breadcrumb title="Contact Us" />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              className="absolute inset-0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.819103693248!2d77.06655081455824!3d28.575194293425604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd4a99cf95b%3A0x55b100fe5c566f41!2sSri%20Sukhmani%20Institute%20of%20Management%2C%20Delhi!5e0!3m2!1sen!2sin!4v1624821954769!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Plot No 2 Block-PSP, Sector 8 Dwarka, Dwarka, Delhi, 110075
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91-9650709489</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form onSubmit={(e) => handleSubmit(e)}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={FormState.name}
                onChange={(e) => {setFormState({...FormState, name:e.target.value})}}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={FormState.email}
                onChange={(e) => {setFormState({...FormState.email, email:e.target.value})}}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={FormState.message}
                onChange={(e) => {setFormState({...FormState, message:e.target.value})}}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              SUBMIT
            </button>
            <p className="text-xs text-gray-500 mt-3">
              
            </p>
          </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact_us
