import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="Why ssim" />

      <div className="container mx-auto px-5 py-20 flex justify-center flex-wrap">
        <Member color="blue" title="World Class Business School" />
        <Member color="blue" title="100% PLACEMENT ASSISTANCE." />
        <Member color="blue" title="Strong Alumni Network with Global Reach" />
        <Member
          color="blue"
          title="Laboratory of practice to sharpen key skills beyond classroom."
        />

        <Member
          color="blue"
          title="Interactive discussions with leading CEOs & Business Managers"
        />
        <Member
          color="blue"
          title="2 months’ summer internship with leading corporates"
        />
        <Member color="blue" title="Live Projects in leading Corporate." />
        <Member color="blue" title="Winter Live Projects." />

        <Member
          color="blue"
          title="ACADEMIC EXCELLENCE with case studies & research driven approach"
        />
        <Member color="blue" title="Mentorship & Career Counseling" />
        <Member
          color="blue"
          title="E- Teaching / Power Teaching (Video Lectures)"
        />
        <Member
          color="blue"
          title="Industry Visits: Maruti Suzuki, Mother Dairy, Bisleri, Yakult etc."
        />

        <Member color="blue" title="Air Conditioned Campus" />
        <Member color="blue" title="International Study Tour" />
        <Member color="blue" title="Paid Domestic Tour" />
        <Member color="blue" title="Free Laptop" />

        <Member color="blue" title="Assured Educational Loan" />
        <Member
          color="blue"
          title="Excellence of 50 Years in Indian Industry, Education and Social Service"
        />
        <Member
          color="blue"
          title="5 Corporate Edge Certifications Including Six Sigma & Digital Marketing"
        />
        <Member
          color="blue"
          title="6 Industry Integrated Workshops i.e. NSE, SEBI & MIS etc"
        />
      </div>
    </>
  )
}

const Member = (props) => {
  return (
    <>
      <div className={`px-5 py-10 w-[250px] ${props.classNam}`}>
        <div
          className={`flex flex-col pt-5 bg-blue-400 h-[200px] p-5 rounded-lg`}
        >
          <p className="text-xl font-semibold text-white">{props.title}</p>
        </div>
      </div>
    </>
  )
}

export default rename_later
