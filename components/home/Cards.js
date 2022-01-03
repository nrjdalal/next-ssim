import Link from "next/link";

const Cards = () => {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-6 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center sm:pr-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-yellow-500 p-6 rounded-lg">
                {/* <img
                  className="h-[300px] rounded w-full object-cover object-top mb-6"
                  src="/images/other/chairman.jpeg"
                  alt="content"
                /> */}

                <div className="aspect-h-1 aspect-w-1 mb-6">
                  <img
                    className="rounded object-cover object-center"
                    src="/images/other/chairman.jpg"
                    alt="content"
                  />
                </div>
                <div className="relative bg-white px-2 py-2 rounded text-center">
                  <Link href="/about/chairmans-message">
                    <a>
                      <h3 className="text-gray-900 text-base font-semibold title-font">
                        CHAIRMAN&apos;S MESSAGE
                      </h3>
                    </a>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-6 w-6 top-1/2 -translate-y-1/2 right-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <p className="pt-3 text-white text-base line-clamp-4">
                  I wish to thank you for showing interest in Sri Sukhmani
                  Institute of Management, New Delhi. We have been providing
                  quality education in Management over the decade and over
                  thousand students have graduated from SSIM since its inception
                  in 2009.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="aspect-h-1 aspect-w-1 mb-6">
                  <img
                    className="rounded object-cover object-center"
                    src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                    alt="content"
                  />
                </div>
                <div className="relative bg-white px-2 py-2 rounded text-center">
                  <Link href="/pgdm/programme">
                    <a>
                      <h3 className="text-gray-900 text-base font-semibold title-font">
                        PGDM PROGRAMME
                      </h3>
                    </a>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-6 w-6 top-1/2 -translate-y-1/2 right-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="pt-3 text-white text-base line-clamp-4">
                  Our PGDM program, combined with SAP Training, is an innovative
                  pursuit in management education. It combines skill-oriented
                  qualifications in the field of management services including
                  management research and thus adds to students’ employability.
                  We follow a practical and experimental learning approach
                  coupled with interactive sessions and peer-to-peer feedback
                  mechanism.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-green-500 p-6 rounded-lg">
                {/* <img
                  className="h-[300px] rounded w-full object-cover object-center mb-6"
                  src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                  alt="content"
                /> */}

                <div className="aspect-h-1 aspect-w-1 mb-6">
                  <img
                    className="rounded object-cover object-center"
                    src="https://images.unsplash.com/photo-1590415108862-fa060c0e358f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZlZWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt="content"
                  />
                </div>
                <div className="relative bg-white px-2 py-2 rounded text-center">
                  <Link href="/admission/admission-process">
                    <a>
                      <h3 className="text-gray-900 text-base font-semibold title-font">
                        ADMISSION
                      </h3>
                    </a>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-6 w-6 top-1/2 -translate-y-1/2 right-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="pt-3 text-white text-base line-clamp-4">
                  A Bachelor&apos;s degree in any discipline with minimum 50%
                  marks from a recognized University. Candidates appearing for
                  their final year exam may also apply. Short listing will be
                  based on CAT/MAT/CMAT and S-SAT score and GD/PI/TI.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-red-500 p-6 rounded-lg">
                {/* <img
                  className="h-[300px] rounded w-full object-cover object-center mb-6"
                  src="https://images.unsplash.com/photo-1590415108862-fa060c0e358f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZlZWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt="content"
                /> */}

                <div className="aspect-h-1 aspect-w-1 mb-6">
                  <img
                    className="rounded object-cover object-center"
                    src="https://images.unsplash.com/photo-1593371546953-f4c0f11573f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWx1bW5pfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="content"
                  />
                </div>
                <div className="relative bg-white px-2 py-2 rounded text-center">
                  <Link href="/placement/placement-overview">
                    <a>
                      <h3 className="text-gray-900 text-base font-semibold title-font">
                        PLACEMENT
                      </h3>
                    </a>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-6 w-6 top-1/2 -translate-y-1/2 right-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="pt-3 text-white text-base line-clamp-4">
                  The Placement Division of SSIM finds strength in the group’s
                  long-cherished history and its network. SSIM follows global
                  placement methodologies expertise in the Global Recruitment
                  Process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
