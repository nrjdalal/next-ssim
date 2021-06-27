import React from 'react'

const Logos = () => {
  return (
    <div>
      <section className="py-3">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="relative px-2 py-6">
              <img
                className="mw-33p pr300 px350-ns w-100p"
                height="90"
                width="90"
                src="/images/footerLogo/AIMA.jpg"
                alt=""
              />
            </div>
            <div className="relative px-10 py-6">
              <img
                className="mw-33p pr300 px350-ns w-100p"
                height="90"
                width="90"
                src="/images/footerLogo/AICTE.png"
                alt=""
              />
            </div>
            <div className="relative px-2 py-6">
              <img
                className="mw-33p pr300 px350-ns w-100p"
                height="90"
                width="90"
                src="/images/footerLogo/SSIM DELHI.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Logos
