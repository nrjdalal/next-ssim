import React from 'react'

const online_form = () => {
  return (
    <>
      <div className="container mx-auto prose my-12 px-5 flex flex-col">
        <h2 className="pb-4">Mandatory Information</h2>
        <Input_mandtory name="Full Name" type="text" />
        <Input_mandtory name="Mobile Number" type="number" />
        <Input_mandtory name="Email Address" type="email" />
        <Gender_selector />
        <Input_mandtory name="Date of Birth" type="date" />
        <Mandatory_textarea name="Permanent Address" />
        <Input_mandtory name="Father's Name" type="text" />
        <Input_mandtory name="Father's Mobile Number" type="number" />
        <Accommodation_selector />

        <h2 className="pb-4">Qualification</h2>
        <h3 className="pb-4 italic">1. High School</h3>
        <Input name="Board/University/Institute" type="text" />
        <Input name="Year of Passing" type="number" />
        <Input name="Marks Obtained (%)" type="text" />
        <Textarea name="Main Subjects" />
        <h3 className="pb-4 italic">2. Intermediate (10+2)</h3>
        <Input name="Board/University/Institute" type="text" />
        <Input name="Year of Passing" type="number" />
        <Input name="Marks Obtained (%)" type="text" />
        <Textarea name="Main Subjects" />
        <h3 className="pb-4 italic">3. Graduation</h3>
        <Input name="Board/University/Institute" type="text" />
        <Input name="Year of Passing" type="number" />
        <Input name="Marks Obtained (%)" type="text" />
        <Textarea name="Main Subjects" />

        <h2 className="pb-4">Examination Details</h2>
        <h3 className="pb-4 italic">CAT</h3>
        <Input name="CAT Roll No" type="text" />
        <Input name="CAT Score" type="text" />
        <Input name="CAT Percentile" type="text" />
        <h3 className="pb-4 italic">MAT</h3>
        <Input name="MAT Roll No" type="text" />
        <Input name="MAT Score" type="text" />
        <Input name="MAT Percentile" type="text" />
        <h3 className="pb-4 italic">UPSEE</h3>
        <Input name="UPSEE Roll No" type="text" />
        <Input name="UPSEE Score" type="text" />
        <Input name="UPSEE Percentile" type="text" />
        <h3 className="pb-4 italic">Other</h3>
        <Input name="Other Exam Name" type="text" />
        <Input name="Other Roll No" type="text" />
        <Input name="Other Score" type="text" />
        <Input name="Other Percentile" type="text" />

        <h2 className="pb-4">Additional Information</h2>
        <Input name="Professional Qualification Experience & Company Name" type="text" />
        <Input name="How did you find out aboust us? Please specify a source" type="text" />

        <h2 className="pb-4">Declaration</h2>
        <Checkbox name="I hereby declare that the information given in the Application form is true to the best of my knowledge and belief. If any information is found to be wrong, i shall be liable for action. I hold myself responsible for the due and prompt payment of fees. " />

        <button className="mt-12 bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">APPLY NOW</button>
      </div>
    </>
  )
}

const Input_mandtory = (prop) => {
  return (
    <>
      <label className="m-1 mt-8">
        {prop.name} <span className="text-red-500">*</span>
      </label>
      <input type={prop.type} />
    </>
  )
}

const Input = (prop) => {
  return (
    <>
      <label className="m-1 mt-8">{prop.name}</label>
      <input type={prop.type} />
    </>
  )
}

const Mandatory_textarea = (prop) => {
  return (
    <>
      <label className="m-1 mt-8">
        {prop.name} <span className="text-red-500">*</span>
      </label>
      <textarea name={prop.type} />
    </>
  )
}

const Textarea = (prop) => {
  return (
    <>
      <label className="m-1 mt-8">{prop.name}</label>
      <textarea name={prop.type} />
    </>
  )
}

const Gender_selector = () => {
  return (
    <>
      <div className="mt-8 flex items-center">
        <label className="m-1 mr-4">
          Gender <span className="text-red-500">*</span>
        </label>
        <span className="mr-4 flex items-center">
          <input className="mr-2" type="radio" name="gender" value="Male" />
          <label>Male</label>
        </span>
        <span className="mr-4 flex items-center">
          <input className="mr-2" type="radio" name="gender" value="Female" />
          <label>Female</label>
        </span>
      </div>
    </>
  )
}

const Accommodation_selector = () => {
  return (
    <>
      <div className="mt-8 flex items-center">
        <label className="m-1 mr-4">
          Hostel Accommodation Required <span className="text-red-500">*</span>
        </label>
        <span className="mr-4 flex items-center">
          <input className="mr-2" type="radio" name="accommodation" value="Yes" />
          <label>Yes</label>
        </span>
        <span className="mr-4 flex items-center">
          <input className="mr-2" type="radio" name="accommodation" value="No" />
          <label>No</label>
        </span>
      </div>
    </>
  )
}

const Checkbox = (prop) => {
  return (
    <>
      <div className="mt-8">
        <input className="mr-2 mb-1" type="checkbox" value="Yes" />
        <label>{prop.name}</label>
      </div>
    </>
  )
}

export default online_form
