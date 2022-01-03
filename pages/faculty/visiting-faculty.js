import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="Visiting Faculty" />
      <div className="container mx-auto py-24 max-w-[1080px]">
        {/* Prof. Dr. Sujata Kaul */}

        <Profile
          name="Mrs. Suman Jain"
          src="/images/visiting-faculty/Suman Jain.jpg"
          department=""
          degree=""
          years=""
        >
          Mrs. Suman Jain is Graduate and Post Graduate in Commerce from Delhi
          University. She is UGC-NET Qualified and has around 10 years of
          Experience in Teaching and Research. She has served various Colleges
          of Delhi University as a visiting Faculty. Her specialized Area is
          Operation Research and Financial Accounting.
        </Profile>

        <Profile
          name="Mr. Pradeep Upadhyay"
          src="/images/visiting-faculty/Pradeep Upadhyay.jpg"
          department=""
          degree=""
          years=""
        >
          Mr. Pradeep Upadhyay is Graduate in Mechanical Engineering from Uttar
          Pradesh Technical University, Lucknow and Post Graduate from Indian
          Institute of Management (IIM Lucknow). He has around 15 years of
          Experience in serving the industry and Corporate. He acts as
          consultant for various corporate houses. His specialized Area is
          Strategic Marketing and Project Management.
        </Profile>

        <Profile
          name="Ms. Deepshikha"
          src="/images/visiting-faculty/Deepshikha.jpg"
          department=""
          degree=""
          years=""
        >
          Ms. Deepshikha is Graduate from Delhi University and Post Graduate
          from Jamia Milia Islamia University New Delhi. She has around 3 years
          of experience in Teaching and Research. Her specialized area is
          Economics, Financial Accounting and Cost Accounting.
        </Profile>

        <Profile
          name="Mrs. Neelam Tiwari"
          src="/images/visiting-faculty/Neelam Tiwari.jpg"
          department=""
          degree=""
          years=""
        >
          Mrs. Neelam Tiwari is Graduate in Arts from Dr. B.R. Ambedakar
          University, Agra and Post Graduate in Management from Mahamaya
          Technical University, Noida. She has around 8 years of Experience in
          Teaching and Mentoring. Her specialized area is Human Resource
          Management.
        </Profile>

        <Profile
          name="Dr. Naushad Alam"
          src="/images/visiting-faculty/Dr. Naushad Alam.jpg"
          department=""
          degree=""
          years=""
        >
          Dr. Naushad Alam has obtained Ph.D. in Finance and Master of finance
          and control from Aligarh Muslim University, Aligarh. He has around 15
          years of experience in Teaching and Research. He has served many
          Institutions in India and Abroad as a regular and visiting Faculty. He
          acts as a consultant for various corporates. His specialized area is
          Financial Management and Derivatives.
        </Profile>

        <Profile
          name="Ms. Shivani Mittal"
          src="/images/visiting-faculty/Shivani Mittal.jpg"
          department=""
          degree=""
          years=""
        >
          Ms. Shivani Mittal has obtained MBA degree from FMS Delhi. She is
          graduate in commerce from  Lady Sriram College, Delhi University. She
          has 10+ years of corporate experience. She is currently working as
          Principal Consultant - Govt. and Technology Advisor at Ernst & Young
          (EY India). Her Specialized area is Information Technology
        </Profile>
      </div>
    </>
  )
}

const Profile = (props) => {
  return (
    <>
      <div className="flex flex-col mt-8 md:flex-row">
        <img
          className="m-5 md:pr-0 min-w-[300px] min-h-[300px] w-[300px] h-[300px] object-cover rounded-xl shadow-lg"
          src={props.src}
          alt="to be added"
        />

        <div className="mx-8 md:ml-0 md:mt-12">
          <h2 className="pb-2 text-2xl font-semibold tracking-wider">
            {props.name}
          </h2>
          {/* <h3>Department - {props.department}</h3>
          <h3>Degree - {props.degree}</h3>
          <h3>Experience - {props.years}+ Years</h3> */}
          <p className="pt-2 text-sm">{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default rename_later
