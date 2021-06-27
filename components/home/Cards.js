const Cards = () => {
  return (
    <>
      <section className="text-gray-400 body-font text-justify">
        <div className="container px-5 py-6 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-yellow-500 p-6 rounded-lg">
                <img
                  className="h-[300px] rounded w-full object-cover object-top mb-6"
                  src="/images/other/chairman.jpeg"
                  alt="content"
                />

                <div className="bg-white px-2 rounded text-center">
                  <h3 className="tracking-widest text-gray-900 text-lg font-semibold title-font">
                    CHAIRMAN&apos;S MESSAGE
                  </h3>
                </div>

                <p className="pt-3 text-white text-sm line-clamp-5">
                  SSIM students are professionals and intellectuals, in the
                  making. The institution provides a learning environment that
                  is adaptable and flexible, facilitating potential change in
                  the higher education pattern. The learning environment is also
                  used as a strategic tool for power and excellence. This is
                  done with an objective to support the learning paradigm that
                  provides education for the student in a manner most suited to
                  them.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-blue-500 p-6 rounded-lg">
                <img
                  className="h-[300px] rounded w-full object-cover object-center mb-6"
                  src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
                  alt="content"
                />
                <div className="bg-white px-2 rounded text-center">
                  <h3 className="tracking-widest text-gray-900 text-lg font-semibold title-font">
                    PGDM PROGRAMME
                  </h3>
                </div>
                <p className="pt-3 text-white text-sm line-clamp-5">
                Our PGDM program, combined with SAP Training, is an innovative pursuit in management education. It combines skill-oriented qualifications in the field of management services including management research and thus adds to students’ employability. We follow a practical and experimental learning approach coupled with interactive sessions and peer-to-peer feedback mechanism.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-green-500 p-6 rounded-lg">
                <img
                  className="h-[300px] rounded w-full object-cover object-center mb-6"
                  src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                  alt="content"
                />
                <div className="bg-white px-2 rounded text-center">
                  <h3 className="tracking-widest text-gray-900 text-lg font-semibold title-font">
                    ADMISSION
                  </h3>
                </div>
                <p className="pt-3 text-white text-sm line-clamp-5">
                A Bachelor&apos;s degree in any discipline with minimum 50% marks from a recognized University. Candidates appearing for their final year exam may also apply. Short listing will be based on CAT/MAT/CMAT and S-SAT score and GD/PI/TI.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-red-500 p-6 rounded-lg">
                <img
                  className="h-[300px] rounded w-full object-cover object-center mb-6"
                  src="https://images.unsplash.com/photo-1590415108862-fa060c0e358f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZlZWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt="content"
                />
                <div className="bg-white px-2 rounded text-center">
                  <h3 className="tracking-widest text-gray-900 text-lg font-semibold title-font">
                    PLACEMENT
                  </h3>
                </div>
                <p className="pt-3 text-white text-sm line-clamp-5">
                The Placement Division of SSIM finds strength in the group’s long-cherished history and its network. SSIM follows global placement methodologies expertise in the Global Recruitment Process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards
