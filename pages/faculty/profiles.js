import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="Faculty" />
      <div className="container mx-auto py-24">
        {/* Prof. Dr. Sujata Kaul */}

        <Profile
          name="Prof. Dr. Rachna Sharma"
          src="/images/faculty/Dr Rachna Sharma.png"
          department="HR"
          degree="PhD, MBA"
          years="18"
        >
          Dr. Rachna Sharma is a dynamic educationist and holds a PhD degree in
          Business Administration from MJP Rohilkhand University, She has more
          than 18 years of experience in teaching HR domain and has industrial
          experience in Personnel Department in Multinational Companies.
        </Profile>

        {/* Other 1,2,3... */}
      </div>
    </>
  )
}

const Profile = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-8">
        <img
          className="m-5 md:pr-0 min-w-[300px] min-h-[300px] w-[300px] h-[300px] object-cover rounded-xl shadow-lg"
          src={props.src}
          alt="to be added"
        />

        <div className="mx-8 md:ml-0 md:mt-12">
          <h2 className="text-2xl font-semibold tracking-wider pb-2">
            {props.name}
          </h2>
          <h3>Department - {props.department}</h3>
          <h3>Degree - {props.degree}</h3>
          <h3>Experience - {props.years}+ Years</h3>
          <p className="pt-2 text-sm">{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default rename_later
