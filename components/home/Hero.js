import { useEffect, useRef } from 'react'
import { gsap, Power1 } from 'gsap'

const Hero = () => {
  const slides = useRef([])
  slides.current = []

  useEffect(() => {
    gsap.from(slides.current, {
      opacity: 0,
      ease: Power1.easeInOut,
      duration: 5,
      stagger: 7,
      repeat: -1,
    })
  }, [])

  return (
    <>
      {/* <img
        className="w-screen bg-[#096b97] mb-20"
        src="/images/banners/1.png"
        alt=""
      /> */}

      <section className="relative h-[400px] md:h-[500px] bg-blue-900">
        <img
          className="absolute h-[400px] md:h-[500px] object-cover object-left-top w-screen z-10"
          alt="hero"
          src="/images/banners/banner-1-lg.jpg"
        />

        <img
          ref={(el) => {
            slides.current[0] = el
          }}
          className="absolute h-[400px] md:h-[500px] object-cover object-left-top w-screen z-10"
          alt="hero"
          src="/images/banners/banner-2-lg.jpg"
        />

        <img
          ref={(el) => {
            slides.current[1] = el
          }}
          className="absolute h-[400px] md:h-[500px] object-cover object-left-top w-screen z-10"
          alt="hero"
          src="/images/banners/banner-1-lg.jpg"
        />
      </section>
      {/* <img
          ref={(el) => {
            slides.current[0] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-left md:object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[1] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[2] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[3] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[4] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="/images/banners/Banner 1.jpg"
        /> */}

      {/* <img
          ref={(el) => {
            slides.current[5] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[6] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[7] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[8] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1610008885395-d4b47c2f5c8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[9] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        /> */}
      {/* </section> */}
    </>
  )
}

export default Hero
