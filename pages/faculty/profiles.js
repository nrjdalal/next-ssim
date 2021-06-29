import Breadcrumb from '../../components/Breadcrumb'

const rename_later = () => {
  return (
    <>
      <Breadcrumb title="Faculty" />
      <div className="container mx-auto py-24 max-w-[1080px]">
        {/* Prof. Dr. Sujata Kaul */}

        <Profile
          name="Prof. Dr. Sujata Kaul"
          src="/images/other/dean.jpeg"
          department="Business Economics"
          degree="PhD, MA"
          years="28"
        >
          Prof. Dr. Sujata Kaul obtained MA & PhD in Economics and has been a
          result-oriented professional having about 28 years of experience that
          includes over 20 years in academics as a Professor of Business
          Economics. Dr. Sujata Kaul is currently with SSIM as Dean - Academics.
        </Profile>

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

        <Profile
          name="Prof. Dr. Anindita Sharma"
          src="/images/faculty/anindita.jpg"
          department="Business Communication"
          degree="PhD, MBA & MA (English)"
          years="18"
        >
          Dr. Rachna Sharma is a dynamic educationist and holds a PhD degree in
          Business Administration from MJP Rohilkhand University, She has more
          than 18 years of experience in teaching HR domain and has industrial
          experience in Personnel Department in Multinational Companies.
        </Profile>

        <Profile
          name="Prof. Sushant Sinha"
          src="\images\faculty\Sushant Sinha.jpg"
          department="Marketing"
          degree="PGDM, B.Com"
          years="14"
        >
          Prof. Sushant Sinha is Associate Professor in marketing area. He is
          graduate in commerce from Avadh university and hold PGDM from IMT
          Ghaziabad. He has 14 years of rich corporate experience and
          specialization in strategic management. He is the Director – Student
          Welfare and Institutional Collaboration.
        </Profile>

        <Profile
          name="Prof. Nitesh Srivastava"
          src="\images\faculty\Nitesh Srivastava.png"
          department=" International Business & Foreign Trade"
          degree="MBA, B.Sc (Maths)"
          years="10"
        >
          Prof. Nitesh Srivastava is Asst. Professor in the International
          Business. He is graduate in B.Sc (Maths) from Avadh University and
          holds a Master’s Degree in IB & Marketing, He has 10 Years of
          corporate experience and specialize in International Business &
          Foreign Trade
        </Profile>

        <Profile
          name="Prof. Irfan Amin"
          src="/images/faculty/Irfan.png"
          department="IT"
          degree="PhD (Pursuing), M.Phill (Computer Science And Technology)"
          years="8"
        >
          Mr. Irfan Amin is an IT professional with M.Phill from Himalayan
          University (Arunachal Pradesh), M.Sc (IT) from H.N.B Garwhal Central
          university And B.sc (IT) From university of Kashmir. He has over 8
          years of industry as well as academic experience.
        </Profile>

        <Profile
          name="Prof. Parisa Jabeen"
          src="\images\faculty\Parisa Jabeen.jpg"
          department="Finance"
          degree="Phd (Pursuing), MBA (Finance & HR)"
          years="10"
        >
          An emphatically motivated, self-starting, versatile and strongly
          committed to progressive and innovative methodologies. Has a sharp &
          analytical mind, ability to see end to end keeping organization goals
          in mind, ability to evaluate and effectively focus on right target,
          strong communication & intra personal skills. She is a commerce
          graduate from HNB Garhwal Central University and MBA in Finance and HR
          from Uttrakhand Technical University.
        </Profile>

        <Profile
          name="Ms Simran Kaur"
          src="/images/faculty/Simran.jpg"
          department="Finance"
          degree="MBA (Finance), B.Com"
          years="5"
        >
          Ms. Simran is Asst. Professor in the Finance Domain. She is graduate
          in Commerce and holds a Master’s Degree in Finance Specialization, She
          has 5 Years of corporate experience and specialize in Financial
          Trading, Advisory and Analytics.
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
