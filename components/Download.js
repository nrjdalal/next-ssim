const Download = () => {
  return (
    <>
      <a src="public/documents/brochure.pdf">
        <button className="fixed top-1/2 -left-16 rotate-90 z-50 bg-yellow-500 px-3 py-1 rounded text-white cursor-pointer" download="">
          Download Brochure
        </button>
      </a>
    </>
  )
}

export default Download
