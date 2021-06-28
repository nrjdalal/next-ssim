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
      <Breadcrumb title="the institute" />
      <ProseWide className="py-12">
        <FlexColumnCenter>
          <img
            className="rounded-3xl h-[400px] w-full max-w-[600px] object-cover object-center"
            src="http://old.ssimdwarka.org/wp-content/uploads/2019/12/7.jpeg"
            alt=""
          />
          <blockquote>
            Sri Sukhmani Institute of Management is a premier Institute, set up
            under the Sri Sukhmani Group of Institutions in 2009. The Group was
            established more than 5 decades ago, in 1971, by
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
            specialization in Human Resources, Marketing, Finance, IT & Business
            Analytics, Entrepreneurship, Operations and Supply Chain Management.
            We focus on providing a cordial environment for the students to
            learn, experience, and experiment, covering all facets of
            professional education.
            <br />
            <br />
            Our campus is located in Dwarka, Delhi and has state of the art
            infrastructure with all the facilities essential for conducive
            learning. It is easily accessible by road, rail or air with the
            airport being a mere 6 km away.
          </blockquote>
        </FlexColumnCenter>

        <h1 className="pt-12 text-center">Our Campus</h1>
      </ProseWide>

      <div className="mx-auto md:w-5/6 px-6 pb-8">
        <ContentOnRight
          title="Classroom"
          src="http://old.ssimdwarka.org/wp-content/uploads/2019/12/1.jpg"
        >
          The classrooms are aesthetically designed to provide a stimulating
          atmosphere, conducive to the all-round development of the students.
          The classrooms are fully air-conditioned and equipped with the latest
          facilities for presentations, with the modern audio-visual system, LCD
          projectors, computers, and the internet.
        </ContentOnRight>

        <ContentOnLeft
          title="IT Lab"
          src="http://old.ssimdwarka.org/wp-content/uploads/2019/12/2.jpg"
        >
          The SSIM Institute has a well-equipped state of the art computer lab,
          with well-equipped systems of the latest technical configuration. The
          required legal softwares are also installed in each system. High-speed
          internet connectivity provides extended access to vast intellectual
          resources.
        </ContentOnLeft>

        <ContentOnRight
          title="Library"
          src="http://old.ssimdwarka.org/wp-content/uploads/2019/12/3.jpg"
        >
          SSIM Dwarka has a well-stocked library, replete with the latest and
          most sought after books, National Journals, International Journals &
          e-journals. We realize that the library and information systems play a
          pivotal role in the learning activities of students. Accordingly, we
          ensure that our library is kept updated with the latest information
          and learning tools.
        </ContentOnRight>

        <ContentOnLeft
          title="Co-curricular Activities"
          src="http://old.ssimdwarka.org/wp-content/uploads/2019/12/4.jpg"
        >
          While you study at SSIM Dwarka, you will be actively encouraged to
          participate & engage in co-curricular activities. The institute
          organizes many social and sporting events throughout the year to
          develop holistic creativity.
        </ContentOnLeft>

        <ContentOnRight
          title="Cafeteria"
          src="http://old.ssimdwarka.org/wp-content/uploads/2019/12/5.jpg"
        >
          The institution has an ultra-modern canteen with an aesthetic sense of
          design and décor which offers hygienic, wholesome and nutritious food
          at subsidized rates to satisfy different taste buds. Complete, planned
          food is served in neat, clean & hygienic surroundings.
        </ContentOnRight>

        <ContentOnLeft
          title="Wi-Fi Enabled"
          src="http://old.ssimdwarka.org/wp-content/uploads/2019/12/6.jpg"
        >
          We have a State-of-the-Art, fully air-conditioned, Wifi campus with
          24x7 high bandwidth internet connectivity. The IT lab consists of
          computers in interconnected local area networks. Our IT programs are
          regularly updated by incorporating the latest hardware/ software
          developments across the world.
        </ContentOnLeft>
      </div>
    </>
  )
}

export default the_institute
