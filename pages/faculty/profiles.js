import Breadcrumb from "../../components/Breadcrumb";

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
          Dr. Anindita Sharma is Associate Professor in Business Comminication
          &amp; Finance area. She is graduate in English literature, She holds
          two Master Degree in Business Administration with Finance and English
          Literature and also holds a PhD Degree.She has over 18 years of
          experience in teaching, research and consulting.
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

        <Profile
          name="Dr. Ajay Sharma"
          src="/images/faculty/ajaySharma.jpg"
          department="Marketing & Business Communication"
          degree="PhD, MBA, LLM, LLB"
          years="22"
        >
          Dr. Ajay Sharma holds his Ph.D. Degree in Management from CCS
          University and Postgraduate in Management from Uttar Pradesh Technical
          University, Lucknow. Dr. Ajay Sharma has an experience of 20 years
          which includes blend of corporate as well as academic experience., He
          is advisor and consultant to corporate like JSCPL, Nivesh Group etc.
          he has numerous Research Papers in National and International Journals
          of Repute. He is guiding Ph.D. Scholars of various Reputed
          Universities of the Country. He has contributed articles in various
          Journals and magazines of National and International Repute and
          presented Many Research papers in International Conferences. He has
          chaired sessions in various seminars and conferences and reviewed
          Books of various Publications like - A to Z for Managers, Published by
          Lexis-Nexis Butterworths Wadhwa, Nagpur, Oct 2012. Being Graduate in
          Law, he acts as a Legal Advisor for various organizations.
        </Profile>

        <Profile
          name="Dr. Priya Agarwal"
          src="/images/faculty/Priya.jpg"
          department="Marketing"
          degree="PGDM"
          years="6"
        >
          Dr. Priya Agarwal is Assistant Professor in marketing. She holds her
          Ph. D. She is UGC-NET qualified, She has obtained her Master of
          Business Administration from Uttar Pradesh Technical University.  She
          has written a book on Public Relations: Strategies for Growth,
          Development and New Perspectives. She has contributed articles in
          various journals and magazines of National repute.
        </Profile>

        {/* Other 1,2,3... */}
      </div>
    </>
  );
};

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
  );
};

export default rename_later;
