const Hero = () => {
  return (
    <>
      <section className="relative h-[500px]">
        <img
          className="absolute route0 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          className="absolute route1 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          className="absolute route2 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          className="absolute route3 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80"
        />
        <img
          className="absolute route4 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1596496050755-c923e73e42e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80"
        />
        <img
          className="absolute route5 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          className="absolute route6 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          className="absolute route7 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          className="absolute route8 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1610008885395-d4b47c2f5c8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <img
          className="absolute route9 h-[500px] object-cover z-10 object-center w-screen"
          alt="hero"
          src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        />
        <div className="absolute h-[500px] w-screen flex items-center justify-center z-20 p-5 mt-[200px]">
          <div className="bg-blue-900 p-6 rounded-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
              World-class
              <span className="text-yellow-300">Management</span>
              Education
            </h1>
            <p className="text-white pt-3 text-base md:text-lg lg:text-xl">We groom future managers and entrepreneurs, who possess the acumen to be the leaders of tomorrow’s businesses</p>
            <button className="bg-yellow-500 border-0 py-1 px-3 mt-3 focus:outline-none hover:bg-yellow-600 rounded text-lg text-white">OUR PROGRAMS</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
