import Breadcrumb from '../../components/Breadcrumb'
import {
  ContentOnLeft,
  ContentOnRight,
  FlexColumnCenter,
  ProseWide,
} from '../../components/Universal'

const the_institute = () => {
  return (
    <>
      <Breadcrumb title="Corporate Edge Certifications" />
      {/* <ProseWide className="py-12">
        <FlexColumnCenter>
          <img
            className="rounded-3xl h-[400px] w-full max-w-[600px] object-cover object-center"
            src="https://source.unsplash.com/400x300/?7.jpeg"
            alt=""
          />
          <blockquote>
            Sri Sukhmani Institute of Management is a premier Institute, set up
            under the Sri Sukhmani Group of Institutions. The Group was
            established more than 3 decades ago, in 1979, by
            Philanthropist-Educationist Prof. Avtar Singh and has since carved a
            niche for itself in the area of Management.
            <br />
            <br />
            At SSIM, we equip our students with knowledge, skills and confidence
            that are relevant to contemporary managerial practices. The
            institute strives to sharpen Management skills and produce managers
            of tomorrow who can meet the global demands in the field of
            management.
            <br />
            <br />
            Sri Sukhmani Institute of Management has a beautiful campus, fully
            equipped with labs, library, AC classrooms, Wi-fi accessibility and
            other state-of-the-art infrastructure. We offer PGDM courses with
            specialization in Human Resources, Marketing, Finance, and IT &
            Operations. We focus on providing a cordial environment for the
            students to learn, experience, and experiment, covering all facets
            of professional education.
            <br />
            <br />
            Our campus is located in Dwarka, Delhi and has state of the art
            infrastructure with all the facilities essential for conducive
            learning. It is easily accessible by road, rail or air with the
            airport being a mere 6 km away.
          </blockquote>
        </FlexColumnCenter>

        <h1 className="pt-12 text-center italic">Our Campus</h1>
      </ProseWide> */}

      <div className="mx-auto md:w-5/6 px-6 pb-8">
        <ContentOnRight
          imgClassName="object-right"
          pClassName="text-sm xl:text-base"
          className="pt-24"
          title="ERP Training "
          src="/images/corporate_edge/1.JPG"
        >
          NSE course on personal finance teach school students the value of
          investing, provide an introduction to the Indian capital markets and
          help to develop new market professionals. Our NSE workshop in
          Financial Markets, is a program that tests the practical knowledge and
          skills required to operate in the financial markets.
        </ContentOnRight>

        <ContentOnLeft
          pClassName="text-sm xl:text-base"
          title="National Stock Exchange (NSE)"
          src="/images/corporate_edge/2.JPG"
        >
          The SSIM Institute has a well-equipped state of the art computer lab,
          with well-equipped systems of the latest technical configuration. The
          required legal softwares are also installed in each system. High-speed
          internet connectivity provides extended access to vast intellectual
          resources.
        </ContentOnLeft>

        <ContentOnRight
          pClassName="text-sm xl:text-base"
          title="Security Exchange Board of India (SEBI)"
          src="/images/corporate_edge/4.JPG"
        >
          The scope of this workshop lies within a few questions, as to why you
          should invest, what should be your investment objectives, investment
          options, the do’s and don’ts of investing, grievance and redressal.
        </ContentOnRight>

        <ContentOnLeft
          pClassName="text-sm xl:text-base"
          title="Digital Marketing"
          src="/images/corporate_edge/6.PNG"
        >
          There are several manners in which a person can advantage from getting
          marketing knowhow, and it’s one of the major perk for attending a
          workshop in Digital Marketing. Digital Marketing certification cover
          the skills which are fundamental to the globe of business. These
          skills include how to convey the viably via written communication
          means or oral, how to give presentations in an executive events and
          pitch thoughts. What is more, members find out how to analyze info,
          shopper requirements and marketing patterns.
        </ContentOnLeft>

        <ContentOnRight
          imgClassName="object-left"
          pClassName="text-sm xl:text-base"
          title="PGL (Personal Grooming Lab)"
          src="/images/corporate_edge/5.JPG"
        >
          Personal Grooming Lab has an understated but powerful influence on
          one’s progress. It helps to build a lasting image of an individual
          based solely on appearance which gives out a message of
          professionalism, sophistication, credibility etc. Many do feel that a
          person should not be defined by looks alone, however one responds
          positively to someone who is well kempt as opposed to someone who is
          shabby. Since looks are a visual medium, not just clothes and make up
          but healthy skin and hair, clipped nails along with good smell send
          out a subconscious signal about the person.
        </ContentOnRight>

        <ContentOnLeft
          pClassName="text-sm xl:text-base"
          title="Six Sigma "
          src="/images/corporate_edge/3.JPG"
        >
          Six Sigma is a set of methods and tools for process improvement.
          Developed in 1986, Six Sigma has become a global phenomenon with
          companies around the world. Companies and individuals are using six
          sigma methodologies to improve operational efficiencies. Six Sigma
          Certification is a great way to improve your capabilities as a leader
          in your organization. It helps in renovating the business processes.
        </ContentOnLeft>

        <div className="h-12" />
      </div>
    </>
  )
}

export default the_institute
