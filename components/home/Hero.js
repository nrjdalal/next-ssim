import { useEffect, useRef } from 'react'
import { gsap, Power1 } from 'gsap'

const Hero = () => {
  const slides = useRef([])
  slides.current = []

  useEffect(() => {
    gsap.from(slides.current, { opacity: 0, ease: Power1.easeInOut, duration: 5, stagger: 7, repeat: -1 })
  }, [])

  return (
    <>
      <section className="relative h-[500px] bg-blue-900">
        <img
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />

        {/* Repeating */}

        <img
          ref={(el) => {
            slides.current[0] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[1] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[2] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          ref={(el) => {
            slides.current[3] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80"
        />
        <img
          ref={(el) => {
            slides.current[4] = el
          }}
          className="absolute h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1596496050755-c923e73e42e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80"
        />
        <img
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
        />
      </section>
    </>
  )
}

export default Hero
