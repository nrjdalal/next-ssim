import { useRef } from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  const Question = (props) => {
    const isOpen = useRef()

    const faqToggle = () => {
      isOpen.current.focus()
    }

    return (
      <>
        <button
          onClick={faqToggle}
          ref={isOpen}
          className="group text-left mt-6 w-full outline-none"
        >
          <div className="bg-gray-200 p-3 flex justify-between items-center rounded-2xl">
            <h3 className="font-semibold w-11/12">{props.question}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <p className="hidden group-focus:block px-3 mt-4">{props.children}</p>
        </button>
      </>
    )
  }

  return (
    <>
      <Breadcrumb title="FAQ's" />
      <div className="container mx-auto px-6 py-24">
        <Question question="Is this PGDM Course approved by AICTE?">
          Yes, it is duly approved by AICTE, Ministry of HRD, Government of India.
        </Question>
        <Question question="What will be the Total Fee?">
          Total Fee for the Program is 5.9 Lakhs.
        </Question>
        <Question question="What are government job prospects after doing PGDM?">
        Since it is a course approved by the Statutory Body of Government of India, there should not be any difficulty in being eligible for various jobs in Government of India/Corporations.
        </Question>
        <Question question="Is it compulsory to have laptops?">
        All the students are required to make an excessive use of laptops. Laptop will be provided by the institute with two year of annual onsite maintainance, included in fee structure.
        </Question>
        <Question question="What all will be included in the Fee?">
        The total fee charged for PGDM course includes laptop, International study tour, tuition fee, examination fee, library, computer lab, training, sports, extracurricular activities, add-on programs, industrial visits, study material &amp; award of degree.
        </Question>
        <Question question="How much of my fees is refundable?">
          We follow AICTE Norms
        </Question>
        <Question question="Can a student pursue PHD program after completing PGDM from the institute?">
        Most of the UGC approved universities are considering AICTE approved PGDM Programme equivalent to MBA and are offering PHD.
        </Question>
        {/* <Question question="Can a student pursue PHD program after completing PGDM from the institute?">
        Most of the UGC approved universities are considering AICTE approved PGDM Programme equivalent to MBA and are offering PHD.
        </Question> */}
        <Question question="How is the placement of PGDM students done?">
        The Institute provides complete placement assistance through training, personality development, pre-placement talks, corporate exposure, mock interviews and group discussions. All these activities are handled by a dedicated Corporate Resource Center.
        </Question>
        <Question question="What about Summer Internship?">
        Every student of PGDM has to undergo a Summer Internship of 6-8 weeks between 1st &amp; 2nd year. This summer internship is arranged by the Institute in renowned units.
        </Question>
        <Question question="Do you have Management Quota for admissions?">
        No, all the admission are merit based
        </Question>
        <Question question="Do you provide Foreign Tour during the PGDM Course?">
        Every year all students are sent to an International Education Tour with International Live Project. In 2019, students went to Dubai &amp; in 2018, students went to Singapore on an International Education Tour
        </Question>
        <Question question="What is the admission process for this course?">
        For Details check our admission process
        </Question>
        <Question question="What is the eligibility criteria for admission in PGDM Programme?">
        Candidate must have passed with minimum 50 percent marks in any graduation from a recognised University and must have qualified CAT/MAT/XAT/UPSEE.
        </Question>
        <Question question="Do you have hostel facilities?">
        We have Ac and Non Ac hostel facilities separately for girls and boys on sharing basis outside campus on first come first served basis.
        </Question>
        <Question question="What extracurricular activities do you have on campus?">
        All students are given equal an exposure to sports, cultural activities, personality development programs, industrial visits, hobby sessions and leadership workshops.
        </Question>
        <Question question="Is your program approved by AIU?">
        We have applied for the same and AIU approval is under process
        </Question>
        <Question question="Do you have any installment facilities for the fees?">
        Yes, the student can pay the entire fees in 4 installments after registration.
        </Question>
      </div>
    </>
  )
}

export default rename_later
