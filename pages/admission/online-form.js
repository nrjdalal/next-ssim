import { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios'
import AfterSubmit from '../../components/Submit'

const Online_form = () => {
  var submit = true
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (submit) {
      submit = false
      setTimeout(() => {
        submit = true
      }, 3000)
      var formElement = document.forms.namedItem('onlineForm')
      var formData = new FormData(formElement)
      axios
        .post(
          'https://formsubmit.co/ajax/application.ssimdwarka@gmail.com',
          formData
        )
        .then((res) => {
          if (res.status === 200) {
            setIsSubmit(true)
          }
        })
        .catch((e) => {
          alert('Form Not Submitted')
        })

      axios.post(
        'https://formsubmit.co/ajax/ea008567375f98fb0ece50498539a9ec',
        formData
      )
    }
  }

  return (
    <>
      {<AfterSubmit isSubmit={isSubmit} setIsSubmit={setIsSubmit} />}
      <Breadcrumb title="Apply Now" />
      <form name="onlineForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="container mx-auto prose my-12 px-5 flex flex-col max-w-[600px]">
          <h2>Basic Information</h2>
          <input type="hidden" name="_subject" value="Admission Form" />
          <input type="hidden" name="Type" value="Admission Form" />
          <input type="hidden" name="_template" value="box" />
          <Input_mandtory
            name="NAME (MR./MS.)"
            fieldName="Name"
            type="text"
            className="mt-0"
          />
          <Input_mandtory name="E-mail Id" fieldName="email" type="email" />
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Aadhaar Card No"
              type="text"
              fieldName="aadhar"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Mobile No"
              type="text"
              fieldName="mobile"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h2>Father&apos;s Information</h2>
          <Input_mandtory
            name="FATHER’S NAME"
            type="text"
            fieldName="father name"
            className="mt-0"
          />
          <Mandatory_textarea name="Organization Name & Address" />
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Designation"
              type="text"
              fieldName="fathers-Designation"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Mobile No"
              type="text"
              fieldName="fathers-mobile"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h2>Mother&apos;s Information</h2>
          <Input_mandtory
            name="MOTHER'S NAME"
            fieldName="mothers-name"
            type="text"
            className="mt-0"
          />
          <Textarea name="Organization Name & Address" />
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Designation"
              type="text"
              fieldName="mothers-designation"
              className="sm:w-1/2 mr-2"
            />
            <Input
              name="Mobile No"
              type="text"
              fieldName="mothers-mobile"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h2>Other Information</h2>
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Date of Birth"
              type="date"
              fieldName="DOB"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Religion"
              type="text"
              fieldName="Relegion"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Category (SC/ST/OBC/Genral)"
              type="text"
              fieldName="category"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Nationality"
              type="text"
              fieldName="nationality"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <Marital_selector />
          <Gender_selector />

          <Mandatory_textarea name="Permanent Address (with City)" />
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="State"
              type="text"
              fieldName="permanent_state"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Pin Code"
              type="text"
              fieldName="permanent_pin_code"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <Textarea name="Present Address (with City)" />
          <div className="flex flex-col sm:flex-row">
            <Input
              name="State"
              type="text"
              fieldName="present_state"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input
              name="Pin Code"
              type="text"
              fieldName="present_pin_code"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h2>Qualification</h2>
          <h3 className="italic">1. High School</h3>
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Board / University"
              type="text"
              fieldName="high_school_board"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Year of Passing"
              type="text"
              fieldName="high_school_year_of_passing"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Percentage / Grade"
              type="text"
              fieldName="high_school_precentage"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Specialization/Stream"
              type="text"
              fieldName="high_school_specialization"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h3 className="italic">2. Intermediate</h3>
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Board / University"
              type="text"
              fieldName="intermediate_board"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Year of Passing"
              type="text"
              fieldName="intermediate_year_of_passing"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Percentage / Grade"
              type="text"
              fieldName="intermediate_passing_percentage"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Specialization/Stream"
              type="text"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h3 className="italic">3. Graduation</h3>
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Board / University"
              type="text"
              fieldName="graduation_board"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Year of Passing"
              type="text"
              fieldName="graduation_year_of_passing"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Input_mandtory
              name="Percentage / Grade"
              type="text"
              fieldName="graduation_percentage"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input_mandtory
              name="Specialization/Stream"
              type="text"
              fieldName="graduation_specialization"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h3 className="italic">Any other qualification</h3>
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Board / University"
              type="text"
              fieldName="other_board"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input
              name="Year of Passing"
              type="text"
              fieldName="other_year_of_passing"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Percentage / Grade"
              type="text"
              fieldName="other_percentage"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input
              name="Specialization/Stream"
              type="text"
              fieldName="other_specialization"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h2>Entrance Examination Details</h2>
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Exam Name"
              type="text"
              fieldName="Entrance_exam_name"
              className="sm:w-1/2 sm:mr-2"
              placeholder="CAT / MAT / C-MAT / Other"
            />
            <Input
              name="Reg./Roll No."
              type="text"
              fieldName="entrance_exam_roll_no"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Score"
              type="text"
              fieldName="entrance_score"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input
              name="Percentile"
              type="text"
              fieldName="entrance_percentile"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>

          <h3 className="italic">Professional Experience (if Any)</h3>
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Name of the Company"
              type="text"
              fieldName="name_of_company"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input
              name="Designation"
              type="text"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Period From-To"
              type="text"
              fieldName="period_from_to"
              className="sm:w-1/2 sm:mr-2"
            />
            <Input
              name="Exp. in Year(s)"
              type="text"
              fieldName="experience_in_years"
              className="sm:w-1/2 sm:ml-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Input
              name="Responsibilities"
              type="text"
              fieldName="responsibilities"
              className="sm:w-1/2 sm:mr-2"
            />
          </div>

          <h2>Submission</h2>

          <Input_mandtory
            name="Where did you come to know about the Institute and the program?"
            fieldName="referral_details"
            type="text"
          />

          <Checkbox name="I confirm that to the best of my knowledge the information contained in this application form is true and accurate. I have gone through the contents of the Prospectus and agree to all the conditions stipulated therein and if admitted, will also abide by the rules and regulations SSIM as may be in force from time to time." />

          <button className="mt-12 bg-yellow-500 border-0 py-3 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm text-white">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  )
}

const Input_mandtory = (props) => {
  return (
    <>
      <div className={`mt-4 w-full ${props.className}`}>
        <label className="m-1">
          {props.name} <span className="text-red-500">*</span>
        </label>
        <input
          type={props.type}
          name={props.fieldName}
          placeholder={props.placeholder || ''}
          required
        />
      </div>
    </>
  )
}

const Input = (props) => {
  return (
    <>
      <div className={`mt-4 w-full ${props.className}`}>
        <label className="m-1">{props.name}</label>
        <input
          type={props.type}
          name={props.fieldName}
          placeholder={props.placeholder || ''}
        />
      </div>
    </>
  )
}

const Mandatory_textarea = (prop) => {
  return (
    <>
      <label className="m-1 mt-4">
        {prop.name} <span className="text-red-500">*</span>
      </label>
      <textarea name={prop.type} />
    </>
  )
}

const Textarea = (prop) => {
  return (
    <>
      <label className="m-1 mt-4">{prop.name}</label>
      <textarea name={prop.type} />
    </>
  )
}

const Gender_selector = () => {
  return (
    <>
      <div className="mt-4 flex items-center">
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

const Marital_selector = () => {
  return (
    <>
      <div className="mt-4 flex items-center">
        <label className="m-1 mr-4">
          Marital Status <span className="text-red-500">*</span>
        </label>
        <span className="mr-4 flex items-center">
          <input className="mr-2" type="radio" name="marital" value="Married" />
          <label>Married</label>
        </span>
        <span className="mr-4 flex items-center">
          <input className="mr-2" type="radio" name="marital" value="Single" />
          <label>Single</label>
        </span>
      </div>
    </>
  )
}

const Accommodation_selector = () => {
  return (
    <>
      <div className="mt-4 flex items-center">
        <label className="m-1 mr-4">
          Hostel Accommodation Required <span className="text-red-500">*</span>
        </label>
        <span className="mr-4 flex items-center">
          <input
            className="mr-2"
            type="radio"
            name="accommodation"
            value="Yes"
          />
          <label>Yes</label>
        </span>
        <span className="mr-4 flex items-center">
          <input
            className="mr-2"
            type="radio"
            name="accommodation"
            value="No"
          />
          <label>No</label>
        </span>
      </div>
    </>
  )
}

const Checkbox = (prop) => {
  return (
    <>
      <div className="mt-4 text-justify">
        <input className="mr-3 mb-1" type="checkbox" value="Yes" />
        <label>{prop.name}</label>
      </div>
    </>
  )
}

export default Online_form
