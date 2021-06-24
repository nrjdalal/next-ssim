const Admission_form = () => {
  return (
    <>
      <div className="fixed w-4/5 md:w-[500px] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 rounded-3xl text-white border-2 border-gray-500 cursor-pointer">
        <div className="prose my-12 px-5 flex flex-col">
          <Input_mandtory name="Full Name" type="text" />
          <Input_mandtory name="Mobile Number" type="number" />
          <Input_mandtory name="Email Address" type="email" />
          <Input_mandtory name="City" type="text" />
          <button className="mt-12 bg-gray-500 border-0 py-3 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">SUMBIT</button>
        </div>
      </div>
    </>
  )
}

const Input_mandtory = (prop) => {
  return (
    <>
      <label className="m-1 mt-4">
        {prop.name} <span className="text-red-500">*</span>
      </label>
      <input type={prop.type} />
    </>
  )
}

export default Admission_form
